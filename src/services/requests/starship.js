import { BASE_URL, FETCH_STARSHIPS } from "utils/constants/endpoints";
import { StarshipsActions } from "store/ducks/starship";

function fetchStarships() {
  return async (dispatch) => {
    let page = 1;
    let nextUrl = "";
    let starships = [];

    dispatch(StarshipsActions.fetchStarships());

    do {
      try {
        const response = await fetch(`${BASE_URL}/${FETCH_STARSHIPS(page)}`);
        const data = await response.json();

        nextUrl = data.next;
        starships.push(...data.results);
        page++;
      } catch (err) {
        return dispatch(StarshipsActions.fetchStarshipsFail(err));
      }
    } while (nextUrl);

    dispatch(StarshipsActions.fetchStarshipsSuccess(starships));
  };
}

export default fetchStarships;
