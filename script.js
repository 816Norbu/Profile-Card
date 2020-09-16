/*Dark Mode starts here */
function toggle_light_mode() {
    var app = document.getElementsByTagName("BODY")[0];
  
    if (localStorage.lightMode == "dark") {
      localStorage.lightMode = "light";
      app.setAttribute("data-light-mode", "light");
    } else {
      localStorage.lightMode = "dark";
      app.setAttribute("data-light-mode", "dark");
    }
    console.log("lightMode = " + localStorage.lightMode);
  }
  /*Dark mode end here */
  

/*Typing text */

 const texts = ['Websites','Illustrations','Designs'];
 let count= 0;
 let index= 0;
 let currentText='';
 let letter= '';

  (function type(){
     if(count === texts.length){
       count = 0; 
     }
     currentText = texts[count];
     letter = currentText.slice(0, ++index);

     document.querySelector('.typing').textContent = letter;
      if(letter.length === currentText.length){
        count++;
        index = 0;
      }
       setTimeout(type, 400);
  }
  ());
