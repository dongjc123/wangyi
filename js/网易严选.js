window.onload=function() {
	var ul=document.getElementById('image');
	var liArr=ul.children;
	var olArr=document.getElementsByClassName('name');
	var left=document.getElementById('left');
	var right=document.getElementById('right');
	var row=document.getElementsByClassName('image')[0];
	var count=0;
	var sqar=0;
	//点击下方圆圈到指定图片
	for (var i=0;i<olArr.length;i++) {
		olArr[i].index=i;
		liArr[i].style.opacity =0;
		liArr[0].style.opacity =1;
		olArr[i].onmouseover=function() {
			obj.xh(this.index);
			olArr[this.index].className +=' current';
			count=sqar=this.index;
		}
	}
	//点击左边，出现上一张
	left.onclick=function() {
		count--;
		if(count<0) {
			count=liArr.length-1;
		}
		obj.xh(count);
		sqar--;
		if (sqar<0) {
			sqar=liArr.length-1;
		}
		olArr[sqar].className +=' current';
	}
	//点击右边，出现下一张
	right.onclick=function() {
		autoplay();
	}
	//自动播放
	var timer=setInterval(autoplay,2000);
	function autoplay() {
		count++;
		if(count>liArr.length-1) {
			count=0;
		}
		obj.xh(count);
		sqar++;
		if (sqar>liArr.length-1) {
			sqar=0;
		}
		olArr[sqar].className +=' current';
	}
	//鼠标移入暂停，移出继续
	row.onmouseover=function() {
		clearInterval(timer);
	}
	row.onmouseout=function() {
		timer=setInterval(autoplay,2000);
	}
	//封装渐隐函数
	var obj={
		animate1:function(ele) {
					clearInterval(ele.timer);
					ele.timer=setInterval(function() {
					ele.style.opacity -=0.1;
					if (ele.style.opacity<=0) {
					ele.style.opacity =0;
					clearInterval(ele.timer);
				}
			},100)
		},
		animate2:function(ele) {
					clearInterval(ele.timer);
					ele.timer=setInterval(function() {
					ele.style.opacity -=-0.1;
					if ( ele.style.opacity>=1) {
					ele.style.opacity =1;
					clearInterval(ele.timer);
				}
			},100)
		},
		xh:function(index) {
					for (var j=0;j<liArr.length;j++) {
					obj.animate2(liArr[index]);
					olArr[j].className='name';
					if(j !=index) {
					obj.animate1(liArr[j]);
				}
			}
		}
	}
}
