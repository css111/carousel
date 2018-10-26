var count=0;
var img=document.getElementsByTagName('img');
var li=document.getElementsByTagName('li');
var div=document.getElementById('contain');
var left=document.getElementById('button1');
var right=document.getElementById('button2');
var timer=setInterval(run,1000);
var length=img.length;
for(var i=0;i<length;i++){
    img[i].style.display='none';
    li[i].style.backgroundColor='gray';
}
img[count].style.display='block';
li[count].style.backgroundColor='red';
function run(){
    count++;
    if(count===6){
        count=0;
    }
    for(var i=0;i<length;i++){
        img[i].style.display='none';
        li[i].style.backgroundColor='gray';
    }
    img[count].style.display='block';
    li[count].style.backgroundColor='red';

}
div.onmouseover=function(){
    clearInterval(timer);
};
div.onmouseout=function(){
    timer=setInterval(run,1000);
};
var len=li.length;
for(var j=0;j<len;j++){
    li[j].index=j;
    li[j].onmouseover=function(){
      count=this.index;
      run();
    }
}
left.onclick=function(){
    count--;
    if(count<0){
        count=5;
    }
    for(var i=0;i<length;i++){
        img[i].style.display='none';
        li[i].style.backgroundColor='gray';
    }
    img[count].style.display='block';
    li[count].style.backgroundColor='red';

};
right.onclick=function(){
    count++;
    if(count>5){
        count=0;
    }
    for(var i=0;i<length;i++){
        img[i].style.display='none';
        li[i].style.backgroundColor='gray';
    }
    img[count].style.display='block';
    li[count].style.backgroundColor='red';
};
