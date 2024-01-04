"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return <div>From Client: User is signed in</div>;
  } else {
    return <div>From Client: User is not signed in</div>;
  }
}
