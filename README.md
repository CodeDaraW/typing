# 打字机特效JS插件
无需任何依赖，压缩版本不到1k。  

** Demo: [DaraW](http://daraw.cn)**  
## 使用方法：
在`html`中引入JS文件：
```html
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
如`example`中所示，支持链式调用方法。  
  
## 构建  
使用`gulp`进行构建：  
```shell
    npm install
    gulp 
```