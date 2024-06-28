import React from "react"
import welcomeLogo from "../assets/images/welcome-casino-en.png"
import { GiCardAceHearts } from "react-icons/gi";

export default function CardComponent (){
    return(
        <>
        <a href="" className="sm: w-100 pb-5 flex justify-start text-gray-400 text-lg font-bold items-center hover:text-white " > <GiCardAceHearts  /><span className="text-white">Casino</span></a>
        <a href="" className="sm:grid-cols-2">
            <img src={welcomeLogo}  alt="" className="sm:rounded-lg  pb-5"/>
            <span className="text-white font-bold text-base pb-5" >Leading Online Casino</span>
            <p className="text-sm font-normal text-slate-400 pb-5">Browse our giant range of casino games as Stake offers a fair and fun online gambling experience. Play Slots, Live Casino, Blackjack, Baccarat, Roulette, and thousands of classic casino games right from your browser, including your favourite Stake Originals.</p>
              
        </a>
        </>
    )
}


