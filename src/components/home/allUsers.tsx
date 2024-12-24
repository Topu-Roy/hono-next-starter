import { db } from "@/server/db/index";
import { users as usersTable } from "@/server/db/schema/index";

export async function AllUsers() {
  const users = await db.select().from(usersTable);
  return <pre>{JSON.stringify(users, null, 2)}</pre>;
}
