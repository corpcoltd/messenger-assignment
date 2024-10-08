import { useState, useEffect } from 'react'
import './App.css'

function FriendSelect({friendData, setChat, setSelectedUser}) {

  const handleButtonClick = (friend) => {

    setSelectedUser(friend.id);
    setChat(friend.chat);

  }

  return(

    <div id="friendSideBar">

      {friendData.map(friend => (

        <button 
          onClick={() => handleButtonClick(friend)}
          key={friend.id}>
            {friend.name}
          </button>

      ))}

    </div>

  )

}

function SendMessage({setChat, setFriendData, selectedUser}) {

  const [inputText, setInputText] = useState("");

  const handleSend = () => {

    const newMessage = {key: Date.now(), id: 0, message: inputText}
    setChat(pChat => [...pChat, newMessage]);

    setFriendData(pFriendData =>
      pFriendData.map(friend =>
        friend.id === selectedUser
          ? {...friend, chat: [...friend.chat, newMessage]}
          : friend
      )
    );

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
      >Send</button>
    </div>

  )

}

function App() {

  // CHAT
  const [chat, setChat] = useState([]);

  // FRIENDS
  const [selectedUser, setSelectedUser] = useState(null);  

  const [friendData, setFriendData] = useState([
    {id: 0, name: "You", chat: [{key: 0, id: 0, message: "Remember to buy milk"}]},
    {id: 1, name: "Bob", chat: [{key: 0, id: 1, message: "Hello!"}, {key: 1, id: 1, message: "This is Bob!"}]},
    {id: 2, name: "Alice", chat: [{key: 0, id: 2, message: "..."}]}
  ]);

  const friendName = {
    0: "You",
    1: "Bob",
    2: "Alice"
  };

  useEffect(() => {

    if (friendData.length > 0 && selectedUser === null) {

      const defaultUser = friendData.find(friend => friend.id === 0);

      if (defaultUser) {
        setSelectedUser(defaultUser.id);
        setChat(defaultUser.chat);
      }

    }
  }, [friendData, selectedUser]);

  return (
    <>
      <div id="appFrame">

        <FriendSelect friendData={friendData} setChat={setChat} setSelectedUser={setSelectedUser}/>

        <div id="chatLogFrame">

          <div id="chatLog">
            
            {chat.map((msg) => {

              const msgName = friendName[msg.id];

              return <p key={msg.key}>
                <b>{msgName}:</b> {msg.message}
              </p>

            })}

          </div>

          <SendMessage setChat={setChat} setFriendData={setFriendData} selectedUser={selectedUser}/>

        </div>

      </div>
    </>
  )
}

export default App
