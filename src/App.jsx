import { useState } from 'react'
import './App.css'

function FriendSelect() {

  return(

    <div id="friendSideBar">

      Friends

    </div>

  )

}

function SendMessage() {

  return(

    <div id="messageFrame">
      <input
        id="messageInput"
        placeholder="Write your message here"
      />

      <button id="messageSendBtn">Button</button>
    </div>

  )

}

function App() {

  return (
    <>
      <div id="appFrame">

        <FriendSelect />

        <div id="chatLogFrame">

          <div id="chatLog">
            Chat Log
          </div>

          <SendMessage />

        </div>

      </div>
    </>
  )
}

export default App
