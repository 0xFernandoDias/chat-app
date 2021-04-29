import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

import './App.css'

const App = () => {
	if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
			height='100vh'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			projectID='3e041b2f-5a22-4985-a6bb-9995a4b4932d'
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps } /> }
		/>
    )
}

export default App