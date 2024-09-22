import "./App.css";
import DiceButton from "./projects/Dice/diceButton";
import ToDoListButton from "./projects/ToDoList/toDoListButton";
import Header from "./header";
import Footer from "./footer";

function App() {
  return (
    <>
      <Header />
      <br />
      <DiceButton />
      <br />
      <ToDoListButton />
      <Footer />
    </>
  );
}
export default App;
