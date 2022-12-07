setInterval(() => {
    d = new Date
    hTime = d.getHours();
    mTime = d.getMinutes();
    sTime = d.getSeconds(); 
    hrotation= 30*hTime + mTime/2;
    mrotation= 6*mTime;
    srotation= 6*sTime;

    hours.style.transform = `rotate(${hrotation}deg)`
    minutes.style.transform = `rotate(${mrotation}deg)`
    seconds.style.transform = `rotate(${srotation}deg)`
    
}, 1000);