import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Quotes.css"
import { FiSettings } from "react-icons/fi"
import { Todo } from '../Todo/Todo'

const Quotes = () => {
    const [quote, setQuote] = useState({ content:"", author:""})

    const fetchQuote = async() => {
        const URL = "https://api.quotable.io/random"
        try{
            const res = await axios.get(URL);
            const data = JSON.parse(JSON.stringify(res.data))
            // console.log(data)
            setQuote({ content: data.content, author: data.author})
        }
        catch (err) {
            setQuote({
                content: "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration",
                author: "Nikola Tesla"
            })
            console.log(err)
        }
    }

    useEffect(() => {
        fetchQuote();
    }, []);


    return (
        <>
        <div className='Quote flex-center flex-col'>
            <span className='quote-content'>
                {quote.content}
            </span>
            <span className='quote-author'>-
                {quote.author}
            </span>
        </div>
        <div className="todo">
            <Todo />
        </div>
        </>
    )
}
export { Quotes };