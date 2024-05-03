/* eslint-disable @next/next/no-img-element */
import Error from 'next/error';
import { HtmlHTMLAttributes } from 'react';

type imageProps = {
	src: string;
	alt: string;
	className?: string;
} & HtmlHTMLAttributes<HTMLImageElement>;

const ImageLoader = ({ src, alt, className, ...props }: imageProps) => {
	return (
		<img
			src={src}
			alt={alt}
			className={
				className
					? className + '  object-cover '
					: 'aspect-square object-cover rounded-md'
			}
			{...props}
		/>
	);
};

export default ImageLoader;
