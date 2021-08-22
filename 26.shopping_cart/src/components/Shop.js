import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from './modal';

const Shop = () => {

    const div_styled = {
        position: "relative",
    }
    const img_styled = {
        width: '100%',
        objectFit: 'cover'

    }

    const [item, setItem] = useState({});
    const [items, setItems] = useState([]);
    const [modal, setModal] = useState(false);

    const [cart, setCart] = useState([]);
    const onModal = (data) => {
        
        
        setItem(data);
        modalStatus();
        
    }

    const modalStatus = () => {
        setModal(!modal);
    }

    const saveCart = (item) => {
        
        // const result = cart.find((cart_item) =>  cart_item.title === item.title)


        setCart([...cart, item]);
        

        // console.log(cart);
    }


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setItems(json));

            
    }, []);
    console.log(cart);
    
    return (
        <div className="container" style={div_styled}>
            <h1>Shop</h1>
            <div className="items">

                {items.map((item) => {
                    return (
                        <div className="item" key={item.id} onClick={() => onModal(item)}>
                            <div className="item_image">
                                <img style={img_styled} src='{item.image}' alt="##" />
                            </div>
                            <div className="item_name">
                                <p>{item.title}</p>
                            </div>
                            
                        </div>
                        
                    )
                })}
            </div>
            {modal ? <Modal item={item} cart={cart} modalBtn={modalStatus} saveCart={saveCart} />: ''}
        </div>
    )
}

export default Shop;