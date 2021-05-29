import React from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components"
import Section from '../Section/Section';


const Home = () => {
    const allCars = useSelector((state)=>{
        return state.cars.allCars;
    })
    console.log(allCars)
    return (
        <Container>
           
            {
                allCars?.map((car)=> <Section key={car.id} car={car} bgImg={car.image} />)
            }
            
        </Container>
    );
};

export default Home;

const Container =styled.div`
    height: 100vh;
    z-index: 10;

`