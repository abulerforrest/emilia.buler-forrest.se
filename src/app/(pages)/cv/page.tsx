import TagsList from "@/components/partials/TagsList";
import ImageCVHeader from "@/components/svg-images/ImageCVHeader";
import ImageCVPhoneAppleBook from "@/components/svg-images/ImageCVPhoneAppleBook";
import Link from "next/link";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

/**
 * CV Page
 */
export default function CV() {
  return (
    <div className='flex flex-col items-stretch'>
      <span className='items-center bg-white flex w-full flex-col pb-12 px-5 max-md:max-w-full'>
        <div className='lg:h-[20em] xl:h-[30em] aspect-[2.77] object-contain object-center w-full self-stretch overflow-hidden max-md:max-w-full'>
          <ImageCVHeader title='CV header image' />
        </div>
        <div className='font-heading text-black text-center text-7xl leading-[86.4px] tracking-[7.2px] self-center mt-20 max-md:max-w-full max-md:text-4xl max-md:mt-10'>
          CV / Resume
        </div>
        <div className='text-black text-center text-lg leading-7 self-center max-w-screen-md mt-6 max-md:max-w-full'>
          Access Emilia’s comprehensive curriculum vitae for a thorough overview
          of her extensive professional journey and educational background. Her
          resume, meticulously curated, offers a concise yet comprehensive
          presentation, focusing solely on current and pertinent descriptions of
          her experiences.
          <br />
          <br />
          <span className='underline'>Download the CV PDF here</span>
          <br />
          <br />
          <span className='underline'>Download the Resume PDF here</span>
        </div>
        <div className='justify-center items-center self-center flex max-w-full flex-col mt-6 mb-8 px-16 max-md:px-5'>
          <TagsList
            tags={[
              "Product Design",
              "Service Design",
              "User Experience Design",
            ]}
          />
        </div>
      </span>
      <div className='items-stretch bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5'>
        <div className='mt-16 max-md:max-w-full max-md:mt-10'>
          <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
            <div className='flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0'>
              <span className='items-stretch flex flex-col max-md:max-w-full max-md:mt-10'>
                <div className='text-black text-base font-semibold leading-6 max-md:max-w-full'>
                  Experienced
                </div>
                <div className='font-heading text-black text-7xl leading-[86px] tracking-[7.2px] mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]'>
                  Crafting the Right Designs with Passion and Precision
                </div>
              </span>
            </div>
            <div className='flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0'>
              <span className='items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10'>
                <div className='text-black text-lg leading-7 max-md:max-w-full'>
                  Now, about those PDFs – think of them as my design story in
                  two parts.
                  <br />
                  Curriculum Vitae (CV): This is the detailed epic, the
                  unabridged Emilia Forrest saga. It's your go-to if you want
                  the full scoop on my professional journey, every twist and
                  turn, and every milestone I've conquered. Grab a cup of
                  coffee, get comfy, and dive into the comprehensive tale of my
                  experiences and educational escapades.
                  <br />
                  <br />
                  Resume: Now, the resume is like the highlight reel. It's the
                  snappy, condensed version of my professional adventures,
                  focusing on the current and most relevant details. Perfect for
                  a quick overview – concise, impactful, and designed to give
                  you a snapshot of my skills and expertise without keeping you
                  glued to the screen for too long.
                  <br />
                  Feel free to snag both and explore the narrative in a way that
                  suits your curiosity. Each tells a story, just in slightly
                  different accents. Happy reading!
                </div>
                <div className='items-stretch flex justify-between gap-5 mt-6 pt-4 self-start'>
                  <Link href='/contact'>
                    <button className='select-none hover:bg-black hover:text-white transition-colors duration-700 text-black text-base leading-6 whitespace-nowrap justify-center flex gap-2 items-center border border-[color:var(--Black,#000)] grow px-6 py-3 border-solid max-md:px-5'>
                      Get In Touch <LiaLongArrowAltRightSolid size={20} />
                    </button>
                  </Link>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className='aspect-[1.4] object-contain object-center w-full self-stretch overflow-hidden max-md:max-w-full'>
          <ImageCVPhoneAppleBook title='Phone, Apple and Book!' />
        </div>
      </div>
    </div>
  );
}
