import TagsList from "@/components/partials/TagsList";
import ImageEmiliasSpace from "@/components/svg-images/ImageEmiliasSpace";

/**
 * Biography Page
 */
export default function Biography() {
  return (
    <span className='items-center bg-white flex flex-col pb-12 mt-16'>
      <div className='animate-slide-up  aspect-[1.11] object-contain object-center w-full self-stretch overflow-hidden max-md:max-w-full'>
        <ImageEmiliasSpace title={`Emilia's digital space!`} />
      </div>
      <div className='animate-slide-down animate-delay-100 font-heading text-black text-center text-7xl leading-[86.4px] tracking-[7.2px] self-center mt-20 max-md:max-w-full max-md:text-4xl max-lg:text-5xl max-md:mt-10'>
        Biography
      </div>
      <div className='text-black text-center text-lg leading-7 self-center max-w-screen-md mt-6 max-md:max-w-full'>
        Hey there, I'm Emilia Forrest, a designer based in the south of
        Stockholm, with a genuine love for crafting designs that are both
        gorgeous and functional. With a wealth of experience under my belt, I've
        not only sharpened my skills but also carved out a unique design
        philosophy that guides every project I undertake.
        <br />
        In my book, good design isn't just about looking pretty; it's about
        solving problems and elevating the user experience. Throughout my
        journey in this dynamic industry, I've had the pleasure of working on
        numerous projects, hitting some significant milestones, and earning nods
        for my innovative approach and meticulous attention to detail.
        <br />
        My time in the design world has been a thrilling ride of continuous
        learning and growth. I relish new challenges and thrive on pushing the
        boundaries of design. So, join me on this adventure, where we turn ideas
        into pixels and pixels into delightful experiences. Can't wait to see
        where the next design challenge takes us!
      </div>
      <div className='justify-center items-center self-center flex max-w-full flex-col mt-6 mb-8 px-16 max-md:px-5'>
        <TagsList tags={["Minimalist", "Functional", "Sustainable"]} />
      </div>
    </span>
  );
}
