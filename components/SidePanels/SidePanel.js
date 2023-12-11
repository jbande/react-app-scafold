import './side_panel.css'
import Link from "next/link";
import React from "react";
import SidePanelLink from "../SidePanelLinks/SidePanelLink";

export default function SidePanel (){
    const links = [
        {id: 0, to: '/app', label: 'Lecciones'},
        {id: 1, to: '/app/tasks', label: 'Tareas'},
        {id: 1, to: '/app/forms', label: 'Forms'},
    ]
    const linkMap = links.map(l => <SidePanelLink to={l.to} label={l.label} key={l.id}/>)
    return (
        <div className={sdPanel} >
            {linkMap}
        </div>
    )
}
const sdPanel = 'sd-panel-comp flex flex-col justify-content-right';

