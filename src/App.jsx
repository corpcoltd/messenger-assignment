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

function SendMessage({setChat, chat}) {

  const [inputText, setInputText] = useState("");

  const handleSend = () => {

    // console.log("Message: " + inputText);

    const newMessage = {id: 0, message: inputText}
    setChat(pChat => [...pChat, newMessage]);

    // console.log(chat);

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

        <FriendSelect friendData={friendData} />

        <div id="chatLogFrame">

          <div id="chatLog">
            
            {chat.map((msg) => (
              <p key={msg.id}>{msg.message}</p>
            ))}

          </div>

          <SendMessage setChat={setChat} chat={chat}/>

        </div>

      </div>
    </>
  )
}

export default App
