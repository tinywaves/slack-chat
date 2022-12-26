## DefaultPage 组件

缺省页组件，涵盖项目中所有的缺省页类型，可以灵活添加缺省类型。

```js
/**
 * @file 
 * @author 杨能康(YANGNENGKANG999@pingan.com.cn)
 * @created 2018-10-29
 */
```

### 引入

```js
import DefaultPage from '@/common/component/DefaultPage/DefaultPage'

export default {
  ...,
  components: { DefaultPage }
}

```

### 例子

```js
// 展示默认缺省页
<DefaultPage></DefaultPage>

// 展示敬请期待缺省页
<DefaultPage :defaultPageType=0 ></DefaultPage>

// 隐藏缺省页
<DefaultPage :show=false ></DefaultPage>

```

### API

DefaultPage 组件可传入参数说明。

参数 | 说明 | 类型 | 可选值| 默认值
:-- | :-- | :-- | :-- | :--
show | 是否展示缺省页 | Boolean | - | true
defaultPageType | 缺省页类型 | Number | 0，1，2 | 1

#### defaultPageType

缺省页类型，可自行添加定义。

当前可选值 | 说明 | 提示语
:-- | :-- | :--
0 | 敬请期待缺省页 | 更多功能，敬请期待
1 | 无内容缺省页，多为列表 | 暂时没有内容哦
2 | 搜索结果缺省页 | 暂无搜索结果