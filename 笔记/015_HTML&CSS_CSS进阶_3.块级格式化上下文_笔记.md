# 块级格式化上下文

全称Block formatting context 简称bfc
它是一块独立的渲染区域，它规定了在该区域中，常规流块盒的布局
不同的bfc区域，它们进行渲染时互不干扰
创建bfc的元素，隔绝了它内部和外部的联系，内部的渲染不会影响到外部

创建BFC的元素,它的自动高度需要计算浮动元素
创建BFC的元素，它的边框盒不会与浮动元素进行重叠
创建BFC的元素,不会和它的子元素进行外边距合并

float\position\overflow(不是visible)都会创建bfc区域
一般使用overflow:hidden