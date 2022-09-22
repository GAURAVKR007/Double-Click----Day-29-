const loveMe = document.querySelector('.loveMe')
const times = document.getElementById('times')

// loveMe.addEventListener('dbclick',(e)=>{
//     console.log(123);
// })

let clickTime = 0
let timesClicked = 0

//  My Method for double Click

// loveMe.addEventListener('click',(e)=>{
//    clickTime++;

//    setTimeout(()=>{
//         clickTime = 0;
//    },800)

//    if(clickTime === 2){
//     console.log('123');
//    }
// })

loveMe.addEventListener('click',(e)=> {
    if(clickTime ===0) {
        clickTime = new Date().getTime()
    } else {
        if((new Date().getTime() - clickTime) < 800){
           createHeart(e)
           clickTime = 0
        }else {
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked

    setTimeout(()=>{
        heart.remove()
    },1000)
}