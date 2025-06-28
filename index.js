const allBtn = document.getElementById("all-button");
const powerBtn = document.getElementById("powerbtn");
const all = document.getElementById("all");
const icon = document.getElementById("icon");
const backBtn = document.getElementById("back-button");

allBtn.addEventListener("click", (event)=>{
    
  icon.style.display = "none"
  all.style.display = 'flex'

    allBtn.style.display = 'none'
});

backBtn.addEventListener("click", ()=>{
  
    icon.style.display = "grid"
    all.style.display = 'none'
  
      allBtn.style.display = 'flex'
    
});

const powerList = document.getElementById("powerlist")
powerBtn.addEventListener("click", ()=>{
    if(powerList.style.display === 'none'){
        powerList.style.display = 'flex'
    }else{
        powerList.style.display = 'none'
    }
})

