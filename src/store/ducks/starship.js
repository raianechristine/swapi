import { createActions, createReducer } from "reduxsauce";

export const {
  Types: StarshipsTypes,
  Creators: StarshipsActions,
} = createActions({
  fetchStarships: [],
  fetchStarshipsSuccess: ["response"],
  fetchStarshipsFail: ["error"],
});

export const INITIAL_STATE = {
  isLoading: false,
  isSuccess: false,
  starships: {},
};

const fetchStarships = (state) => ({
  ...state,
  isLoading: true,
});

const fetchStarshipsSuccess = (state, { response }) => ({
  ...state,
  isLoading: false,
  isSuccess: true,
  starships: response,
});

const fetchStarshipsFail = (state, { error }) => ({
  ...state,
  isLoading: false,
  isSuccess: false,
  error: error,
});

export default createReducer(INITIAL_STATE, {
  [StarshipsTypes.FETCH_STARSHIPS]: fetchStarships,
  [StarshipsTypes.FETCH_STARSHIPS_SUCCESS]: fetchStarshipsSuccess,
  [StarshipsTypes.FETCH_STARSHIPS_FAIL]: fetchStarshipsFail,
});
