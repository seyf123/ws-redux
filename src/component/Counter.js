import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import {increment,decrement,reset,toggle,init} from '../JS/Actions/Actions'
const Counter = () => {
  const counter = useSelector((state) => state.counterReducer.counter);
  const show = useSelector((state) => state.counterReducer.show);
  const dispatch = useDispatch();
  const handleToggle=()=>{
   if (!show)
    {let initialValue=prompt("Please enter your initial value", "0");
    dispatch(init(Number(initialValue)))
   }
   dispatch(toggle())
  }
  return (
    <div>
      <Button onClick={handleToggle}  inverted color="brown">
        {show ? "hide" : "Show"}
      </Button>
      <br />
      {show? <div><div style={{ display: "flex", marginTop: 30 }}>
        <Button onClick={()=>dispatch(increment())} inverted color="green" style={{ marginRight: 15 }}>
          +
        </Button>
        <h4>counter:{counter}</h4>
        <Button onClick={()=>dispatch(decrement())} inverted color="red" style={{ marginLeft: 15 }}>
          -
        </Button>
      </div>
      <br />
      <Button onClick={()=>dispatch(reset())}  inverted color="olive">
        Reset
      </Button>
      </div>
   :null}
      </div>
  );
};

export default Counter;
