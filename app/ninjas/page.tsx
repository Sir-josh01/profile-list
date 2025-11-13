import React from "react";
import ninjas from "../data/data.json";
import Link from 'next/link'
import styles from '@/app/styles/ninja.module.css'

export const metadata = {
  title: "Ninja Listing",
};

export default async function page() {
  const data = ninjas;

  // console.log(data)
  return (
    <>
      <div>
        <h2 className="text-[20px] font-bold mb-2">Ninja List</h2>
        <div>
          {data.map((user) => (
            <div key={user.id} className={styles.nameBox}>
              <Link href='/ninjas/details'>
                <h3  className={styles.nameLink}>{user.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
