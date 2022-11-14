import React, { useState } from 'react'



export const useInput = () => {
    const [text, setText] = useState<string>("")

    const change = (e: React.ChangeEvent<HTMLInputElement>) =>
        setText(e.currentTarget.value)

    const clearInput = () => setText("")

    return { text, change, clearInput }
}
