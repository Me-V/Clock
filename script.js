setInterval(()=>{
  d = new Date ();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  
  //ForMulas for this project 
  
  hrotation = 30*htime + mtime/2;
  mrotation = 6*mtime;
  srotation = 6*stime;
  
  // FOR THE MOVEMENT OF THE NEEDLES
  hour.style.transform = `rotate(${hrotation}deg)`;
  min.style.transform = `rotate(${mrotation}deg)`;
  sec.style.transform = `rotate(${srotation}deg)`;
},1000)