import { OrbitControl } from '@oasis-engine/controls'
import {
	AssetType,
	BackgroundMode,
	BlinnPhongMaterial,
	Camera,
	MeshRenderer,
	PrimitiveMesh,
	Script,
	SkyBoxMaterial,
	Texture2D,
	TextureCubeMap,
	Vector3,
	WebGLEngine
} from 'oasis-engine'

export async function createOasis() {
  const engine = new WebGLEngine('canvas')
  engine.canvas.resizeByClientSize()
  const scene = engine.sceneManager.activeScene
  const rootEntity = scene.createRootEntity()

  // init camera
  const cameraEntity = rootEntity.createChild('camera')
  cameraEntity.addComponent(Camera)
  const pos = cameraEntity.transform.position
  pos.setValue(10, 10, 10)
  cameraEntity.transform.position = pos
  cameraEntity.transform.lookAt(new Vector3(0, 0, 0))

  // init light
  scene.ambientLight.diffuseSolidColor.setValue(1, 1, 1, 1)
  scene.ambientLight.diffuseIntensity = 1.2

  // 加载贴图资源
  const texture = await engine.resourceManager.load<Texture2D>({
    url: 'https://gw.alipayobjects.com/mdn/rms_37b9d9/afts/img/A*gSgLRpgkvEQAAAAAAAAAAAAAARQnAQ',
    type: AssetType.Texture2D
  })

  // init cube
  const cubeEntity = rootEntity.createChild('cube')
  const renderer = cubeEntity.addComponent(MeshRenderer)
  const mtl = new BlinnPhongMaterial(engine)
  // const color = mtl.baseColor
  // color.r = 0.0
  // color.g = 0.8
  // color.b = 0.5
  // color.a = 1.0
  // 设置贴图资源
  mtl.baseTexture = texture
  // renderer.mesh = PrimitiveMesh.createCuboid(engine)
  renderer.mesh = PrimitiveMesh.createSphere(engine, 2)
  renderer.setMaterial(mtl)
  cubeEntity.addComponent(RotateScript)

  // child cube
  const earthEntity = rootEntity.createChild('earth')
  const earthRenderer = earthEntity.addComponent(MeshRenderer)
  const earthMtl = new BlinnPhongMaterial(engine)
  earthMtl.baseTexture = texture
  earthRenderer.mesh = PrimitiveMesh.createCuboid(engine, 1, 1)
  earthRenderer.setMaterial(earthMtl)
  earthEntity.transform.setPosition(5, 0, 0);
  earthEntity.addComponent(RotateScript);
  earthEntity.addComponent(RotationScript);

  // 背景贴图,构造天空盒
  const cubeTextureResource = {
    type: AssetType.TextureCube,
    urls: [
      // px - right
      'https://gw.alipayobjects.com/mdn/rms_df2e25/afts/img/A*tQ1JTIyV2fcAAAAAAAAAAAAAARQnAQ',
      // nx - left
      'https://gw.alipayobjects.com/mdn/rms_df2e25/afts/img/A*WgekSK_-Mw8AAAAAAAAAAAAAARQnAQ',
      // py - top
      'https://gw.alipayobjects.com/mdn/rms_df2e25/afts/img/A*0zeFSoU2r4sAAAAAAAAAAAAAARQnAQ',
      // ny - bottom
      'https://gw.alipayobjects.com/mdn/rms_df2e25/afts/img/A*yckZTZOAYRoAAAAAAAAAAAAAARQnAQ',
      // pz - front
      'https://gw.alipayobjects.com/mdn/rms_df2e25/afts/img/A*uXpfRb6YBCMAAAAAAAAAAAAAARQnAQ',
      // nz - back
      'https://gw.alipayobjects.com/mdn/rms_df2e25/afts/img/A*0jNmSYvWxVUAAAAAAAAAAAAAARQnAQ'
    ]
  }

  const cubemap = await engine.resourceManager.load<TextureCubeMap>(cubeTextureResource)
  const skyboxMtl = new SkyBoxMaterial(engine)
  skyboxMtl.textureCubeMap = cubemap

  const background = engine.sceneManager.activeScene.background
  background.mode = BackgroundMode.Sky
  background.sky.material = skyboxMtl
  background.sky.mesh = PrimitiveMesh.createCuboid(engine, 100, 100, 100)

  cameraEntity.addComponent(OrbitControl)

  engine.run()
}

// 自转脚本
class RotateScript extends Script {
  onAwake() {
    // this.entity.findByName('cube')
  }
  onUpdate(dt: number) {
    this.entity.transform.rotate(0, 1, 0)
    // const position = this.entity.transform.position
    // position.y += 1
    // this.entity.transform.setPosition(position.x, position.y, position.z)
  }
}

// 公转脚本
class RotationScript extends Script {
  private speed: number = 0.001

  onUpdate(dt: number) {
    const entity = this.entity
    const t = this.engine.time.timeSinceStartup * this.speed
    const r = entity.transform.position.length()
    const x = Math.cos(t) * r
    const z = Math.sin(t) * r
    entity.transform.setPosition(x, 0, z)
  }
}