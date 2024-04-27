import Image from 'next/image';
import AccordionM from './components/AccordionM';
import DropdownTask, { dataType } from './components/DropdownTask';
export default function Home() {
	const data: dataType[] = [
		{ content: <div className='bg-red-500'>123</div>, typeS: 'any' },
		{
			content: (
				<img
					src='https://img.freepik.com/free-photo/lovely-pet-portrait-isolated_23-2149192347.jpg?t=st=1714253537~exp=1714257137~hmac=970d619a9c168133b8d0ab23f52852ffb45bdb752c784ea358a29f9d70feff5a&w=360'
					alt=''
					width={100}
					height={100}
				/>
			),
			typeS: 'any',
		},
		{
			content: (
				<video src='https://youtu.be/5Tl8XOKZxPE' controls>
					123
				</video>
			),
			typeS: 'any',
		},
		{
			content: (
				<marquee behavior='smooth' direction='ltr'>
					123
				</marquee>
			),
			typeS: 'any',
		},
		{ content: 123, typeS: 'any' },
		{ content: 123, typeS: 'any' },
		{ content: 123, typeS: 'any' },
	];
	return (
		// custom attribute aka : prop
		<>
			<AccordionM
				size='lg'
				display='active'
				bord='bottom'
				title='Slot component'
				paragraphe='Optional placeholder component. Replace it with any component using the “Component Instance” swapper, or delete if not needed.'
			/>
			<DropdownTask propData={data} />
		</>
	);
}
