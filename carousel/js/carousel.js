/*使用面向对象写轮播图*/
function Carousel(JSON){
	//获取存放轮播图的容器
	this.elem=document.getElementById(JSON.id);
	this.imageList=null;//图片列表
	this.imgLength=JSON.pic.length;//图片数量
	this.imgArr=JSON.pic;//图片数组
	this.width=JSON.width;
	this.height=JSON.height;


	this.append();
}

Carousel.prototype.append=function(){
	//创建一个图片列表
	this.imageList=document.createElement('ul');
	//创建列表项li
	for(var i=0;i<this.imgLength;i++){
		var aLi=document.createElement('li');
		var aimg=document.createElement('img');
		aimg.src='img/'+this.imgArr[i];
		aLi.appendChild(aimg);
		this.imageList.appendChild(aLi);
	}


	//将图片列表添加到DOM树
	this.elem.appendChild(this.imageList);
}

var c=new Carousel({
	"id":"lunbo",
	"pic":[
		"1.jpg",
		"2.jpg",
		"3.jpg",
		"4.jpg",
		"5.jpg",
		"6.jpg",
		"7.jpg",
	],
	"width":"600px",
	"height":"400px"
});