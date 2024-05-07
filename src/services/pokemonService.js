import axios from 'axios';
import {BASE_URL_POKEAPI} from "../utils/constants";

export const getFirstGeneration = async () => {
    try {
        const response = await axios.get(`${BASE_URL_POKEAPI}pokemon/?offset=0&limit=151`);
        return response.data;
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
};

export const getDetailPokemon = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
};