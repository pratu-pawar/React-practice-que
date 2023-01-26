import Quefirst from "./Components/Quefirst";
import Quetwo from "./Components/Quetwo";
import Navbar from "./Quefive/Navabr";
import { Routes, Route } from "react-router-dom";
import Home from "./Quefive/Home";
import About from "./Quefive/About";
import Queten from "./Components/Queten";
import QueElavan from "./Components/QueElavan";
import Quethree from "./Components/Quethree";
import { useState } from "react";
import Quesix from "./Components/Quesix";
import Quenine from "./Quenine/Quenine";
import Queeight from "./Queeight/Queeight";
import Quenseven from "./Quenseven/Quenseven";
import Form from "./Quefour/Form";
import Quefour from "./Quefour/Quefour";
import Todolist from "./Quefour/Todolist";

function App() {
  const getData = (data) => {
    console.log("comming from appjs", data);
    setStateFromQueThree(data);
  };

  const [stateFromQueThree, setStateFromQueThree] = useState("");

  const [input, Setinput] = useState("");
  const [todos, Settodos] = useState([]);
  const [edittodo, Setedittodo] = useState(null);

  return (
    <div className="main">
      <div className="content">
        <div className="header">Question 1</div>
        <Quefirst />
      </div>

      <div className="content">
      <div className="header">Question 2</div>
        <Quetwo />
      </div>

      <div className="content">
      <div className="header">Question 3</div>
        <Quethree onSubmit={getData} />
        {stateFromQueThree}
      </div>

      <div className="content">
        <div className="container">
          <div className="app-wrapper">
          <div className="header">Question 4</div>
            <div>
              <Quefour />
            </div>
            <div>
              <Form
                input={input}
                Setinput={Setinput}
                todos={todos}
                Settodos={Settodos}
                edittodo={edittodo}
                Setedittodo={Setedittodo}
              />
            </div>
            <div>
              <Todolist
                todos={todos}
                Settodos={Settodos}
                Setedittodo={Setedittodo}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="content">
      <div className="header">Question 5</div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={Home}></Route>
          <Route exact path="/about" element={About}></Route>
        </Routes>
      </div>

      <div className="content">
      <div className="header">Question 6</div>
        <Quesix />
      </div>

      <div className="content">
      <div className="header">Question 7</div>
        <Quenseven />
      </div>

      <div className="content">
      <div className="header">Question 8</div>
        <Queeight />
      </div>

      <div className="content">
      <div className="header">Question 9</div>
        <Quenine />
      </div>

      <div className="content">
      <div className="header">Question 10</div>
        <Queten />
      </div>

      <div className="content">
      <div className="header">Question 11</div>
        <QueElavan />
      </div>
    </div>
  );
}

export default App;
