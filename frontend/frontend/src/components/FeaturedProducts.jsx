import React from 'react'

function FeaturedProducts() {
     const [bookList, setBookList] = useState([]);
     useEffect(() => {
    fetch("http://localhost:5000/books/getBooks")
      .then(res => res.json())
      .then(data => setBookList(data))
      .catch(err => console.error("Error fetching books:", err));
  }, []);
  const featuredBooks = bookList?.filter(book => book.isFeautred === true); 
  return (
    <div>
        <h3>feautured products </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'> </div>
       {featuredBooks?.slice(0, 4).map((book) => (
        
          <div key={book._id} className='flex flex-col items-center  p-4 rounded-lg'>
            <Link to={`/bookDetails/${book?._id}`}>
            <img className='w-full h-[450px] object-contain' src={`http://localhost:5000/images/${book.coverImage}`} />
           
            <h6 className='text-center my-3'>{book.title}</h6>
            </Link>
            <span className='text-gray-400'>{book?.author}</span>
            <strong className='text-[#F86D72]'>{book?.price} $</strong>
            
            <div className='text-sm text-gray-500'>Stock: {book.stock}
              
            </div>

          </div>
           

  );
}

export default FeaturedProducts