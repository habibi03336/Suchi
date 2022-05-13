//cancel prior requests for a period.
function debounce(fn, delay = 500) {
    let timer = null
    return function () {
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}

//cancel subsequent events that once requested for a period.
function throttle(fn, delay = 100) {
    let timer = null
    return function () {
        if(timer){
            return
        }
        timer = setTimeout(()=>{
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}

export { debounce, throttle };

