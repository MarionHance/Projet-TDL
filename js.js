

  let field = document.getElementById("app-field");
  let btn = document.getElementById("app-btn");
  let listItems = document.getElementById("app-listItems");
  let today_container = document.querySelector(".card_1");
  let this_week_container = document.querySelector(".card_2");
  let this_month_container = document.querySelector(".card_3");
 
 // On gère l'event clic
 btn.addEventListener("click", ()=> {
     var option_value =
 document.querySelector('#text'); 
 console.log(option_value);
 var value_option =
 option_value.options[option_value.selectedIndex].value;
 console.log(value_option);

 
     //on récupère le text de l'input
     //on récupère la valeur de l'input
     let text = field.value;
     // console.log(text);
 

 
 //apres il faut penser à utiliser .createElement()
 
     
    if (value_option === "today") {
        let newLi = document.createElement("li");
     //input (text)
 
        newLi.textContent = text;
     //console.log(newLi);
     
     //Add new elements
     
             // console.log(newLi)
        newLi.textContent = text;
             // console.log(newLi);
 
             //on ajoute le nouvel Li à la list
        today_container.appendChild(newLi);
         // On veut supprimer le text de l'input
        field.value = "";
        }

    if (value_option === "this_week") {
        let newLi = document.createElement("li");
            //input (text)
        
        newLi.textContent = text;
            //console.log(newLi);
            
            //Add new elements
            
                    // console.log(newLi)
        newLi.textContent = text;
                    // console.log(newLi);
        
                    //on ajoute le nouvel Li à la list
        this_week_container.appendChild(newLi);
                // On veut supprimer le text de l'input
        field.value = "";
        }

    if (value_option === "this_month") {
        let newLi = document.createElement("li");
                    //input (text)
                
        newLi.textContent = text;
                    //console.log(newLi);
                    
                    //Add new elements
                    
                            // console.log(newLi)
        newLi.textContent = text;
                            // console.log(newLi);
                
                            //on ajoute le nouvel Li à la list
        this_month_container.appendChild(newLi);
                        // On veut supprimer le text de l'input
        field.value = "";
        }


        }
       
    )

 
 
 
 
 
 










