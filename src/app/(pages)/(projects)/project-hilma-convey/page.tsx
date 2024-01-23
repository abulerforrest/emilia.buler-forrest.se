import TagsList from "@/components/partials/TagsList";
import ImageHilmaProj1 from "@/components/svg-images/ImageHilmaProj1";
import ImageHilmaProj2 from "@/components/svg-images/ImageHilmaProj2";
import ImageHilmaProj3 from "@/components/svg-images/ImageHilmaProj3";
import ImagePortfolioUX2 from "@/components/svg-images/ImagePortfolioUX2";

/**
 * Project Hilma App
 * The Hilma Presentations App - UX design
 */
export default function ProjectHilmaConvey() {
  return (
    <>
      <div className='flex flex-col items-stretch mt-16'>
        <div className='items-center bg-white flex w-full flex-col pb-12 px-5 max-md:max-w-full'>
          <div className='aspect-[1.57] md:aspect-[2.77] object-contain object-center w-full self-stretch overflow-hidden max-md:max-w-full'>
            <ImagePortfolioUX2 title='Key!' />
          </div>
          <div className='hyphens-auto font-heading text-black text-center text-7xl xl:leading-[86px] tracking-[7.2px] self-center max-w-screen-sm mt-20 max-md:max-w-full max-md:text-4xl max-md:leading-[53px] max-md:mt-10'>
            The Hilma Presentations App -{" "}
            <span className='italic tracking-[3.6px]'>UX design</span>
          </div>
          <div className='text-black text-base leading-6 self-center mt-6 max-w-[768px]'>
            Date: February- May 2022
            <br />
            In the spring of 2022, a new UX project unfolded in collaboration
            with Hilma, an application designed to shape presentations for
            business and lectures. Unlike conventional platforms that often
            prioritise creating slides over content and rhetorical principles,
            Hilma aimed to shift the focus to the substance of presentations.
            <br />
            Challenges: This endeavour ventured into uncharted territory, aiming
            to design an application that encourages communication through
            verbal and rhetorical techniques rather than relying on visually
            crafted messages. The challenge lay in creating a visually intuitive
            interface that stimulates communication rather than text
            visualisation. Complicating matters, user testers hailed from a
            major banking institution, adding layers of complexity. Determining
            the balance between visual aids and storytelling in scenarios like
            presenting financial reports posed intriguing questions.
            <br />
            Platform: The project spanned both mobile and desktop interfaces,
            ensuring a seamless user experience across devices.
            <br />
            Client: The visionary force behind Hilma, partnered with Convey
            Group, steering this project towards a novel approach in
            presentation tools.
            <br />
            <br />
            The result was a journey through the intricacies of UX design where
            visual elements and rhetoric intertwine to redefine how
            presentations are made. This project was an exploration of the
            dynamics of Hilma—an application that seeks to elevate the art of
            communication in the realm of presentations.
          </div>

          <div className='justify-center items-center self-center flex max-w-full flex-col mt-6 mb-8 px-16 max-md:px-5'>
            <TagsList tags={["Wireframe", "Responsive Design", "UX Design"]} />
          </div>
        </div>
        <div className='aspect-[1.87] object-contain object-center w-full overflow-hidden mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10'>
          <ImageHilmaProj1 title={"Hilma 1"} />
        </div>
        <div className='aspect-[1.87] object-contain object-center w-full overflow-hidden mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10'>
          <ImageHilmaProj2 title={"Hilma 2"} />
        </div>
        <div className='aspect-[1.87] object-contain object-center w-full overflow-hidden mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10'>
          <ImageHilmaProj3 title={"Hilma 3"} />
        </div>
      </div>
    </>
  );
}
