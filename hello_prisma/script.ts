import { prisma } from "./lib/prisma";

const main = async () => {

  // insert new user
  const user = await prisma.user.create({
    data: {
      name: "Alvaro",
      email: "alvaro@gmail.com",
    },
  });
  console.log("Created user:", user);


  // get all users
  const getUsers = await prisma.user.findMany();
  console.log("All users:", getUsers);

  // update user

  const updateUser = await prisma.user.update({
    where:{id:1},
    data:{
      name:"Samay Rayna",
      email:"samay@gmail.com"
    }
  })
  console.log("Updated user:", updateUser);

  // delete user
  const deleteUser = await prisma.user.delete({
    where: {id:4},
  })
  console.log("Deleted user:", deleteUser);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
