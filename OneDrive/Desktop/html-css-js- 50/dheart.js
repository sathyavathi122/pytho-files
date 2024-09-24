const bodye=document.querySelector('body');
bodye.addEventListener('mousemove',(event)=>{
    const pagex=event.offsetX;
    const pagey=event.offsetY;
    const spane=document.createElement('span');
    spane.style.left=pagex+"px"
    spane.style.top=pagey+"px"
    const size=Math.random()*100;
    spane.style.width=size+"px"
    spane.style.height=size+"px"
    bodye.appendChild(spane);
    setTimeout(() => {
        spane.remove();
    }, 3000);

}

)