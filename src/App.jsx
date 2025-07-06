import './App.css'
import Header from './Header'
import Project from './Project' 
import {Projects} from './Data'
import './Css/project.css'

const App = () => {  
  return (
    <div >
      <Header />
        {/* // json dosyasından gelen projeyi tuttuk */}
        <div className='project-main'>
      {Projects?.map((project) => ( 
                                  //props -- yukarıdan gelen projeyi propsa geçtik
        <Project key={project.id} project={project} />
      ))}
      </div>
    </div>
  )
}

export default App
