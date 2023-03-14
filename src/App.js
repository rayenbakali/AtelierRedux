import "./App.css";
import { useDispatch, useSelector } from "react-redux";
//import { multiply } from "./store";
import { actions } from "./store/toolkit";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const multip = () => {
    dispatch(actions.multiply(10));
  }
  return (
    <div className="App">
      <button onClick={increment}>inc</button>
      <h2>Counter ={counter}</h2>
      <button onClick={decrement}>dec</button>
      <button onClick={multip}>mult</button>


    </div>
  );
}

export default App;
