const text = document.getElementById("text");
const submit = document.getElementById("submit");
const box = document.getElementById("box");

text.addEventListener("keydown",(event) => {
    if (event.key === 'Enter') {
        submit.click();
    }
})

submit.addEventListener("click",() => {
    let x = text.value;
    box.style.background = x;
});