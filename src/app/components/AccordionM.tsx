import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HiArrowPath } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils"

type AccordionProps = {
  size: 'sm' | 'md' | 'lg';
  title: string;
  paragraphe: string;
  icon?: React.ElementType<any>;
  display: 'active' | 'hover' | 'disabled';
  bord?: 'top' | 'bottom';
  className?: string;
}


function AccordionM({size, title, paragraphe, icon, display, bord, className, ...props }:AccordionProps) {
  return (
    <Accordion type="single" collapsible> 
      <AccordionItem value="item-1" className={twMerge("px-4 py-1 w-[480px]",
      size== 'sm'?"h-8":size== 'md'?"h-10 content-center":size== 'lg'?"h-12 content-center":"",
       display == 'active'?"border-b border-r border-l border-gray-300 bg-[#F4F4F4]":
       display == 'hover'?"border border-blue-600 bg-[#F4F4F4]":
       display == 'disabled'?"bg-gray-200 border-b border-gray-300": className,
       bord=='top'?"rounded-t-lg":
       bord=='bottom'?"rounded-b-lg":className)}
        {...props }>
        <AccordionTrigger {...props } className={twMerge(display == 'active'?"border-b border-gray-300":
          display == 'hover'?"border-b border-blue-600":
          display == 'disabled'?"text-gray-600":className)}>Choose an option
        </AccordionTrigger>
      {display !== 'disabled'?
        <AccordionContent className="w-[480px] h-[180px] py-1" {...props }>
          <div {...props } className="w-[445px] h-[164px] bg-blue-200 border border-blue-400 rounded-md flex flex-col items-start p-4 gap-4">
            <HiArrowPath className="text-3xl min-h-6 min-w-6" {...props }/>
            <h1 className="font-bold text-blue-700 text-xl" {...props }>{title}</h1>
            <p className="text-blue-700" {...props }>{paragraphe}</p>
          </div>
        </AccordionContent>
        :""}
      </AccordionItem>
    </Accordion>

  )
}

export default AccordionM;



