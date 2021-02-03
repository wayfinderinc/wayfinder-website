function gsapSlider(element) {
   // crousel codepen// ========
   TweenMax.set(element,{perspective:1000});

   var glides=document.querySelectorAll(element + ' .glide'),
       tl=new TimelineMax({paused:true});

   for(var i=0;i<glides.length;i++){
       var D=document.createElement('div');
       D.className='Dot'; D.id='Dot'+i;
       D.addEventListener('click',function(){ tl.seek(this.id).pause() });
       document.querySelector(element + ' .Dots').appendChild(D);
       if(i!=0){tl.addPause('Dot'+i)};
       if(i!=glides.length-1){
         tl.to(glides[i],0.25,{scale:.96,ease:Back.easeOut})
           .to(glides[i],0.7,{xPercent:-130,rotationY:15},'L'+i) // 0.7
           .from(glides[i+1],0.7,{xPercent:130,rotationY:-15},'L'+i)
           .to('#Dot'+i,0.7,{backgroundColor:'rgba(0,0,0,0.15)'},'L'+i)
           .from(glides[i+1],0.25,{scale:.96,ease:Back.easeIn})
       };
   };

   function GO(e){
     var SD=isNaN(e)?e.wheelDelta||-e.detail:e;
     if(SD<0){tl.play()}else{tl.reverse()};
   };

   // document.addEventListener("mousewheel",GO);
   // document.addEventListener("DOMMouseScroll",GO);
   document.querySelector(element + ' .next-x-btn').addEventListener("click",function(){GO(-1)});
   document.querySelector(element + ' .prev-x-btn').addEventListener("click",function(){GO(1)});

   return tl;
}

gsapSlider('#slider-x-01');
gsapSlider('#slider-x-02');
