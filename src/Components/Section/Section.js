import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selected } from "../Redux/Action/carAction";

const Section = (props) => {
  const allCars = useSelector((state) => {
    return state.cars.allCars;
  });
// to be copied
  const selectedCars = ((state)=>{
    return state.cars.selected;
  })
  console.log(selectedCars);

  const {title, description, range, image,id} = props.car;
  const dispatch = useDispatch()

  return (
    <Wrap image={image}>
      <ItemText>
              <h1>{title}</h1>
              <p>{description}</p>
              <p>Speed Range: {range} km/h</p>
        
      </ItemText>

      <Buttons>
        <ButtonGroup>
          <LeftButton onClick={()=> dispatch(selected(props.car))}>Custom Order</LeftButton>
          <RightButton>Existing Inventory</RightButton>
        </ButtonGroup>

        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props=>`url("${props.image}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;

const Buttons = styled.div``;
