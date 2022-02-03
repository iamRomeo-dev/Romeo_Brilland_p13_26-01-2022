export const signUpUser = async (user) => {
  const urlUser = "http://localhost:3001/api/v1/user/signup";
  const res = await fetch(urlUser, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (res.status === 200) {
    localStorage.setItem("signUpUser_status", res.status);
    const json = await res.json();
    return json;
  } else {
    return null;
  }
};

export const loginUser = async (user) => {
  const urlUser = "http://localhost:3001/api/v1/user/login";
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
};
