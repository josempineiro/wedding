import NextLink from "next/link";

const useWedding = () => {
  return {
    id: "95f2e638-0023-4316-8868-6550f9bf1db3",
    name: "Abbey & Leman",
  };
};

const Dashboard = () => {
  const { name } = useWedding();
  return (
    <div className="p-4 mx-auto">
      <h1 className="text-5xl text-center">{name}</h1>
      <ul className="mt-4">
        <li className="text-2xl p-4 py-1 underline">
          <NextLink href="/guests">Guests</NextLink>
        </li>
        <li className="text-2xl p-4 py-1 underline">
          <NextLink href="/challenges">Challenges</NextLink>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
