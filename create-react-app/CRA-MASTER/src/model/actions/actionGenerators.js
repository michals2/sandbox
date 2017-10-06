import * as types from "./actionTypes";

function url() {
  return "https://jsonplaceholder.typicode.com/posts";
}

export function receiveStuff(json) {
  return { type: types.RECEIVE_STUFF, data: json };
}

export function fetchStuff() {
  return dispatch => {
    return fetch(url(), {
      method: "GET",
      mode: "cors",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        return dispatch(receiveStuff(json));
      });
  };
}
