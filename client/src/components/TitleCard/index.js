import React from "react";
import { Row } from "../Grid"

function TitleCard(props) {
    return (
        <div id={props.id}>
            {props.title}
        </div>
    )
}

export default TitleCard;