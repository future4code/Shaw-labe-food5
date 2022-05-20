import * as React from "react";
import styled from "@emotion/styled";
import axios from "axios";
import { useState } from "react";
import { useEffect, useContext } from "react";
import {GlobalContext} from '../../global/GlobalContext'

const Container = styled.div`
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
`
const CardMeal = styled.div`
  display: flex;
  flex-direction: column;
  width: 328px;
  height: 188px;
  padding: 0 0 16px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin-bottom: 7px;

  img {
    width: 328px;
    height: 120px;
    border-radius: 8px 8px 0 0;
    object-fit: cover;
  }
  .Restaurante {
    width: 296px;
    height: 18px;
    margin: 12px 16px 4px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #5cb646;
  }
  .Tempo-de-entrega {
    width: 148px;
    height: 18px;
    margin: 4px 8px 0 16px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
  }
  .Taxa-de-entrega {
    width: 140px;
    height: 18px;
    margin: 4px 16px 0 8px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: right;
    color: #b8b8b8;
  }
`;
const Delivery = styled.div`
  display: flex;
`
const CardImage = () => {
  //useProtectedPage()
  const [rest, setRest] = useState([]);
  const {states, setters} = useContext(GlobalContext); 
  const {filter} = states; 
  const {setFilter} = setters; 

  const getRest = () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik5xaGJpbWR4NGZmQ3BTaElJWElKIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTc4IiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6InJ1YSBhc3Ryb2RldiwgMTAsIDEgLSBMdWx1IiwiaWF0IjoxNjUyNzk4MTI4fQ.hScs9KQ_9H-rGqYCJEGFGnScdIZoEMp0UxwD4oAy6WY";
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/restaurants",
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        setRest(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getRest();
  }, []);
  console.log(rest)
  const filteredList = filter ? rest.filter(({
    name
  }) => name.toUpperCase().includes(filter.toUpperCase())) : rest;
  console.log(filteredList)

  const listRest = filteredList.map((res) => {
    return (
      <>
        <Container>
        <CardMeal>
          <div>
            <img src={res.logoUrl} alt="food" />
          </div>
          <div>
            <h4 className="Restaurante">{res.name}</h4>
          </div>
          <Delivery>
            <p className=" Tempo-de-entrega">{res.deliveryTime} Min</p>
            <p className="Taxa-de-entrega">Frete R${res.shipping},00</p>
          </Delivery>
        </CardMeal>
      </Container>
      </>
    );
  });

  return <>{listRest}</>;
};
export default CardImage;
