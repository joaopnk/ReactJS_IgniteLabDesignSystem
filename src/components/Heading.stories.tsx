import {Meta, StoryObj} from '@storybook/react'
import { Heading, HeadingProps } from "./Heading";

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Lorem Ipsum',
        size: 'md',
    },
    // Configurando o painel Controll para visualizar opção de trocar font tb
    argTypes:{
        size:{
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeadingProps>

//  # Exportando variante
export const Default: StoryObj<HeadingProps> = {};

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    },
};

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    },
};

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>
                Testando h1 Heading
            </h1>
        )
    },
    argTypes:{
        children:{
            table:{
                disabled: true
            }
        },
        asChild: {
            table:{
                disabled: true,
            }
        }
    }
};

