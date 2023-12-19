import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./utils/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  console.log(session);

  if (!session) {
    return redirect("/login");
  } else {
    return redirect("/home");
  }
}
