import React from 'react'



const HomeOutPut = ({tasks,ontoggle,onDelete}) => {

    if(!Array.isArray(tasks)){
        return<p>invalid tasks prop.</p>;
    }
  return (
    <div className='output'>
        <h2>Your list of taska to be done!!</h2>
      {tasks.length===0?(
        <p>no tasks added yet</p>
      ):(
        <ul>
            {tasks.map((item) => (
                <li
                    key={item._id}>

                  <span
                  className='flex-1'
                  style={{
                  textDecoration: item.completed ? "line-through" : "none",
                  color: item.completed ? "gray" : "black",
                }}
                 > 
                    {item.text}
                    </span>
                    <div className='flex gap-2'>
                        <button type='button' onClick={()=>ontoggle(item._id)}>
                           ✅
                        </button>
                        <button type='button' onClick={()=>onDelete(item._id)}>
                            ❌  
                        </button>
                        </div>      

                </li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default HomeOutPut;
