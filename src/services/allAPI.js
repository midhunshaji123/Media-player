import SERVERURL from "./serverURL";
import commonAPI from "./commonAPI";

// saveVideoAPI - use POST method, used by add component , to Url : http://localhost:3000/uploadvideos
export const saveVideoAPI = async (videoDetails) => {
  return await commonAPI("POST", `${SERVERURL}/uploadvideos`,videoDetails)
}


// getAllVideoAPI - use GET method, used by view component , to Url : http://localhost:3000/uploadvideos
export const getAllVideoAPI = async () => {
    return await commonAPI("GET", `${SERVERURL}/uploadvideos`,"");
  };


  // saveHistoryAPI - use POST method, used by videoCard component , to Url : http://localhost:3000/history
export const saveHistoryAPI = async (historyDetails) => {
  return await commonAPI("POST", `${SERVERURL}/history`, historyDetails)
}

// getAllHistoryAPI - use GET method, used by history component , to Url : http://localhost:3000/history
export const getAllHistoryAPI = async () => {
  return await commonAPI("GET", `${SERVERURL}/history`,"");
};

// deleteHistoryAPI - delete http request to http://localhost:3000/history from history when user clicked on delete button
export const deleteHistoryAPI = async (id) => {
  return await commonAPI("DELETE", `${SERVERURL}/history/${id}`,{})
};


// deleteVideoAPI - delete http request to http://localhost:3000/uploadvideos from videoCard when user clicked on delete button
export const deleteVideoAPI = async (id) => {
  return await commonAPI("DELETE", `${SERVERURL}/uploadvideos/${id}`,{})
};


  // saveCategoryAPI - use POST method, used by category component , to Url : http://localhost:3000/categories
  export const saveCategoryAPI = async (categoryDetails) => {
    return await commonAPI("POST", `${SERVERURL}/categories`, categoryDetails)
  }


  // getAllCategoryAPI - use GET method, used by category component , to Url : http://localhost:3000/categories
export const getAllCategoryAPI = async () => {
  return await commonAPI("GET", `${SERVERURL}/categories`," ");
};


// deleteCategoryAPI - delete http request to http://localhost:3000/categories from category when user clicked on delete button
export const deleteCategoryAPI = async (id) => {
  return await commonAPI("DELETE", `${SERVERURL}/categories/${id}`,{})
};


// updateCategoryAPI - PUT http request to http://localhost:3000/categories/id from category when user drops a video over category 
export const updateCategoryAPI = async (categoryDetails) => {
  return await commonAPI("PUT", `${SERVERURL}/categories/${categoryDetails?.id}`,categoryDetails)
};

export default saveVideoAPI