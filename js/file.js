var opCard1=document.querySelector('.card-1');
var uset=document.querySelector('.card-unset');
var close=document.querySelector('.card-infor');
function open(e){
    uset.classList.toggle('hide');
}
opCard1.addEventListener('click',open);
close.addEventListener('click',open);
