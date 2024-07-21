import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Page() {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = auth();

  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser();
  if (!userId || !user) {
    return <div>Not signed in</div>;
  }
  // Use `user` to render user details or create UI elements
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-4xl font-bold">
        Welcome back, {user.firstName} {user.lastName}
      </h1>
    </div>
  );
}
