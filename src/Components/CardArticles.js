import React from "react";

//somarlint

function CardArticle (props) {

    return (
        <div>
            <h1>Pïzza {props.name}</h1>
            <h2> Price : {props.price ?props.price :25}€</h2>
        </div>
    )
}
export default CardArticle