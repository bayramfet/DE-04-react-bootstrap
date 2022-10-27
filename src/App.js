import CourseCard from "./companent/CourseCard";
import data from "./data"
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
function App() {

  return (
    <div >
      
      <CourseCard dataa={data}/>
      <Footer/>

    </div>
  )
}

export default App;
