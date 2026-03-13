import React from 'react'
import "./Post.css";
import { Avatar } from '@mui/material'


function Post({profilePic,image,username, timestamp, message}) {
  return (
    <div className="post">

    <div className="post_top">
        <Avatar src={profilePic}
        className="post_avatar"/>
        
        <div className="post_topInfo">
            <h3>{username}</h3>
            <p>{timestamp}</p>
        </div>
        </div>
        <div className="post_botton">
            <p>{message}</p>
        </div>
  
    <div className="post_image">
        <img src={image} alt=""/>
        </div>
    </div>
  )
}

export default Post



// import React from 'react'
// import "./Post.css";
// import { Avatar } from '@mui/material'

// function Post({ profilePic, image, username, timestamp, message }) {
//   return (
//     <div className="post">

//       <div className="post_top">
//         <Avatar src={profilePic} className="post_avatar"/>

//         <div className="post_topInfo">
//           <h3>{username}</h3>
//           <p>{timestamp}</p>
//         </div>

//       </div>

//     </div>
//   )
// }

// export default Post