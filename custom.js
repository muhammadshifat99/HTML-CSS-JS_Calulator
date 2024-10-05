let string = "";
let btns = document.querySelectorAll('.btn');
Array.from(btns).forEach((btn)=>{
    btn.addEventListener('Click', (e)=>{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
    })
})