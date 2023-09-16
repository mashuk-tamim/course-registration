import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import SelectedCourses from './components/SelectedCourses/SelectedCourses';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [selectedCourses, setSelectedCourses] = useState([]);

  const [creditTotal, setCreditTotal] = useState(0);

  const [priceTotal, setPriceTotal] = useState(0);

  const handleSelect = (course, credit, price) => {
    const isCourseSelected = selectedCourses.some((selectedCourse) => selectedCourse.code === course.code);

    if (isCourseSelected) {
      toast.error('You have already selected this course!');
    }
    else {
      const newSelectedCourses = [...selectedCourses, course];
      const newCreditTotal = creditTotal + credit;
      const newPriceTotal = priceTotal + price;

      if (newCreditTotal <= 20) {
        setSelectedCourses(newSelectedCourses);
        setCreditTotal(newCreditTotal);
        setPriceTotal(newPriceTotal);
      }
      else {
        toast.error('You have reached the limit. You can not exceed 20 credit hours.');
      }
    }
  }

  return (
    <>
      <Header></Header>
      <main className='flex flex-col md:flex-row gap-5 w-11/12 mx-auto'>
        <div className='md:w-2/3 lg:w-3/4'>
          <Courses handleSelect={handleSelect}></Courses>
        </div>
        <div className='md:w-1/3 lg:w-1/4'>
          <SelectedCourses selectedCourses={selectedCourses} creditTotal={creditTotal} priceTotal={priceTotal}></SelectedCourses>
        </div>
      </main>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
