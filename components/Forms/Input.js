'use client'
import React, {useState} from "react";
import './Input.scss'

export default function Input (props) {

    const [searchActive, setSearchActive] = useState(false)
    const [inputValue, setInputValue] = useState(null)

    const sOp = []
    if(props.searchOptions){
        props.searchOptions.forEach((so) => sOp.push({visible: true, ...so}))    }
    const [allSearchOptions, setAllSearchOptions] = useState(sOp)

    const configStyles = {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
    }

    if(props.sideLabel){
        configStyles.flexDirection = 'row'
        configStyles['alignItems'] = 'center'
    }

    function selectThis(el){
        const selected = allSearchOptions.find((d) => d.id === el.target.id)
        setInputValue(selected.label)
        setSearchActive(false)
    }

    function showSearchOptions (){
        return allSearchOptions.map((so) => {
            if(so.visible){
                return (
                    <div
                        className={'d-search-item'}
                        id={so.id}
                        key={so.id}
                        style={{cursor: 'pointer'}}
                        onClick={selectThis}>
                        {so.label}
                    </div>)
            }
        })
    }

    function updateSearchOptions (event){
        let newVal = event.target.value
        setInputValue(newVal)
        // if(props.valueRef){
        //     props.valueRef.current = newVal
        // }

        allSearchOptions.forEach((so) => {
            so.visible = so.label.indexOf(newVal) !== -1
        })
    }

    // capture event when click outside to clos input search dropdown if open
    window.onclick = (e) => {
        if(searchActive){
            setSearchActive(false)
        }
    }

    function startSearch (key) {
        if (allSearchOptions.length === 0){
            return
        }
        if(!searchActive){
            setSearchActive(true)
        }
        if(key.code === "Enter"){
            let visible = allSearchOptions.filter((so) => so.visible === true)

            if(visible.length > 0){
                // then select the firs visible element
                console.log('first visible', visible[0])
                setInputValue(visible[0].label)
            } else {
                setInputValue('')
            }
            setSearchActive(false)
        }
    }

    return (
        <div className={'d-input-box'} style={configStyles}>
            <label for={props.name}>{props.label}</label>
            <div className={'d-input-group'}>

                <input
                    disabled={props.disabled}
                    type={props.type}
                    id={props.id}
                    name={props.name}
                    placeholder={props.placeholder}
                    className={'d-input'}
                    value={inputValue}
                    onChange={updateSearchOptions}
                    ref={props.valueRef}
                    onKeyPress={(ev) => startSearch(ev)}
                />
                {props.children}
            </div>

            <div className={'d-drop-box'}>
                <div className={`d-search-drop ${searchActive === true ? 'active': ''}`}>
                    {showSearchOptions()}
                </div>
            </div>

        </div>
    )
}