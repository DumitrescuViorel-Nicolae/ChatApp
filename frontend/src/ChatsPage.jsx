import React from 'react'
import {useMultiChatLogic, MultiChatSocket, MultiChatWindow} from 'react-chat-engine-advanced'
const ChatsPage = (props) => {

  const chatProps = useMultiChatLogic('5288770f-4842-4374-9079-b8d957899598', props.user.username, props.user.secret);


  return (
    <div style={{height: '100vh'}}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{height:'100%'}} />
    </div>
  )
}

export default ChatsPage