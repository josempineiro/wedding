import { CreateTableFAButton } from "@/components/wedding/tables/actions/CreateTableFAButton";
import { TablesList } from "@/components/wedding/tables/list/TablesList";
import { useTables } from "@/hooks/wedding/use-cases/useTables";
export default function Tables() {
  const { data, isLoading } = useTables();
  return (
    <main className={`flex flex-col items-center justify-between p-2`}>
      <h1>Tables</h1>
      <CreateTableFAButton />
      {isLoading && <p>Loading ...</p>}
      {data && (
        <>
          <div>
            <p>Total: {data.length}</p>
          </div>
          <TablesList tables={data} />
        </>
      )}
    </main>
  );
}
