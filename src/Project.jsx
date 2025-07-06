import React from 'react'

const Project=({project})=> {
    //distrırak
 const {id,title,explanation,image,detail}=project;
  return (
    <div className='project'>
        <div className='projestyle'>
           
            <h3>{title}</h3>
            <img src={image} width={300} height={200}/>
            <h5>{explanation}</h5>
            <div className='link'> <a href="#"> &gt;&gt; Proje detayı </a></div>
            


            
    </div>

    </div>
  )
}

export default Project