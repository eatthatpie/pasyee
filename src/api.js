const apiHost = import.meta.env.VITE_API_HOST;

const apiGet = (url) =>
  fetch(`${apiHost}${url}`, { method: "get" }).then((response) =>
    response.json()
  );

const apiPost = (url, { length, seeds }) =>
  fetch(`${apiHost}${url}`, {
    body: JSON.stringify({ length, seeds }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
  }).then((response) => response.json());

export const apiGeneratePassword = (seeds, length) =>
  apiPost("/generatePassword", { length, seeds });
