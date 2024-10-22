import { Theme } from "../models/theme";

const light: Theme = {
    name: 'light',
    colors: {
        backgroundPrimary: '#a672cf',
        backgroundSecondary: '#d9c2eb'
    } 
}

const dark: Theme = {
    name: 'dark',
    colors: {
        backgroundPrimary: '#1f032e',
        backgroundSecondary: '#1f032e'
    } 
}

export const themes = {light, dark}