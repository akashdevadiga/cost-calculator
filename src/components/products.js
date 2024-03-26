const Products = ({ state, dispatch }) => {
    const { products, cart } = state;

    // console.log("state: ", state);

    return (
        <div className="wrapper width-80">
            {products.map((prod) => (
                <div className="card prod" id={prod.id}>
                    <img src={prod.thumbnail} />
                    <div className="card-bottom">
                        <div className="card-left">
                            <div>{prod.title}</div>
                            <div>{prod.price}</div>
                        </div>
                        <div className="card-right">
                            {cart.some(item => item.id === prod.id) ?
                                <button
                                onClick={() => dispatch({type: "REMOVE_CART", payload:prod.id})}
                                >remove</button>
                                :
                                <button
                                onClick={() => dispatch({type: "ADD_CART", payload: prod})}
                                >Add</button>
                            }
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products;