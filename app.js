var audio = new Audio('sounds/fsend.wav');

function time(){
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var mainPara=document.getElementById('mainPara');
mainPara.innerHTML=time;
var alaramList = document.getElementsByClassName('listItem')
for (i=0 ;i< alaramList.length ; i++){
    console.log(alaramList[i].firstChild.textContent)
    console.log(time)
    if(alaramList[i].firstChild.textContent == time){
        audio.play();
        
        alaramList[i].remove()
    }

}
}


setInterval(time,1000)

function gettime(){
var hh=document.getElementById('hh')
var mm=document.getElementById('mm')
var ss=document.getElementById('ss')
var alaramTime = hh.value + ':' + mm.value + ':'+ ss.value
console.log(alaramTime)
var alaramTimeText=document.createTextNode(alaramTime)
var l1=document.createElement('li')
var alarmListp = document.getElementById('mainList')
l1.appendChild(alaramTimeText)
var deltn = document.createElement('button')
btnTxt=document.createTextNode('delete alarm')
deltn.appendChild(btnTxt)
deltn.setAttribute('onclick','deleteitem(this)')
deltn.setAttribute('class','deleteBtn')
l1.appendChild(deltn)

l1.setAttribute('class','listItem')
console.log(alarmListp)
alarmListp.appendChild(l1)
hh.value=null;
mm.value=null;
ss.value=null;

// soundcome(hh.value,mm.value,ss.value)
}

function deleteitem(e){
    e.parentNode.remove()
}








// function soundcome(a,b,c){
//     var today = new Date();
// //var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var chh= a - today.getHours();
// var cmm =b-  today.getMinutes();
// var Css = c - today.getSeconds();
// var totalTimeMm=((chh*60*60)+(cmm*60)+(Css))*1000
// //var tt_mm=((chh*60*60)+(cmm*60)+(Css))*1000
// console.log(totalTimeMm)
// setTimeout(playSound,totalTimeMm)



// }


// function playSound(){
//     alert('ali')
// }


// function checl(){
//     var mainP=document.getElementById('mainPara');
//     console.log(mainP.innerHTML)
// }
// setInterval(checl,1500)
// var currenTime = document.createElement('p')
// var timeText=document.createTextNode(time)
// var mainDiv= document.getElementsByClassName('alramClock')
// currenTime.appendChild(timeText)
// mainPara.appendChild(currenTime)





