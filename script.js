let text = document.querySelector('.inputText');
let btn = document.querySelector('.btn');
let ul = document.querySelector('.ul-list');
let delbtn = document.querySelector('#delete-btn');


btn.addEventListener('click', ()=>{
    let li = document.createElement('li');
    li.innerHTML = text.value;
    ul.appendChild(li);

    let span = document.createElement('span');
    span.innerHTML = "X";
    span.classList.add('delete-btn');
    li.appendChild(span);

    span.addEventListener('click', ()=>{
        li.remove();
    })
    text.value = "";
});
