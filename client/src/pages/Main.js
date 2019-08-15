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

class Main extends Component {
    state = {
      weekNum: 1,
      matchups: [1,2,3,4,5],
      leagueid: [],
      username: "",

    };
  
    componentDidMount() {
      this.loadBooks();
    }
  
    loadBooks = () => {
      API.getBooks()
        .then(res =>
          this.setState({ books: res.data, title: "", author: "", synopsis: "" })
        )
        .catch(err => console.log(err));
    };
  
    deleteBook = id => {
      API.deleteBook(id)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    };
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
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
              <Container>
                <Col className="col-6">
                  <Scoreboard weekNum={this.state.weekNum}/>
                  {this.state.matchups.map(matchup => (
                    <ScoreboardRow key={matchup}/>
                  ))}
                </Col>
              </Container>
            </Row>
          </Container>
        </div>

      );
    }
  }
  
  export default Main;

  