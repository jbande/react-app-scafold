import Link from "next/link";
import React from "react";
import './SidePanelLink.css'

export default function SidePanelLink({to, label}){
    return (
        <div className={spClass}>
            <Link style={{display: 'block', width:'100%'}} href={to}>{label}</Link>
        </div>
    )
}
const spClass = 'sp-link w-100 pt-2 pb-2 pl-1 antialiased'