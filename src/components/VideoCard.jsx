import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { deleteVideoAPI, saveHistoryAPI } from '../services/allAPI';



const VideoCard = ({displayData,setDeleteVideoResponseFromVideoCard,insideCategory}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    // Modal show
    setShow(true);
    // store history i json
    const {caption,youtubeLink} = displayData
    const sysDateTime = new Date()
    console.log(sysDateTime);
const timeStamp = sysDateTime.toLocaleString('en-us',{timeZoneName:"short"})
  
const historyDetails = {caption,youtubeLink,timeStamp}
try{
  await saveHistoryAPI(historyDetails)
}catch(err){
console.log(err);

}

}

const removeVideo = async (id)=>{

  try{
   const result = await deleteVideoAPI(id)
   setDeleteVideoResponseFromVideoCard(result)
  }catch(err){
    console.log(err);
    
  }

}


const videoCardDragStarted = (e,dargVideoDetails)=>{
  console.log("Inside Drag",dargVideoDetails?.id);

  // How to share data using event drag start
  e.dataTransfer.setData("videoDetails",JSON.stringify(dargVideoDetails))
  
}




  return (
    <>
        <Card draggable={true} onDragStart={e=>videoCardDragStarted(e,displayData)} style={{ width: '250px'}}>
      <Card.Img onClick={handleShow} variant="top" height={"200px"} src={displayData?.imgUrl} />
      <Card.Body>
        <Card.Text className='d-flex justify-content-between'>
         <p>{displayData?.caption}</p>
         {
           !insideCategory && 
          <button onClick={()=>removeVideo(displayData?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
         }
        </Card.Text>
      </Card.Body>
    </Card> 


{/* Modal */}


    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="480" src={`${displayData?.youtubeLink}?autoplay=1`} title="Interstellar - Trailer - Official Warner Bros. UK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard