import { env } from "@/env";
import { type Config } from "drizzle-kit";

export default {
  schema: "./src/server/db/schema/index.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["topu_v1_*"],
} satisfies Config;
