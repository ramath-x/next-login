import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// get return test "hello user"
export async function GET(request) {
  const user = await prisma.user.findMany();
  return new Response(JSON.stringify({ data: user }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
