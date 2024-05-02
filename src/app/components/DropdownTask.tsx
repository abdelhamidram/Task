'use client';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Key } from 'lucide-react';
import CheckboxDemo from './CheckboxDemo';

export type dataType = {
	content: ReactNode[][];
	title?: string;
	typeS: 'any' | 'string' | 'number' | 'React.ElementType<any>' | 'ReactNode' | 'React.DetailedHTMLProps<React.HTMLAttributes>';
};

type DropdownTaskProps<T> = {
	propData: T[];
	size: 'sm' | 'md' | 'lg';
	States?: 'Enabled' | 'Focus' | 'Disabled' | 'Hover';
	Position?: 'Top' | 'Bottom' | 'Middle';
};

const DropdownTask = ({ propData, size, States, Position, ...props }: DropdownTaskProps<dataType>) => {
	const handleCloseMenu = (e: any) => {
		e.DropdownMenu.onFocusOutside();
	 };
  return (
    <>
      {propData.map((item, index) => (
        <DropdownMenu.Root key={index}>
          <DropdownMenu.Trigger className='flex flex-col items-start'>
            <div className={twMerge("w-[480px] px-2 py-1 flex flex-row justify-between content-center items-center", size == 'sm' ? "h-8" : size == 'md' ? "h-10" : size == 'lg' ? "h-12" : "", States == 'Enabled' ? "bg-gray-200 border-b border-gray-400" : States == 'Focus' ? "bg-gray-200 border border-blue-600" : States == 'Disabled' ? "bg-gray-300  text-gray-500" : States == 'Hover' ? "bg-gray-300 rounded-t-lg" : "", Position == 'Top' ? " rounded-t-lg" : Position == 'Bottom' ? "rounded-b-lg" : Position == 'Middle' ? "rounded-none" : "")}>
              {item.title}
              <RiArrowDropDownLine className='w-9 h-9 font-normal' />
            </div>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            
            <DropdownMenu.Content className={twMerge('w-[480px] min-h-48 p-3 m-[-17px]', States == 'Enabled' ? "bg-gray-200 border-b border-gray-400" : States == 'Focus' ? "bg-gray-200 border border-blue-600" : States == 'Disabled' ? "bg-gray-300  text-gray-500" : States == 'Hover' ? "bg-gray-300 rounded-t-lg" : "")}>
            {item.content.map((contentItem, contentIndex) => (
              <DropdownMenu.Item key={contentIndex} className='mt-2 w-[445px] min-h-[164px] bg-blue-200 border border-blue-400 rounded-md flex flex-col items-start p-4 gap-4' onClick={handleCloseMenu}>
                {contentItem}
              </DropdownMenu.Item>
             ))}
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
     ))} 
    </>
  );
};

export default DropdownTask;
