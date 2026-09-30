document.querySelectorAll('.check').forEach(button=>{button.addEventListener('click',()=>{const el=document.getElementById(button.dataset.target);if(el){el.classList.toggle('show');button.textContent=el.classList.contains('show')?'Hide answer':'Check answers'}})});
const essay=document.getElementById('essay'),count=document.getElementById('count');
if(essay&&count){essay.addEventListener('input',()=>{const words=essay.value.trim()?essay.value.trim().split(/\s+/).length:0;count.textContent=words})}
const sampleToggle=document.getElementById('sampleToggle'),sampleText=document.getElementById('sampleText');
if(sampleToggle&&sampleText){sampleToggle.addEventListener('click',()=>{const open=sampleText.style.display!=='none';sampleText.style.display=open?'none':'block';sampleToggle.textContent=open?'Open Sample Answer':'Hide Sample Answer'})}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const target=document.querySelector(a.getAttribute('href'));if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'})}}));
