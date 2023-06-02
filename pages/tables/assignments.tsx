import { CreateTableFAButton } from "@/components/wedding/tables/actions/CreateTableFAButton";
import { TablesAssignmentEditor } from "@/components/wedding/tables/assignment/TablesAssignment";
import { useTables } from "@/hooks/wedding/use-cases/useTables";

export default function TablesAssignmentPage() {
  const { data: tables, loading: tablesAreLoading } = useTables();
  return (
    <main className={`flex flex-col items-stretch justify-between p-2`}>
      <h1>Tables</h1>
      <CreateTableFAButton />

      <div>
        {tablesAreLoading && <p>Loading ...</p>}
        {tables && <p>otal: {tables.length}</p>}
      </div>
      <TablesAssignmentEditor />
    </main>
  );
}
