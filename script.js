const openButton = document.getElementsByClassName("burger-icon")
const closeButton = document.getElementByClassName("close-button")
const navBar = document.getElementsByClassName("mobile-nav")

 
function showMenu(){
   navBar.classList.add("show");

   if(burgerButton.classList.contains("burger-icon")){
    burgerButton.classList.replace("burger-icon", "close-button");
   }

   else( burgerButton.classList.replace("close-button", "burger-icon"));
}

  
function closeMenu(){
    navBar.classList;
    list.remove("show"); 
}
