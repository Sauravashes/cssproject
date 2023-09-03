const openModal= document.getElementById('openModal');
const modal= document.getElementById('myModal');
const closeBtn= document.querySelector('.close');
    openModal.addEventListener('click',()=>{
        modal.style.display='block';
        })
    closeBtn.addEventListener('click',()=>{
        modal.style.display='none'
        })