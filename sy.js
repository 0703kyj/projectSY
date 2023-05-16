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

function makeLatter(id){
	var str;
	switch(id){
  	case 'tap1':
  		str = '';
  		str += '우리가 처음 손 잡은 5월'+'<br>';
  		str += '벌써 1년이나 지났네. 매번 말하지만 시간 참 빨라 그치?'+'<br>';
  		str += '갑작스럽게 잡은 손이였지만 놓지 않고 지금까지 잡아줘서'+'<br>';
  		str += '고마워! 영화 보고 밥 먹고 타로 보고 일감호 산책하구'+'<br>';
  		str += '22년 5월 22일은 정말 잊지 못할 하루가 되었어.'+'<br>';
  		str += '그런 하루를 만들어줘서 고마워 서연아!!'+'<br>';
  		str += '1년이 지난 오늘도 행복한 하루가 되었으면 좋겠다ㅎㅎ'+'<br>';
  		str += '그리고 타로집 사장님! 우리 1년 동안 잘 만나고 있답니다~'+'<br>';
  		break;
  	case 'tap2':
  		str = '';
  		str += '우리가 만나자 마자 바로 시험기간이라 학교 근처에서만'+'<br>';
  		str += '보다가 아마 처음으로 다른 곳으로 간게 왕십리일거야!'+'<br>';
  		str += '진짜 사귄지 얼마 안됐는데 시험기간이라 잘 챙겨주지도'+'<br>';
  		str += '못한 날이 꽤 길었는데도 별말없이 힘이 되주어서 고마워'+'<br>';
  		str += '나 종강했을 때, 너가 써준 쪽지는 가끔 읽어볼 때마다'+'<br>';
  		str += '힘이 되는 것 같아!! 종강하고 왕십리가서 한 데이트는'+'<br>';
  		str += '잊지 못하는 데이트 중 하나야! 그 때 서연이가'+'<br>';
  		str += '얼마나 예뻤는지 알아?! 물론 지금도 세상에서 가장 '+'<br>';
  		str += '예쁘지 ㅋㅎㅋㅎ'+'<br>';
  		break;
  	case 'tap3':
  		str = '';
  		str += '그 더운 날 땀 뻘뻘 흘리면서 올라간 낙산공원'+'<br>';
  		str += '이번 여름은 유독 더웠던 것 같아. 서연이 옆이라'+'<br>';
  		str += '긴장했었어서 그런가?ㅋㅎㅋㅎ 모기도 잔뜩 물리고 땀도'+'<br>';
  		str += '많이 나는 여름이었지만 너가 옆에 있어서 제일 많이 웃은'+'<br>';
  		str += '여름이기도 했어 :) 저 날 기억나? 우리 마스크 벗은 사진'+'<br>';
  		str += '이 내 기억으로는 카페 다음으로 처음이였는데 내가 좋아'+'<br>';
  		str += '하는 사진 중에 하나야ㅎㅎ 그리고 내 생일도 있던 7월인데'+'<br>';
  		str += '아웃백에 선물까지 챙겨주고 케이크까지! 만난지 얼마 안된'+'<br>';
  		str += '날이었는데도 엄청 잘 챙겨줘서 고마웠어 :)'+'<br>';
  		break;
  	case 'tap4':
  		str = '';
  		str += '우리 시그니처 컷!'+'<br>';
  		str += '100일부터 찍기 시작해서 매번 지나갈 때마다 찍는 것 같네.'+'<br>';
  		str += '서연이가 사준 가디건으로 커플룩 맞춰서 입고 가는데 날이'+'<br>';
  		str += '더워도 너무 행복하게 입었던 것 같아. 누굴 만나서 100일'+'<br>';
  		str += '이 되어 축하를 하는데 함께하는 사람이 너라서 감사해.'+'<br>';
  		str += '남산에걸어놓은 자물쇠는 아직 잘 걸려있겠지? 나중에 '+'<br>';
  		str += '확인하러 가야겠고만ㅎㅎ 밥도 엄청 맛있게 먹고 너가 사준'+'<br>';
  		str += '향수도 잘 쓰고 있어!! 고마워요 :)'+'<br>';
  		break;
  	case 'tap5':
  		str = '';
  		str += '자취를 시작하면서 실내 데이트를 많이 했었넹'+'<br>';
  		str += '너 처음 우리 집에서 자고 간날 엄청 신났었는데ㅎㅎ'+'<br>';
  		str += '어머니랑 처음 통화한 날이기도 하고..? 그래두 너랑 둘만'+'<br>';
  		str += '있는 공간에서 편하게 있으면서 이야기도 많이 하고 더'+'<br>';
  		str += '가까워 질 수 있었던 것 같아! 자취한다고 이것저것 많이'+'<br>';
  		str += '사다줘서 진짜 고마웠는데ㅎㅎ 너가 사준 물건들 덕분에'+'<br>';
  		str += '자취방에서 사는데 있어서 더 편하게 지낼 수 있게 된 것'+'<br>';
  		str += '같아! 마스크팩도 사줘서 붙히고ㅋㅎㅋㅎ 마스크팩이 아직'+'<br>';
  		str += '많이 남은건 비밀~~'+'<br>';
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
  	return str;
}

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

  	var str = makeLatter(tap.id);

  	$("#content-letter").find('p').html(str);

  	var newDiv = $("<div></div>");
  	// 태그에 속성을 추가합니다.
  	newDiv.attr("class", "background-blur");
  	newDiv.attr("onclick", "closeFunction()");
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