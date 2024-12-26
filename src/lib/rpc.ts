import type { AppType } from "@/app/api/server/[[...route]]/route";
import { hc } from "hono/client";
import { absoluteUrl } from "./utils";

export const rpc = hc<AppType>(absoluteUrl("/"));
