import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query", "info"],
});

async function main() {
  try {
    await prisma.test.create({
      data: {
        text: "Hello, world!",
      },
    });

    process.exit(0);
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      switch (err.code) {
        case "P2021": {
          console.error("If I got here, something's not working");
          process.exit(1);
        }

        default: {
          console.error("If I got here, something's actually not working");
          process.exit(1);
        }
      }
    }
  }

  process.exit(1);
}

main();
