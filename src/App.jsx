import './App.css'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import SelectedCourses from './components/SelectedCourses/SelectedCourses'

function App() {

  return (
    <>
      <Header></Header>
      <main>
        <div>
          <Courses></Courses>
        </div>
        <div>
          <SelectedCourses></SelectedCourses>
        </div>
      </main>

    </>
  )
}

export default App
