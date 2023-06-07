
  var dox1=document.getElementsByClassName(".child1")
  var dox2=document.getElementsByClassName(".child2")
  var dox3=document.getElementsByClassName(".child3")
var dox4=document.getElementsByClassName(".child4")
var dox=document.getElementsByClassName("box4")
   function startClock(){
       let time = new Date();
       let hrs = time.getHours();
       let mins = time.getMinutes();
       let secs= time.getSeconds();
       let AMPM ="AM";
       if(hrs>12){
           hrs -=12;
           AMPM="PM"
       }
   console.log(`Time : ${hrs}:${mins}:${secs}`);
   dox1.innerHTML=hrs
   dox2.innerHTML=mins
   dox3.innerHTML=secs
   dox4.innerHTML=AMPM
   }
   setInterval(()=>{
       startClock();
      
       },1000)
  