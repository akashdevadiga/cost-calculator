import { useState } from "react";

const Cart = ({ state, dispatch }) => {
    const { products, cart } = state;
    const [total, setTotal] = useState(100);

    return (
        <div className="width-20">
            <h2>Cart</h2>
            <b>SubTotal: ${total}</b>
            <div className="wrapper">
                {cart.map((prod) => (
                    <div className="card cart" id={prod.id}>
                        <img src={prod.thumbnail} />
                        <div className="card-bottom">
                            <div className="card-left">
                                <div>{prod.title}</div>
                                <div>{prod.price}</div>
                            </div>
                            <div className="card-right">
                                <button 
                                onClick={() => dispatch({ type: "REMOVE_CART", payload: prod.id })}>remove</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;