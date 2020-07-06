const base = "https://swapi.dev";
const service = "api";

export const BASE_URL = `${base}/${service}`;
export const FETCH_STARSHIPS = (page) => `starships/?page=${page}`;
