const $=s=>document.querySelector(s);
/* hero slider */
const S1=[[69.5,88.5,8.5,10,'Van'],[64,88.5,4.8,9,'Van'],[38,88,6,10.5,'SUV'],[43.5,90,6.5,8,'Car'],[15.5,88.5,8,8,'Van'],[29.5,93,8,7,'Car'],[42.5,76,2.7,4.5,'Vehicle']];
const S2=[[57.5,75,3.8,18,'Person','person'],[7.5,74,3.6,15,'Person','person'],[11.5,75,2.6,12,'Person','person']];
const S4=[[72.5,66,4.5,13,'Person','person']];
const BX=(a,t)=>a.map((b,j)=>`<div class="bx ${b[5]||''}" style="--i:${j};left:${b[0]}%;top:${b[1]}%;width:${b[2]}%;height:${b[3]}%">${t?'':''}<i>${b[4]}</i></div>`).join('');
const tile=(img,a,l)=>`<div class="wt"><img src="images/${img}" alt="" loading="lazy">${BX(a)}<b>${l}</b></div>`;
const SL=[
{img:'slide-1.jpg',k:'AI video analytics · Pakistan',t:'Cameras that understand what they see.',p:'AI-driven video, access and monitoring systems that turn live footage into events, alerts and searchable records.',ev:['Plate read · ANPR','Sent to access control'],o:BX(S1)},
{img:'ai-analytics.jpg',free:1,k:'AI video intelligence',t:'Every camera becomes a sensor.',p:'Object, people and event detection running on your video — with alerts that reach the right operator.',ev:['Person detected · Zone B','Operator notified']},
{img:'ai-home.jpg',free:1,k:'AI smart buildings',t:'Buildings that respond to how people use them.',p:'Security, lighting, climate and access working together, with AI deciding what needs attention.',ev:['Scene rule triggered','Lighting & access updated']},
{k:'AI control rooms',t:'Many cameras. One intelligent view.',p:'Video walls that surface detections and events first, so operators act on what matters.',ev:['6 feeds · 3 active events','Escalated to supervisor'],bg:1,o:`<div class="wall">${tile('slide-1.jpg',S1,'CAM 04 · 7 vehicles')}${tile('slide-2.jpg',S2,'CAM 11 · 3 people')}${tile('slide-3.jpg',[],'CAM 07 · zone armed')}${tile('slide-4.jpg',S4,'CAM 15 · 1 person')}${tile('ibn-battuta.jpg',[],'CAM 02 · idle')}${tile('centaurus.jpg',[],'CAM 09 · idle')}</div>`}];
$('#hso').innerHTML=SL.map((s,i)=>`<div class="carousel-item ${i?'':'active'}"><div class="stage ${s.free?'free':''}">${s.img?`<img src="images/${s.img}" alt="${s.k} — AI visual (illustrative)" ${i?'loading="lazy"':''}>`:'<div style="position:absolute;inset:0;background:linear-gradient(135deg,#0e1a2b,#16305f)"></div>'}${s.o||''}</div>
<div class="hs-in"><div class="container hh-wrap"><span class="eyebrow">${s.k}</span>${i?`<h2 class="hh">${s.t}</h2>`:`<h1>${s.t}</h1>`}<p class="lead">${s.p}</p><div class="d-flex flex-wrap gap-3"><a class="btn-ufds" href="#contact">Discuss a Project</a><a class="btn-ufds btn-ghost" href="#solutions">Explore Solutions</a></div></div></div>
<div class="ev"><i class="bi bi-record-circle-fill"></i><span><b>${s.ev[0]}</b><small>${s.ev[1]} · illustrative</small></span></div></div>`).join('');
$('#hsi').innerHTML=SL.map((s,i)=>`<button type="button" data-bs-target="#hsc" data-bs-slide-to="${i}" class="${i?'':'active'}" aria-label="Slide ${i+1}"></button>`).join('');
/* searchable video demo */
const Q=['white van, main gate, today 18:00–20:00','person, restricted zone, last night','plate read, parking entry, this week'];
const RS=[['Van · Gate lane · 18:42','72% 96%'],['Car · Entry road · 19:05','46% 98%'],['SUV · Apron · 19:31','40% 96%']];
$('#rs').innerHTML=RS.map(r=>`<div class="col-4"><div class="rc" style="background-image:url(images/slide-1.jpg);background-position:${r[1]}"><b>${r[0]}</b></div></div>`).join('');
let qi=0,ci=0;const qt=$('#qt');
if(matchMedia('(prefers-reduced-motion:reduce)').matches){qt.textContent=Q[0]}else setInterval(()=>{const q=Q[qi];if(ci<=q.length){qt.textContent=q.slice(0,ci++)}else if(ci++>q.length+25){ci=0;qi=(qi+1)%Q.length}},70);
/* capabilities */
const CP=[['person-bounding-box','People & object detection','Identifies people, vehicles and objects in live and recorded video.'],['car-front','ANPR & vehicle control','Reads number plates for parking, gate and access workflows.'],['fire','Fire & smoke detection','Flags visible flame and smoke from existing camera views.'],['bounding-box-circles','Perimeter & intrusion','Rules for zones and lines, with instant alerts.'],['search','Searchable video','Find events by type, time or camera instead of scrubbing footage.'],['diagram-3','Works with what you have','Layered onto existing CCTV and systems where compatible.']];
$('#caps').innerHTML=CP.map(c=>`<div class="col-md-6"><div class="capi"><span class="ic"><i class="bi bi-${c[0]}"></i></span><div><h3>${c[1]}</h3><p>${c[2]}</p></div></div></div>`).join('');
/* how it works */
const ST=[['Capture','New or existing IP cameras and sensors.'],['Edge AI','Video analysed on-site, close to the camera.'],['Detect','People, vehicles, plates, fire, intrusion.'],['Alert','Events routed to operators and mobile.'],['Act & integrate','Access, parking, AV walls and building systems.']];
$('#steps').innerHTML=ST.map((s,i)=>`<div class="col-md-6 fc"><div class="step ${i==4?'last':''}"><span>0${i+1}</span><h3>${s[0]}</h3><p>${s[1]}</p></div></div>`).join('');
/* solutions tabs */
const SOL=[['AI Video Analytics','Intelligent video that detects, classifies and records events across your cameras.',['Object detection','People analytics','Event alerts','Searchable video'],'images/ai-analytics.jpg'],
['AI Security Systems','CCTV, access control and monitoring planned as one layer, with AI deciding what needs attention.',['CCTV','Access control','Intrusion rules','Command centre'],'images/gcu-faisalabad.jpg'],
['AI Parking & ANPR','Plate recognition and parking management from entry to exit.',['ANPR','Vehicle identification','Parking management','Access integration'],'images/feed-street.jpg'],
['AI Smart Home & Building','Lighting, climate, security and control that adapt to how a building is used.',['Automation','Scene rules','Climate','App & panel control'],'images/ai-home.jpg'],
['AI Control Rooms & Video Walls','Display environments that surface detections and events first.',['Video walls','Control rooms','Event-driven displays','Collaboration'],''],
['AI Systems Integration','Security, AV, parking and building systems connected around one AI layer.',['Fiber optic','Public address','Intercom','Monitoring'],'']];
const tb=$('#tabs');SOL.forEach((s,i)=>{const b=document.createElement('button');b.setAttribute('role','tab');b.innerHTML=`${s[0]}<i class="bi bi-arrow-right"></i>`;b.onclick=()=>pick(i);tb.appendChild(b)});
function pick(i){const s=SOL[i];[...tb.children].forEach((b,k)=>{b.classList.toggle('on',k==i);b.setAttribute('aria-selected',k==i)});
 $('#bn-n').textContent='0'+(i+1)+' / 0'+SOL.length;$('#bn-t').textContent=s[0];$('#bn-d').textContent=s[1];$('#bn-c').innerHTML=s[2].map(c=>`<li>${c}</li>`).join('');$('#bn-a').innerHTML='View '+s[0]+' <i class="bi bi-arrow-right"></i>';
 $('#bn-img').style.backgroundImage=s[3]?`url(${s[3]})`:'linear-gradient(135deg,#16253b,#244a99)'}
pick(0);
/* region panel, nav, reveal */
const rp=$('#rp');document.querySelectorAll('[data-open-region]').forEach(b=>b.onclick=()=>rp.classList.add('open'));
$('#rc').onclick=()=>rp.classList.remove('open');rp.onclick=e=>{if(e.target==rp)rp.classList.remove('open')};addEventListener('keydown',e=>e.key=='Escape'&&rp.classList.remove('open'));
addEventListener('scroll',()=>$('.nav-main').classList.toggle('sc',scrollY>10),{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));$('#yr').textContent=new Date().getFullYear();
