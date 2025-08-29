import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {


  // Mehtod 2:

  const data = useLoaderData() 


  // Method 1 :-

  // const [data,setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/nikhilbhalotia')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       setData(data)
      
  //   })
  // }, [])
  
  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex">
        <img src={data.avatar_url} className="w-50 ml-4 rounded-3xl" alt="" />
        <div className='flex flex-col gap-5 fixed right-10'>

        <span className=''>Github following: {data.following}</span>
        <span className=''>Total Repositries: {data.public_repos}</span>
        </div>
      </div>
    </>
  );
}

export default Github


//  Method 2:

export const githubInfoLoader = async()=> {
  const response = await fetch("https://api.github.com/users/nikhilbhalotia");
  return response.json()
}
