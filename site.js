
document.addEventListener('click',(e)=>{
  const card=e.target.closest('.product');
  if(card){
    const modal=document.querySelector('.modal');
    modal.querySelector('.modal-image').src=card.dataset.image;
    modal.querySelector('.modal-title').textContent=card.dataset.title;
    modal.querySelector('.modal-desc').textContent=card.dataset.desc;
    modal.querySelector('.modal-material').textContent=card.dataset.material||'';
    modal.classList.add('open');document.body.style.overflow='hidden';
  }
  if(e.target.matches('.close')||e.target.classList.contains('modal')){
    document.querySelector('.modal')?.classList.remove('open');document.body.style.overflow='';
  }
});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){document.querySelector('.modal')?.classList.remove('open');document.body.style.overflow='';}
});
