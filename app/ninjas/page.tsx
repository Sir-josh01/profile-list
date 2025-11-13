import React from 'react'

export const metadata = {
  title: "Ninja Listing",
};

export default async function page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()

  console.log(data)

  // type dataProps = {
  //  data:{
  //    id: number,
  //   title?: string,
  //   name: string
  //  }[];
  // }
  return (
  <>
    <div>
      {data.map((user: {
   data:{
     id: number,
    name: string
   }[];
  }) => (
        <div key={user.id}>
          {user.name}
        </div>
      ))}
    </div>
  </>
  )
}
