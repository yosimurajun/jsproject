import { useState } from "react"
const modal_background_styled = {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    position: "absolute",
    top: "0",
    left: "0",
    display: "flex",
}

const modal_content_styled = {
    width: "400px",
    height: "500px",
    backgroundColor: "#fff",
    margin: "50px auto",
    padding: "40px"
    
}


const Modal = (props) => {

    const {item, modalBtn, saveCart} = props;

    const [count, setCount] = useState(1);
    const [orderItem, setOrderItem] = useState({});
    
    const handleAdd = (e) => {
        e.preventDefault();
        console.log(count);
        if(count === 0) {
            return ;
        }
        setOrderItem({...item, count});
        // console.log(orderItem);
        saveCart(orderItem);
        
    }

    return (
        <div style={modal_background_styled}>
            <div style={modal_content_styled}>
                <button onClick={modalBtn}>X</button>
                <h1>{item.title}</h1>
                <p>category: {item.category}</p>
                <p>description: {item.description}</p>
                <p>price:{item.price}</p>

                <form>
                    <label>
                        pick your favorite number:
                        <select onChange={(e) => setCount(e.target.value)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>
                <button onClick={handleAdd}>add</button>
                </form>
                
                
            </div>
            
        </div>
    )
}

export default Modal;