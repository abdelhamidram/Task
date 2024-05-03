import React from 'react';


import {HiChevronDown} from "react-icons/hi2";
// task 1

function TaskH() {
  return (
    <div className='flex justify-between p-2 ml-4'>
      <div>
      <p className='flex gap-4'>
        <span className='text-blue-500'>1400</span>
        Appel offre publique trouvé pour
        <span className='text-blue-500'>Systéme dacquisition</span>
      </p>
      </div>
     
          <div className='flex '>
        <button type='submit'    className='bg-gray-200 text-black flex flex-col  items-center  gap-4  w-400 h-8'>
            Trier les resultats
        </button>
        < HiChevronDown  
        className='bg-gray-200 flex flex-col  items-center   gap-4 mr-24  w-400 h-8'
        />
            
            </div>  

        
        
      
      
    </div>
  );
}

export default TaskH;
