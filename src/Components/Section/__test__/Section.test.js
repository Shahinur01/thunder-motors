import {render, screen, cleanup} from '@testing-library/react'
import Section from '../Section';

afterEach(()=>{
    cleanup();
})

test("test",()=>{
    expect(true).toBe(true);
})


test("should render section component",()=>{
    const car1= {
        id: 0,
        title: "Model S",
        description: "Order Online for Touchless Delivery",
        image: "https://i.ibb.co/yhn1TZ9/model-s.jpg",
        range: "390",
        time: "1.99",
        topSpeed: "200",
        peakPower: "1,020"
    }
    render(<Section key={1} car={car1} bgImg={"https://i.ibb.co/Q6t0sr7/solar-roof.jpg"}/>);
    const sectionElement =screen.getByTestId("header");
    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement).toHaveTextContent('Model S');
})