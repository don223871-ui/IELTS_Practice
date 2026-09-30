document.querySelectorAll('.check').forEach(button=>{button.addEventListener('click',()=>{const el=document.getElementById(button.dataset.target);if(el){el.classList.toggle('show');button.textContent=el.classList.contains('show')?'Hide answer':'Check answers'}})});
const essay=document.getElementById('essay'),count=document.getElementById('count');
if(essay&&count){essay.addEventListener('input',()=>{const words=essay.value.trim()?essay.value.trim().split(/\s+/).length:0;count.textContent=words})}
const sampleToggle=document.getElementById('sampleToggle'),sampleText=document.getElementById('sampleText');
if(sampleToggle&&sampleText){sampleToggle.addEventListener('click',()=>{const open=sampleText.style.display!=='none';sampleText.style.display=open?'none':'block';sampleToggle.textContent=open?'Open Sample Answer':'Hide Sample Answer'})}

// ONLY the "Rewrite the stages in IELTS style" section is extended here.
const buildBox=document.querySelector('.build-box');
if(buildBox){
  const items=[
    ['01','Volcanoes release sulphur dioxide.','Sulphur dioxide …','Sulphur dioxide is released into the atmosphere by volcanoes.'],
    ['02','Plants absorb sulphate ions.','Sulphate ions …','Sulphate ions are absorbed by plants.'],
    ['03','Microorganisms break down organic material.','Organic material …','Organic material is broken down by microorganisms.'],
    ['04','Sulphur dioxide reacts with oxygen and water.','Rewrite in passive / process style …','Sulphur dioxide is transformed through reactions with oxygen and water.'],
    ['05','Rain and dry particles return sulphur to the Earth’s surface.','Rewrite in formal IELTS style …','Sulphur compounds are returned to the Earth’s surface through wet and dry deposition.'],
    ['06','Plants absorb sulphate ions from the soil.','Use: be taken up by …','Sulphate ions are taken up by plants from the soil.'],
    ['07','Animals consume plants containing sulphur.','Use: be consumed by …','Plants containing sulphur are consumed by animals.'],
    ['08','Organic material is deposited. Microorganisms break it down.','Combine using: after being …','After being deposited, organic material is broken down by microorganisms.'],
    ['09','Microorganisms break down organic material. They release sulphur compounds back into the soil and water.','Use a participial clause …','Microorganisms break down organic material, releasing sulphur compounds back into the soil and water.'],
    ['10','Some compounds return to the Earth’s surface. They are deposited through wet and dry deposition.','Use a relative clause …','Compounds which return to the Earth’s surface are deposited through wet and dry deposition.']
  ];
  buildBox.innerHTML='<h3>Rewrite the stages in IELTS style.</h3>' + items.map(([num,prompt,placeholder,answer])=>`<div class="sentence exercise"><span class="q">${num}</span><p>${prompt}</p><input placeholder="${placeholder}"><div class="answer" id="rewrite-${num}">Model: <strong>${answer}</strong></div><button class="check" data-target="rewrite-${num}">Check</button></div>`).join('');
  buildBox.querySelectorAll('.check').forEach(button=>button.addEventListener('click',()=>{const el=document.getElementById(button.dataset.target);if(el){el.classList.toggle('show');button.textContent=el.classList.contains('show')?'Hide answer':'Check'}}));
}

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const target=document.querySelector(a.getAttribute('href'));if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'})}}));
