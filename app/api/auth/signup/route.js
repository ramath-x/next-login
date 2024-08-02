import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { email, password, name, last_name } = await request.json();
    const hashedPassword = await bcrypt.hashSync(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        last_name,
      },
    });

    return Response.json({ message: "User created successfully", user });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "User creation failed" });
  }
}
