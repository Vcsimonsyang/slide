{
  let button = document.querySelector(".button_container");
  let container = document.querySelector(".window");
  button.addEventListener("click", active, true);
  function active(el){
    Array.prototype.forEach.call(button.children,deactive);
    Array.prototype.forEach.call(container.children, deactive);
    let index = Array.prototype.indexOf.call(button.children,el.target);
    console.log(index);
    let targetImg = document.querySelector("img:nth-child(" + (index + 1) + ")");
    console.log(targetImg);
    targetImg.classList.add("active");
    el.target.classList.add("active");  
    function deactive(el){
      el.classList.remove("active");
    }          
  }
}

