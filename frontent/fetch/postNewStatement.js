export async function postNewStatement(data) {
  console.log(data);
  return await fetch("http://localhost:3000/newStatement", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  }).then(response => response.json());
}
