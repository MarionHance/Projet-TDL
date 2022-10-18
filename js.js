console.log("Machin de Mah ry hon")

 let field = document.getElementById("app-field");
 let btn = document.getElementById("app-btn");
 let listItems = document.getElementById("app-listItems")
// On gère l'event clic
btn.addEventListener("click", ()=> {
    //on récupère le text de l'input
    //on récupère la valeur de l'input
    let text = field.value;
    console.log(text);



//apres il faut penser à utiliser .createElement()


    if (text === "") {
        }
    else {
        let newLi = document.createElement("li");
        console.log(newLi);
        newLi.textContent = text;
        console.log(newLi);
    //on ajoute le nouvel Li à la list
        listItems.appendChild(newLi);
    // On veut supprimer le ttext de l'input
        field.value = "";
        }
    //on crée un Li avec le bon contenu
    })

let cat_field = document.getElementById("cat-field");
let cat_btn = document.getElementById("car-btn");
let cat_listItems = document.getElementById("cat-listItems")
   // On gère l'event clic
btn.addEventListener("click", ()=> {
       //on récupère le text de l'input
       //on récupère la valeur de l'input
    let text1 = field.value;
    console.log(text1);
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





