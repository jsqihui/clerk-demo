import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "@/db";

export default async function Page() {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = auth();

  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser();
  if (!userId || !user) {
    return <div>Not signed in</div>;
  }
  const db_user = await prisma.user.findUnique({ where: { id: user.id } });
  // Use `user` to render user details or create UI elements
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold text-center mb-4">
        Welcome back, {user.firstName} {user.lastName}
      </h1>
      <div>
        {db_user && (
          <p className="text-center text-lg text-gray-600">
            {db_user.biography}
          </p>
        )}
      </div>
    </div>
  );
}
