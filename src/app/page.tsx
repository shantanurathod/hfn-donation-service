import Link from "next/link";

export default function Home() {
  // const id = router.query
  return (
    <Link href={{pathname: '/donation', query: {id: 888}}}>

    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
      Button
    </button>
    </Link>
  );
}
