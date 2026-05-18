# 键盘事件

## 事件类型

- keydown: 按下键盘任意键触发,如果按住不放,会重复除非
- keypress: 按下键盘任意字符时触发
- keyup: 抬起键盘上任意键触发

keydown、keypress 如果阻止了事件默认行为,文本不会显示

## 事件对象

KeyboardEvent

- code: 得到按键字符串,适配键盘布局
- key: 得到按键字符串,不适配键盘布局。能得到打印字符
- keyCode、which: 得到键盘编码(不推荐使用)