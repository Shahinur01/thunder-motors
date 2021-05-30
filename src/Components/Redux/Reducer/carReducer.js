
import cars from '../../../carInfo.json';
import { ALL_CARS, SELECTED } from '../Action/carAction';

const initialState ={
    allCars: cars,
    selected: []
}

const carReducer = (state=initialState, action)=>{
    switch(action.type){
        case ALL_CARS:{
            const newState = {
                ...state, allCars: action.payload
            }
            return newState;
        }
        case SELECTED: {
            const newState = {
                ...state, selected: state.selected.filter(b => b.id === action.payload.id)
            }
            return newState;
        }
        default:{
            return state;
        }
    }
}

export default carReducer;