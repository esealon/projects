import "./App.css";
import DiceButton from "./projects/Dice/diceButton";
import ToDoListButton from "./projects/ToDoList/toDoListButton";
import Header from "./header";
import Footer from "./footer";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Header />
      <Container sx={{ minHeight: "85.2vh" }}>
        <br />
        <DiceButton />
        <br />
        <ToDoListButton />
      </Container>
      <Footer />
    </>
  );
}
export default App;
