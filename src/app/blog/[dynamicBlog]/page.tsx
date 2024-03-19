import React from 'react';
import CardApi from "@/components/cardApi/cards";
import Notfound from '@/app/not-found';
import Image from 'next/image';

interface Iprops {
  params: { dynamicBlog: string } //remember params srf dynamic route may get hotay hain and jo params object ki property hogi wo wohi hogi name humna dynamic route ka rakha hoga. 
}
const Blog1 = (props: Iprops) => { //now as we know that in dynamic blog we get props inform of params object automaticaly, so yaha yeh condition lgyi haka "blog" ma jab be read more pa click hoga toh uska jo path hai wo iss tarah sa define kia haka jab be uspa click hoga wo "/blog/card.title" pa navigate krega now ab jo "title" hai wo toh dynamic hoga na toh ab agar hum har title ka lia alag alag route baneyga toh wo phr kafi time consuming hojayega so thats why yaha dynamic route ka use kia haka jo be dynamic segment/title waha ayega usko hum yaha params ka through get kreinga or then phr uspa hum condition lgye gay ka agr uss title ka related koi product ho toh data show hojayega otherwise error ayega. 

  const { dynamicBlog } = props.params;
  console.log(props.params.dynamicBlog)
  // console.log(props.searchParams)  //searchParams is used to get the query which user makes.
  const findCard = CardApi.find((card) => card.title === dynamicBlog);

  return (

    (typeof findCard !== "undefined" && (
      <div className="dynamicBlog-container py-2 px-2 flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-3 w-9/12 bg-slate-100 m-auto">
        <div><Image src={findCard.src} alt={`${findCard.title}`} width={370} height={370} className='md:w-195 lg:w-100'/></div>
        <div className="text-container lg:w-100 space-y-6 flex flex-col justify-center items-center lg:items-start xl:justify-start xl:w-195 md:py-3   md:px-3">
          <div className="title text-2xl font-bold">{findCard.title}</div>
          <div className="author-div  space-x-4 flex justify-center items-center">
            <Image src={"/imgs/Avatar-PNG-Free-Download.png"} width={40} height={40} alt='avtar' />
            <div className="name flex flex-col justify-center items-start">
              <div className='text-sm font-medium text-gray-500'>Author</div>
              <div className='text-sm'>Terryson</div>
            </div>
            <div className='publish flex justify-center flex-col items-center'>
              <div className="head text-sm font-medium text-gray-500">Published</div>
              <div className="date text-sm">{findCard.date}</div>
            </div>
            </div>
            <div className="desc text-center lg:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quasi fugit tempore accusamus, consequatur natus eius modi soluta quod sed, fugiat autem accusantium? Architecto modi, nam corrupti incidunt hic, quae aliquid quasi unde eum ab eaque nesciunt deleniti in a.
            </div>
        </div>
      </div>
    ))

    /* (typeof findCard !== undefined ? (
    //   <div className="dynamicBlog-container">
    //     {findCard?.title}  {/*yaha par yebi question haka jasay jab humaray pass union types hoti hain toh hum narrowing krka unko sought krtay hain toh jasa mena yaha par narrowing ki using type guard but still findCard ki value possibly undefined be keh rahay hain halaka findCard ki type toh "Iblog" hojani chaiya.Ans: uski waja yeh haka jo typeof hai wo literal value ko check krta hai like "string","undefined" etc but agr usko direct type sa compare krenga toh wo sai sa working nahi hogi.*/
    //   </div>) : <div>Not Found</div>
    // )*/}



  )
}

export default Blog1;