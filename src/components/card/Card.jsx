import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const CardMeal = styled(Card)`
 margin-top: 20px;
  margin-left: 4vw;
  font-family: cursive;
  font-size: 15px;
  padding: 20px;
  height: 300px;
  overflow: hidden;
  overflow-y: scroll; 
  width: 98vw;
  height: 188px;
  padding: 0 0 16px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
`;
const TimeDelivery = styled(Button)`
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
`;
const CardContentt=styled(CardContent)`
  width: 98vw;
  height: 18px;
  margin: 12px 16px 4px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--mid-green);
`
const CardImage = () => {
  //useProtectedPage()
  const [rest, setRest] = useState([]);

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
  const listRest = rest.map((res) => {
    return (
      <>
        <CardMeal sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={res.logoUrl}
            alt="green iguana"
          />
          <CardContentt>
            <Typography gutterBottom variant="h5" component="div">
              {res.name}
            </Typography>
          </CardContentt>
          <CardActions>
            <TimeDelivery size="small">{res.deliveryTime} Min</TimeDelivery>
            <Button size="small"> Frete R${res.shipping},00</Button>
          </CardActions>
        </CardMeal>
      </>
    );
  });

  return <>{listRest}</>;
};
export default CardImage;
