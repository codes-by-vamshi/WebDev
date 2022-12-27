import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

test('testing greet rendering', () => {
    render(<Greet/>);
    const hellotext = screen.getByText('Hello');
    expect(hellotext).toBeInTheDocument();
})