import { useState } from 'react'
import './App.css'
import Courses from './Component/Courses/Courses'
import Header from './Component/Header/Header'
import Cart from './Component/Cart/Cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [selectCourses, setSelectCourses] = useState([]);
  const [credit, setCredit] = useState(0);
  const [remaining, setRemaining] = useState(20);
  const [loading, setLoading] = useState('flex')

  const handleSelectCourses = course => {
    const have = selectCourses.find(item => item.id === course.id)
    if(have){
      toast.error('Already added', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else{
      const nowCredit =  credit + course.credit_hours
      if(nowCredit>20){
        toast.error(`Your credit remaining ${remaining}hr`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
      else{
        toast.success('👌 Successfully added', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        setSelectCourses([...selectCourses , course])
        setRemaining(remaining - course.credit_hours)
        setCredit(credit + course.credit_hours)
      }
    }
  }

  return (
    <>
    <div className={`fixed h-screen w-screen bg-white z-50 justify-center items-center bg-opacity-90 ${loading}`}>
      <span className="loading loading-dots loading-lg"></span>
    </div>
    <div className='p-5 md:px-[5%]'>
      <Header/>
      <div className="flex flex-col sm:flex-row justify-center gap-5 my-10">
        <Courses
          handleSelectCourses={handleSelectCourses}
          setLoading={setLoading}
        />
        <Cart
          selectCourses={selectCourses}
          credit={credit}
          remaining={remaining}
        />
        <ToastContainer />
      </div>
    </div>
    </>
  )
}

export default App
