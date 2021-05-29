
import cars from '../../../carInfo.json';
import { ALL_CARS } from '../Action/carAction';

const initialState ={
    allCars: cars,
}

const carReducer = (state=initialState, action)=>{
    switch(action.type){
        case ALL_CARS:{
            const newState = {
                ...state, allCars: action.payload
            }
            return newState;
        }
        default:{
            return state;
        }
    }
}

export default carReducer;