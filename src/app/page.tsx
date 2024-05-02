import DropdownTask, { dataType } from './components/DropdownTask';
import { HiArrowPath } from "react-icons/hi2";
import CheckboxDemo from './components/CheckboxDemo';
export default function Home() {

const data: dataType[] = [
	{ content: [[<div key='1'><HiArrowPath className="text-3xl min-h-6 min-w-6"/>
	<h1 className="font-bold text-2xl leading-7 text-blue-900">Slot component</h1>
	<p className="text-blue-700">Optional placeholder component. Replace it with any component using the “Component Instance” swapper, or delete if not needed.</p>
  </div>],[<CheckboxDemo className='mt-1' key='2'/>,<CheckboxDemo className='mt-1' key='2'/>,<CheckboxDemo className='mt-1' key='2'/>,<CheckboxDemo className='mt-1' key='3'/>]], title:'Choose an option' ,typeS: 'any' },
  
  { content: [[<div key='1'><HiArrowPath className="text-3xl min-h-6 min-w-6"/>
	<h1 className="font-bold text-2xl leading-7 text-blue-900">Slot component</h1>
	<p className="text-blue-700">Optional placeholder component. Replace it with any component using the “Component Instance” swapper, or delete if not needed.</p>
  </div>],[<CheckboxDemo className='mt-1' key='2'/>,<CheckboxDemo className='mt-1' key='2'/>,<CheckboxDemo className='mt-1' key='2'/>,<CheckboxDemo className='mt-1' key='3'/>]], title:'Choose an option' ,typeS: 'any' }
];
return (
	<>
		<DropdownTask propData={data} size="sm" States='Enabled' Position='Middle'/>
		<DropdownTask propData={data} size="sm" States='Enabled' Position='Middle'/>
	</>
);
}