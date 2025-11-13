import React from "react";
import users from "../data/data.json";
import Link from "next/link";
import styles from "@/app/styles/ninja.module.css";

export const metadata = {
  title: "Ninja Listing",
};

export default function page() {
  const data = users;

  return (
    <>
      <div>
        <h2 className="text-[20px] font-bold mb-2">👤 The Efficiency Enforcer - Profile</h2>
        <div>
          {data.map((user) => (
            <div key={user.id} className={styles.nameBox}>
              <Link href={`/ninjas/${user.id}`}>
                <h3 className={styles.nameLink}>{user.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
