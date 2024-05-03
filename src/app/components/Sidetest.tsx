'use client';
import {
	HiArchiveBox,
	HiHeart,
	HiBookmarkSquare,
	HiBanknotes,
	HiArrowRightOnRectangle,
	HiArrowTopRightOnSquare,
	HiArrowLeftOnRectangle,
	HiHome,
	HiBellAlert,
	HiChatBubbleLeft,
} from 'react-icons/hi2';

import { Button } from "@/components/ui/button"
import ImageLoader from './ImageLoader';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { HiSearch } from 'react-icons/hi';

type sideBarProps = {
	isRetracted: boolean;
	setIsRetracted: Dispatch<SetStateAction<boolean>>;
	setIsHover?: Dispatch<SetStateAction<boolean>>;
};

const tabsContent2 = [
	{ title: 'Mes avis', icon: HiArchiveBox },
	{ title: 'Favori', icon: HiHeart },
	{ title: 'Espace de travail', icon: HiBookmarkSquare },
	{ title: 'Notification', icon: HiBellAlert },
	{ title: 'messagerie', icon: HiChatBubbleLeft },
	{ title: 'Abonnement', icon: HiBanknotes },
];

const tabsContent1 = [
	{ title: 'Accuiel', icon: HiHome },
	{ title: 'les avis', icon: HiSearch },
	{ title: 'Archive', icon: HiArchiveBox },
];

const SideBartest = () => {
	const [isRetracted, setIsRetracted] = useState(false);
	const [isHover, setIsHover] = useState(false);

	return (
		<main
			className={twMerge('w-max',isRetracted?'z-100 relative bg-Background-layer1 box-border h-screen w-12 text-icon-secondary stroke-border-strong stroke-1 flex flex-col gap-y-10 p-y-4 align-top items-center':'absolute box-border h-screen w-80 text-icon-secondary stroke-border-strong stroke-1 bg-background-layer1 backdrop-blur-lg  flex flex-col gap-y-10 p-y-4 align-top items-center')}
			onMouseLeave={() => {
				setIsHover(false);
			}}
		>
			<section className={twMerge(isRetracted?'button p-2 h-10 ':'button p-2 h-20 w-80')}>
			{isRetracted?<Button
					variant='ghost'
					size='sm'
					onClick={() => {
						setIsRetracted(!isRetracted);
					}}
				>
					<HiArrowRightOnRectangle />
				</Button>:<>
				<div className='w-full flex flex-row align-top gap-3'>
						<div className='w-full flex flex-row align-top gap-3'>
							<ImageLoader
								className='h-16 w-16 aspect-square rounded-md object-cover'
								src='https://images.unsplash.com/photo-1710372165237-2a2ada353c15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D'
								alt='your profile avatar/image' />
							<h2 className='text-text-primary font-bold text-xl '>
								johny dhib ben oumar
							</h2>
						</div>
						<Button
							className='h-max w-min '
							variant='ghost'
							onClick={() => {
								setIsRetracted(!isRetracted);
							} }
						>
							<HiArrowLeftOnRectangle />
						</Button>
				</div>
				<div className='flex justify-center items-center'>
				  <p className='text-sm text-text-secondary font-bold'>
				  	Profile personnelle
				  </p>
				  <Button variant='ghost' size='sm'>
				  	<HiArrowTopRightOnSquare />
				  </Button>
				</div>
				</>}
			</section>

			<section className={twMerge(isRetracted?'avatar':'tabs w-72')}>
				{isRetracted?<ImageLoader
				className='w-10 aspect-square rounded-md object-cover'
				src='https://images.unsplash.com/photo-1710372165237-2a2ada353c15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D'
				alt='your profile avatar/image'
			/>:<>
			<h6 className='font-bold text-md mb-4'>Nhanik</h6>
			{tabsContent1.map((item, index) => (
				<Link href={'/#'} key={index}>
					<div className=' px-4 py-2 hover:text-icon-blue  border-l-2 border-border-strong hover:border-l-2 hover:border-border-selected'>
						<p className='text-base hover:text-icon-blue text-text-secondary gap-2 flex items-center ease'>
							<item.icon />
							{item.title}
						</p>
					</div>
				</Link>
			))}</>}
			</section>
			{/* <section
				className='tabs'
				onMouseEnter={() => {
					setIsHover ? setIsHover(true) : null;
				}}
			>
				{tabsContent1.map((item, index) => (
					<Link href={'/#'} key={index}>
						<div className='w-12 p-3 hover:text-icon-blue  border-l-2 border-border-strong hover:border-l-2 hover:border-border-selected'>
							<item.icon />
						</div>
					</Link>
				))}
			</section> */}
			<section
				className={twMerge(isRetracted?'tabs': 'tabs w-72')}
				onMouseEnter={() => {
					setIsHover ? setIsHover(true) : null;
				}}
			>
				{isRetracted?(<>
				{tabsContent2.map((item, index) => (
					<Link href={'/#'} key={index}>
						<div
							className='w-12 grid place-items-center border-l-2 border-border-strong p-3 hover:text-icon-blue hover:border-l-2 hover:border-border-selected'
							key={index}
						>
							<item.icon />
						</div>
					</Link>
				))}</>):(<>
				<h6 className='font-bold text-md mb-4'>Votre espace personnel</h6>
				{tabsContent2.map((item, index) => (
					<Link href={'/#'} key={index}>
						<div className=' px-4 py-2 hover:text-icon-blue  border-l-2 border-border-strong hover:border-l-2 hover:border-border-selected'>
							<p className='text-base hover:text-icon-blue text-text-secondary gap-2 flex items-center'>
								<item.icon />

								{item.title}
							</p>
						</div>
					</Link>
				))}
				</>)}
			</section>
		
		</main>
	);
};
export default SideBartest;
