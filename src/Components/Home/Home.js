import React from 'react';
import styled from "styled-components"
import Section from '../Section/Section';


const Home = () => {
    return (
        <Container>
            <Section
                title="Model S"
                description=" Order Online for Touchless Delivery"
                bgImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model Y"
                description=" Order Online for Touchless Delivery"
                bgImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model 3"
                description=" Order Online for Touchless Delivery"
                bgImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model X"
                description=" Order Online for Touchless Delivery"
                bgImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Lowest Cost Solar Model in BD"
                description="Money-back Guarantee"
                bgImg="solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section
                title="Solar For New Roofs"
                description="Solar Roof Cost Less than a new Roof"
                bgImg="solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Section
                title="Accessories"
                description=""
                bgImg="accessories.jpg"
                leftBtnText="Order Now"
               
            />
            
        </Container>
    );
};

export default Home;

const Container =styled.div`
    height: 100vh;
    z-index: 10;

`