
import React from 'react'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Input } from 'antd';
import { SearchOutlined } from '@mui/icons-material';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import { Avatar } from '@mui/material';
import { CaretDownFilled, NotificationFilled } from '@ant-design/icons';

export default function Navbar({open}) {
  return (
    <div style={{padding:"2.5vh 2vw 2.5vh 0" ,display:"flex",alignItems:"center", justifyContent :"space-between"}}>
        <div style={{display:"flex",alignItems:"center", justifyContent :"flex-start"}}>
            <p style={{margin:0}} className='paymentsHeader'>Payments</p>
            <div className='help' style={{display:"flex",alignItems:"center", justifyContent :"flex-start", marginLeft:"2vw"}}>
                <HelpOutlineIcon style={{fontSize:"large"}}/>
                <p style={{margin:0, marginLeft:"0.5vw"}}> How it works</p>
            </div>
        </div>
        <div>
            <Input
             className='Input'
             placeholder='Search features, tutorials, etc.'
             prefix = {<SearchOutlined/>}
            />
        </div>
        <div style={{display:"flex",alignItems:"center", justifyContent :"flex-start"}}>
        <Avatar sx={{ bgcolor: "#e6e6e4" ,width:50,height:50}}>
            <NotificationFilled style={{color:"#4c4c4b"}}/>
        </Avatar>
        <Avatar sx={{marginLeft:"1vw", bgcolor: "#e6e6e4" ,width:50,height:50}}>
            <CaretDownFilled style={{color:"#4c4c4b"}}/>
        </Avatar>
        </div>
    </div>
  )
}
