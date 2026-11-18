(function(){
var top=document.getElementById('top'),bur=top.querySelector('.burger');
bur.addEventListener('click',function(){var o=top.classList.toggle('otw');bur.setAttribute('aria-expanded',o);bur.setAttribute('aria-label',o?'Zamknij menu':'Otwórz menu');});
top.querySelectorAll('.panel a').forEach(function(a){a.addEventListener('click',function(){top.classList.remove('otw');bur.setAttribute('aria-expanded','false');});});

/* pasek na telefonie po przewinieciu za przycisk w hero */
var mob=document.querySelector('.mob'),hb=document.querySelector('.hero .btn');
if('IntersectionObserver' in window&&mob&&hb){new IntersectionObserver(function(e){var r=e[0];mob.classList.toggle('widac',!r.isIntersecting&&r.boundingClientRect.top<0);}).observe(hb);}

/* pasy przesuwane palcem i mysza */
function pas(el){
 var d=false,x0=0,s0=0,ruch=0;
 el.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;d=true;ruch=0;x0=e.clientX;s0=el.scrollLeft;});
 window.addEventListener('pointermove',function(e){if(!d)return;var dx=e.clientX-x0;ruch=Math.max(ruch,Math.abs(dx));if(ruch>5)el.classList.add('ciagnie');el.scrollLeft=s0-dx;});
 window.addEventListener('pointerup',function(){if(!d)return;d=false;setTimeout(function(){el.classList.remove('ciagnie');},0);});
 el.addEventListener('click',function(e){if(ruch>5){e.preventDefault();e.stopPropagation();ruch=0;}},true);
 el.addEventListener('dragstart',function(e){e.preventDefault();});
}
document.querySelectorAll('.pas,.galeria').forEach(pas);
document.querySelectorAll('.strzalki').forEach(function(s){
 var el=document.getElementById(s.dataset.pas);
 s.querySelectorAll('button').forEach(function(b){b.addEventListener('click',function(){el.scrollBy({left:(+b.dataset.k)*el.clientWidth*.8,behavior:'smooth'});});});
});

/* powiekszenie zdjec portfolio */
var lb=document.getElementById('lb');
if(lb){var li=lb.querySelector('img'),lp=lb.querySelector('p');
 document.querySelectorAll('[data-duze]').forEach(function(b){b.addEventListener('click',function(){var img=b.querySelector('img');li.src=b.dataset.duze;li.alt=img.alt;lp.textContent=b.parentNode.querySelector('figcaption').textContent;lb.showModal();});});
 lb.querySelector('button').addEventListener('click',function(){lb.close();});
 lb.addEventListener('click',function(e){if(e.target===lb)lb.close();});
}

/* formularz pokazowy */
var f=document.getElementById('form');
if(f)f.addEventListener('submit',function(e){e.preventDefault();document.getElementById('ok').style.display='block';});
})();
