
const TRAVEL_PLACES = [
  {place:'United States', x:'20%', y:'35%', dx:'8px', dy:'-18px'},
  {place:'Italy', x:'51%', y:'32%', dx:'8px', dy:'-17px'},
  {place:'Maldives', x:'64%', y:'59%', dx:'8px', dy:'14px'},
  {place:'Singapore', x:'74%', y:'59%', dx:'8px', dy:'18px'},
  {place:'Malaysia', x:'73%', y:'55%', dx:'-56px', dy:'-13px'},
  {place:'Vietnam', x:'77%', y:'50%', dx:'8px', dy:'-15px'},
  {place:'Hong Kong', x:'80%', y:'45%', dx:'-72px', dy:'-16px'},
  {place:'Macau', x:'79%', y:'48%', dx:'-52px', dy:'17px'},
  {place:'Taiwan', x:'83%', y:'42%', dx:'8px', dy:'-13px'},
  {place:'South Korea', x:'85%', y:'35%', dx:'-70px', dy:'-15px'},
  {place:'Japan', x:'89%', y:'34%', dx:'9px', dy:'-10px'},
  {place:'Australia', x:'84%', y:'74%', dx:'8px', dy:'-15px'},
  {place:'New Zealand', x:'95%', y:'80%', dx:'-80px', dy:'-8px'},
  {place:'Fiji', x:'97%', y:'66%', dx:'-42px', dy:'-14px'}
];

document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const menu=document.querySelector('.menu-btn'); const nav=document.querySelector('.nav-links');
if(menu&&nav){menu.addEventListener('click',()=>nav.classList.toggle('open'));}
const observer=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  const f=btn.dataset.filter;
  document.querySelectorAll('[data-category]').forEach(card=>{const cats=(card.dataset.category||'').split(' ');card.classList.toggle('is-hidden',f!=='all'&&!cats.includes(f));});
}));

function renderTravelMaps(){
  document.querySelectorAll('[data-map]').forEach(map=>{
    TRAVEL_PLACES.forEach(item=>{
      const pin=document.createElement('button');
      pin.className='map-pin'; pin.style.setProperty('--x',item.x); pin.style.setProperty('--y',item.y);
      pin.dataset.place=item.place; pin.dataset.note=item.note||'Visited — details, photos and a short story can be added later.';
      pin.setAttribute('aria-label',item.place);
      const label=document.createElement('span'); label.className='map-label'; label.textContent=item.place;
      label.style.setProperty('--x',item.x); label.style.setProperty('--y',item.y); label.style.setProperty('--dx',item.dx); label.style.setProperty('--dy',item.dy);
      pin.addEventListener('click',()=>{
        document.querySelectorAll('.map-pin').forEach(p=>p.classList.remove('active')); pin.classList.add('active');
        document.querySelectorAll('#mapInfoTitle').forEach(el=>el.textContent=item.place);
        document.querySelectorAll('#mapInfoText').forEach(el=>el.textContent=pin.dataset.note);
      });
      map.append(pin,label);
    });
  });
  document.querySelectorAll('[data-region-list]').forEach(list=>{
    TRAVEL_PLACES.forEach(item=>{const s=document.createElement('span');s.textContent=item.place;list.appendChild(s);});
  });
}
renderTravelMaps();
