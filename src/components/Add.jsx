import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import saveVideoAPI from '../services/allAPI'





const Add = ({setAddresponseFromHome}) => {


  const [invalidYoutubeLink,setIvalidYoutubeLink] = useState(false)
  const [addingVideoDetails,setAddingVideoDetails] = useState({
    caption:"",imgUrl:"",youtubeLink:"" 
  })

  console.log(addingVideoDetails);
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // Youtube Link extraction
  const extractingEmbedLinkFromYoutubeLink = (userInputYoutubeLink)=>{
          // steps for creating embed link
          if(userInputYoutubeLink.includes("https://www.youtube.com/watch?v=")){
            
            console.log(userInputYoutubeLink.split("v=")[1].slice(0,11));
            const videoId =  userInputYoutubeLink.split("v=")[1].slice(0,11)
            setIvalidYoutubeLink(false)
            setAddingVideoDetails({...addingVideoDetails,youtubeLink: `https://www.youtube.com/embed/${videoId}`})

          }else{
            setIvalidYoutubeLink(true)
          }
  }



  // Handling upload videos
  const handleUploadVideo = async ()=>{
// Destructuring :
const {caption, imgUrl, youtubeLink} = addingVideoDetails
      
if(caption && imgUrl && youtubeLink){

  try{
     const result = await saveVideoAPI(addingVideoDetails)
    
     if(result.status>=200 && result.status<300){
alert("Video Added succesfully!!!")
handleClose()
// pass the result to view compoent
setAddresponseFromHome(result) 

     }  
     console.log(result);

     
  }catch(err){
    console.log(err);
    
  }
  

}else{
  alert("Please fill the form!!!")
}

  }



  return (
    <>
      <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
      </div>
      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Uplaod Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border rounded p-3'>
            <FloatingLabel className='mt-2' controlId="floatingCaption" label="Video Caption">
              <Form.Control onChange={e=>setAddingVideoDetails({...addingVideoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
            </FloatingLabel>

            <FloatingLabel className='mt-2' controlId="floatingUrl" label="Video Image Url">
              <Form.Control onChange={e=>setAddingVideoDetails({...addingVideoDetails,imgUrl:e.target.value})} type="text" placeholder="Video Image URL" />
            </FloatingLabel>

            <FloatingLabel className='mt-2' controlId="floatingLink" label="Video Youtube Link">
              <Form.Control  onChange={e=>extractingEmbedLinkFromYoutubeLink(e.target.value)} type="text" placeholder="Video Youtube Link" />
            </FloatingLabel>
            {
              invalidYoutubeLink && 
              <div className='text-danger dw-bolder'>
                Invalid Youtube Link....
              </div>
            }
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUploadVideo} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add