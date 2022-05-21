import React from "react";
import { MainContainer } from "./PopoUpStyle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const PopUp = () => {
  return (
    <MainContainer>
      <div className="content">
        <div className="first">
          <AccessTimeIcon />
        </div>
        <div className="second">
          <p className="line1">Pedido em andamento</p>
          <p className="line2">Bullguer Vila Madale</p>
          <p className="line3">SUBTOTAL R$67,00</p>
        </div>
      </div>
      <div className="space">""</div>
    </MainContainer>
  );
};
