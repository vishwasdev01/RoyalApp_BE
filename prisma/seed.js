import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "admin@example.com",
      password: "$2a$10$abcdefghijabcdefghijabcdefghijabcdefghijabcdefghij", // Bcrypt hash for 'password'
      firstName: "Admin",
      lastName: "User",
    },
  });
  console.log("Database has been seeded.");
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });