import Link from "next/link";

export function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-slate-600">
      <div className="font-bold text-lg">Next AUTH</div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/api/auth/signin">Sign In</Link>
        </li>
        <li>
          <Link href="/api/auth/signout">Sign Out</Link>
        </li>
        <li>
          <Link href="/protected">Protected</Link>
        </li>
        <li>
          <Link href="/unprotected">Unprotected</Link>
        </li>
        <li>
          <Link href="/server">Server</Link>
        </li>
        <li>
          <Link href="/client">Client</Link>
        </li>
      </ul>
    </div>
  );
}
