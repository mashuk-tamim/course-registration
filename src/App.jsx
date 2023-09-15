import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

function App() {

  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleSelect = (course) => {
    console.log(course);
    const newSelectedCourses = [...selectedCourses, course];
    setSelectedCourses(newSelectedCourses);
    console.log(selectedCourses);
  }

  return (
    <>
      <Header></Header>
      <main className='w-11/12 mx-auto'>
        <div className='md:w-3/4'>
          <Courses handleSelect={handleSelect}></Courses>
        </div>
        <div className='md:w-1/4'>
        </div>
      </main>

    </>
  )
}

export default App