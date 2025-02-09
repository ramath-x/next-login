"use client";

import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/profile");
    }
  }, [status, router]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await signIn("domain-login", {
      email,
      password,
      redirect: false,
    });
    if (result.error) {
      console.error(result.error);
      alert(result.error);
    } else {
      router.push("/profile");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg">
        <div className="text-3xl font-bold text-center text-gray-800">
          Login
        </div>
        <form onSubmit={handleSubmit} className="">
          <div>
            Email
            <label class="mt-2 mb-2 input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                id="email"
                type="email"
                class="grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
              />
            </label>
          </div>

          <div>
            Password
            <label class="mt-2 mb-2 input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="h-4 w-4 opacity-70"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                id="password"
                type="password"
                class="grow"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
                required={true}
              />
            </label>
          </div>

          <a href="/register">Sing Up</a>
          <button type="submit" class="mt-2 mb-2 btn btn-block btn-neutral">
            Login
          </button>
        </form>
        <div class="mt-6 text-center">
          <p class="text-gray-600">Or continue with</p>
          <div class="flex justify-center mt-3">
            <button
              type="button"
              onClick={() => signIn("line")}
              class="mx-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none focus:bg-green-700"
            >
              Line
            </button>
            <button
              type="button"
              onClick={() => signIn("google")}
              class="mx-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
