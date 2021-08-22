import React, { useState, useEffect } from "react";

const Detail = ({ match }) => {

    useEffect(() => {
        fectch();
    }, []);

    const [item, setItem] = useState({});

    const fectch = async()  => {
        const data = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
        const item = await data.json();
        setItem(item);
    }
    return (
        <div>
            <h1 key={item.id}>{item.title}</h1>

        </div>
    )
};

export default Detail;