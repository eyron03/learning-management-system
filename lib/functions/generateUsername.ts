import { prisma } from "@/lib/db";

export async function generateUsername(role: string): Promise<string> {
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2);

  let rolePrefix: string;
  switch (role) {
    case "SUPER_ADMIN":
      rolePrefix = "SA";
      break;
    case "TEACHER":
      rolePrefix = "T";
      break;
    case "STUDENT":
      rolePrefix = "S";
      break;
    default:
      rolePrefix = "A";
  }

  
  const lastUser = await prisma.teacher.findFirst({
    where: {
      username: {
        startsWith: `${year}-`, 
      },
    },
    orderBy: {
      username: "desc", 
    },
  });

  // Extract and increment counter
  let counter = 1;
  if (lastUser) {
    const match = lastUser.username.match(/(\d{4})-([A-Z]+)$/);
    if (match) {
      counter = parseInt(match[1], 10) + 1;
    }
  }

  const randomNum = counter.toString().padStart(4, "0");

  return `${year}-${randomNum}-${rolePrefix}`;
}
