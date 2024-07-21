import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default function Header() {
  const { userId } = auth();
  return (
    <div className="bg-gray-800 text-white p-4 text-neutral-100">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <div className="flex gap-4 items-center]\">
          {userId ? (
            <div className="flex gap-4 items-center">
              <Link href="/dashboard" className="text-neutral-100">
                Dashboard
              </Link>
              <UserButton />
            </div>
          ) : (
            <div className="flex gap-4 items-center]\">
              <Link href="/sign-in" className="text-neutral-100">
                Sign In
              </Link>
              <Link href="/sign-up" className="text-neutral-100">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
