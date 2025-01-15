import apiClient from "./baseapi";
import { ENDPOINT } from "./endpoints";

export const singleCard = async () => {
    try {
        const res = await apiClient.get(ENDPOINT.singleCard)
        return res.data;
    } catch (error) {
        throw new Error('Failed to fetch card');
    }
}