import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CardApi from "@/components/cardApi/cards";

//fetching Api 
// const PostApi=async ()=>{
//   const Url:string="https://jsonplaceholder.typicode.com/posts";
//   let Data;
//   const fetchData= fetch(Url).then((val)=>{return val.json()}).then((data)=>{return data}).catch((err)=>console.log(err)); //here im fetching data using .then and .catch 
//   // const Data=(await fetchData).json();  

//   return fetchData; //remember yaha wohi data ayega jo "last .then" ma mena return krwaya hai agr promise resolve hoga warna toh ".catch" chl jayega.
// }

const Blog = async () => {
    // const getData= await PostApi(); //practicing data fetching
    // console.log(getData);
    
  return (
    <div className="blog-container  flex w-9/12 m-auto py-2 justify-center  items-center ">
      <div className="blog-grid  grid grid-cols-1 md:grid-cols-2 md:gap-x-16 md:gap-y-4 justify-center items-center gap-y-3 lg:grid-cols-3 xl:grid-cols-4">
        {CardApi.map((card) =>{
           const {title,desc,date,src}=card
          return( 
          <div className='w-60  hover:shadow-lg ease-in  hover:border-2 px-2 py-2 rounded-md   flex' key={title}>
            <div className='left-div  space-y-0.5 '>
              <div className="img "><Image className="rounded-lg" src={src} width={180} height={180} alt={title} />
              </div>
              <div className="title font-bold text-sm">{title}</div>
              <div className="desc text-xs text-gray-500">desc</div>
              <div className="read text-xs underline underline-offset-2 font-semibold"><Link href={`/blog/${card.title}`}>Read More</Link></div> {/*now remember as template literals are the part of javascript therefore we will use it inside {} */}
              
              {/* <Blogpost title={title}/> remember jis file ma component ko call krega wo wohi implement hoga.like yaha humna Blogpost ko call kia or usko ek prop pass kia ab jo be Blogpost ma return hoga wo iss hi component ma implement be hoga. */}
            </div>
            <div className="date flex justify-start items-center  w-22 ">
              <div className='  mb-7 font-medium text-xs h-7 w-24 -rotate-90 text text-center  '>{card.date}</div> {/*remember "rotate" class will work in div only not in span */}
            </div>
          </div>
           )})}
      </div>
    </div>
  )
}

export default Blog;