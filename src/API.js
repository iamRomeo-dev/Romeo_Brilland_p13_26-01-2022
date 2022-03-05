import { useState } from "react";

export const signUpUser = async (user) => {
  const urlUser = `${process.env.REACT_APP_API_URL}/api/v1/user/signup`;
  try {
    const res = await fetch(urlUser, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (res.status === 200) {
      const json = await res.json();
      return json;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
  return;
};

export const loginUser = async (user) => {
  const urlUser = `${process.env.REACT_APP_API_URL}/api/v1/user/login`;
  try {
    const res = await fetch(urlUser, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (res.status === 200) {
      const json = await res.json();
      localStorage.setItem("access_token", json.body.token);
      profileUser(json.body.token);
      return json;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export const profileUser = async (access_token) => {
  const urlUser = `${process.env.REACT_APP_API_URL}/api/v1/user/profile`;
  try {
    const res = await fetch(urlUser, {
      method: "POST",
      headers: {
        Authorization: "Bearer" + access_token,
        Accept: "application/json",
      },
    });
    if (res.status === 200) {
      const json = await res.json();
      localStorage.setItem("firstName", json.body.firstName);
      localStorage.setItem("lastName", json.body.lastName);
      return json;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export const profileUserEdit = async (access_token, user) => {
  const url = `${process.env.REACT_APP_API_URL}/api/v1/user/profile`;
  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: "Bearer" + access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (res.status === 200) {
      const json = await res.json();
      return json;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
