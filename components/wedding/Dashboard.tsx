import NextLink from "next/link";
const Dashboard = () => {
  return (
    <div>
      <h1 className="text-6xl">Dashboard</h1>
      <ul>
        <li className="text-2xl">
          <NextLink href="/guests">Guests</NextLink>
        </li>
        <li className="text-2xl">
          <NextLink href="/challenges">Challenges</NextLink>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
