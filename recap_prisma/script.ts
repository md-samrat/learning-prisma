import { prisma } from "./lib/prisma";
const main = async () => {
  // insert new user
//   const newUser = await prisma.user.create({
//     data: {
//       name: "Roman Reigns",
//       email: "roman@gmail.com",
//       password: "roman123",
//     },
//   });
//   console.log("New user created:", newUser);

//   get all users
    const getUsers = await prisma.user.findMany();
    console.log("All users:", getUsers);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
