const wrapper = document.querySelector('.wrapper')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')

btn2.onclick = () => {
    wrapper.classList.add('col')
}

 btn1.onclick = () => {
    wrapper.classList.remove('col')
 }
 function f3() {
    img.style.filter = ' drop-shadow(16px 16px 20px red';
  }