import { useState } from "react";

function PlantCard({plant}) {
    const {name, image, price} = plant;
    const [isInStock, setInStock] = useState(true);
    
    const handleClick = () => setInStock(prevValue => !prevValue);

    const btnText = (isInStock) ? "In Stock" : "Out of Stock";

    return (
        <li className="card">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <button className="primary" onClick={handleClick}>{btnText}</button>
        </li>
    );
}

export default PlantCard;
