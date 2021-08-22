import { useEffect  } from "react";

const Cart = () => {

    useEffect(() => {

        const item = localStorage.getItem("cart");
        console.log(item);
        
    }, [])
    
    return (
        <div>
            <h1>Cart</h1>
        </div>
    )
}

export default Cart;