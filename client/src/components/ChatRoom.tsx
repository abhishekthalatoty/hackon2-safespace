import React from 'react'
import {ChatEngine} from 'react-chat-engine'

const ChatRoom = () => {
    return (
        <div>
            <ChatEngine
            height='100vh'
            userName='prateek'
            userSecret='1234'
            projectID='648f3b36-13a6-44cb-bfc3-e01a8d89700f'
        />
        </div>
    )
}

export default ChatRoom
