import { useLoaderData } from "react-router-dom"


const SingleBook = () => {
    const{_id,bookTitle} =useLoaderData();
  return (
    <div className="mt-28 px-4 lg:px-24">
        <img src="imageURL" alt="bookTitle" className="w-full h-64 object-cover rounded-lg" />
        <h1>{bookTitle}</h1>
      
    </div>
  )
}

export default SingleBook
