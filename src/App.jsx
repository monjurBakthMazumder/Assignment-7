import { useState } from 'react'
import './App.css'
import Courses from './Component/Courses/Courses'
import Header from './Component/Header/Header'

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

  console.log(selectCourses);

  return (
    <div className='p-5 md:px-[10%]'>
      <Header/>
      <div className="flex justify-between gap-5 my-10">
        <Courses
          handleSelectCourses={handleSelectCourses}
        />
      </div>
    </div>
  )
}

export default App
