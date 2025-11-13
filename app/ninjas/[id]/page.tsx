import React from "react";
import users from "@/app/data/data.json";
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
      <h2 className="font-bold text-[20px] mb-4">Skills/Equipment and Details</h2>
      <p>
        <ul className="mb-4">
          <li>
            {" "}
            Stealth: Mastery of Vanilla JavaScript and Native Web APIs (no bulky
            frameworks needed).{" "}
          </li>
          <li>
            {" "}
            Weapon: Sharpened focus on Frontend Performance and UI/UX precision.
          </li>
          <li>
            {" "}
            Technique: Specialized in data correlation and analysis (e.g.,
            impact assessment of digital tools on financial performance).
          </li>
          <li>
            {" "}
            Signature Move: Delivering highly concise and actionable solutions.
          </li>
        </ul>
      </p>
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
