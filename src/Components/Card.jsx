import React from 'react'
import "./C.css"
function Card(props) {
    console.log(props)
  return (
    <>

        <div className='container'>
            <div>
                <img src={props.imgsrc} alt=""  className='img'/>
                
            </div>
           <div className='para'> <p className='p'>{props.title} </p></div>
            <div className='button'>
                <a href={props.link}>
                    <button>PLEASE ENTER</button>
                </a>
            </div>
        </div>
        
        

    </>
  )
}

export default Card