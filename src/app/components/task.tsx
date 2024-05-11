import {HiChevronDown} from "react-icons/hi2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


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
    {/* <div className='flex '>
      <button type='submit'    className='bg-gray-200 text-black flex flex-col  items-center  gap-4  w-400 h-8'>
        Trier les resultats
      </button>
      < HiChevronDown  className='bg-gray-200 flex flex-col  items-center   gap-4 mr-24  w-400 h-8'/>
    </div> */}
    <Accordion className='flex w-auto' type="single" collapsible>
      <AccordionItem value="item-1" className='bg-gray-200 text-black '>
        <AccordionTrigger>Trier les resultats</AccordionTrigger>
        <AccordionContent>
          content
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
  );
}

export default TaskH;
