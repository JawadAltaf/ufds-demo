const SOL=[
["AI & Video Analytics","Video intelligence that turns camera feeds into searchable events and alerts.",["Object detection","People analytics","Event alerts","Searchable video"],"images/ai-video.jpg"],
["Security Systems","CCTV, access control and monitoring designed as one security layer.",["CCTV","Access control","Alarm systems","Command centre"],"images/security.jpg"],
["Smart Home","Lighting, climate, security and control, integrated into the architecture.",["Automation","Lighting","Climate","App & panel control"],"images/smart-home.jpg"],
["Parking & ANPR","Plate recognition and parking management from entry to exit.",["ANPR","Parking management","Vehicle identification","Access integration"],""],
["Audio Visual / Video Walls","Control rooms, conference spaces and display environments.",["Video walls","Control rooms","Digital displays","Collaboration"],""],
["Video Conferencing","Reliable meeting-room and campus conferencing systems.",["Meeting rooms","Campus rooms","Integration","Support"],""],
["Systems Integration","ELV and IT systems connected into one managed environment.",["Fiber optic","Public address","Intercom","Building management"],""]];
const IND=[["Government","Public-sector security, command and city services."],["Education","Smart and secure campus programmes."],["Healthcare","Hospital security, access and smart wards."],["Hospitality","Smart hotels, guest recognition, parking."],["Residential","Integrated smart-living and community systems."],["Corporate","Offices, towers and business developments."],["Infrastructure","Traffic, utilities and large-scale networks."]];
const $=s=>document.querySelector(s);
const sl=$('#sl');SOL.forEach((s,i)=>{const b=document.createElement('button');b.setAttribute('role','tab');b.innerHTML=`<span>0${i+1}</span>${s[0]}<i style="font-style:normal">→</i>`;b.onclick=()=>pick(i);b.onmouseenter=()=>matchMedia('(hover:hover)').matches&&pick(i);sl.appendChild(b)});
function pick(i){const s=SOL[i];[...sl.children].forEach((b,k)=>{b.classList.toggle('on',k==i);b.setAttribute('aria-selected',k==i)});
 $('#sp-n').textContent='0'+(i+1)+' / 07';$('#sp-t').textContent=s[0];$('#sp-d').textContent=s[1];$('#sp-c').innerHTML=s[2].map(c=>`<li>${c}</li>`).join('');$('#sp-a').textContent='Explore '+s[0]+' →';
 const p=$('#sp'),bg=p.querySelector('.bgimg');p.classList.toggle('blueprint',!s[3]);bg.style.backgroundImage=s[3]?`url(${s[3]})`:'';}
pick(0);
$('#indl').innerHTML=IND.map((x,i)=>`<a class="ind-row" href="#"><span class="n">0${i+1}</span><h3>${x[0]}</h3><p>${x[1]}</p><span class="ar">→</span></a>`).join('');
// graticule
let g='';for(let x=0;x<=1000;x+=100)g+=`<line x1="${x}" y1="0" x2="${x}" y2="500"/>`;for(let y=0;y<=500;y+=100)g+=`<line x1="0" y1="${y}" x2="1000" y2="${y}"/>`;$('#grat').innerHTML=g;
// map <-> list sync
const pins=document.querySelectorAll('.pin'),rows=document.querySelectorAll('.reg-row');
function hl(r){pins.forEach(p=>p.classList.toggle('on',p.dataset.r==r));rows.forEach(p=>p.classList.toggle('on',p.dataset.r==r))}
pins.forEach(p=>{p.addEventListener('mouseenter',()=>hl(p.dataset.r));p.addEventListener('focus',()=>hl(p.dataset.r))});
rows.forEach(p=>p.addEventListener('mouseenter',()=>hl(p.dataset.r)));
// region panel
const rp=$('#rp');document.querySelectorAll('[data-open-region]').forEach(b=>b.onclick=()=>rp.classList.add('open'));
$('#rc').onclick=()=>rp.classList.remove('open');rp.onclick=e=>{if(e.target==rp)rp.classList.remove('open')};addEventListener('keydown',e=>e.key=='Escape'&&rp.classList.remove('open'));
// nav + reveal
const nav=$('.nav-main');addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>10),{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));$('#yr').textContent=new Date().getFullYear();
