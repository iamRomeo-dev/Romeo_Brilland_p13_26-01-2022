export const postUser = async (user) => {
  const urlUser = "http://localhost:3001/api/v1/user/signup";
  const res = await fetch(urlUser, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const json = await res.json();
  return json;
};
