export const ALL_CARS = 'ALL_CARS';
export const SELECTED = 'SELECTED';

export const loadCars = (payload)=>{
    return {type: ALL_CARS, payload: payload};
}
export const selected = (payload)=>{
    return {type: SELECTED, payload: payload};
}

