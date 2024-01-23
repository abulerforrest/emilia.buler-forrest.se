import TagsList from "@/components/partials/TagsList";
import ImagePortfolioSD2 from "@/components/svg-images/ImagePortfolioSD2";
import ImageSLProj1 from "@/components/svg-images/ImageSLProj1";
import ImageSLProj2 from "@/components/svg-images/ImageSLProj2";
import ImageSLProj3 from "@/components/svg-images/ImageSLProj3";
import ImageSLProj4 from "@/components/svg-images/ImageSLProj4";

/**
 * Project SL - Stockholm Lokaltrafik
 * Service Design and UX (Stockholm Public Transport)
 */
export default function ProjectSlSSPT() {
  return (
    <>
      <div className='flex flex-col items-stretch mt-16'>
        <span className='items-center bg-white flex w-full flex-col pb-12 px-5 max-md:max-w-full'>
          <div className='aspect-[3.39] object-contain object-center w-full self-stretch overflow-hidden max-md:max-w-full'>
            <ImagePortfolioSD2 title='Folder!' />
          </div>
          <div className='font-heading text-black text-center text-7xl xl:leading-[86px] tracking-[7.2px] self-center max-w-screen-sm mt-20 max-md:max-w-full max-md:text-4xl max-md:leading-[53px] max-md:mt-10'>
            SL - Stockholm Lokaltrafik
            <br />
            Service Design and UX,{" "}
            <span className='text-4xl lg:text-7xl italic tracking-[3.6px]'>
              Stockholm Public Transport
            </span>
          </div>
          <div className='text-black text-lg leading-7 self-center max-w-[768px] mt-6'>
            Introduction to the Project:
            <br />
            Embark on a journey to enhance the user experience of the SL app! In
            October and November 2021, we took on the challenge of elevating the
            daily experience of thousands of Stockholmers who rely on the SL
            app.
            <br />
            Our mission was clear – the SL app faced challenges with low ratings
            in the app store and discontent expressed on social media regarding
            user experience.
            <br />
            On the mobile platform, our goal was to not only address the
            apparent UX issues but to significantly improve user satisfaction
            with the SL app.
            <br />
            Navigating through the project, we encountered various challenges.
            The interface presented numerous, often minor, UX issues, creating a
            perception that the app was less functional than it truly was. We
            grappled with understanding how user tests had been conducted,
            especially concerning the journey planner's functionality, and
            defining the line between expected functionality for customers and
            nice-to-have features, particularly when both were experiencing
            inconsistencies.
            <br />
            Commissioned by Valtech for this pitch assignment, the project's
            outcomes were steered by a series of user interviews, establishing a
            clear prioritisation order.
            <br />
            Join us in exploring how we transformed challenges into
            opportunities, shaping a more user-friendly SL app for the vibrant
            city of Stockholm.
          </div>
          <div className='justify-center items-center self-center flex max-w-full flex-col mt-6 mb-8 px-16 max-md:px-5'>
            <TagsList tags={["SL", "CX", "UX Design"]} />
          </div>
        </span>
        <div className='items-stretch bg-white flex w-full flex-col justify-center px-16 max-md:max-w-full max-md:px-5'>
          <div className='aspect-[1.87] object-contain object-center w-full overflow-hidden mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10'>
            <ImageSLProj1 title='SL Project 1' />
          </div>
        </div>
        <div className='items-stretch bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5'>
          <div className='mt-16 max-md:max-w-full max-md:mt-10'>
            <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
              <div className='flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0'>
                <span className='items-stretch flex flex-col max-md:max-w-full max-md:mt-10'>
                  <div className='text-black text-base font-semibold leading-6 max-md:max-w-full'>
                    Project description:
                  </div>
                  <div className='font-heading text-black text-7xl xl:leading-[86px] tracking-[7.2px] self-center max-w-screen-sm mt-20 max-md:max-w-full max-md:text-4xl max-md:leading-[53px] max-md:mt-10'>
                    SL - Stockholm Lokaltrafik
                    <br />
                    Service Design and UX,{" "}
                    <span className='text-4xl lg:text-7xl italic tracking-[3.6px]'>
                      Stockholm Public Transport
                    </span>
                  </div>{" "}
                </span>
              </div>
              <div className='flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0'>
                <span className='flex grow flex-col items-start max-md:max-w-full max-md:mt-10'>
                  <div className='self-stretch text-black text-lg leading-7 max-md:max-w-full'>
                    Service Design and UX, Stockholm Public Transport
                    <br />
                    Review, planning and UX improvements of the SL app
                    <br />
                    <br />
                  </div>
                  <div className='self-stretch mt-8 py-2 max-md:max-w-full'>
                    <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
                      <div className='flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0'>
                        <span className='items-stretch flex grow flex-col max-md:mt-8'>
                          <div className='text-black text-xl font-bold leading-7 whitespace-nowrap'>
                            About the project
                          </div>
                          <div className='text-black text-lg leading-7 mt-4'>
                            Date: September-November 2021
                            <br />
                            The SL app is a daily companion for thousands of
                            Stockholmers. During the project period, it faced
                            low ratings on the app store, and social media
                            echoed dissatisfied voices about the user
                            experience.
                            <br />
                            Platform: Improve the user experience and boost user
                            satisfaction in the SL app (mobile).
                            <br />
                            Challenges: The interface harbours numerous (often
                            minor) UX issues, giving the entire app a less
                            favourable perception than its actual functionality
                            deserves. There's ambiguity about how user tests
                            have been conducted to assess the functionality of
                            the journey planner and what constitutes expected
                            functionality for customers versus nice-to-have
                            features, especially when both are functioning
                            inconsistently.
                            <br />
                            Client: Valtech Pitch Assignment
                            <br />
                          </div>
                        </span>
                      </div>{" "}
                      <div className='flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0'>
                        <span className='items-stretch flex flex-col max-md:mt-8'>
                          <div className='text-black text-xl font-bold leading-7 whitespace-nowrap'>
                            Results and next steps
                          </div>{" "}
                          <div className='text-black text-lg leading-7 mt-4'>
                            Results: The biggest issues were pinpointed through
                            a series of user interviews and from gathering
                            insights from the app reviews. After compiling the
                            user feedback and usability issues. We went through
                            the project goals. A long side smaller UX fixes a
                            complete goal for growth was mapped out as well as
                            areas for improvement from different user persona
                            perspectives.
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className='aspect-[1.87] object-contain object-center w-full overflow-hidden mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10'>
            <ImageSLProj2 title='SL Project 2' />
          </div>
        </div>
        <div className='items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5'>
          <div className='aspect-[1.87] object-contain object-center w-full overflow-hidden mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10'>
            <ImageSLProj3 title='SL Project 3' />
          </div>
        </div>
        <div className='items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5'>
          <div className='aspect-[1.87] object-contain object-center w-full overflow-hidden mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10'>
            <ImageSLProj4 title='SL Project 4' />
          </div>
        </div>
      </div>
    </>
  );
}
