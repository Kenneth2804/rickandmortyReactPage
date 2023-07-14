import React from "react";

export default function Card({image, name, species, origen }){

    return (
        <div>
            <h1>{image}</h1>
            <h2>{name}</h2>
            <h2>{species}</h2>
            <h2>{origen}</h2>
        </div>
    )

}