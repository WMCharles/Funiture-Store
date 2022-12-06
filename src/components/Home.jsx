import React from "react";
import { Button } from "./Button";

export default function Home() {
  return (
    <div className="hero-container">
      <h1>FUNiTURE STORE</h1>
      <p>What are you looking for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}
