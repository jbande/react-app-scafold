'use client'
import Input from "../../../components/Forms/Input";
import {useRef} from "react";


export default function Page () {
    const nameInputRef = useRef("");
    const addressInputRef = useRef("");
    const countryInputRef  = useRef("")
    const messageInputRef = useRef("")

    function loadForm(){
        return {
            name: nameInputRef.current.value,
            address: addressInputRef.current.value,
            country: countryInputRef.current.value,
            messageInputRef: messageInputRef.current.value
        }
    }

    return (
        <div>
            <h2>Sample of forms</h2>

            <div className="content-box" style={{width: 500}}>
                <h3>Contact us</h3>
                <Input
                    type="text"
                    name="input1"
                    label={'Name'}
                    placeholder={'Enter your full name'}
                    valueRef={nameInputRef}
                />

                <Input
                    type="text"
                    name="input2"
                    label={'Address'} placeholder={'Enter your address'}
                    valueRef={addressInputRef}
                />


                <Input
                    type="text"
                    name="input2"
                    label={'Country'}
                    placeholder={'Type to search and select your country'}
                    valueRef={countryInputRef}
                    searchOptions={
                        [
                            {label: 'spain', id:'1'},
                            {label: 'italy', id:'2'},
                            {label: 'france', id:'3'},
                            {label: 'australia', id:'4'},
                            {label: 'denmark', id:'5'},
                            {label: 'burundi', id:'6'},
                        ]
                    }/>

                <Input
                    type="text"
                    name="input2"
                    label={'Message'}
                    placeholder={'Write a message and send...'}
                    valueRef={messageInputRef}
                >
                    <button style={{
                        'background-color':'green',
                        'padding':'6px',
                        'color': 'white',
                        'border-radius': '3px',
                        'width': '65%'
                    }}>Send Message</button>
                </Input>
                <button onClick={()=> {console.log('Value is', loadForm())}} >Click me</button>
            </div>
        </div>
    )
}