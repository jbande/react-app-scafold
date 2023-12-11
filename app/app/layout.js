'use client';
import NavBar from "../../components/NavBar/NavBar";
import SidePanel from "../../components/SidePanels/SidePanel";
import './app.scss'
import React, {useState} from "react";

export default function Layout({ children }) {

    //const [resizing, setResizing] = useState(false);
    const [panelWidth, setPanelWidth] = useState('200px')

    let resizing = false
    let xDim = 0

    function startResizing (e) {
        if(!resizing) {
            document.onmouseup = stopResizing
            document.onmousemove = doResizing
            resizing = true
        }
    }

    function stopResizing (e) {
        if(resizing) {
            document.onmousemove = null
            document.onmouseup = null
            resizing = false
        }
    }

    function doResizing(e){
        xDim = e.clientX + 40
        setPanelWidth(`${xDim}px`)
    }

    return (
        <main>
            <NavBar />
            <div className="flex flex-row gap-1">
                <div
                    style={{width:panelWidth}}
                    className="flex flex-row pt-20 pl-2 sd-panel">
                    <SidePanel />
                    <div onMouseDown={startResizing}
                         style={{width:'8px', height: '100%', background: 'none', cursor: 'ew-resize'}} />
                </div>
                <div className="pt-20 ap-container w-full h-full">
                    {children}
                </div>
            </div>
        </main>
    )
}
const dividerStyle = "width:2px;height:100%;background: gray"