import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div id="appFrame">

        <div id="friendSideBar">
          Friends
        </div>

        <div id="chatLogFrame">

          <div id="chatLog">
            Chat Log
          </div>

          <div id="messageFrame">
            <input
              id="messageInput"
              placeholder="Write your message here"
            />

            <button id="messageSendBtn">Button</button>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
