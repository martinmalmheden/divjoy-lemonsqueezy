import { useRef, useEffect } from "react";
import supabase from "./supabase";

// Make an API request to `/api/{path}`
export function apiRequest(path, method = "GET", data) {
  const session = supabase.auth.session();
  const accessToken = session ? session.access_token : undefined;

  /* STRIPE ORIGINAL */
/*  fetch(`/api/${path}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: data ? JSON.stringify(data) : undefined,
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.status === "error") {
        // Automatically signout user if accessToken is no longer valid
        if (response.code === "auth/invalid-user-token") {
          supabase.auth.signOut();
        }

        throw new CustomError(response.code, response.message);
      } else {
        return response.data;
      }
    });
*/
      /* LEMON SQUEEZY  */
  return fetch(`/api/${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/vnd.api+json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: data ? JSON.stringify(data) : undefined,
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.status === "error") {
        // Automatically signout user if accessToken is no longer valid
        if (response.code === "auth/invalid-user-token") {
          supabase.auth.signOut();
        }

        throw new CustomError(response.code, response.message);
      } else {
        return response.data;
      }
    });


}

// Make an API request to any external URL
export function apiRequestExternal(url, method = "GET", data) {
  return fetch(url, {
    method: method,
    headers: {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
    },
    body: data ? JSON.stringify(data) : undefined,
  }).then((response) => response.json());
}

// Create an Error with custom message and code
export function CustomError(code, message) {
  const error = new Error(message);
  error.code = code;
  return error;
}

// Hook that returns previous value of state
export function usePrevious(state) {
  const ref = useRef();
  useEffect(() => {
    ref.current = state;
  });
  return ref.current;
}
