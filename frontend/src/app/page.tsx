import { Table, TableProps } from "@/components/Table";

async function getData(): Promise<TableProps[]> {
  const resp = await fetch("http://localhost:3000/task");
  return resp.json();
}

export default async function Home() {
  const users = await getData();
  console.log("🚀 ~ Home ~ users:", users);
  return (
    <>
      <Table data={users} />
    </>
  );
}
