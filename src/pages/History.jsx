import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getAllHistoryAPI, saveHistoryAPI } from '../services/allAPI'

const History = () => {

const [allVideoHistory,setAllVideoHistory] = useState([])

useEffect(()=>{
    getAllHistory()
},[])
console.log(allVideoHistory);



const getAllHistory = async ()=>{
    try{
const result = await getAllHistoryAPI()
if(result.status>=200 && result.status<300){
    setAllVideoHistory(result.data)
}else{
    console.log(result);
    
}
        
    }catch(err){
        console.log(err);  
    }
}


const removeHistory = async (id)=>{

    try{
         await deleteHistoryAPI(id)
         getAllHistory()
    }catch(err){
        console.log(err);
    }
}
  
  return (
    <>

    <div style={{paddingTop:'100px'}}>
<div className='container d-flex justify-content-between'>
<h1>Watch History</h1>
<Link to={'/home'}>Back to Home</Link>
</div>
<table className='table my-5'>
<thead>
    <tr>
        <th>#</th>
        <th>caption</th>
        <th>Link</th>
        <th>Time stamp</th>
        <th>...</th>
    </tr>
</thead>
<tbody>
{
allVideoHistory?.length>0?
allVideoHistory?.map((videoDetails,index)=>(

    <tr key={videoDetails?.id} >
    <td>{index+1}</td>
    <td>{videoDetails?.caption}</td>
    <td><a href={videoDetails?.youtubelink}>{videoDetails?.youtubelink}</a></td>
    <td>{videoDetails?.timeStamp}</td>
    <td><button className='btn' onClick={()=>removeHistory(videoDetails?.id)}><i class="fa-solid fa-trash text-danger"></i></button></td>
</tr>
))
:
<div className='fw-bolder text-danger'>You didnt watch any video</div>
}
</tbody>
</table>

    </div>
    
    
    </>
  )
}

export default History