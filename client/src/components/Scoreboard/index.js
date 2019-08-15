import React from "react";
import "./style.css";
import { Col, Row, Container } from "../Grid";

function Scoreboard(props) {
    return (
        <Container>
            <Row>
                <p id="scoreboard">SCOREBOARD</p>
            </Row>
            <Row>
                <div id="scoreboardWeek">
                    <p>Week {props.weekNum}</p>
                </div>
            </Row>
        </Container>
    );
}

export default Scoreboard;