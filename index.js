

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



const scrollDiv = document.querySelector(".home-main-div")
const scrollC = document.querySelector(".home-main-center")
const scrollLeft = document.querySelector(".home-main-left")
const main = document.querySelector(".home-main")
const headerScroll = (event) =>{
    const scrollPosition = event.target.scrollingElement.scrollTop;
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

document.addEventListener("scroll", (headerScroll))

const skills_1 = document.querySelector(".skills-task-front") 
const skills_2 = document.querySelector("#skills-task-front") 
const tascsScroll = (event) =>{
      const position = event.target.scrollingElement.scrollTop
      if (innerWidth > 926 ) {
        if (position > 1165){

          skills_1.style.opacity = 1
          skills_1.style.transition = "0.5s"
          skills_1.style.scale = 1
        } else {
          skills_1.style.opacity = 0
          skills_1.style.scale = 0
        }
        if (position > 1165){
          skills_2.style.opacity = 1
          skills_2.style.transition = "0.5s"
          skills_2.style.scale = 1
        } else {
          skills_2.style.opacity = 0
          skills_2.style.scale = 0
        }
       
      }else {
        if (position > 1645){
  
          skills_1.style.opacity = 1
          skills_1.style.transition = "0.5s"
          skills_1.style.scale = 1
        } else {
          skills_1.style.opacity = 0
          skills_1.style.scale = 0
        }
        if (position > 1963){
          skills_2.style.opacity = 1
          skills_2.style.transition = "0.5s"
          skills_2.style.scale = 1
        } else {
          skills_2.style.opacity = 0
          skills_2.style.scale = 0
        }
      }
}
document.addEventListener("scroll", tascsScroll)

