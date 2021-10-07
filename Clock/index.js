setInterval(()=>{
    console.log("Tarun");
    date = new Date();
    ht=date.getHours();
    mt=date.getMinutes();
    st=date.getSeconds();
    hr=30*ht+mt/2+st/120;
    mr=6*mt+st/10;
    sr=6*st;
    hh.style.transform = `rotate(${hr}deg)`;
    mh.style.transform = `rotate(${mr}deg)`;
    sh.style.transform = `rotate(${sr}deg)`;
}, 1000);