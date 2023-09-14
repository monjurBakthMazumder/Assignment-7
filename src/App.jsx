import { useState } from 'react'
import './App.css'
import Courses from './Component/Courses/Courses'
import Header from './Component/Header/Header'
import Cart from './Component/Cart/Cart'

function App() {
  const [selectCourses, setSelectCourses] = useState([]);
  const [credit, setCredit] = useState(0);
  const [remaining, setRemaining] = useState(20);

  const handleSelectCourses = course => {
    const have = selectCourses.find(item => item.id === course.id)
    if(have){
      return alert('already added')
    }
    else{
      const nowCredit =  credit + course.credit_hours
      if(nowCredit>20){
        return alert(`credit remaining ${remaining}hr`)
      }
      else{
        setSelectCourses([...selectCourses , course])
        setRemaining(remaining - course.credit_hours)
        setCredit(credit + course.credit_hours)
      }
    }
  }

  return (
    <div className='p-5 md:px-[5%]'>
      <Header/>
      <div className="flex flex-col sm:flex-row justify-center gap-5 my-10">
        <Courses
          handleSelectCourses={handleSelectCourses}
        />
        <Cart
          selectCourses={selectCourses}
          credit={credit}
          remaining={remaining}
        />
      </div>
    </div>
  )
}

export default App
