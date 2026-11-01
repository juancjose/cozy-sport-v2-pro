// Interacciones compartidas: header, menú móvil, reveal y año. Respeta prefers-reduced-motion.
(()=>{const d=document,h=d.querySelector('.hdr'),b=d.querySelector('.burger'),n=d.getElementById('nav');
const onS=()=>h&&h.classList.toggle('scrolled',scrollY>24);addEventListener('scroll',onS,{passive:true});onS();
if(b&&n){b.addEventListener('click',()=>{const o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',!o);d.body.classList.toggle('menu-open',!o)});
n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{b.setAttribute('aria-expanded','false');d.body.classList.remove('menu-open')}));
d.addEventListener('keydown',e=>{if(e.key==='Escape'&&d.body.classList.contains('menu-open')){b.click();b.focus()}})}
const r=d.querySelectorAll('.rv');if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){r.forEach(e=>e.classList.add('in'))}
else{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});r.forEach(e=>io.observe(e))}
d.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());})();

(()=>{const items=[...document.querySelectorAll('.acc li')];const act=li=>{items.forEach(x=>{const on=x===li;x.classList.toggle('on',on);x.querySelector('button').setAttribute('aria-expanded',on)})};
items.forEach(li=>{const b=li.querySelector('button');b.addEventListener('click',()=>act(li));li.addEventListener('mouseenter',()=>matchMedia('(hover:hover)').matches&&act(li))});
const km=document.getElementById('km');if(km){const io=new IntersectionObserver(e=>{if(e[0].isIntersecting){io.disconnect();let v=0;const t=setInterval(()=>{v+=4;km.textContent=Math.min(v,100);if(v>=100)clearInterval(t)},16)}});io.observe(km)}})();
