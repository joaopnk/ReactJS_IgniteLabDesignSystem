import {Meta, StoryObj} from '@storybook/react'
import {within, userEvent, waitFor} from '@storybook/testing-library';
import {expect} from '@storybook/jest';
import { rest } from 'msw';
import { SignIn } from "./Signin";

export default {
    title: 'Components/SignIn',
    component: SignIn,
    args: {},
    argTypes: {},
    parameters: {
        msw: {
            handlers: [
                // quando houve um req. com metodo post
                rest.post('/sessions', (req, res, ctx) => {
                    return res(ctx.json({
                        message: 'Login realizado!'
                    }))
                })
            ]
        }
    }
} as Meta

export const Default: StoryObj = {
    // Função play
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement);

        // Encontrando o elemento HTML e preenchendo
        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'joaopedro.devbr@gmail.com')
        userEvent.type(canvas.getByPlaceholderText('******'), '123@react')


        userEvent.click(canvas.getByRole('button'));

        await waitFor(() =>{
            // APós a ação, eu espero que esse texto esteja em tela
            return expect(canvas.getByText('Login Realizado! 😃🚀')).toBeInTheDocument();
        });
    }
};
