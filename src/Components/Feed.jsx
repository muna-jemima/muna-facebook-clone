import React from 'react'
import "./Feed.css"
import StoryReel from './StoryReel'
import MessageSender from "./MessageSender"
import Post from "./Post";
function Feed({profilePic,image,username, timestamp, message,id}) {
  return (
    <div className='feed'>
        <StoryReel/>
        <MessageSender />

    

        <Post key={id}
        profilePic={profilePic}
        message={message} 
        timestamp={timestamp}
        username={username}
        />
         <Post />
          <Post />
    </div>
  )
}

export default Feed