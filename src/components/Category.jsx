import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { deleteCategoryAPI, deleteVideoAPI, getAllCategoryAPI, saveCategoryAPI, updateCategoryAPI } from '../services/allAPI'
import VideoCard from './VideoCard'




const Category = ({setDeleteResponseFromCategory,deleteResponseFromView}) => {

  const [allCategories, setAllCategories] = useState([])


  const [categoryName, setCategoryName] = useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getAllCategories()
  }, [deleteResponseFromView])

  const handleSaveCategory = async () => {

    if (categoryName) {
      const categoryDetails = { categoryName, allVideos: [] }
      try {
        const result = await saveCategoryAPI(categoryDetails)
        if (result.status >= 200 && result.status < 300) {
          alert("Category created")
          getAllCategories()
          handleClose()
        }
      } catch (err) {
        console.log(err);

      }
    } else {
      alert("Please provide a category Name")
    }

  }


  const getAllCategories = async () => {
    try {
      const result = await getAllCategoryAPI()
      if (result.status >= 200 && result.status < 300) {
        setAllCategories(result.data)
      }
    } catch (err) {
      console.log(err);

    }
  }


  const removeCategory = async (id)=>{
    try{
         await deleteCategoryAPI(id)
         getAllCategories()
    }catch(err){
      console.log(err);
      
    }
  }


 const dragOverCategory = (e)=>{
  e.preventDefault()
 }


  const videoCardDropOverCategory = async (e,categoryDetails)=>{
console.log(categoryDetails);
const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))

console.log(videoDetails);
// update category by adding video to allVideos

categoryDetails.allVideos.push(videoDetails)
console.log(categoryDetails);

// api call to make update the category

await updateCategoryAPI(categoryDetails)
getAllCategories()
const result = await deleteVideoAPI(videoDetails?.id)

setDeleteResponseFromCategory(result)

  }


const categoryVideoDragStarted =async (e,dragVideoDetails,categoryDetails)=>{
  console.log("Inside categoryVideoDragStarted");
let dragData = {video : dragVideoDetails,categoryDetails}
e.dataTransfer.setData("dragData",JSON.stringify(dragData))
}


  return (
    <>
      <div className='d-flex justify-content-around align-items-center'>
        <h3>All Categories</h3>
        <button onClick={handleShow} className='btn btn-info rounded-circle fw-bolder ms-3 fs-5'>+</button>
      </div>


      {/* Display all categories */}
      <div className='container-fluid p-3 m-3'>
        {/* single category view */}
       {
        allCategories?.length>0?
        allCategories?.map(categoryDetails=>(

        <div droppable="true" onDragOver={dragOverCategory} onDrop={e=>videoCardDropOverCategory(e,categoryDetails)} key={categoryDetails?.id} className='border rounded mb-3'>
        <div className='d-flex justify-content-between'>
          <h5>{categoryDetails?.categoryName}</h5>
          <button onClick={()=>removeCategory(categoryDetails?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
        </div>

        {/* Display category Video */}
        <div className='row mt-2'>
{

  categoryDetails?.allVideos?.length>0 && 
  categoryDetails?.allVideos?.map(video=>(
    <div draggable={true} onDragStart={e=>{categoryVideoDragStarted(e,video,categoryDetails)}} key={video?.id} className='col-lg-4'>
    {/* Video Card */}
     <VideoCard insideCategory={true} displayData={video}/>
     
  </div>
  ))
}
        </div>
      </div>
        ))

        :
        <div className='fw-bolder text-danger fs-5'>No Categories added yet</div>
    }

      </div>



      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingCategoryName" label="Category Name">
            <Form.Control onChange={e => setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSaveCategory} className='btn btn-info' variant="primary" >
            Add
          </Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}

export default Category