/*
a Pen by DIACO : twitter.com/Diaco_ml  ||  codepen.io/MAW
powered by GSAP : https://www.greensock.com/
*/
var w = window.innerWidth;
var h = window.innerHeight;
window.onload = function(){
	TweenLite.set("#container",{perspective:600})
	TweenLite.set("img",{xPercent:"-50%",yPercent:"-50%"})

	var total = 30;
	var warp = document.getElementById("container");

	 
	for (i=0; i<total; i++){ 
		var Div = document.createElement('div');
	  	TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
	 	console.log(Div);
	  	warp.appendChild(Div);
	  	animm(Div);
	}
	
}


function animm(elm){   
  	TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
  	TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
  	TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
};

function R(min,max) {return min+Math.random()*(max-min)};

function myFunction(tap) {
  	var popup = document.getElementById("content1");
  	$("#main-content").toggle()
  	change_position($("#main-content"))
  	change_position_img($("#content-img"))
  	$("#content-img").css("background-image", "url(" + "img/"+tap.id+".jpg" + ")");
  	popup.classList.toggle("show");
  	console.log($(tap).find('h2').text());
  	console.log($(tap).find('p').text());
  	$(".content-title").text($(tap).find('h2').text());
  	$(".content-subtitle").text($(tap).find('p').text());

  	var str;
  	switch(tap.id){
  	case 'tap1':
  		str = '';
  		str += '우리가 처음 손 잡은 5월'+'<br>';
  		str += '벌써 1년이나 지났네. 매번 말하지만 시간 참 빨라 그치?'+'<br>';
  		str += '갑작스럽게 잡은 손이였지만 놓지 않고 지금까지 잡아줘서'+'<br>';
  		str += '고마워 :) 우리의 첫 만남이 일감호에서 시작된 것도'+'<br>';
  		str += '난 참 고마운 일인 것 같아.'+'<br>';
  		break;
  	case 'tap2':
  		str = '';
  		str += ''+'<br>';
  		break;
  	case 'tap3':
  		str = '';
  		str += ''+'<br>';
  		break;
  	case 'tap4':
  		str = '';
  		str += ''+'<br>';
  		break;
  	case 'tap5':
  		str = '';
  		str += ''+'<br>';
  		break;
  	case 'tap6':
  		str = '';
  		str += ''+'<br>';
  		break;
  	case 'tap7':
  		str = '';
  		str += ''+'<br>';
  		break;
  	case 'tap8':
  		str = '';
  		str += ''+'<br>';
  		break;
  	case 'tap9':
  		str = '';
  		str += ''+'<br>';
  		break;
  	case 'tap10':
  		str = '';
  		str += ''+'<br>';
  		break;
  	case 'tap11':
  		str = '';
  		str += ''+'<br>';
  		break;
  	case 'tap12':
  		str = '';
  		str += ''+'<br>';
  		break;
  	default:
  		str = '';
  		break;	
  	}
  	$("#content-letter").find('p').html(str);

  	var newDiv = $("<div></div>");
  	// 태그에 속성을 추가합니다.
  	newDiv.attr("class", "background-blur");
  	// 태그에 내용을 추가합니다.
  	$("body").append(newDiv);
}
function closeFunction(){
	$('.background-blur').remove();
	var popup = document.getElementById("content1");
  	$("#main-content").toggle()
  	change_position($("#main-content"))
  	popup.classList.toggle("show");
}
function change_position(obj){
	var l = ($(window).width()-obj.width())/2;
	var t = ($(window).height()-obj.height())/2;
	obj.css({top:t,left:l});
}
function change_position_img(obj){
	var l = ($("#main-content").width()-obj.width())/2;
	var t = ($("#main-content").height()-obj.height())*7;
	obj.css({top:t,left:l});
}
// a Pen by DIACO : twitter.com/Diaco_ml  ||  codepen.io/MAW