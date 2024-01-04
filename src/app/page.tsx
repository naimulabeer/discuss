import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <form action={actions.signIn}>
        <Button
          type="submit"
          radius="md"
          className="bg-gradient-to-tr from-amber-500 to-yellow-500 text-white shadow-lg"
        >
          SignIn
        </Button>
      </form>
      <form action={actions.signOut}>
        <Button
          type="submit"
          radius="md"
          className="bg-gradient-to-tr from-amber-500 to-yellow-500 text-white shadow-lg"
        >
          SignOut
        </Button>
      </form>

      {session?.user ? (
        <div>{JSON.stringify(session.user)}</div>
      ) : (
        <div>Signed Out...</div>
      )}

      <Profile />
    </div>
  );
}
