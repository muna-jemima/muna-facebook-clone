// import React from 'react'
// import "./Header.css"
// import SearchIcon from "@mui/icons-material/Search";
// import HomeIcon from "@mui/icons-material/Home";
// import FlagIcon from"@mui/icons-material/Flag";
// import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
// import StorefrontOutlinedIcon from "@mui/icons-material/Storefront";
// import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
// import Avatar from "@mui/material/Avatar";
// // import Avatar from "@mui/icons-material/Avatar"
// import AddIcon from "@mui/icons-material/Add"
// import ForumIcon from "@mui/icons-material/Forum";
// import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


import React from 'react'
import "./Header.css"

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";



// import "./Header.css"





 function Header() {
      return (
    <div className='header'>

        <div className='header_left'>
           <img src='https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg'alt=""/>
           {/* <img src='<img 
             src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" 
             alt="facebook"
             />' alt=''/> */}
          
          <div className='header_input'>
            <SearchIcon />
            <input placeholder='Search Facebook' type="text" />

          </div>
        </div>

        <div className='header_center'> 
          <div className='header_option
          header_option--active'>
            <HomeIcon fontSize="large"/>
          </div>

          <div className='header_option'>
            <FlagIcon fontSize="large"/>
          </div>

          <div className='header_option'>
            <SubscriptionsOutlinedIcon fontSize="large"/>
          </div>

          <div className='header_option'>
            <StorefrontOutlinedIcon fontSize="large"/>
          </div>

          <div className='header_option'>
            <SupervisedUserCircleIcon fontSize="large"/>
          </div>

        </div>

        <div className='header_right'>
          <div className='header_info'>
            <Avatar/>
            <h4>JEMIMA</h4>

          </div>

          <IconButton>
          <AddIcon/>
          </IconButton>

          <IconButton>
          <ForumIcon/>
          </IconButton>

          <IconButton>
          <NotificationsActiveIcon/>
          </IconButton>

          <IconButton>
          <ExpandMoreIcon/>
          </IconButton>

              

        </div>

    </div>
  )
}

export default Header;