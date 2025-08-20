'use client'
import React from "react";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

export interface TableProps {
  id: string;
  firstName: string;
  lastName: string;
  address?: string;
  mobileNumber: string;
}

interface Props {
  data: TableProps[];
}
export const Table: React.FC<Props> = ({ data }) => {
  const router = useRouter();
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">User Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 text-left">First Name</th>
              <th className="border p-2 text-left">Last Name</th>
              <th className="border p-2 text-left">Address</th>
              <th className="border p-2 text-left">Mobile Number</th>
            </tr>
          </thead>
          <tbody>
            {data.map((person) => (
              <tr key={person.id} className="hover:bg-gray-50">
                <td className="border p-2">{person.firstName}</td>
                <td className="border p-2">{person.lastName}</td>
                <td className="border p-2">{person?.address}</td>
                <td className="border p-2">{person.mobileNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Button onClick={()=> router.push("/create")}/>
    </div>
  );
};
