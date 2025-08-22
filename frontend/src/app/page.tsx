"use client";
import { Table, TableProps } from "@/components/Table";
import { useQuery } from "@tanstack/react-query";

async function getData(): Promise<TableProps[]> {
  const resp = await fetch("http://localhost:3000/task");
  if (!resp.ok) {
    throw new Error("Failed to fetch data");
  }
  return resp.json();
}

export default function Home() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: getData,
  });
  console.log("🚀 ~ Home ~ data:", data)

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;
  return (
    <>
      <Table data={data ?? []} />
    </>
  );
}
