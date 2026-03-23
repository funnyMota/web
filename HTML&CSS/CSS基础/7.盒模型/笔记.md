# 盒模型

box：盒子，每个元素都会在页面中生成一个矩形区域（盒子）。

盒子类型：

1. 行盒：`display: inline` 的元素
2. 块盒：`display: block` 的元素

行盒在页面中不换行，块盒独占一行。
`display` 默认值为 `inline`。

浏览器默认样式表设置的块盒：容器元素、h1~h6、p
常见的行盒：span、a、img、video、audio

## 盒子的组成部分

无论是行盒，还是块盒，都由下面几个部分组成，从内到外分别是：

1. 内容（content）

`width`、`height` 设置的是内容区的宽高。
内容部分通常叫做整个盒子的 **内容盒（content-box）**。

2. 填充（padding）

盒子边框到盒子内容的距离

- `padding-left` / `padding-right` / `padding-top` / `padding-bottom`
- `padding`：简写属性（上 右 下 左）

3. 边框（border）

边框 = 边框样式 + 边框宽度 + 边框颜色
- 边框样式：`border-style`
- 边框宽度：`border-width`
- 边框颜色：`border-color`
- `border`：简写属性（宽度 样式 颜色）

4. 外边距（margin）

边框到其他盒子的距离
