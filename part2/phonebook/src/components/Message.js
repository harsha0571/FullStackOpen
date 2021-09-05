import React from 'react'

const Message = ({ message }) => {

    if (message.text === null) {
        return null
    }

    return (
        <div className={message.class}>
            {message.text}
        </div>
    )
}

export default Message
