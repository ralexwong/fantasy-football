import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Title from "../components/Title";
import DateRow from "../components/DateRow";
import Scoreboard from "../components/Scoreboard";
import ScoreboardRow from "../components/ScoreboardRow";
import PlayerCard from "../components/PlayerCard";
import { Card, UserCard } from "react-ui-cards";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts';
import PureComponent from "../components/GraphPPG";


class Main extends Component {
    state = {
      weekNum: 1,
      matchups: [1,2,3,4,5],
      leagueid: [],
      username: "",

    };
    
  
    componentDidMount() {
    }
  
    handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.title && this.state.author) {
        API.saveBook({
          title: this.state.title,
          author: this.state.author,
          synopsis: this.state.synopsis
        })
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      }
    };
  
    render() {
      return (
        <div>
          <Nav />
          <Title />
          <DateRow weekNum={this.state.weekNum}/>
          <Container>
            <Row>
              <Col className="col-6">
                <Scoreboard weekNum={this.state.weekNum}/>
                {this.state.matchups.map(matchup => (
                  <ScoreboardRow key={matchup}/>
                ))}
              </Col>
              <Col className="col-6">
                {/* top scoring player */}
                <Row>
                  <Col className="col-6">
                    <PlayerCard />
                  </Col>
                  <Col className="col-6">
                    <PlayerCard />
                  </Col>
                </Row>
                {/* 2/3 scoring player */}
                <Row>
                  <Col className="col-6">
                    <PlayerCard />
                  </Col>
                  <Col className="col-6">
                    <PlayerCard />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <PureComponent />
            </Row>
          </Container>
        </div>

      );
    }
    
  }
  
  export default Main;

  