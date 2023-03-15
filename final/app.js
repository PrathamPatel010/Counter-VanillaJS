// setting initial count
let count = 0;

// select value and buttons
let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");
console.log(btns);

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        let styles = e.currentTarget.classList;
        console.log(styles)
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("reset")) {
            count = 0;
        } else {
            count++;
        }
        value.textContent = count;
    })
})