import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'

import './App.css'

const App = () => {
    return (
        <ChatEngine
			height='100vh'
			userName='nandodiaz'
			userSecret='JW1Ct0VgQCo'
			projectID='3e041b2f-5a22-4985-a6bb-9995a4b4932d'
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps } /> }
		/>
    )
}

export default App