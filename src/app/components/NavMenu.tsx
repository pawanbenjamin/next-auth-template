"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const ACTIVE_ROUTE = "bg-blue-300";
const INACTIVE_ROUTE = "";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {session?.user?.name}
        <br />
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign In</button>
    </>
  );
}

export default function NavMenu() {
  const pathname = usePathname();
  return (
    <div>
      <AuthButton />
      <hr />
      <ul>
        <Link href="/">
          <li className={pathname === "/" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
            Home
          </li>
        </Link>
        <Link href="/protected">
          <li
            className={
              pathname === "/protected" ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            Protected Route
          </li>
        </Link>
        <Link href="/serverAction">
          <li
            className={
              pathname === "/serverAction" ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            Server Action
          </li>
        </Link>
        <Link href="/apiFromClient">
          <li
            className={
              pathname === "/apiFromClient" ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            API From Client
          </li>
        </Link>
        <Link href="/apiFromServer">
          <li
            className={
              pathname === "/apiFromServer" ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            API From Server
          </li>
        </Link>
      </ul>
    </div>
  );
}
