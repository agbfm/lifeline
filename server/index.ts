const server = Bun.serve({
  port: 3000,
  fetch(_) {
    return new Response("Lifeline API v0.1");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
