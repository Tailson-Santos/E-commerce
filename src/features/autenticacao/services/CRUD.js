const BASE_URL = "http://localhost:3001/usuarios";

export async function postUsers({ login, senha }) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login,
      senha,
    }),
  });

  return response.json();
}

export async function getUsers() {
  const response = await fetch(BASE_URL, {
    method: "GET",
  });

  return response.json();
}
