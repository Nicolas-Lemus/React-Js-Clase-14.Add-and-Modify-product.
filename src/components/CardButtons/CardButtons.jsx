import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { CardContext } from "../../context/CartContext";
import "./CardButtons.css"

const CartButtons = () => {
  //DEBEMOS PASARLO COMO UN ARRAY
  const [count, setCount] = useContext(CardContext);
  const [state, setState] = useState(0);

  const handleClick = () => {
    setCount(count + 1)
    setState(state + 1);
  };
  
  const handleClickRes = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    if (state > 0) {
      setState(state - 1);
    }
  };

  return (
    <div className="d-flex align-items-center">
      <div className="w-25">
        <Button
          variant="outline-secondary"
          className="rounded-0"
          onClick={handleClickRes}
        > 
        -
        </Button>
        {/* <input
          type="text"
          className="form-control form-control-sm text-center rounded-0"
          placeholder="Cantidad custom"
          id="valueInput"
        /> */}
        <span className="spamPrecio">{state}</span>
        <Button
          variant="outline-secondary"
          className="rounded-0"
          onClick={handleClick}
        >
        +
        </Button>
      </div>
      <Button className="ml-2" variant="primary">
        Agregar al Carrito
      </Button>
    </div>
  );
};

export default CartButtons;
