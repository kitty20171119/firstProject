$(function(){
	//1.设置fullpage颜色
	$(".main").fullpage({
		sectionsColor:["#1bbc9b","#1bbc9b","#1bbc9b","#1bbc9b","#1bbc9b","#1bbc9b"]
	});
	//2.背景音乐播放
	var audiobox=document.getElementById("audiobox");
	var audio=document.getElementById("audio");
	audiobox.onclick=function(){
		if(audio.paused){
			audio.play();
			
		}else{
			
			audio.pause();
		}
		
		
		
	}
	//3.图片随机动起来
		
		setInterval(function(){
		var num=Math.floor(Math.random()*5+1);
		var n=$(".page4 .list").children("img").length-1;
		$(".page4 .list").append("<img src=''/>");
		$(".page4 .list img:eq("+n+")").attr("src","heart/"+Math.floor(Math.random()*5+1)+".png");
		
		
		var rand=Math.floor(Math.random()*900);
		$(".page4 .list img").animate({
			
			top:rand,
			left:rand,
			opacity:0,
			
		},3000);
		
		
		
			
		},300)
		
			
			
		
		
		
	
	
	
		
		
		
		
		
	
	
	
})