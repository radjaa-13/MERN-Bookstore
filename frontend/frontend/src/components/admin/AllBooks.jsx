import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Allbooks() {
  const [bookList, setBookList] = useState([]);
  const [message, setMessage] = useState(""); 

  useEffect(() => {
    const fetchBooks = async()=>{
        
        try {
          const  res = await fetch("http://localhost:5000/admin/getbooks",{
            method:"POST",
             credentials: "include",
            headers:{
              'Content-Type': 'application/json'
            }
          })
if(res.status===401 || res.status === 403){
               setError('Not authorized')
             navigate("/", { replace: true });
             return
          }

           if (!res.ok) {
             throw new Error(`HTTP error! status: ${res.status}`)
                }

          const data = await res.json()
          setBookList(Array.isArray(data) ? data : [])
            } catch (error) {

         console.error("Error fetching books:", error);
         setError(error.message)
        navigate("/", { replace: true });
        
      }finally {
            setLoading(false)
            }
      }
        if(isAuthenticated && isAdmin){
          fetchBooks()
        }else {
          console.log('Not authenticated or not admin')
          navigate("/", { replace: true });
        }
      
    },[navigate, isAuthenticated, isAdmin])

     if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }

    
    

  
  return (
    <div className='mt-10'>
      <h3 className='my-6'>Featured Products</h3>

      {message && (
        <div className="mb-4 p-3 rounded bg-green-100 text-green-700 text-center">
          {message}
        </div>
      )}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

        {bookList?.map((book) => (
          <div
            key={book._id}
            className='flex flex-col items-center p-4 rounded-lg border'
          >
            <Link to={`/bookDetails/${book._id}`}>
              <img
                className='w-full h-[250px] object-contain'
                src={`http://localhost:5000/images/${book.coverImage}`}
                alt={book.title}
              />

              <h6 className='text-center my-3'>{book.title}</h6>
            </Link>

            <span className='text-gray-400'>{book.author}</span>
            <strong className='text-[#F86D72]'>{book.price} $</strong>

            <div className='text-sm text-gray-500'>
              Stock: {book.stock}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Allbooks;