const EmailConfirmed = () => {
    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-green-700 text-center">
                Email Confirmed ✅
            </h2>
            <p className="text-gray-700 text-center mb-4">
                You can now log in to your account.
            </p>
            <div className="flex justify-center">
                <a
                    href="/"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Go to Login
                </a>
            </div>
        </div>
    );
};

export default EmailConfirmed;
