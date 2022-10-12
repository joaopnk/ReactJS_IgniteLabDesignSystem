import {Meta, StoryObj} from '@storybook/react'
import { Text, TextProps } from "./Text";

export default {
    title: 'Components/Text',
    component: Text,
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
} as Meta<TextProps>

//  # Exportando variante
export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    },
};

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    },
};

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>
                Testando p
            </p>
        )
    },
    argTypes:{
        children:{
            table:{
                disabled: true
            }
        },
        asChild:{
            table:{
                disabled: true
            }
        },
    }
};

