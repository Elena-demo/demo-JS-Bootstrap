export async function postUpdateStatusStatement(data) {
  console.log(data);
  return await fetch("http://localhost:3000/statements/status", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  // .then(res => res.json());
}
