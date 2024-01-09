import { useTheme } from '@emotion/react';
import { Avatar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled } from '@mui/material'
import React, { useState } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import LocalPlayOutlinedIcon from '@mui/icons-material/LocalPlayOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import '../App.css';
import Navbar from '../Components/Navbar';
import MainBody from '../Components/MainBody';
import { red } from '@mui/material/colors';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );
export default function Payments() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const IconArray = [<HomeOutlinedIcon/>, <AssignmentOutlinedIcon/>, <GridViewOutlinedIcon/>, <LocalShippingOutlinedIcon/>, <CampaignOutlinedIcon/>, <SignalCellularAltOutlinedIcon/>, <PaymentsOutlinedIcon/>, <NearMeOutlinedIcon/>, <LocalPlayOutlinedIcon/>,<PeopleAltOutlinedIcon/>, <ColorLensOutlinedIcon/>, <ElectricBoltOutlinedIcon/>]
  return (
    <Box sx={{ display: 'flex' ,justifyContent:"flex-start"}}>
        
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                width:"15%",
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  boxSizing: 'border-box',
                  background: "#202641"
                },
                
              }}
              variant="persistent"
              anchor="left"
              open={open}
            className='navigationDrawer'
        >
            <div className='DrawerHeader'>
                <Avatar src="data:image/png;base64,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" variant="rounded">
                </Avatar>
                <div className='HeaderDetails'>
                    <p className='HeaderDetailsName' style={{margin:"0"}}>Nishyam</p>
                    <p className = 'HeaderDetailsLink' style={{margin:"0"}}>Visit store</p>
                </div>
                <ExpandMoreIcon sx={{color:"white", fontSize:"xx-large", marginLeft:"2vw"}}/>
            </div>
            <List>
                {/* {console.log(window.location.pathname)} */}
            {['Home','Orders','Products','Delivery','Marketing','Analytics','Payments','Tools','Discounts','Audiance','Appearance','Plugins'].map((text, index) => (
                <ListItem key={text} disablePadding>
                <ListItemButton className={text === "Payments"? "selectedTabBtn":"NotSelectedTabBtn"}>
                    <ListItemIcon className={text === "Payments"? "selectedTab": "NotSelectedTab"}>
                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                        {IconArray[index]}
                    </ListItemIcon>
                    <ListItemText className={text === "Payments"? "selectedTab": "NotSelectedTab"} primary={text} />
                </ListItemButton>
                </ListItem>
            ))}
            </List>
            <div className='availableCredits'>
               <AccountBalanceWalletOutlinedIcon sx={{fontSize:"xx-large"}}/>
               <div>
                    <p className='availableCreditsHeader' style={{margin:"0" , marginLeft:"1vw"}}>Available credits</p>
                    <p style={{margin:"0", marginLeft:"1vw"}}>222.10</p>
                </div> 
            </div>
        </Drawer>
        <div style={{width:"100%"}}>
            <Navbar/>
            <Divider />
            <MainBody/>
        </div>
        
    </Box>
  )
}
