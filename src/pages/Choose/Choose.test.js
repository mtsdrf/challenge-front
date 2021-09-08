import { render, screen } from "@testing-library/react";

import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom'

import Welcome from "./index";

describe('Choose component', () => {
    test("Ao entrar na tela existe um botao voltar", () => {
        render(
            <Router>
                <Welcome/>
            </Router>
        );

        const buttonBack = screen.getByText("back");

        expect(buttonBack).toBeInTheDocument();
    });
});