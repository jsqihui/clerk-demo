import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-10">
      <SignIn />
    </div>
  );
}
