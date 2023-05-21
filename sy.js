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
  		str += '진짜 사귄지 얼마 안됐는데 시험기간이라 잘 챙겨주지'+'<br>';
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
  		str += '을 함께 보내고 축하를 하는 사람이 너라서 감사해.'+'<br>';
  		str += '남산에 걸어놓은 자물쇠는 아직 잘 걸려있겠지? 나중에 '+'<br>';
  		str += '확인하러 가야겠고만ㅎㅎ 밥도 엄청 맛있게 먹고 너가 사준'+'<br>';
  		str += '향수도 잘 쓰고 있어!! 고마워요 :)'+'<br>';
  		break;
  	case 'tap5':
  		str = '';
  		str += '자취를 시작하면서 실내 데이트를 많이 했었넹'+'<br>';
  		str += '너 처음 우리 집에서 자고 간날 엄청 신났었는데ㅎㅎ'+'<br>';
  		str += '어머니랑 처음 통화한 날이기도 하고..? 그래두 너랑 둘만'+'<br>';
  		str += '있는 공간에서 편하게 있으면서 이야기도 많이 하고 더'+'<br>';
  		str += '가까워질 수 있었던 것 같아! 자취한다고 이것저것 많이'+'<br>';
  		str += '사다줘서 진짜 고마웠는데ㅎㅎ 너가 사준 물건들 덕분에'+'<br>';
  		str += '자취방에서 사는데 있어서 더 편하게 지낼 수 있게 된 것'+'<br>';
  		str += '같아! 마스크팩도 사줘서 붙히고ㅋㅎㅋㅎ 마스크팩이 아직'+'<br>';
  		str += '많이 남은건 비밀~~'+'<br>';
  		break;
  	case 'tap6':
  		str = '';
  		str += '10월! 찍은 사진이 이거말고 없더라고..?'+'<br>';
  		str += '축제도 있었고 자주 봤던거 같은데 찍은 사진이 얼마'+'<br>';
  		str += '없었넹ㅠㅠ 앞으로 사진 더 많이 찍자고!! 그래두 저'+'<br>';
  		str += '사진 찍어놔서 얼마나 다행이야ㅎㅎ 안찍었으면 귀여운'+'<br>';
  		str += '서연이를 다시 못 볼 뻔했잖아!!!! 서연이 옷 사준다'+'<br>';
  		str += '했는데 아직 한번도 못 사줬넹. 막상 사려고 하면 뭘'+'<br>';
  		str += '사줄지 모르겠더라구.. 그니까 나랑 쇼핑가자 내가 옷'+'<br>';
  		str += '사줄께!!! 알겠징?!'+'<br>';
  		break;
  	case 'tap7':
  		str = '';
  		str += '우리가 처음 간 롯데월드!'+'<br>';
  		str += '교복까지 입으니까 완전 옛날로 돌아간 느낌이었어ㅎㅎ'+'<br>';
  		str += '만약 고등학생 때, 서연이를 만났다면 이런 느낌이었겠지?'+'<br>';
  		str += '싶더라. 비록 놀이기구는 2개밖에 못 탔지만 사진도 엄청'+'<br>';
  		str += '많이 찍고 많이 웃어서 정말 즐거운 시간이었어! 아쉽게'+'<br>';
  		str += '회전목마 사진은 이쁜거 못 건졌지만 다른 예쁜사진들 많이'+'<br>';
  		str += '찍었으니까!! 담엔 더 이쁜 사진 많이 찍으러 가장!!'+'<br>';
  		str += '롯데월드는 가봤으니까 담엔 에버랜드...?'+'<br>';
  		break;
  	case 'tap8':
  		str = '';
  		str += '두 번째 시그니처 컷!'+'<br>';
  		str += '시험기간이라서 어디 놀러가진 못하고 맛있는 고기 먹으러'+'<br>';
  		str += '갔었지! 얼굴 오래 못본건 아쉬웠지만 고기도 엄청 맜있었고'+'<br>';
  		str += '밥 다먹고 트리에서 사진찍고 영상찍은 것도 엄청 좋은 추억'+'<br>';
  		str += '이 된 것 같아. 서연이가 이쁜 케이크도 가져와 줘서 행복한'+'<br>';
  		str += '200일이 됐던거 같구! 곰돌이 초도 아주 귀여웠구ㅎㅎ'+'<br>';
  		str += '그리고 25일 크리스마스! 밥이랑 와인도 완전 맛있게 먹고'+'<br>';
  		str += '아바타도 보고 집와서 조촐하지만 축하파티도 하고ㅋㅎ'+'<br>';
  		str += '그 때 매달아 놓은 장식은 아직도 걸려 있답니다~~'+'<br>';
  		break;
  	case 'tap9':
  		str = '';
  		str += '우리의 첫 여행 제주도!'+'<br>';
  		str += '여행 갈 수 있을까 했는데 다행히 아주 재밌게 다녀왔징'+'<br>';
  		str += '서연이랑 처음 먼 곳으로 간 여행이었는데, 가서 본 바다도'+'<br>';
  		str += '엄청 예뻤고 음식들도 엄청 맛있었어!! 어디갈지 고민하다가'+'<br>';
  		str += '간 솥밥집까지도 맛있었으니까 이정도면 제주도 음식은 다'+'<br>';
  		str += '맛있는건가?? 아님 서연이랑 먹어서 맛있는건가?!ㅎㅎ'+'<br>';
  		str += '1월에 간 제주도 여행은 우리가 앞으로도 많은 여행을 가겠'+'<br>';
  		str += '지만 처음으로 간 여행이라는 점에서 가장 기억에 남을 것'+'<br>';
  		str += '같아. 그 때 사진도 많이 찍어서 가끔 그 사진들을 보면'+'<br>';
  		str += '기억도 같이 새록새록 나는게 너무 좋아ㅎㅎ'+'<br>';
  		break;
  	case 'tap10':
  		str = '';
  		str += '대망의 서연이 생일!!!!'+'<br>';
  		str += '이 날만을 손꼽아 기다려 왔었지ㅎㅎ 내가 사랑하는 사람의'+'<br>';
  		str += '생일을 챙겨주고 축하해줄 수 있다는 건 정말 행복한 일인'+'<br>';
  		str += '것 같아. 너가 생일 하루를 즐겁고 행복하게 보냈으면 '+'<br>';
  		str += '했고,행복하게 보내고 즐거워 보였어서 난 내심 뿌듯하고'+'<br>';
  		str += '좋았어! 너 선물 살 때, 목걸이를 사놨었는데 갑자기 너가'+'<br>';
  		str += '목걸이를 따로 산다길래 정말 식겁했던 기억이 나네ㅋㅎ'+'<br>';
  		str += '좋아해줘서 고마웠고 앞으로의 생일도 계속 나랑 보내자!!'+'<br>';
  		str += '내가 앞으로도 행복한 생일 만들어줄게요 :)'+'<br>';
  		break;
  	case 'tap11':
  		str = '';
  		str += '3월! 이긴 한데 3월에 찍은 사진이 없더라고..?'+'<br>';
  		str += '학기 초라 바빴나..? 그래서 2월 말에 찍은 사진으로 대체'+'<br>';
  		str += '했어ㅎㅎ 야당가서 찍은 사진인데 아마 널 만나지 않았다면'+'<br>';
  		str += '가보지 못했을 곳 같은데 너로 인해 새로운 곳도 많이 '+'<br>';
  		str += '가보고 경험하는 것 같아서 난 너무 좋아 :) 특히 야당은'+'<br>';
  		str += '서연이가 자라온 곳을 같이 보면서 같이 걷고 있으면 널 더'+'<br>';
  		str += '잘 알아갈 수 있는 것 같아서 좋아. 호수공원에서 불꽃놀이'+'<br>';
  		str += '하는 건 아직 못봤는데 나중에 데려가서 보여줘!!'+'<br>';
  		break;
  	case 'tap12':
  		str = '';
  		str += '마지막 4월이네. 처음으로 간 벚꽃놀이 완전 만족한 날 :)'+'<br>';
  		str += '석촌호수도 가고 서울숲도 가고 사진도 많이 찍고. 행복한'+'<br>';
  		str += '날이었어! 이렇게 22년 5월부터 지금까지 우리 꽤 많은걸'+'<br>';
  		str += '했넹. 그치? 1년동안 고생많았고 고마웠어 :) 앞으로도'+'<br>';
  		str += '더 많은 날들을 우리가 함께할건데 그 날들도 지금처럼'+'<br>';
  		str += '행복하고 많이 웃는 날들이었으면 좋겠다. 사랑하는 서연아'+'<br>';
  		str += '나랑 앞으로도 행복하게 만나자! 많이 많이 사랑해♡'+'<br>';
  		str += '<br>';
  		str += '<div style="text-align:right">2023.05.23 영준이가</div>'+'<br>';
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
// a Pen by DIACO : twitter.com/Diaco_ml  ||  codepen.io/MAW