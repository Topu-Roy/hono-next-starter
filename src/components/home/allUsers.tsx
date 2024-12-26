import { db } from "@/server/db/index";
import { users as usersTable } from "@/server/db/schema/index";
import { rpc } from "@/lib/rpc";

export async function AllUsers() {
  const users = await db.select().from(usersTable);
  return <pre>{JSON.stringify(users, null, 2)}</pre>;
}

export async function CheckHono() {
  const res = await rpc.api.server.hello.$get();

  if (!res.ok) {
    return (
      <div>
        <p>Failed to fetch.</p>
      </div>
    );
  }

  const data = await res.json();
  return <div>Response: {data.message}</div>;
}
