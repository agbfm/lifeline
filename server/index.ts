import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const server = Bun.serve({
  port: process.env.PORT,
  fetch(_) {
    return new Response("Lifeline API v0.1");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
