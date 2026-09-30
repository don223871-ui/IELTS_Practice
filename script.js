document.querySelectorAll('.check').forEach(button=>{button.addEventListener('click',()=>{const el=document.getElementById(button.dataset.target);if(el){el.classList.toggle('show');button.textContent=el.classList.contains('show')?'Hide answer':'Check answers'}})});
const essay=document.getElementById('essay'),count=document.getElementById('count');
if(essay&&count){essay.addEventListener('input',()=>{const words=essay.value.trim()?essay.value.trim().split(/\s+/).length:0;count.textContent=words})}
const sampleToggle=document.getElementById('sampleToggle'),sampleText=document.getElementById('sampleText');
if(sampleToggle&&sampleText){sampleToggle.addEventListener('click',()=>{const open=sampleText.style.display!=='none';sampleText.style.display=open?'none':'block';sampleToggle.textContent=open?'Open Sample Answer':'Hide Sample Answer'})}

// Rewrite the Stages: make ALL 01-10 items use the same exercise-card format.
const buildBox=document.querySelector('.build-box');
if(buildBox){
  const sentences=buildBox.querySelectorAll('.sentence');
  const originals=[
    ['01','Volcanoes release sulphur dioxide.','Sulphur dioxide …','Sulphur dioxide is released into the atmosphere by volcanoes.'],
    ['02','Plants absorb sulphate ions.','Sulphate ions …','Sulphate ions are absorbed by plants.'],
    ['03','Microorganisms break down organic material.','Organic material …','Organic material is broken down by microorganisms.']
  ];
  sentences.forEach((sentence,i)=>{
    if(!originals[i]) return;
    const [num,prompt,placeholder,answer]=originals[i];
    sentence.className='exercise';
    sentence.innerHTML=`<span class="q">${num}</span><p>${prompt}</p><input placeholder="${placeholder}"><div class="answer" id="r${num}">Model: <strong>${answer}</strong></div><button class="check" data-target="r${num}">Check</button>`;
  });
  const existingExtra=buildBox.nextElementSibling;
  if(existingExtra && existingExtra.classList.contains('exercise-grid') && existingExtra.querySelector('#r4')) existingExtra.remove();
  const extra=document.createElement('div');
  extra.className='exercise-grid';
  extra.innerHTML=`
    <div class="exercise"><span class="q">04</span><p>Rewrite using the passive voice: “Sulphur dioxide reacts with oxygen and water.”</p><input placeholder="Write your answer …"><div class="answer" id="r4">Model: <strong>Sulphur dioxide is transformed through reactions with oxygen and water.</strong></div><button class="check" data-target="r4">Check</button></div>
    <div class="exercise"><span class="q">05</span><p>Rewrite in a formal process style: “Rain and dry particles put sulphur back on the Earth's surface.”</p><input placeholder="Write your answer …"><div class="answer" id="r5">Model: <strong>Sulphur compounds are returned to the Earth's surface through wet and dry deposition.</strong></div><button class="check" data-target="r5">Check</button></div>
    <div class="exercise"><span class="q">06</span><p>Rewrite using <strong>be taken up by</strong>: “Plants absorb sulphate ions.”</p><input placeholder="Write your answer …"><div class="answer" id="r6">Model: <strong>Sulphate ions are taken up by plants.</strong></div><button class="check" data-target="r6">Check</button></div>
    <div class="exercise"><span class="q">07</span><p>Rewrite using <strong>be consumed by</strong>: “Animals consume plants containing sulphur.”</p><input placeholder="Write your answer …"><div class="answer" id="r7">Model: <strong>Plants containing sulphur are consumed by animals.</strong></div><button class="check" data-target="r7">Check</button></div>
    <div class="exercise"><span class="q">08</span><p>Combine the stages using <strong>after being</strong>: “Organic material is deposited. Microorganisms break it down.”</p><input placeholder="Write your answer …"><div class="answer" id="r8">Model: <strong>After being deposited, organic material is broken down by microorganisms.</strong></div><button class="check" data-target="r8">Check</button></div>
    <div class="exercise"><span class="q">09</span><p>Rewrite using a participial clause: “Microorganisms break down organic material. They release sulphur compounds back into the soil and water.”</p><input placeholder="Write your answer …"><div class="answer" id="r9">Model: <strong>Microorganisms break down organic material, releasing sulphur compounds back into the soil and water.</strong></div><button class="check" data-target="r9">Check</button></div>
    <div class="exercise"><span class="q">10</span><p>Rewrite using a relative clause: “Some compounds return to the Earth's surface. These compounds are deposited through wet and dry deposition.”</p><input placeholder="Write your answer …"><div class="answer" id="r10">Model: <strong>Compounds which return to the Earth's surface are deposited through wet and dry deposition.</strong></div><button class="check" data-target="r10">Check</button></div>
  `;
  buildBox.insertAdjacentElement('afterend',extra);
  buildBox.querySelectorAll('.check').forEach(button=>button.addEventListener('click',()=>{const el=document.getElementById(button.dataset.target);if(el){el.classList.toggle('show');button.textContent=el.classList.contains('show')?'Hide answer':'Check'}}));
  extra.querySelectorAll('.check').forEach(button=>button.addEventListener('click',()=>{const el=document.getElementById(button.dataset.target);if(el){el.classList.toggle('show');button.textContent=el.classList.contains('show')?'Hide answer':'Check'}}));
}

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const target=document.querySelector(a.getAttribute('href'));if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'})}}));
