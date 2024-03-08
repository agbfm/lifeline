import { PrismaClient } from "@prisma/client";
import Bao from "baojs";

const app = new Bao();
const prisma = new PrismaClient();

app.get("/", (ctx) => ctx.sendJson({ version: 0.1 }));

app.get("/posts", async (ctx) => {
  const posts = await prisma.post.findMany();
  return ctx.sendJson(posts);
});

const server = app.listen();

console.log(`Listening on http://localhost:${server.port} ...`);
