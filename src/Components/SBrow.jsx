import React from 'react'
import "./SBrow.css"
import  {Avatar}  from '@mui/material';

function SBrow({ src, Icon,title}) {
  return (
    <div className='SBrow'>
      {src && <Avatar src={src}/>}
      {Icon && <Icon />}

      <h4>{title}</h4>
    </div>
  )
}

export default SBrow;
