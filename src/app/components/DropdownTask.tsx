'use client';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ReactNode } from 'react';

export type dataType = {
	content: ReactNode;
	typeS: 'img' | 'any' | 'another';
};
type DropdownTaskProps<t> = {
	propData: t[];
};
const DropdownTask = ({ propData }: DropdownTaskProps<dataType>) => {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger className=''>
				<button className=' bg-emerald-200 rounded-md px-2 py-1'>
					DropDown
				</button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content className='overflow-y-scroll w-[700px] h-screen p-3 bg-amber-300'>
					{propData.map((item, index) => (
						<DropdownMenu.Item className='' key={index}>
							{item.content}
						</DropdownMenu.Item>
					))}

					{/* <DropdownMenu.Group>
						<DropdownMenu.Item />
					</DropdownMenu.Group> */}
					{/* 
					<DropdownMenu.CheckboxItem>
						<DropdownMenu.ItemIndicator />
					</DropdownMenu.CheckboxItem> */}

					{/* <DropdownMenu.RadioGroup>
						<DropdownMenu.RadioItem value=''>
							<DropdownMenu.ItemIndicator />
						</DropdownMenu.RadioItem>
					</DropdownMenu.RadioGroup>

                     */}
					{/* 
					<DropdownMenu.Sub>
						<DropdownMenu.SubTrigger />
						<DropdownMenu.Portal>
							<DropdownMenu.SubContent />
						</DropdownMenu.Portal>
					</DropdownMenu.Sub> */}

					<DropdownMenu.Separator />
					<DropdownMenu.Arrow />
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};

export default DropdownTask;
