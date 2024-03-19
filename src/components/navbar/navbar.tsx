import React from 'react'
import { LinkPage } from '@/components/links/link' //now remember basically yeh wo "links" component hai jo humna bnaya hai,or jo "@" lgya hai uska mtlb hai "./src" yani ka nextjs ma agr tsconfig file ma dekho jaka toh waha path define hua hai ka agr hum bjaya "./src" use krna ka just "@" be lgadenga toh it will be acceptable.and jo basic component hai humara wo "link" hai mtlb ka humna "link.tsx" ka name sa file bnayi hai,but wo "links" folder ma hai toh iss lia uska huma absolute path dena hai.halaka kay route may asa nhi hota waha just route ka name deday agay file name like page.tsx na be dey toh wo work krta hai,kiu that is route and this is component so its also a one difference b/w them.


export const NavBar = () => { //remember jab be hum component bnayega toh uska name page.tsx nahi rekhega bcuz page.tsx name ki file srf uss hi folder ma bnayega jo as a route use hoga ,so its a component not the route that why we set its name "navbar.tsx" or kiu kay yeh browser pa direct render nahi hoga bcuz its component basically isko hum app directory ki page.tsx ma import krenga or then waha render hoga  and "page.tsx" ki file use hoti hai srf route ka andar.  
    return (
        <header className='sticky top-0 z-20 bg-white'>
            <nav className='flex justify-between items-center h-16 w-9/12 m-auto'>
                <span className="text-black font-bold text-2xl ">CodingEra.</span>
                <div>
                <LinkPage /> {/*ab "LinkPage" component ko mena iterate kia hai toh wo uska mtlb yeh nhi kay wo ek "ul" ki ek item bn ka render hoga,wo iss tarah sa render hoga ka jab first time array iterate hoga toh jo "li" ma item hogi wo render hogi then second time be asa hi hoga and so on. so in this wo sab step by step as a item hi render hongay na kay ek item ban ka render honagy.*/}
                </div>
            </nav>
        </header>
    )
}

