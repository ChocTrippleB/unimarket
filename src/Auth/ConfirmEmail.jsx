const ConfirmEmail = () => {
    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-center text-green-700">
                Confirmation Email Sent
            </h2>
            <p className="text-gray-700 text-center">
                Please check your inbox and confirm your email before logging in.
                <br />
                Didn’t get the email? Try checking spam or contact support.
            </p>
        </div>
    );
};

export default ConfirmEmail;
