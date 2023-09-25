

const headerRomeve = () => {
  const headerBtn = document.querySelector(".header-button")
  const header = document.querySelector(".header")
  headerBtn.addEventListener("click", () =>{
      header.style.transform = "translateY(200px)"
      header.style.transition =  "0.5s"
      let newBtn = document.createElement("button")
      const div = document.querySelector(".div")
      newBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>'; 
      newBtn.style.width = "30px"
      newBtn.style.height = "30px"
      newBtn.className = "div-button"
      newBtn.style.fontSize = "30px"
      newBtn.style.border = "none"
      newBtn.style.background = "none"
  
  
      div.append(newBtn)
      newBtn.addEventListener("click", ()=> {
        header.style.transform = "translateY(0)"
        newBtn.remove()
      })
  })
}
headerRomeve()
const h2 = document.querySelector(".h2")
  const p = document.querySelector(".p")
  const div = document.querySelector(".home-main-center-page-div-div")
  const div_p = document.querySelector(".div-p")
  h2.style.opacity = "0"
   p.style.opacity = "0"
   div.style.opacity = "0"
   div_p.style.opacity = "0"
const h2Animation = (h2, ) =>{
  h2.style.opacity = "1"
}
const pAnimation = (h2, ) =>{
  h2.style.opacity = "1"
}
const divAnimation = (h2, p ) =>{
  h2.style.opacity = "1"
  p.style.opacity = "1"
}
setTimeout(() => {
  divAnimation(div, div_p)
}, 1000)
setTimeout(() => {
  pAnimation(p)
}, 1500)
setTimeout(() => {
  h2Animation(h2, )
}, 500)


const scrollDiv = document.querySelector(".home-main-div")
const scrollC = document.querySelector(".home-main-center")
const scrollLeft = document.querySelector(".home-main-left")
const main = document.querySelector(".home-main")
const headerScroll = () =>{
    const scrollPosition = window.scrollX;
    if (window.innerWidth > 937){
      if (scrollPosition > 180){
        main.style.opacity = 0;
        main.style.translate = "0 -50px";
        main.style.scale = "0.9";
        main.style.transition = "0.4s";
        
    }
    else {
      main.style.opacity = 1;
       main.style.translate = 0;
       main.style.scale =  1;
       main.style.transition = "0.4s"
      
    }
    } else{
      if (scrollPosition > 580){
        main.style.opacity = 0;
        main.style.translate = "0 -50px";
        main.style.scale = "0.9";
        main.style.transition = "0.4s";
        
    }
    else {
      main.style.opacity = 1;
       main.style.translate = 0;
       main.style.scale =  1;
       main.style.transition = "0.4s"
      
    }
    }
   
}

headerScroll()
