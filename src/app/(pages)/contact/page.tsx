import ImageContactHeader from "@/components/svg-images/ImageContactHeader";
import Link from "next/link";

/**
 * Contact Page
 */
export default function Contact() {
  return (
    <span className='items-center bg-white flex flex-col pb-12 mt-16'>
      <div className='animate-slide-up lg:h-[20em] xl:h-[30em] aspect-[2.77] object-contain object-center w-full self-stretch overflow-hidden max-md:max-w-full'>
        <ImageContactHeader title='Contact header image!' />
      </div>
      <div className='animate-slide-down animate-delay-100 font-heading text-black text-center text-7xl leading-[86.4px] tracking-[7.2px] self-center mt-20 max-md:max-w-full max-md:text-4xl max-md:mt-10'>
        Let’s get in touch
      </div>
      <div className='text-black text-center text-lg leading-7 self-center max-w-screen-md mt-6 max-md:max-w-full'>
        Got a burning design question or just fancy a virtual chinwag? Pour
        yourself a cuppa and drop me a line. Whether you're seeking design
        brilliance, have a interesting query, or just want to chat about the
        weather, I'm all ears. Let the banter commence!
        <div className='mt-4'>Drop me an email at:</div>
      </div>
      <div className='my-8'>
        <Link
          href='mailto:emilia.forrest@gmail.com'
          className='hover:text-[#e27a67] transition-colors duration-300'
        >
          <span className='text-2xl md:text-3xl lg:text-4xl font-bimbo whitespace-nowrap'>
            emilia.forrest@gmail.com
          </span>
        </Link>
      </div>
      <div className='justify-center items-center self-center flex max-w-full flex-col mt-6 mb-8 px-16 max-md:px-5'>
        <div className='flex items-stretch gap-2'>
          <span className='text-black text-sm font-semibold leading-5 whitespace-nowrap items-stretch bg-zinc-100 grow justify-center px-2 py-1'>
            Minimalist
          </span>
          <span className='text-black text-sm font-semibold leading-5 whitespace-nowrap items-stretch bg-zinc-100 grow justify-center px-2 py-1'>
            Functional
          </span>
          <span className='text-black text-sm font-semibold leading-5 whitespace-nowrap items-stretch bg-zinc-100 grow justify-center px-2 py-1'>
            Sustainable
          </span>
        </div>
      </div>
    </span>
  );
}
