import './App.css';
import {Header} from "./Components/Header.js";
import { Todos } from './Components/Todos';
import { Footer } from "./Components/Footer";
function App() {
  let todos = [
    {
      sno:1,
      title:"Go To the market",
      desc: "Please go to the market to solve this issue1"
    },
    {
      sno:2,
      title:"Go To the supersayiaan",
      desc: "Please go to the market to solve this issue2"
    },
    {
      sno:3,
      title:"Go To the gath",
      desc: "Please go to the market to solve this issue3"
    }
  ]
  return (
    <>
      <Header title = "To do List" searchBar= {true}/>
      <Todos todos = {todos}/>
      <Footer/>
    </>
  );
}

export default App;
