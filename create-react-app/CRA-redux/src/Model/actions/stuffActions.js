import * as types from "./actionTypes";

function url() {
  return "https://jsonplaceholder.typicode.com/posts";
}

export function receiveStuff(json) {
  // console.log(json);
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
        // console.log(response.json());
        return response.json();
      })
      .then(json => {
        console.log(receiveStuff(json));
        return dispatch(receiveStuff(json));
      });
  };
}
