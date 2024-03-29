import { useState, useEffect } from 'react';
export default function Exercise10() {
    const [text, setText] = useState('')
    const [digitando, setDigitando] = useState('Não está.')

    useEffect (()=>{
        if (text!==''){
            setDigitando('Está')
        }
        const id = setTimeout(()=>{
            setDigitando('Não está.')
        },300);

        return ()=>clearTimeout(id)

    },[text])

    return (
        <div>
            <h2>Está digitando? {digitando}</h2>
            <input onChange={(e) => setText(e.target.value)}></input>
        </div>
    )
}