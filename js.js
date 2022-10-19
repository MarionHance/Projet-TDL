

 let field = document.getElementById("app-field");
 let btn = document.getElementById("app-btn");
 let listItems = document.getElementById("app-listItems");
 let today_container = document.getElementsByClassName("today");

// On gère l'event clic
btn.addEventListener("click", ()=> {
    var option_value =
document.querySelector('#text'); 
console.log(option_value);
var value_option =
option_value.options[option_value.selectedIndex].value;
console.log(value_option);

console.log(today_container);
    //on récupère le text de l'input
    //on récupère la valeur de l'input
    let text = field.value;
    // console.log(text);



//apres il faut penser à utiliser .createElement()

    
    if (value_option === "today") {
            let newLi = document.createElement("li");
            // console.log(newLi)
            newLi.textContent = text;
            console.log(newLi);
            today_container.innerHTML = newLi;
        //on ajoute le nouvel Li à la list
            // console.log(today_container);
        // On veut supprimer le text de l'input
            field.value = "";
            }
        }
   
    
    //on crée un Li avec le bon contenu
    )








let cat_field = document.getElementById("cat-field");
let cat_btn = document.getElementById("car-btn");
let cat_listItems = document.getElementById("cat-listItems")
   // On gère l'event clic
btn.addEventListener("click", ()=> {
       //on récupère le text de l'input
       //on récupère la valeur de l'input
    let text1 = field.value;
    // console.log(text1);
})



// render() { 
//     return (
//       <div className="container">
//         <div className="container">
//           <Card body="Card 3" />
//           <Card body="Card 4" />
//         </div>
//       </div>
//     );
// }

// class Card extends React.Component {
//   constructor (props) {
//     super(props);
//   }
  
//   render () {
//     return (
//       <div className="card">
//         <div className="card-header">
//           <h3>Example Card</h3>
//         </div>
//         <div className="card-body">
//           <p>{this.props.body}</p>
//         </div>
//       </div>
//     );
//   }
// }

// React.render(<App />, document.getElementById('container'));






















