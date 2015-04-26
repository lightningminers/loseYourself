#UIPickerView

这是用来仿造iOS中的UIPickerView而编写的适用于移动端H5页的UI插件，可以适配在任何项目中，不依赖任何库或框架。

##Use it

需要实例化**UIPickerView**类，UIPickerView类也提供了一个简单的类方法，createPickerView来快速创建一个UIPickerView。

在使用之前还需要传入一个配置obj参数对象，各参数意义如下：

	dataSource:data,  //数据源
	id:'picker', //容器id
	constraintsId:'wower', //约束id
	kUP:{
		kUPCELLHEIGHT:44, //行高
		kUPFRICTION:0.003 //动画速率
	},
	valueChange:function(data){ //选择一项会触发的valueChange事件回调
		//UPNotificationCenter.postNotificationName('UPK',data);
	}

dataSource数据源的结构，渲染DOM结构依赖key，value键，具体的业务功能可以根据自己的需求来定义结构：

	var data = [
			{
				"key":"index", //下一个UIPickerView数据源的键
				"value":"index" //当前值
			},
	]

UIPickerView提供了五个方法来操作

>UPClose() 关闭一个UIPickerView

>UPRender() 重新渲染内容区域部分

>UPSelectRowIndexPath() 自定义选择某一行

>UPThen() 选择了一行之后可以在这个回调中再做某些事情

>UPOpen() 打开一个存在的UIPickerView

##注意事项

* 素材图片可替换PS:（找个美工妹纸帮你做漂亮些）
* cell的高度可定制，要求与css中的行高一致，并且可以与2取余
* 容器外css以及如何布局，都可以根据业务具体来替换，

##感谢

UIPickerView的图片素材是在这里下载的--[http://cubiq.org/](http://cubiq.org/)，**感谢**。

我以《燃烧的远征》来命名，纪念我远去的青春（魔兽世界2007年，烧热的远征上线，高三。），感谢暴雪。

##效果图

![UIPickerView Demo](http://websources.qiniudn.com/img/UIPickerView01.png)


