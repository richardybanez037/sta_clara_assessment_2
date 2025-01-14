import Link from "next/link";
import { register } from "../actions";

export default function Page() {
  return (
    <div className="flex justify-center w-screen p-10">
      <div>
        <form
          action={register}
          className="flex flex-col border rounded-md p-5 mt-5"
        >
          <h1 className="text-lg mb-3">Sign up to your todo list</h1>
          <label>Username</label>
          <input className="border rounded-md px-2" name="username" required />
          <label>Password</label>
          <input
            className="border rounded-md px-2"
            name="password"
            type="password"
            minLength={8}
            required
          />
          <label>Confirm password</label>
          <input
            className="border rounded-md px-2"
            name="confirmPassword"
            type="password"
            minLength={8}
            required
          />
          <button className="border p-2 uppercase bg-blue-400 hover:bg-blue-300 rounded-md mt-3">
            Sign up
          </button>
        </form>
        <div className="py-2">
          <p>
            Already have an account?{" "}
            <Link href="/signin" className="underline hover:text-blue-400">
              Sign in
            </Link>{" "}
            here
          </p>
        </div>
      </div>
    </div>
  );
}
