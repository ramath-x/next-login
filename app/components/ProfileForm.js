"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfileForm() {
  const { data: session, status } = useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  // setName(session?.user?.name);
  // setEmail(session?.user?.email);

  // console.log("name", name);
  // console.log("email", name);
  // console.log("status", status);
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
    if (status === "authenticated") {
      setName(session?.user?.name);
      setEmail(session?.user?.email);
    }
  }, [status, router]);

  return (
    status === "authenticated" &&
    session.user && (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg">
            <div className="mt-2 mb-2 text-3xl font-bold text-center text-gray-800">
              My Profile
            </div>
            <div className="mt-2 mb-2 avatar items-center justify-center">
              <div className="w-24 rounded-full ">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-2 gap-2">
                <div className="mt-2 mb-2">
                  {" "}
                  First Name
                  <label className="mt-1 mb-1 input input-bordered flex items-center gap-2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input
                      type="text"
                      className="grow"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                </div>
                <div className="mt-2 mb-2">
                  {" "}
                  Last Name
                  <label className="mt-1 mb-1 input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input
                      type="text"
                      className="grow"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                </div>
              </div>
              <div className="">Email</div>
              <label className="mt-2 mb-2 input input-bordered flex items-center gap-2">
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
                  className=""
                  type="email"
                  name="email"
                  value={email}
                ></input>
              </label>
              <div className="flex flex-row-reverse">
                <button className="btn btn-primary">Edit Profile</button>
              </div>
              <div>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="w-full bg-blue-500 text-white py-2 rounded"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
