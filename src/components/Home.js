import React, { Component } from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        imgUrl="/images/model-s.jpg"
        description="Order Online for Touchless Delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Model Y"
        imgUrl="/images/model-y.jpg"
        description="Order Online for Touchless Delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Model 3"
        imgUrl="/images/model-3.jpg"
        description="Order Online for Touchless Delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Model X"
        imgUrl="/images/model-x.jpg"
        description="Order Online for Touchless Delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Low Cost Solar Panels in America"
        imgUrl="/images/solar-panel.jpg"
        description="Money-back guarantee"
        leftBtn="Order now"
        rightBtn="Learn more"
      />
      <Section
        title="Solar for the New Roofs"
        imgUrl="/images/solar-roof.jpg"
        description="Solar Roof Costs Less Then a New Roof"
        leftBtn="Order now"
        rightBtn="Learn more"
      />
      <Section
        title="Accessories"
        imgUrl="/images/accessories.jpg"
        description=""
        leftBtn="Shop now"
        rightBtn=""
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
