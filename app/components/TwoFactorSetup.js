export default function TwoFactorSetup() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div className="mt-10 mb-2 mr-10 ml-10 text-3xl font-bold text-center text-gray-800">Set Up Two-Factor Authentication</div>
                <div className="card-body">
                    <div className="">
                        Email for 2FA
                    </div>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Enter your Email" />
                    </label>
                    <div className="flex flex-row-reverse">
                        <button class="mt-2 mb-2 btn btn-block btn-neutral">Edit Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
}