
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

const homeAnimaion = () => {
  const h2 = document.querySelector(".h2")
  const p = document.querySelector(".p")
  const div = document.querySelector(".home-main-center-page-div-div")
  const div_p = document.querySelector(".div-p")
  setTimeout(() => {
    h2.style.transform = "translate(0, 0)"
    h2.style.opacity = "1"
    h2.style.transition = "0.4s";
    
  }, 1000)
  setTimeout(() => {
    p.style.transform = "translate(0, 0)"
    p.style.opacity = "1"
    p.style.transition = "0.4s";
    
  }, 2000)
  setTimeout(() => {
    div.style.transform = "translate(0, 0)"
    div.style.opacity = "1"
    div.style.transition = "0.4s";
    div_p.style.transform = "translate(0, 0)"
    div_p.style.opacity = "1"
    div_p.style.transition = "0.4s";
   
  }, 1500)
  
}
 homeAnimaion()
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


window.addEventListener("scroll" , function(){
  const table = document.querySelectorAll(".skills_subject-page-table")
  const scrollPosition = window.scrollY;

const skillScroll = (table) => {
  const innerWidth = window.innerWidth 
  let num 
  const boool = innerWidth  < 1000 ? (innerWidth < "800" ? (innerWidth < 500 ? num = "10" : num ="20" ) : num = "50") : num = "100" 
   

  if (scrollPosition < 450){
    table[0].style.transform = `translate(-${num}%, 0)`
    table[0].style.opacity = "0"
    table[0].style.transition = "0.4s";
  } else {
    table[0].style.transform = "translate(0, 0)"
    table[0].style.opacity = "1"
    table[0].style.transition = "0.4s";
  }
  if (scrollPosition < 600){
    table[1].style.transform = `translate(-${num}%, 0)`
    table[1].style.opacity = "0"
    table[1].style.transition = "0.4s";
  } else {
    table[1].style.transform = "translate(0, 0)"
    table[1].style.opacity = "1"
    table[1].style.transition = "0.4s";
  }

  if (scrollPosition < 850){
    table[2].style.transform = `translate(-${num}%, 0)`
    table[2].style.opacity = "0"
    table[2].style.transition = "0.4s";
  } else {
    table[2].style.transform = "translate(0, 0)"
    table[2].style.opacity = "1"
    table[2].style.transition = "0.4s";
  }
  if (scrollPosition < 550){
    table[3].style.transform = `translate(${num}%, 0)`
    table[3].style.opacity = "0"
    table[3].style.transition = "0.4s";
  } else {
    table[3].style.transform = "translate(0, 0)"
    table[3].style.opacity = "1"
    table[3].style.transition = "0.4s";
  }
  if (scrollPosition < 700){
    table[4].style.transform =`translate(${num}%, 0)`
    table[4].style.opacity = "0"
    table[4].style.transition = "0.4s";
  } else {
    table[4].style.transform = "translate(0, 0)"
    table[4].style.opacity = "1"
    table[4].style.transition = "0.4s";
  }
  if (scrollPosition < 950){
    table[5].style.transform = `translate(${num}%, 0)`
    table[5].style.opacity = "0"
    table[5].style.transition = "0.4s";
  } else {
    table[5].style.transform = "translate(0, 0)"
    table[5].style.opacity = "1"
    table[5].style.transition = "0.4s";
  }
  }
   


skillScroll(table)
} )
