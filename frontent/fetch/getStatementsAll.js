export async function getStatementsAll() {
  return await fetch("http://localhost:3000/statementsAll").then(res =>
    res.json()
  );
}
