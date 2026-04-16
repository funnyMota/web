# Date构造函数

## 术语

1. 时间单位

## 创建时间对象

- 直接调用函数(不使用new),忽略所有参数,直接返回字符串
- new Date(): 创建日期对象

1. 无参,当前时间
2. 传一个参数,参数为数字,表示传入的是时间戳
3. 两个参数以上,分别表示:年、月、日、时、分、秒

注意: 月份的数字从0开始,如果是-1就是月份前一个月
日期部分默认为1,时分毫秒默认为0


### 实例成员
- getDate: 得到日期部分
- getFullYear:得到年份
- getMonth: 得到月份
- getDay: 得到星期几
- getHours: 得到小时
- getMinutes: 得到分钟
- getSeconds: 得到秒
- getTime: 得到时间戳

- setDate: 设置日期
- setMonth: 设置月份
- setFullYear: 设置年
- setTime: 设置时间戳

- toDateString: 将日期部分转换为可读的字符串
- toISOString: 将整个对象转换为ISO标准的格式字符串
- toLocalDateString: 根据当前系统的地区设置,获取日期字符串
- toLocalString: 根据当前系统的地区设置,获取日期时间字符串
- toLocalTimeString: 根据当前系统的设置,获取时间字符串

...

## 日期对象
日期对象重写了Object中的valueOf方法,返回的是一个数字,表示时间戳
因此,日期对象可以进行数字运算