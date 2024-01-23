import { headers } from "next/headers";
export default async function APIFromServer() {
  const res = await fetch("http://localhost:3000/api/whoAmI", {
    method: "GET",
    headers: headers()
  }).then((res) => res.json());
  return (
    <div>
      <div>Api Route From Server</div>
      <div>Name: {res?.name}</div>
    </div>
  );
}
