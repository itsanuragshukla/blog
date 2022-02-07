var j=1;
window.onload=function(){	
	setTimeout(switchbg(),5000);
	document.getElementById("scrollbg").style.height=document.getElementById("container").clientHeight+"px";
}
window.addEventListener('resize', function(){
  document.getElementById("scrollbg").style.height=document.getElementById("container").clientHeight+"px";
});
function switchbg(){
	if(j>3){j=1;};
	changebg(j);
	j++;
	setTimeout(switchbg,10000);
}
	
function toggleMenu(){
	let menu=document.getElementById("menubar");
	menu.classList.toggle("menuActive");
}

function changebg(id){
	var x =document.querySelectorAll(".control");
	var i;
	for (i = 0; i < x.length; i++) {
 		x[i].style.background = "rgba(255,255,255,0.5)";
	}
	document.getElementById("bg"+id).style.background="white";
	document.getElementById("fixedbg").style.background="url(img/bg"+id+".jpg)"+" no-repeat center center fixed";
}
