// export async function getStatements(data) {
//     console.log(data);
//     return await fetch("http://localhost:3000/user/statements", {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//             "Content-Type": "application/json;charset=utf-8",
//         },
//     }).then(res => res.json());
// }

export async function getStatements(id) {
  return await fetch(`http://localhost:3000/user/${id}`).then(rez =>
    rez.json()
  );
}
