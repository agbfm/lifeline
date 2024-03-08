import { PrismaClient, type Category } from "@prisma/client";
import { parseArgs } from "util";

const prisma = new PrismaClient();

async function main() {
  const args = parseArgs({
    args: Bun.argv,
    options: {
      environment: { type: "string" },
    },
    allowPositionals: true,
  });
  const { environment } = args.values;

  const slug = "general";
  const category = await prisma.category.upsert({
    where: { slug },
    update: {},
    create: {
      title: "General",
      slug,
    },
  });

  if (environment === "dev") {
    seedDev(category);
  }
}

async function seedDev(category: Category) {
  const user = {
    email: "richard.hendricks@piedpiper.com",
    name: "Richard Hendricks",
  };
  const richard = await prisma.user.upsert({
    where: { email: user.email },
    update: user,
    create: {
      ...user,
      posts: {
        create: {
          title: "Received offer from Gavin Belson for rights to Pied Piper",
          body: "Somehow Gavin Belson (CEO of Hooli) found out about Pied Piper, and offered me $10 million for the rights to the application.",
          categoryId: category.id,
        },
      },
    },
  });
}

await main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
