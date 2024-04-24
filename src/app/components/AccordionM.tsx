import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HiArrowPath } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

type AccordionProps = {
  size: 'sm' | 'md' | 'lg';
  title: string;
  paragraphe: string;
  icon?: React.ElementType<any>;
  display: 'active' | 'hover' | 'disabled';
  bord?: 'top' | 'bottom';
}


export default function AccordionM({size, title, paragraphe, icon, display, bord}:AccordionProps) {
return (
<Accordion className={twMerge("w-[480px] h-8", size== 'sm'?"h-8":size== 'md'?"h-10":size== 'lg'?"h-12":'')} type="single" collapsible> 
  <AccordionItem value="item-1" className={twMerge("px-4 py-1",display == 'active'?"border-b border-r border-l border-gray-300 bg-[#F4F4F4]":
   display == 'hover'?"border border-blue-600 bg-[#F4F4F4]":
   display == 'disabled'?"bg-gray-200 border-b border-gray-300":"" ,
   bord=='top'?"rounded-t-lg":
   bord=='bottom'?"rounded-b-lg":"")}>
    <AccordionTrigger className={twMerge(display == 'active'?"border-b border-gray-300":display == 'hover'?"border-b border-blue-600":"")}>Choose an option</AccordionTrigger>
    {display !== 'disabled'?
    <AccordionContent className="w-[480px] h-[180px] py-1">
      <div className="w-[445px] h-[164px] bg-blue-200 border border-blue-400 rounded-md flex flex-col items-start p-4 gap-4">
        <HiArrowPath className="text-3xl min-h-6 min-w-6"/>
        <h1 className="font-bold text-blue-700 text-xl">{title}</h1>
        <p className="text-blue-700">{paragraphe}</p>
      </div>
    </AccordionContent>:""}
  </AccordionItem>
</Accordion>

)
}