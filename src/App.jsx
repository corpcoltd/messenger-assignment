import { useState } from 'react'
import './App.css'

function FriendSelect({friendData, setChat}) {

  const handleButtonClick = (friend) => {

    console.log(friend.name);

  }

  return(

    <div id="friendSideBar">

      {friendData.map(friend => (

        <button 
          onClick={handleButtonClick(friend)}
          key={friend.id}>
            {friend.name}
          </button>

      ))}

    </div>

  )

}

function SendMessage({setChat, chat}) {

  const [inputText, setInputText] = useState("");

  const handleSend = () => {

    const newMessage = {key: Date.now(), id: 0, message: inputText}
    setChat(pChat => [...pChat, newMessage]);

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

  // CHAT
  const [chat, setChat] = useState([]);

  // FRIENDS

  const [friendData, setFriendData] = useState([
    {id: 1, name: "Bob", chat: [{id: 1, message: "This is Bob!"}]},
    {id: 2, name: "Alice", chat: [{id: 2, message: "This is Alice!"}]}
  ]);

  return (
    <>
      <div id="appFrame">

        <FriendSelect friendData={friendData} setChat={setChat}/>

        <div id="chatLogFrame">

          <div id="chatLog">
            
            {chat.map((msg) => (
              <p key={msg.key}>{msg.message}</p>
            ))}

          </div>

          <SendMessage setChat={setChat}/>

        </div>

      </div>
    </>
  )
}

export default App
