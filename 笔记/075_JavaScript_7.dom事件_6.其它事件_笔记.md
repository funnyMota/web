# 其它事件

## 表单事件

- focus: 元素聚焦的时候触发
- blur: 元素失去焦点时触发
- submit: 提交表单时触发,仅在form元素上有效
- change: 文本改变事件
- input: 文本改变事件,即时触发

## 其它事件

window全局对象

- load、DOMContentLoaded、readystatechange

window的load: 页面中所有资源全部加载完毕的事件
图片的load: 图片加载完毕的事件
> 浏览器渲染页面的过程
> 1. 得到页面源代码
> 2. 创建document节点
> 3. 从上到下，将元素依次添加到dom树中,每添加一个元素,进行预渲染
> 4. 按照结果,依次渲染子节点

document的DOMContentLoaded: dom元素构建完成后发生

readystatechange: loading、interactive、complete

interactive: 触发DOMContentLoaded 
complete: 触发window的load

**JS代码应该尽量写在页面底部**
- CSS应该写到页面顶部:避免出现闪烁(如果放在页面底部,会导致元素没有样式,使用丑陋的默认样式,然后当读到css文件后,重新改变样式)
- JS应该写到页面底部: 避免阻塞后续的渲染，也避免运行JS时,得不到页面中的元素


- unload、beforeunload

beforeunload: window的事件,关闭窗口时运行,可以阻关闭窗口
unload: window的事件,关闭窗口运行

- scroll
窗口发生滚动时运行的事件
通过scrollTop和scrollLeft，可以设置和获取滚动距离

- resize

窗口尺寸发生改变的事件,监听的是视口

- contextmenu

右键菜单事件

- paste

粘贴事件

- copy

复制事件

- cut

剪切事件