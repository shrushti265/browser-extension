import React, { useState } from 'react'
import "./Onboard.css"

const Onboard = ({userName, setUserName, setRoute}) => {
    const [name, setName] = useState("");
    const userNameHandler = (e) => {
        e.preventDefault();
        setUserName(name);
        setRoute('main');
    };

  return (
    <>
        <div className='onboard flex-center'>
            <form className='flex-col' onSubmit={(e) => userNameHandler(e)}>
                <h1>Hello, What's your name?</h1>
                <input 
                    type="text"
                    className='onboarding-input'
                    autoFocus
                    onChange={(e) => setName(e.target.value)}
                />
            </form>
        </div>
    </>
  )
}

export { Onboard }
