export const ALL_CARS = 'ALL_CARS';

export const loadCars = (payload)=>{
    return {type: ALL_CARS, payload: payload};
}