const $=s=>document.querySelector(s);
/* hero: simulated detection feed */
const VEH=[[69.5,81,8.5,16,'Van'],[64,81,4.8,14,'Van'],[38,82,6,16,'SUV'],[43.5,85,6.5,12,'Car'],[15.5,81,8,12,'Van'],[29.5,89,8,11,'Car'],[42.5,58,2.7,7,'Vehicle']];
const bw=$('#boxes');bw.innerHTML=VEH.map(b=>`<div class="bx" style="left:${b[0]}%;top:${b[1]}%;width:${b[2]}%;height:${b[3]}%"><i>${b[4]}</i></div>`).join('');
const bxs=[...document.querySelectorAll('.bx')],zone=$('#zone');
const LOG={veh:[['Vehicle detected','Van · Gate lane'],['Vehicle detected','Car · Entry road'],['Plate read','ANPR · sent to access'],['Vehicle detected','SUV · Parking apron']],
 zone:[['Zone A entry','Vehicle entered zone'],['Zone A dwell','Vehicle stationary'],['Alert sent','Control room notified'],['Zone A clear','Vehicle exited']]};
let mode='veh',li=0;
function setMode(m){mode=m;document.querySelectorAll('.modes button').forEach(b=>b.classList.toggle('on',b.dataset.m==m));zone.classList.toggle('on',m=='zone');
 bxs.forEach((b,i)=>b.classList.toggle('on',m=='veh'||i==0||i==1));$('#log').innerHTML='';li=0;tick()}
function tick(){const e=LOG[mode][li++%4],d=new Date(),t=d.toTimeString().slice(0,8);
 $('#log').insertAdjacentHTML('afterbegin',`<li><time>${t}</time><span><b>${e[0]}</b><br>${e[1]}</span></li>`);while($('#log').children.length>4)$('#log').lastChild.remove()}
document.querySelectorAll('.modes button').forEach(b=>b.onclick=()=>setMode(b.dataset.m));
setMode('veh');if(!matchMedia('(prefers-reduced-motion:reduce)').matches)setInterval(tick,2800);else for(let i=0;i<3;i++)tick();
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
