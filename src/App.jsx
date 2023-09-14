import { useState } from 'react'
import './App.css'
import Courses from './Component/Courses/Courses'
import Header from './Component/Header/Header'
import Cart from './Component/Cart/Cart'

function App() {
  const [selectCourses, setSelectCourses] = useState([])

  const handleSelectCourses = course => {
    const have = selectCourses.find(item => item.id === course.id)
    if(have){
      return alert('already added')
    }
    else{
      setSelectCourses([...selectCourses , course])
    }
  }

  return (
    <div className='p-5 md:px-[5%]'>
      <Header/>
      <div className="flex justify-center gap-5 my-10">
        <Courses
          handleSelectCourses={handleSelectCourses}
        />
        <Cart
          selectCourses={selectCourses}
        />
      </div>
    </div>
  )
}

export default App
