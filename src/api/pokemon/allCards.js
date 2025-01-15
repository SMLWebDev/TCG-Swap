import apiClient from "./baseapi";
import { ENDPOINT } from "./endpoints";

export const getAllCards = async () => {
    try {
        const res = await apiClient.get(ENDPOINT.getAllCards);
        return res.data;
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
};