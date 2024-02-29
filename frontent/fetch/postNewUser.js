export async function postNewUser(data) {
  return await fetch("http://localhost:3000/regisration", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });
}
