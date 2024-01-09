import { KeyboardArrowLeft, KeyboardArrowRight, SearchOutlined } from '@mui/icons-material'
import { Input, Table , Pagination} from 'antd'
import React from 'react'
import Button from '@mui/material/Button';
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Constants } from '../Utils/constants';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
      return <Button variant='outlined' className='PageBtn' style = {{textTransform:"capitalize", marginRight:"3vw",marginTop:"-4px"}}><KeyboardArrowLeft style={{marginTop:"-1px"}}/>Previous</Button>;
    }
    if (type === 'next') {
      return <Button variant='outlined' className='PageBtn' style = {{textTransform:"capitalize", marginLeft:"3vw", marginTop:"-4px"}}>Next<KeyboardArrowRight/></Button>;
    }
    return originalElement;
  };

export default function MainBody() {
 const columns = [
    {
        title : <p className='ColumnHeader' style={{margin:0}}>Order ID</p>,
        dataIndex : 'Order ID',
        render: (text) => (<p className='columnId' style={{margin:0, textAlign:"left"}}>{text}</p>)
    },
    {
        title : <div style={{display:"flex", justifyContent:"flex-start", alignItems:"center"}}><p className='ColumnHeader' style={{margin:0}}>Order date </p> <ArrowDropDownIcon style={{ marginLeft:"0.5vw"}}/></div>,
        dataIndex : 'OrderDate',
        render: (text) => (<p className='columnData' style={{margin:0, textAlign:"left"}}>{text}</p>)
    },
    {
        title : <p className='ColumnHeader' style={{margin:0,textAlign:"right"}}>Order amount</p>,
        dataIndex : 'Order Amount',
        render: (text) => (<p className='columnData' style={{margin:0, textAlign:"right"}}>{text}</p>)
    },
    {
        title : <div style={{display:"flex", justifyContent:"flex-end", alignItems:"center"}}><p className='ColumnHeader' style={{margin:0}}>Transaction fees </p><HelpOutlineOutlinedIcon style={{fontSize:"large", marginLeft:"0.5vw", color:"#1e1e1e"}}/></div>,
        dataIndex : 'Transaction Fees',
        render: (text) => (<p className='columnData' style={{margin:0, textAlign:"right"}}>{text}</p>)
    }
 ]
 const dummyData = Constants.data;
  return (
    <div style={{padding:"2vh 2vw 2vh 1.55vw", backgroundColor:"#fafaf7", paddingBottom:"5vh"}}>
        <div style={{display:"flex",alignItems:"center", justifyContent :"space-between"}}>
            <p className='overview' style={{margin:"0"}}>Overview</p>
            <select name="sort" id="sort" defaultValue={"month"} style={{padding:"1vh 1vw"}}>
                <option value="current">Current</option>
                <option value="month">Last Month</option>
                <option value="week">Last Week</option>
            </select>
        </div>
        <div style={{display:"flex",alignItems:"center", justifyContent:"space-between", marginTop:"2vh",marginBottom:"3vh"}}>
            <div className='card' style={{width:"50%",backgroundColor:"white",padding:"2vh 1vw",marginRight:"1vw"}}>
                <p className='cardHeader'>Online orders</p>
                <p className='cardValue'>231</p>
            </div>
            <div className='card' style={{width:"50%",backgroundColor:"white",padding:"2vh 1vw",marginLeft:"1vw"}}>
                <p className='cardHeader'>Amount received</p>
                <p className='cardValue'>&#8377; 23,92,312.19</p>
            </div>
        </div>
        <div>
            <p className='overview' style={{margin:"0"}}>Transactions | This month</p>
        </div>
        <div style={{backgroundColor:"white",padding:"2vh 1vw", marginTop:"3vh", borderRadius:"8px" ,boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"}}>
            <div style={{display:"flex",alignItems:"center", justifyContent :"space-between"}}>
                <Input
                className='InputTable'
                placeholder='Search features, tutorials, etc.'
                prefix = {<SearchOutlined/>}
                />
                <div>
                    <Button className='sortBtn' variant="outlined">Sort <SwapVertOutlinedIcon/></Button>
                    <Button className='Download' variant="outlined" style={{width:"1vw",paddingLeft:"0",paddingRight:"0"}}><FileDownloadOutlinedIcon/></Button>
                </div>
            </div>
            <Table
                style={{marginTop:"2vh", marginBottom:"4vh"}}
                columns={columns}
                dataSource={dummyData}
                pagination = {false}
            />
            <Pagination className='Pagination' style={{textAlign:"center",marginBottom:"2vh"}} total={180} itemRender={itemRender} />

        </div>
        <div></div>
    </div>
  )
}
