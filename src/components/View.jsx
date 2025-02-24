import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import saveVideoAPI, { getAllVideoAPI, updateCategoryAPI } from '../services/allAPI'
import Category from './Category'

const View = ({addresponseFromHome,deleteResponseFromCategory,setDeleteResponseFromView}) => {


  const [deleteVideoResponseFromVideoCard,setDeleteVideoResponseFromVideoCard] = useState("")


  const [allVideos,setAllVideos] = useState([])


  useEffect(()=>{
    getAllVideos()
  },[addresponseFromHome,deleteVideoResponseFromVideoCard,deleteResponseFromCategory])

  console.log(allVideos);
  

const getAllVideos = async ()=>{
  try{
const result = await getAllVideoAPI()
  console.log(result);

  if(result.status>=200 && result.status<300){
    setAllVideos(result.data)
  }
  
}catch(err){
console.log(err);

}

}

const dragOverView = (e)=>{
  e.preventDefault()
}

const CategoryVideoDropOverView = async (e)=>{
console.log("Inside CategoryVideoDropOverView");
 
 const {video,categoryDetails }=JSON.parse(e.dataTransfer.getData("dragData"))
 console.log(video,categoryDetails);

const updatedCategoryVideoList = categoryDetails?.allVideos?.filter(item=>item.id!=video?.id)
const updatedCategory = {...categoryDetails,allVideos:updatedCategoryVideoList}
console.log(updatedCategory);

 // Updating category by delete video from category using api
const result = await updateCategoryAPI(updatedCategory)

//  use state lifting to comminucate data from view to category
setDeleteResponseFromView(result)
// use API call to upload Video
saveVideoAPI(video)
// call getAllVideos function
getAllVideos()
}



  return (
    <>
    
    <Row droppable="true" onDragOver={dragOverView}  onDrop={e=>CategoryVideoDropOverView(e)}> 
      {
        allVideos?.length>0?
        allVideos?.map(video=>(
          <Col className='mb-2' sm={12} md={6} lg={4}>
          <VideoCard setDeleteVideoResponseFromVideoCard={setDeleteVideoResponseFromVideoCard} displayData={video} />
          </Col>
        ))

        :
        <div className='fw-bolder text-danger fs-5'>No Videos Uploaded yet!!!</div>
      }
     
    </Row>
    
    </>
  )
}

export default View