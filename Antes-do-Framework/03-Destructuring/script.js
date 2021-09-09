function handleMouseMove(event) {
    const clientX = event.clientX;
    const clientY = event.clientY;
    console.log(clientX, clientY);
  }
  
  // Define uma constante para cada propriedade
  // dentro de event, que tenha o mesmo nome que a constante.
  function handleMouseMove(event) {
    const { clientX, clientY } = event;
    console.log(clientX, clientY);
  }
  
  // Podemos desestruturar o parâmetro
  function handleMouseMove( { clientX, clientY } ) {
    console.log(clientX, clientY);
  }

// Desestruturação em array
const fruits = ["Banana", "Uva"];
const [fruits1, fruits2] = fruits;

document.documentElement.addEventListener("mousemove", handleMouseMove);


//React hooks
const useState = [
  "blue",
  function(color) {
    useState[0] = color;
  }
];

const [color, setColor] = useState;

setColor("Red");