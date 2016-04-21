# 打字机特效JS插件
无需任何依赖，压缩版本不到1k。  

__Demo: [DaraW](http://daraw.cn)__  

## 使用方法：
在`html`中添加节点并引入JS文件：
```html
<span id="typingText">This is a test</span>
<script type="text/javascript" src="typing.min.js"></script>
```
在引入文件之后：
```javascript
var element = document.querySelector("#typingText");
var options = {
    isRandomSpeed: true,
    speed: 1000
};
var typing = new Typing(element, options);
typing.add('1234567890').pause(2000).delete(10);
```
## API
实例化`Typing`对象时传入两个参数`element`和`options`，其中`element`为目标DOM节点，`options`包含两个参数，`isRandomSpeed`和`speed`。  

对了，如果你不想打`new`也没关系，安全检测不会让它被挂在到全局对象上。

`speed`严格来说应该是每个字输入的时间间隔，单位为`ms`。  

如果`isRandomSpeed`为`ture`，则每个字输入的时间间隔为随机的`0~speed ms`；  
如果`isRandomSpeed`为`false`，则每个字输入的时间为固定的`speed ms`。  

假设实例为`typing`，`typing` 拥有三个方法：  
* `add`  
接受传入一个字符串参数，字符串将依次添加到DOM节点的内容中。

* `delete`
接受传入一个数字`n`，将从后往前依次删除`n`个字符。  

* `pause`  
接受传入一个数字`n`，将暂停执行`n ms`.  

## Tip  
* 如`example`中所示，支持链式调用方法。  
* 添加光标：   
`html`文件中添加：
```html
<span id="typingCursor">|</span>
```
`css`文件中添加:
```css
#typingCursor {
    opacity: 1;
    -webkit-animation: blink 1s infinite;
    -moz-animation: blink 1s infinite;
    animation: blink 1s infinite;
}
@keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}
@-webkit-keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}
@-moz-keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
}
```
光标闪烁动画是通过CSS实现的，闪烁速度修改CSS动画时间即可改变。

## 构建  
使用`npm script`进行构建：  
```shell
# 压缩
npm run build
# 清除
npm run clean
# 检查语法
npm run eslint
```

## 更新
### V0.2.0  
* 文档添加光标说明
* 改用`npm script`构建
