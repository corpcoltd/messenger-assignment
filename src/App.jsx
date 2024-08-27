import { useState } from 'react'
import './App.css'

function FriendSelect({friendData}) {

  const handleButtonClick = (friend) => {

    console.log("Friend-Button Clicked!");

  }

  return(

    <div id="friendSideBar">

      {friendData.map(friend => (

        <button onClick={handleButtonClick} key={friend.id}>{friend.name}</button>

      ))}

    </div>

  )

}

function SendMessage() {

  const [inputText, setInputText] = useState("");

  const handleSend = () => {

    console.log("Message: " + inputText);
    setInputText("");

  }

  const handleKeyDown = (e) => {

      if (e.key === "Enter") {

        handleSend();

      }

  }

  return(

    <div id="messageFrame">
      <input
        id="messageInput"
        placeholder="Write your message here"
        onKeyDown={handleKeyDown}
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />

      <button 
        id="messageSendBtn"
        onClick={handleSend}
      >Button</button>
    </div>

  )

}

function App() {

  // FRIENDS

  const [friendData, setFriendData] = useState([
    {id: 1, name: "Bob", chat: [{id: 1, message: "This is Bob!"}]},
    {id: 2, name: "Alice", chat: [{id: 2, message: "This is Alice!"}]}
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
