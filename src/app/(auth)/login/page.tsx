import type { Metadata } from "next";
function LoginForm() {
  return (
    <form className="max-w-md mx-auto p-4">
      <label className="block mb-2">
        <span className="text-sm">Email</span>
        <input type="email" name="email" className="mt-1 block w-full" />
      </label>
      <label className="block mb-2">
        <span className="text-sm">Password</span>
        <input type="password" name="password" className="mt-1 block w-full" />
      </label>
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Sign in</button>
    </form>
  );
}

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your account",
};

export default function Page() {
  return <LoginForm />;
}
