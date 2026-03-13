import React from 'react'
import "./Sidebar.css"
import SBrow from "./SBrow"
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { ExpandMoreOutlined } from '@mui/icons-material';

function Sidebar() {
  return (
    <div className='siderbar'>
       <SBrow src= "https://media.licdn.com/dms/image/v2/D4D22AQEe6l3MlLOlrw/feedshare-shrink_1280/feedshare-shrink_1280/0/1729549727142?e=1774483200&v=beta&t=_n_tD-jzInovthIqANqZgbWgxg9Uo2_KlgErnPivPTY" title="Jemima" />
       <SBrow src= "https://media.licdn.com/dms/image/v2/D4D22AQEe6l3MlLOlrw/feedshare-shrink_1280/feedshare-shrink_1280/0/1729549727142?e=1774483200&v=beta&t=_n_tD-jzInovthIqANqZgbWgxg9Uo2_KlgErnPivPTY" title="Jemima" />
        <SBrow Icon={LocalHospitalIcon } title="COVID-19 information Center" />
        <SBrow Icon={EmojiFlagsIcon} title="Pages"/>
          <SBrow  Icon={PeopleIcon}title="Friends"/>
         <SBrow Icon={ChatIcon} title="Messnger"/>
          <SBrow Icon={StorefrontIcon} title="Marketplace"/>
          <SBrow Icon={VideoLibraryIcon} title="Vidoes"/>
          <SBrow Icon={ExpandMoreOutlined} title="Marketplace"/>



    </div>
    
  );
}

export default Sidebar