import ImpressiveWords from "@/components/partials/ImpressiveWords";
import TagsList from "@/components/partials/TagsList";
import ImageEmiliasSpace from "@/components/svg-images/ImageEmiliasSpace";
import ImagePortfolioHeader from "@/components/svg-images/ImagePortfolioHeader";

/**
 * Home Page
 */
export default function Home() {
  return (
    <section>
      <span className='items-center bg-white flex w-full flex-col pb-12 max-md:max-w-full'>
        <ImagePortfolioHeader title='Pen, Apple, Box!' />
        <div className='font-heading text-black text-center text-5xl lg:text-6xl xl:text-7xl tracking-[3.6px] self-center max-w-screen-md mt-20 max-md:max-w-full max-md:text-4xl max-md:leading-[53px] max-md:mt-10'>
          <span className='tracking-[7.2px]'>UX</span>{" "}
          <span className='font-didot text-[2.6rem] md:text-[3.6rem] lg:text-[4rem] xl:text-[5rem] leading-[68.4000015258789px] md:leading-[78.4000015258789px] lg:leading-[98.4000015258789px]'>
            &
          </span>{" "}
          <span className='italic'>Service Design</span>
          <br />
          <span className='tracking-[7.2px]'>E. Forrest’s Portfolio</span>
        </div>
        <ImpressiveWords />
        <div className='justify-center items-center self-center flex max-w-full flex-col mt-6 mb-8 px-16 max-md:px-5'>
          <TagsList
            tags={[
              "UX",
              "UI",
              "Product Design",
              "Strategy",
              "Planning",
              "Web Design",
              "Service Design",
            ]}
          />
        </div>
      </span>
      <div className='items-stretch bg-white flex w-full flex-col justify-center md:px-16 md:py-12 max-md:max-w-full max-md:px-5'>
        <div className='mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10'>
          <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
            <div className='flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0'>
              <div className='object-contain max-w-md object-center w-full self-stretch overflow-hidden max-md:max-w-full'>
                <ImageEmiliasSpace title={`Emilia's digital space!`} />
              </div>
            </div>
            <div className='flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0'>
              <span className='items-stretch flex flex-col pb-10 max-md:max-w-full max-md:mt-10'>
                <div className='text-balance font-heading text-black text-2xl tracking-[6.2px] leading-[86px] md:tracking-[7.2px] md:text-6xl max-md:max-w-full max-md:text-4xl max-md:leading-[53px]'>
                  What to expect and where you are
                </div>
                <div className='text-black text-base leading-6 mt-6 max-md:max-w-full'>
                  Hello and welcome to my digital space! I'm Emilia, a
                  passionate design aficionado ready to embark on a journey
                  through the world of creativity with you. Here, you'll
                  discover a curated collection of my design, where each pixel
                  is purposefully placed, and every concept is crafted with
                  care. <br />
                </div>
                <div className='text-black text-base leading-6 mt-4 max-md:max-w-full'>
                  From sleek graphics to seamless user experiences, this website
                  is a showcase of my dedication to thoughtful and impactful
                  design. As you explore these pages, I hope you find
                  inspiration and a sense of the meticulous attention to detail
                  that defines my work.
                  <br />
                  <br />
                  So, take a moment, click around, and let's explore the
                  possibilities that great design brings. Your journey through
                  these digital realms is about to begin, and I'm thrilled to be
                  your guide. I hope you’ll enjoy the adventure!
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
