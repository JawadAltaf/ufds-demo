const $=s=>document.querySelector(s);
/* hero slider */
const SL=[
{img:'slide-1.jpg',k:'AI video analytics · Pakistan',t:'Cameras that understand what they see.',p:'AI-driven video, access and monitoring systems that turn live footage into events, alerts and searchable records.',
 b:[[69.5,88.5,8.5,10,'Van'],[64,88.5,4.8,9,'Van'],[38,88,6,10.5,'SUV'],[43.5,90,6.5,8,'Car'],[15.5,88.5,8,8,'Van'],[29.5,93,8,7,'Car'],[42.5,76,2.7,4.5,'Vehicle']],ev:['Plate read · ANPR','Sent to access control']},
{img:'slide-2.jpg',k:'Smart campus · Education',t:'Campus access, monitored intelligently.',p:'Entry points, gates and open areas watched by analytics that flag what needs attention.',
 b:[[57.5,75,3.8,18,'Person','person'],[7.5,74,3.6,15,'Person','person'],[11.5,75,2.6,12,'Person','person']],l:[33,84,42,'Gate line'],ev:['Line crossed · Main gate','Operator notified']},
{img:'slide-3.jpg',k:'Developments · Perimeter',t:'Perimeter protection, defined by zones.',p:'Restricted areas and boundaries mapped as rules, with instant alerts to the control room.',
 b:[],z:[18,72,60,26,'Restricted zone'],ev:['Zone armed · Perimeter','Monitoring active']},
{img:'slide-4.jpg',k:'Communities · Residential',t:'Safer communities, managed from one view.',p:'Shared spaces, access points and utilities brought into a single monitored environment.',
 b:[[72.5,66,4.5,13,'Person','person']],z:[34,70,64,24,'Common area'],ev:['Zone entry · Common area','Logged for review']}];
$('#hso').innerHTML=SL.map((s,i)=>`<div class="carousel-item ${i?'':'active'}"><div class="stage"><img src="images/${s.img}" alt="${s.k} — AI detection overlay (illustrative)" ${i?'loading="lazy"':''}>
${s.b.map((b,j)=>`<div class="bx ${b[5]||''}" style="--i:${j};left:${b[0]}%;top:${b[1]}%;width:${b[2]}%;height:${b[3]}%"><i>${b[4]}</i></div>`).join('')}
${s.z?`<div class="zn" style="left:${s.z[0]}%;top:${s.z[1]}%;width:${s.z[2]}%;height:${s.z[3]}%"><i>${s.z[4]}</i></div>`:''}
${s.l?`<div class="ln" style="left:${s.l[0]}%;top:${s.l[1]}%;width:${s.l[2]}%"><i>${s.l[3]}</i></div>`:''}</div>
<div class="hs-in"><div class="container hh-wrap"><span class="eyebrow">${s.k}</span>${i?`<h2 class="hh">${s.t}</h2>`:`<h1>${s.t}</h1>`}<p class="lead">${s.p}</p><div class="d-flex flex-wrap gap-3"><a class="btn-ufds" href="#contact">Discuss a Project</a><a class="btn-ufds btn-ghost" href="#solutions">Explore Solutions</a></div></div></div>
<div class="ev"><i class="bi bi-record-circle-fill"></i><span><b>${s.ev[0]}</b><small>${s.ev[1]} · illustrative</small></span></div></div>`).join('');
$('#hsi').innerHTML=SL.map((s,i)=>`<button type="button" data-bs-target="#hsc" data-bs-slide-to="${i}" class="${i?'':'active'}" aria-label="Slide ${i+1}"></button>`).join('');
/* capabilities */
const CP=[['person-bounding-box','People & object detection','Identifies people, vehicles and objects in live and recorded video.'],['car-front','ANPR & vehicle control','Reads number plates for parking, gate and access workflows.'],['fire','Fire & smoke detection','Flags visible flame and smoke from existing camera views.'],['bounding-box-circles','Perimeter & intrusion','Rules for zones and lines, with instant alerts.'],['search','Searchable video','Find events by type, time or camera instead of scrubbing footage.'],['diagram-3','Works with what you have','Layered onto existing CCTV and systems where compatible.']];
$('#caps').innerHTML=CP.map(c=>`<div class="col-md-6"><div class="capi"><span class="ic"><i class="bi bi-${c[0]}"></i></span><div><h3>${c[1]}</h3><p>${c[2]}</p></div></div></div>`).join('');
/* how it works */
const ST=[['Capture','New or existing IP cameras and sensors.'],['Edge AI','Video analysed on-site, close to the camera.'],['Detect','People, vehicles, plates, fire, intrusion.'],['Alert','Events routed to operators and mobile.'],['Act & integrate','Access, parking, AV walls and building systems.']];
$('#steps').innerHTML=ST.map((s,i)=>`<div class="col-md-6 fc"><div class="step ${i==4?'last':''}"><span>0${i+1}</span><h3>${s[0]}</h3><p>${s[1]}</p></div></div>`).join('');
/* solutions tabs */
const SOL=[['AI & Video Analytics','Intelligent video that detects, classifies and records events across your cameras.',['Object detection','People analytics','Event alerts','Searchable video'],'images/ai-video.jpg'],
['Security Systems','CCTV, access control and monitoring planned as one security layer, with AI on top.',['CCTV','Access control','Alarms','Command centre'],'images/gcu-faisalabad.jpg'],
['Parking & ANPR','Plate recognition and parking management from entry to exit.',['ANPR','Parking management','Vehicle ID','Access integration'],'images/feed-street.jpg'],
['Smart Home & Building','Lighting, climate, security and control, integrated into the architecture.',['Automation','Lighting','Climate','App & panel control'],'images/smart-home.jpg'],
['Audio Visual & Video Walls','Control rooms and display environments that present AI events clearly.',['Video walls','Control rooms','Conferencing','Displays'],''],
['Systems Integration','ELV, security and AI connected into one managed environment.',['Fiber optic','Public address','Intercom','Monitoring'],'']];
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
