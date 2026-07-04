import { prisma } from "./lib/prisma";

const main = async () => {
  const user = await prisma.user.create({
    data: {
      name: "Alvaro",
      email: "alvaro@gmail.com",
    },
  });
  console.log("Created user:", user);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
