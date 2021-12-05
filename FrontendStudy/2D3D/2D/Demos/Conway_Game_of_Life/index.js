// 导入康威生命游戏核心类
import { Universe } from '@bezos/wasm-game-of-life'
import { memory } from '@bezos/wasm-game-of-life/wasm_game_of_life_bg'

// 每个方格子的像素尺寸
const CELL_SIZE = 5
// 格子的默认颜色
const GRID_COLOR = '#CCCCCC'
// 细胞死亡的颜色
const DEAD_COLOR = '#FFFFFF'
// 细胞存活的颜色
const ALIVE_COLOR = '#000000'

// 获取HTML元素
const canvas = document.getElementById('game-of-life-canvas')
const playPause = document.getElementById('play-pause')
const randomInit = document.getElementById('random-init')
const reset = document.getElementById('reset')

// 创建实例,设置横向和纵向格子数量
const universe = Universe.new()
universe.set_height(64)
universe.set_width(64)
universe.init()

// 设置canvas的像素宽高
const width = universe.width()
const height = universe.height()
canvas.width = (CELL_SIZE + 1) * width + 1
canvas.height = (CELL_SIZE + 1) * height + 1

// 给canvas添加背景颜色
// canvas.style.backgroundColor = '#e74c3c'

// 获取2D上下文ctx
const ctx = canvas.getContext('2d')

// 绘制网格函数
function drawGrid() {
  ctx.beginPath()
  ctx.strokeStyle = GRID_COLOR

  // Vertical lines.
  for (let i = 0; i <= width; i++) {
    ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0)
    ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1)
  }

  // Horizontal lines.
  for (let j = 0; j <= height; j++) {
    ctx.moveTo(0, j * (CELL_SIZE + 1) + 1)
    ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1)
  }

  ctx.stroke()
}
drawGrid()

// 根据 (row, column) 获取下标
function getIndex(row, column) {
  return row * width + column
}

// 获取第n个细胞的状态
const bitInSet = (n, arr) => {
  // 获取第n个细胞是第几个字节
  const byte = Math.floor(n / 8)

  // 获取第n个细胞在byte位置,向左位移
  const mask = 1 << n % 8

  // 所在字节和mask按位与操作,如果和mask相等则返回true,表示细胞存活
  return (arr[byte] & mask) === mask
}

// 绘制所有细胞状态
function drawCells() {
  // 获取数据的头指针
  const cellsPtr = universe.cells()

  // 根据首指针和字节数,获得存放细胞状态的内存片段
  const cells = new Uint8Array(memory.buffer, cellsPtr, (width * height) / 8)

  // 清空绘制缓存
  ctx.beginPath()

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      // 根据 (row, col) 获取下标
      const idx = getIndex(row, col)

      // 根据下标获得 (row, col) 细胞的生存状态并设置颜色
      ctx.fillStyle = bitInSet(idx, cells) ? ALIVE_COLOR : DEAD_COLOR
      ctx.fillRect(col * (CELL_SIZE + 1) + 1, row * (CELL_SIZE + 1) + 1, CELL_SIZE, CELL_SIZE)
    }
  }

  ctx.stroke()
}
drawCells()

// 每个requestAnimationFrame都会返回一个id
let animationId = null

function renderLoop() {
  // 更新细胞状态
  universe.tick()

  // 获取最新的细胞状态并绘制
  drawCells()

  // 递归调用renderLoop
  animationId = requestAnimationFrame(renderLoop)
}

function play() {
  // 将文案变更为暂停
  playPause.textContent = 'Pause'
  renderLoop()
}

function pause() {
  playPause.textContent = 'Play'

  // 取消animationId对应的requestAnimationFrame
  cancelAnimationFrame(animationId)
  animationId = null
}

// 开始结束控制,根据有没有animationId判断是否暂停状态
function isPaused() {
  return animationId === null
}

// 点击“暂停/继续”按钮,判断当前应该暂停还是播放
playPause.addEventListener('click', event => {
  if (isPaused()) {
    play()
  } else {
    pause()
  }
})

randomInit.addEventListener('click', event => {
  cancelAnimationFrame(animationId)
  animationId = null
  universe.init()
  renderLoop()
})

reset.addEventListener('click', event => {
  cancelAnimationFrame(animationId)
  animationId = null
  universe.reset()
  drawCells()
})

canvas.addEventListener('click', event => {
  // 获取canvas的包围盒
  let boundingRect = canvas.getBoundingClientRect()

  // 计算缩放
  let scaleX = canvas.width / boundingRect.width
  let scaleY = canvas.height / boundingRect.height

  // 计算出发点在canvas中的位置,即计算事件相对于canvas左上角的位置
  let canvasLeft = (event.clientX - boundingRect.left) * scaleX
  let canvasTop = (event.clientY - boundingRect.top) * scaleY

  // 计算坐标
  const row = Math.min(Math.floor(canvasTop / (CELL_SIZE + 1)), height - 1)
  const col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)), width - 1)

  // 改变状态并重新绘制
  universe.toggle_cell(row, col)
  drawCells()
})