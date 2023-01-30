import React, { useState } from "react";
import { ButtonToolbar, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useCart } from "../../context/CardContext";
import burgersData from "../../data/burgersData";
import "./menuCardModal.css";

function MenuCard(props) {
  const imgPath = `${props.directory}/${props.img}`;
  const [isShown, setIsShown] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const title = props.title;
  const price = props.price;
  const { addToCart } = useCart();
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  const [ingredients, setIngedients] = useState(props.ingredients);
  const [showIngredients, setShowIngredients] = useState(false);
  const handleIngredientChange = (operation, ingredient) => {
    setIngedients((prevState) => {
      return {
        ...prevState,
        [ingredient]:
        prevState[ingredient] + (operation === "increment" ? 1 : -1),
      };
    });
  };

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
    if (props.ingredients) {
      console.log("Posiada możliwość edycji");
    }
  }

  return (
      <>
        <Button variant="outline-dark" onClick={handleShow} className="menu-card">
          <img src={imgPath} alt="" className="menu-card-image" />
          <div className="menu-card-text">
            <div className="menu-card-title">{props.title}</div>
            <div className="menu-card-price">${props.price}</div>
          </div>
        </Button>

        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="main-container">
              <div className="modal-image">
                <img src={imgPath} alt="" className="modal-image" />
              </div>
              <div className="button-section">
                <h1>{title}</h1>
                <h1>${price}</h1>

                <Button variant="outline-success" className="mt-3" size="lg" onClick={() => { addToCart({ title, price }); setShow(false); }}>
                  Add to cart
                </Button>
                <br/>
                {props.ingredients && (
                    <Button variant="outline-success" className="mt-3" size="lg" onClick={() => setShowIngredients(!showIngredients)}>
                      Edit your {title}
                    </Button>
                )}
                {showIngredients && (
                    <><p>Meat: {ingredients.meat} <button onClick={() => handleIngredientChange('increment', 'meat')}>+</button> <button onClick={() => handleIngredientChange('decrement', 'meat')}>-</button></p>
                      <p>Tomato: {ingredients.tomato} <button onClick={() => handleIngredientChange('increment', 'tomato')}>+</button> <button onClick={() => handleIngredientChange('decrement', 'tomato')}>-</button></p>
                      <p>Cheese: {ingredients.cheese} <button onClick={() => handleIngredientChange('increment', 'cheese')}>+</button> <button onClick={() => handleIngredientChange('decrement', 'cheese')}>-</button></p>
                      <p>Lettuce: {ingredients.salad} <button onClick={() => handleIngredientChange('increment', 'salad')}>+</button> <button onClick={() => handleIngredientChange('decrement', 'salad')}>-</button></p>
                    </>

                )}
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
  );
}

export default MenuCard;