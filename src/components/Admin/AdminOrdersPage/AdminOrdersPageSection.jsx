import React from 'react'
import AdminOrderList from './AdminOrderList'
import Loader from "../../../pages/Loader";
import {getAllOrders} from "../../../actions/orderAction"
import {useDispatch,useSelector} from "react-redux"
import {useEffect,Fragment,useState} from "react"

const AdminOrdersPageSection = () => {

  const dispatch = useDispatch()

  const[searchKey,setSearchKey] = useState('')
  const [page, setPage] = useState(1);

  const { loading,totalOrder } = useSelector(
      (state) => state.allOrders
  );

  const { loading:newLoading } = useSelector(
    (state) => state.newOrder
);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        search();
    }
  };

  function search(){
    dispatch(getAllOrders(page,searchKey))
  }

  function setNextPage(){
    if(page*5 < totalOrder){
      setPage(page+1)
    }
  }

  function setPrevPage(){
    if(page>1){
      setPage(page-1) 
    }
  }

  useEffect(()=>{
    dispatch(getAllOrders(page))
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  },[dispatch,page])

  useEffect(() => {
    
  }, [newLoading]);

  return (
    <Fragment>
    {loading || newLoading ? (
      <Loader />
    ) : (
        <Fragment>
          <div>
            {/* Heading */}

            <div className="mb-10 pb-5 border-b-[1px] border-b-slate-300">
              <h2 className=" text-4xl font-semibold text-gray-600">Orders</h2>
            </div>

            {/* search & create services */}

            <div className=" mb-10">

              {/* Search Box */}

              <div className="flex">

                <input type="text" placeholder="Search Orders" className="bg-white shadow-lg rounded-2xl p-3 mr-2 w-full focus:outline-none" value={searchKey} onChange={(e)=>setSearchKey(e.target.value)} onKeyDown={handleKeyDown}/>
                <button
                    className="text-[#397f77] text-md font-bold px-5 rounded-full bg-[#397f77] text-white"
                    onClick={search}
                >
                    Search
                </button>

              </div>

            </div>

            {/* Services */}

            <div className="">
              <AdminOrderList />
            </div>
            
            {/* Pagination */}

            <div className='w-fit mx-auto'>
              <div className='flex justified-center'>
                <span><button className=" text-[#397f77]  text-md font-bold px-5 hover:underline" onClick={setPrevPage}>Prev</button></span>
                <span className='px-2'> <h1>{page}</h1></span>
                <span><button className=" text-[#397f77]  text-md font-bold px-5 hover:underline" onClick={setNextPage}>Next</button></span>
                
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>


  )
}

export default AdminOrdersPageSection