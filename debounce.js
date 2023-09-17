
function debounce(func, timeout){
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this), timeout);
    }
}

let i = 0;

function increment(){
    i++;
    document.getElementById('counter').textContent = i;
}

const debounceIncrement = debounce(increment, 1000)

const button = document.getElementById('incrementButton');
button.addEventListener('click', debounceIncrement);