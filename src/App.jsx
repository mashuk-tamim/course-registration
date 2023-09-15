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
import SelectedCourses from './components/SelectedCourses/SelectedCourses'

function App() {


  return (
    <>
      <Header></Header>
      <main className='w-11/12 mx-auto'>
        <div className='md:w-3/4'>
          <Courses handleSelect={handleSelect}></Courses>
        </div>
        <div className='md:w-1/4'>
          <Courses></Courses>
        </div>
        <div className='w-1/4'>
          <SelectedCourses></SelectedCourses>
        </div>
      </main>

    </>
  )
}

export default App
