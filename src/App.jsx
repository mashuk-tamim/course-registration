import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
<<<<<<< HEAD

function App() {

  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleSelect = (course) => {
    console.log(course);
    const newSelectedCourses = [...selectedCourses, course];
    setSelectedCourses(newSelectedCourses);
    console.log(selectedCourses);
  }
=======
import SelectedCourses from './components/SelectedCourses/SelectedCourses'

function App() {

>>>>>>> 38cf8297fbe7dfabbf0c755e7d18a72884023449

  return (
    <>
      <Header></Header>
      <main className='w-11/12 mx-auto'>
        <div className='md:w-3/4'>
<<<<<<< HEAD
          <Courses handleSelect={handleSelect}></Courses>
        </div>
        <div className='md:w-1/4'>
=======
          <Courses></Courses>
        </div>
        <div className='w-1/4'>
          <SelectedCourses></SelectedCourses>
>>>>>>> 38cf8297fbe7dfabbf0c755e7d18a72884023449
        </div>
      </main>

    </>
  )
}

<<<<<<< HEAD
export default App
=======
export default App
>>>>>>> 38cf8297fbe7dfabbf0c755e7d18a72884023449
