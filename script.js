/* IELTS Practice — Rewrite Stages v3 */
document.querySelectorAll('.check').forEach(button=>{button.addEventListener('click',()=>{const el=document.getElementById(button.dataset.target);if(el){el.classList.toggle('show');button.textContent=el.classList.contains('show')?'Hide answer':'Check answers'}})});
const essay=document.getElementById('essay'),count=document.getElementById('count');
if(essay&&count){essay.addEventListener('input',()=>{const words=essay.value.trim()?essay.value.trim().split(/\s+/).length:0;count.textContent=words})}
const sampleToggle=document.getElementById('sampleToggle'),sampleText=document.getElementById('sampleText');
if(sampleToggle&&sampleText){sampleToggle.addEventListener('click',()=>{const open=sampleText.style.display!=='none';sampleText.style.display=open?'none':'block';sampleToggle.textContent=open?'Open Sample Answer':'Hide Sample Answer'})}

// Rewrite the stages in IELTS style — exactly 10 items in the same section.
const buildBox=document.querySelector('.build-box');
if(buildBox){
  const items=[
    ['01','Volcanoes release sulphur dioxide.','Sulphur dioxide …','Sulphur dioxide is released by volcanoes.'],
    ['02','Plants absorb sulphate ions.','Sulphate ions …','Sulphate ions are taken up by plants.'],
    ['03','Microorganisms break down organic material.','Organic material …','Organic material is broken down by microorganisms.'],
    ['04','Sulphur dioxide reacts with oxygen and water.','Sulphur dioxide …','Sulphur dioxide reacts with oxygen and water to form sulphate salts and sulphuric acid.'],
    ['05','Rain and dry particles return sulphur compounds to the Earth’s surface.','Sulphur compounds …','Sulphur compounds are returned to the Earth’s surface through wet and dry deposition.'],
    ['06','Plants incorporate sulphur into proteins.','Sulphur …','Sulphur is incorporated into proteins by plants.'],
    ['07','Animals consume plants containing sulphur.','Plants containing sulphur …','Plants containing sulphur are consumed by animals.'],
    ['08','Microorganisms release sulphur compounds back into the soil and water.','Sulphur compounds …','Sulphur compounds are released back into the soil and water by microorganisms.'],
    ['09','Sulphates move through rivers to the ocean.','Sulphates …','Sulphates are carried through rivers to the ocean.'],
    ['10','Sulphur is stored in the Earth’s crust and oceanic sediments.','Sulphur …','Finally, sulphur is stored in the Earth’s crust and oceanic sediments.']
  ];
  buildBox.innerHTML='<h3>Rewrite the stages in IELTS style.</h3>'+items.map(([n,p,ph,ans])=>`<div class="sentence"><span>${n}</span><div><p>${p}</p><input placeholder="${ph}"><div class="answer rewrite-answer" id="rewrite-${n}">Sample answer: <strong>${ans}</strong></div><button class="check" data-target="rewrite-${n}">Check sample answer</button></div></div>`).join('');
  buildBox.querySelectorAll('.check').forEach(button=>button.addEventListener('click',()=>{const el=document.getElementById(button.dataset.target);if(el){el.classList.toggle('show');button.textContent=el.classList.contains('show')?'Hide sample answer':'Check sample answer'}}));
}

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const target=document.querySelector(a.getAttribute('href'));if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'})}}));
