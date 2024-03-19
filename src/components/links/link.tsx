"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
const pagesLinks: ({ title: string, path: string })[] = [   //now basically yeh "link" component iss lia bnaya hai taka dynamically navbar ma value dey sakay for suppose agr na bnatay toh phr humara navBar ki file ma jaka statically sb likhna parta now its simple kay ek array bnaya usma sb hi pages ka link or title rakhdia or usko iterate krdia.
    {
        title: "Home",
        path: "/"

    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Blog",
        path: "/blog"
    },
    {
        title: "Contact",
        path: "/Contact"
    }
]

//temporary authentiction
let session: boolean = true;
let isLogin: boolean = false;
let isAdmin: boolean = true;
const LinkPage = () => {
    const pathName = usePathname(); //now "usePathname()" hook is used here to get the route segment name like Url:example.com/path1. so it will return /path1. and we can also use "useRouter()" hook for this purpose. and the best practice is to use "useRouter()" hook.and remember hooks are always call inside the function.
    const [Open, setOpen] = useState(false);
    return (
        <>      {/*remember its not neccessary to use key prop while mapping but its good practice to include key prop. */}
            <ul className=' hidden sm:flex sm:space-x-6 sm:items-center '>
                {/* <NavLinks paths={pagesLinks}/> ask sir for this error */}
                {pagesLinks.map((page) => <li className={(page.path === pathName) ? "font-bold text-lg" : "hover:font-semibold font-medium text-black text-lg "}><Link href={page.path} key={page.title}>{page.title}</Link></li>)} {/*yaha simply humna "map" ka through array ko iterate kia hai or then as a "li" item bnakay then usma "Link" component use krka easily sab item ko iterate krdia.and className ma jo condition lgyi hai woh iss lia lgyi haka jo be route active ho wo bold hojayeg. */}
                {session ? <li className=" bg-black py-2 px-3 rounded-lg font-medium text-white text-sm border-2" ><Link href={"./signup"}>Signup</Link></li> : isLogin ? <li className="bg-black py-2 px-3 rounded-lg font-medium text-white text-sm border-2" ><Link href={"./login"}>Login</Link></li> : <button className="bg-black py-2 px-3 rounded-lg font-medium text-white text-sm border-2">Logout</button>}
            </ul>
            <div className="  flex top-3.5 items-center h-10 sm:hidden w-6/12 absolute right-0  justify-end pr-14 hover:font-semibold font-medium text-black"><button onClick={() => { setOpen((prev)=>!prev) }}><Image src="/imgs/side-btn.png" alt="side-bar-btn" width={30} height={30} /></button></div>
            {Open && <div className=" top-16 absolute sm:hidden right-0 w-6/12 h-svh bg-black items-center text-white flex justify-center flex-col ">
                <div className=" flex flex-col justify-center items-center  ">

                    {/* {Open ? pagesLinks.map((page) => <li className={(page.path === pathName) ? "font-bold" : "hover:font-semibold font-medium text-black "}><Link href={page.path} key={page.title}>{page.title}</Link></li>) : setOpen(false)}  */} {/*iska answer yeh haka kabhi be hum hooks ko html or we can say that jsx ma call nahi krtay hook ko humesha onClick event ma call krenga ya phr jsx ka bahir not within jsx. */}
                    <div className="flex flex-col items-center justify-center list-none space-y-2">
                        {Open ? pagesLinks.map((page) => <li className={(page.path === pathName) ? "font-bold" : "hover:font-semibold font-medium text-white "}><Link href={page.path} key={page.title}>{page.title}</Link></li>) : null} {/*null means nothing jab huma kuch be return nahi krwana toh hum null type use krenga. */}
                        {/* {Open && <button onClick={() => { setOpen(false) }}><li>Close</li></button>} using short-circuit */}
                        {session && Open ? <li className=" bg-white py-2 px-3 rounded-lg font-medium text-black text-sm border-2" ><Link href={"./signup"}>Signup</Link></li> : isLogin && Open ? <li className="bg-white py-2 px-3 rounded-lg font-medium text-black text-sm border-2" ><Link href={"./login"}>Login</Link></li> : null}
                    </div>
                </div>

            </div>}
        </>
    )
}

export { LinkPage }; //not neccessary mana wasa hi check ka lia export statement use ki hai.


