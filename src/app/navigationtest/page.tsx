"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import Link from "next/link";
const Navtestpage = () => {
    const router=useRouter();
    const pathName=usePathname();
    const query=useSearchParams();

 const handleClick=()=>{
    console.log(pathName);
    console.log(query.get("q"));
    
    console.log("clicked");
    // router.push("/")
    
    //using .replace() method
    // router.replace("/");
    
    //using .refresh() method
    // router.refresh();
    
    //using .back() method
    // router.back();
    
    //using .forward() method
    // router.forward();
 }
  return (
    <>
    <div>Nav test page <Link href={"/"} prefetch={false}>Click here</Link></div>
    <div onClick={()=>{handleClick()}}>Redirect User</div>
    </>
  )
}

export default Navtestpage;