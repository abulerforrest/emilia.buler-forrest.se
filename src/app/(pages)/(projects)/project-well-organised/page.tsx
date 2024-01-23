import ImagePortfolioUX3 from "@/components/svg-images/ImagePortfolioUX3";
import ImageWellOrganised1 from "@/components/svg-images/ImageWellOrganised1";
import ImageWellOrganised2 from "@/components/svg-images/ImageWellOrganised2";
import ImageWellOrganised3 from "@/components/svg-images/ImageWellOrganised3";

/**
 * Project Well Organised Blog
 */
export default function ProjectWellOrganised() {
  return (
    <>
      <div className='flex flex-col items-stretch mt-16'>
        <div className='items-center bg-white flex w-full flex-col pb-12 px-5 max-md:max-w-full'>
          <div className='aspect-[1.57] md:aspect-[4.1] object-contain object-center w-full self-stretch overflow-hidden max-md:max-w-full'>
            <ImagePortfolioUX3 title='Lightbulb!' />
          </div>
          <div className='font-heading self-center text-black text-center text-7xl leading-[98px] tracking-[3.6px] max-w-screen-md mt-16 max-md:max-w-full max-md:text-4xl max-md:leading-[53px] max-md:mt-10'>
            <span className='md:text-7xl text-5xl leading-[66.4000015258789px] lg:leading-[86.4000015258789px] tracking-[7.2px]'>
              The Well Organised Blog{" "}
            </span>
            <span className='md:text-7xl italic text-5xl leading-[66.4000015258789px] lg:leading-[86.4000015258789px]tracking-[3.6px]'>
              UX Design for Wordpress
            </span>
          </div>
          <div className='text-black text-lg leading-7 self-center max-w-[768px] mt-6'>
            UX, Well-Organised Blog Design
            <br />
            Date: June - July 2022
            <br />
            In the realms of WordPress, a project unfolded between October and
            November 2021, aiming to enhance the blogging experience. The
            objective was to integrate UI and UX elements seamlessly, creating a
            responsive design catering to both mobile and desktop platforms.
            <br />
            Challenges: Navigating through the intricacies of design systems,
            the project sought a delicate equilibrium between custom UI
            components and the familiarity of Material Design icons. The
            challenge was not only aesthetic but also aimed to ensure an
            intuitive and functional design, marrying visual appeal with
            usability.
            <br />
            Platform: Tailoring a unique UI and UX for WordPress, the project
            addressed the needs of both mobile and desktop interfaces.
            <br />
            Client: An internally initiated project that required a blend of
            creativity and practicality.
            <br />
            Results: The project resulted in a scalable design that introduced a
            thoughtful set of UI and UX elements. This design sets the stage for
            a user journey that is both practical and visually pleasing.
            <br />
            Join us as we delve into the details of this project—a harmonious
            blend of design and functionality, where aesthetics meet user
            experience in the intricate dance of pixels and code
          </div>
          <div className='justify-center items-center self-center flex max-w-full flex-col mt-6 mb-8 px-16 max-md:px-5'>
            <div className='flex items-stretch gap-2'>
              <div className='text-black text-sm font-semibold leading-5 whitespace-nowrap items-stretch bg-zinc-100 grow justify-center px-2 py-1'>
                Wordpress
              </div>
              <div className='text-black text-sm font-semibold leading-5 whitespace-nowrap items-stretch bg-zinc-100 grow justify-center px-2 py-1'>
                Material Design
              </div>
              <div className='text-black text-sm font-semibold leading-5 whitespace-nowrap items-stretch bg-zinc-100 grow justify-center px-2 py-1'>
                UX Design
              </div>
            </div>
          </div>
        </div>
        <div className='aspect-[1.87] object-contain object-center w-full overflow-hidden mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10'>
          <ImageWellOrganised1 title='Well Organised Proj 1' />
        </div>
        <div className='aspect-[1.87] object-contain object-center w-full overflow-hidden mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10'>
          <ImageWellOrganised2 title='Well Organised Proj 2' />
        </div>
        <div className='aspect-[1.87] object-contain object-center w-full overflow-hidden mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10'>
          <ImageWellOrganised3 title='Well Organised Proj 3' />
        </div>
      </div>
    </>
  );
}
