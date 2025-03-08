import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Unicycle Hockey</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link href="/teams" className="hover:text-gray-300">Teams</Link>
          </li>
          <li>
            <Link href="/players" className="hover:text-gray-300">Players</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}