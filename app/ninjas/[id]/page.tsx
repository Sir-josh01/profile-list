import React from "react";
import users from "@/app/data/data.json";
// import NotFound from '../error'
import { notFound } from "next/navigation";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

type paramProps = {
  params: {
    id: string;
  };
};

export default async function page(props: paramProps) {
  const awaitedParams = await props.params;
  const userId = parseInt(awaitedParams.id);

  const allUsers: User[] = users as User[];
  const user = allUsers.find((n) => n.id === userId);

  if (!user) {
    notFound();
  }
  return (
    <div>
      <h1 className="text-[24px] font-bold mb-4">{user.name}</h1>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <h3 className="text-[18px] font-semibold mt-4">Address</h3>
      <p>
        {user.address.street}, {user.address.suite}
      </p>
      <p>
        {user.address.city}, {user.address.zipcode}
      </p>
    </div>
  );
}
