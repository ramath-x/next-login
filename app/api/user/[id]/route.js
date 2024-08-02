import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
  const user = await prisma.user.findUnique({
    where: { id: Number(params.id) },
  });
  return new Response(JSON.stringify({ data: user }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
