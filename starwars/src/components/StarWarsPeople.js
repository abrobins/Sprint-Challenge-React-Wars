import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardGroup,
  CardDeck,
  CardColumns,
  Row,
  Col,
  Button
} from "reactstrap";

export default function StarWarsPeople() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        setPeople(response.data.results);
        // console.log(response);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <div className="PersonParentCard">
      {people.map(person => {
        // console.log(person);
        return <StarWarsCard person={person} key={person.created} />;
      })}
    </div>
  );
}
