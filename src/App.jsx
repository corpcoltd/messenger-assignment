import { useState } from 'react'
import './App.css'

function FriendSelect({friendData}) {

  return(

    <div id="friendSideBar">

      {friendData.map(friend => (

        <p>{friend.name}</p>

      ))}

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

  // FRIENDS

  const [friendData, setFriendData] = useState([
    {name: "Bob"},
    {name: "Alice"}
  ]);

  return (
    <>
      <div id="appFrame">

        <FriendSelect friendData={friendData} />

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
