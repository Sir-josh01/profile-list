import React from 'react'

export const metadata = {
  title: "Ninja Listing",
};

export default async function page() {
  const response = await fetch("./data.json")
  const data = await response.json()

  console.log(data)

  
  return (
  <>
    <div>
      
    </div>
  </>
  )
}
