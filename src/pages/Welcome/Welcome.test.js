import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

import { BrowserRouter as Router } from 'react-router-dom';

import Welcome from "./index";

describe('Welcome component', () => {
    test("Ao entrar na tela existe um botao start", () => {
        render(
            <Router>
                <Welcome/>
            </Router>
        );

        const buttonStart = screen.getByRole("button");

        expect(buttonStart).toBeInTheDocument();
    });
});