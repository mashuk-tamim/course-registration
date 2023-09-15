import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import SelectedCourses from './components/SelectedCourses/SelectedCourses';

function App() {

  const [selectedCourses, setSelectedCourses] = useState([]);

  const [creditTotal, setCreditTotal] = useState(0);

  const [priceTotal, setPriceTotal] = useState(0);

  const handleSelect = (course, credit, price) => {
    // console.log(course, credit, price);
    const newSelectedCourses = [...selectedCourses, course];
    setSelectedCourses(newSelectedCourses);

    // console.log(selectedCourses);
    const newCreditTotal = creditTotal + credit;
    setCreditTotal(newCreditTotal);

    const newPriceTotal = priceTotal + price;
    setPriceTotal(newPriceTotal);
  }

  return (
    <>
      <Header></Header>
      <main className='flex gap-5 w-11/12 mx-auto'>
        <div className='md:w-3/4'>
          <Courses handleSelect={handleSelect}></Courses>
        </div>
        <div className='md:w-1/4'>
          <SelectedCourses selectedCourses={selectedCourses} creditTotal={creditTotal} priceTotal={priceTotal}></SelectedCourses>
        </div>
      </main>
    </>
  )
}

export default App
