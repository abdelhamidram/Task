import { RxHamburgerMenu } from "react-icons/rx";
import { CiZoomIn, CiZoomOut } from "react-icons/ci";
import { BsArrowsFullscreen } from "react-icons/bs";
import Image from 'next/image';
import { Fullscreen } from "lucide-react";

export type DatadescripType = {
  content1: {	
    title: string[];
    text: string[];
  };
  content2: {	
    title: string[];
    text: string[];
  };
  content3: {	
    title: string[];
  };
  typeS: 'any' | 'string' | 'number' | 'React.ElementType<any>' | 'ReactNode' | 'React.DetailedHTMLProps<React.HTMLAttributes>';
};

type DescriptionProps<T> = {
  propData: T[];
};

function Description({ propData }: DescriptionProps<DatadescripType>) {
  return (
    <section className="mx-10">
      <div className="box-border flex items-center justify-between p-4 gap-8 w-full max-w-screen-xl h-16 border-b border-gray-300">
        <h4 className="w-52 h-6 font-bold text-base leading-6 flex items-center text-gray-700">Description d’annonce</h4>
        <button className="text-blue-600 border-solid border-blue-700 hover:underline">Historique d’état d’annonce</button>
      </div>

      <div className="m-4 flex flex-row items-start gap-32 w-[1024px] h-[224px]">
        <div className="flex flex-col items-start gap-16 w-[1024px] h-[224px]">
          {propData.map((item, index) => (
            <div key={index}>
              {item.content1.title.map((title, i) => (
                <div className='flex flex-row items-baseline gap-5 w-[496px] h-8' key={i}>
                  <p className="font-bold text-gray-600">{title}: </p>
                  <p className="font-normal font-sans text-base leading-6 text-gray-900">{item.content1.text[i]}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="w-[496px] h-[184px] flex flex-col items-start gap-4">
          {propData.map((item, index) => (
            <div key={index}>
              {item.content2.title.map((title, i) => (
                <div className='w-[496px] h-6 flex flex-row items-start gap-6' key={i}>
                  <p className=" font-bold text-base text-gray-600">{title}: </p>
                  <p className=" h-6 font-normal text-base text-gray-700">{item.content2.text[i]}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="p-0 flex flex-col items-start gap-3 w-[1024px] h-[66px]">
        <h1 className="font-bold text-gray-700 text-lg ">Secteur d’activité:</h1>
        <div className="flex flex-row items-start  gap-4 w-[644px] h-8">
          {propData.map((item, index) => (
            item.content3.title.map((title, i) => (
              <button key={i} className="w-[149px] h-8 bg-gray-300 rounded-full">{title}</button>
            ))
          ))}
        </div>
      </div>
      <div className="mt-5 box-border flex flex-col items-start p-8 gap-4 w-[1024px] h-[1533px] bg-white border border-gray-300 rounded-lg">
          <h1 className="font-bold text-center text-2xl leading-7 text-gray-900 w-[960px] h-14">Title that goes for Title that goes for Title that goes for Title that goes for </h1>
          <div className="flex flex-col items-end gap-1 w-[960px] h-[1397px]">
          <Image
            src="/descripimg.png"
            alt="Description image"
            width={960}
            height={1345}
            className="box-border w-[960px] h-[1345px] bg-cover bg-center border-1 border-solid border-gray-700 rounded-t-lg"
          />
          </div>
          <div className="flex justify-between items-start gap-7 w-[960px] h-12">
            <RxHamburgerMenu />
            <div className="flex flex-row gap-3 text-center">
              <CiZoomIn />
              <h1>1</h1>
              <CiZoomOut />
            </div>
            <BsArrowsFullscreen />
          </div>
      </div>
    </section>
  );
}

export default Description;