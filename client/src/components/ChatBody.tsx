import React from 'react'
import { ChatEngineWrapper, ChatSocket, ChatFeed } from 'react-chat-engine'

const ChatBody = () => {
    return (
        <div>
            <ChatEngineWrapper>
            <ChatSocket 
                projectID='648f3b36-13a6-44cb-bfc3-e01a8d89700f'
                chatID='27024'
                chatAccessKey='ca-33932b18-4ba6-468a-9677-463fbab33f74'
                senderUsername='Prateek'
            />

            <ChatFeed activeChat='27024' /> 
        </ChatEngineWrapper>
        </div>
    )
}

export default ChatBody
