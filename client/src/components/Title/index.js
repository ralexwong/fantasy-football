import React from "react";
import "./style.css";
import { Row } from "../Grid";
import TitleCard from "../TitleCard";

function Title() {

    const p = "title"

    const d = "DIRTY TRIBUNE"


    return (
        <Row>
            <div id="titleDiv">
                <div>
                    <p id="title">DIRTY TRIBUNE</p>
                </div>

                <TitleCard id={p} title={d} />

                <div>
                    <p id="caption">Welcome to the shitshow</p>
                </div>
            </div>
        </Row>
    )
}

export default Title;