import TagsList from "@/components/partials/TagsList";
import ImageHMHeader from "@/components/svg-images/ImageHMHeader";
import ImageHmProj1 from "@/components/svg-images/ImageHmProj1";
import ImageHmProj2 from "@/components/svg-images/ImageHmProj2";
import ImageHmProj3 from "@/components/svg-images/ImageHmProj3";

/**
 * Project Preloved
 */
export default function ProjectPreloved() {
  return (
    <>
      <div className='flex flex-col items-stretch mt-16'>
        <span className='items-center bg-white flex w-full flex-col pb-12 px-5 max-md:max-w-full'>
          <div className='aspect-[3.67] object-contain object-center w-full self-stretch overflow-hidden max-md:max-w-full'>
            <ImageHMHeader title='H&M header image' />
          </div>
          <div className='font-heading text-black text-center text-7xl xl:leading-[86px] tracking-[7.2px] self-center max-w-screen-sm mt-20 max-md:max-w-full max-md:text-4xl max-md:leading-[53px] max-md:mt-10'>
            <span className='text-4xl lg:text-6xl lg:leading-[83.19999694824219px] tracking-[3.2px]'>
              H&M Foundation: Concept for{" "}
            </span>
            <span className='text-4xl lg:text-7xl italic tracking-[3.6px]'>
              H&M Preloved
            </span>
          </div>
          <div className='text-black text-lg leading-7 self-center max-w-[768px] mt-6'>
            Introduction to the Project:
            <br />
            Step into the world of Service Design and UX at H&M, where we've
            embarked on an exciting journey of facilitating the process for
            business planning. From September to December 2021, our mission was
            clear: How can we leverage a digital product to empower H&M's
            customers to share materials, fostering inspiration for eco-friendly
            choices?
            <br />
            This undertaking aimed not only to enhance H&M's credibility as an
            ecologically sustainable collaborator but also to address challenges
            such as navigating the complexities of H&M's digital landscape and
            the general skepticism among customers regarding the brand's
            sustainability efforts.
            <br />
            Commissioned by The H&M Foundation in collaboration with Berghs
            School of Communication, our results have been promising. Through
            user interviews and targeted surveys, we discovered that H&M holds
            significant credibility in terms of trends and commercial offerings.
            Yet, there remained a challenge – making second-hand shopping as
            trendy and accessible as purchasing new items.
            <br />
            We've devised a groundbreaking model, merging H&M's existing product
            development prowess with a new product category – second-hand
            clothes. The result is a prototype that paves the way for a
            sustainable cycle, ensuring fashion keeps spinning, year after year.
            <br />
            Join us on this design adventure where innovation meets
            sustainability, and let's explore the potential of fashion in the
            digital age.
          </div>
          <div className='justify-center items-center self-center flex max-w-full flex-col mt-6 mb-8 px-16 max-md:px-5'>
            <TagsList tags={["H&M", "Service Design", "UX Design"]} />
          </div>
        </span>
        <div className='items-stretch bg-white flex w-full flex-col justify-center px-16  max-md:max-w-full max-md:px-5'>
          <div className='md:aspect-[1.87] xl:aspect-[1.77]  object-center w-full overflow-hidden mt-8 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10'>
            <ImageHmProj1 title='H&M Project Image 1' />
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
                  <div className='font-heading text-black text-7xl leading-[98px] tracking-[3.6px] mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]'>
                    <span className='text-4xl lg:text-6xl lg:leading-[83.19999694824219px] tracking-[3.2px]'>
                      H&M Foundation: Concept for{" "}
                    </span>
                    <span className='text-4xl lg:text-7xl italic tracking-[3.6px]'>
                      H&M Preloved
                    </span>
                  </div>
                </span>
              </div>
              <div className='flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0'>
                <span className='flex grow flex-col items-start max-md:max-w-full max-md:mt-10'>
                  <div className='self-stretch text-black text-lg leading-7 max-md:max-w-full'>
                    Service Design and UX, H&M
                    <br />
                    Facilitating the Process for Business Planning,
                    <br />
                    Concept and UX design for the application.
                    <br />
                    <br />
                  </div>
                  <div className='self-stretch mt-8 py-2 max-md:max-w-full'>
                    <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
                      <div className='flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0'>
                        <span className='items-stretch flex flex-col max-md:mt-8'>
                          <div className='text-black text-xl font-bold leading-7 whitespace-nowrap'>
                            About the project
                          </div>
                          <div className='text-black text-lg leading-7 mt-4'>
                            Date: September - December 2021
                            <br />
                            Brief: How might we, with the help of a digital
                            product, enable H&M's customers to collect and share
                            materials that inspire climate-smart choices?
                            <br />
                            Purpose: Develop a digital product for H&M that
                            allows them to work in a credible way as an
                            ecologically sustainable collaborator with their
                            customers.
                            <br />
                            Platform: Mobile and Desktop
                            <br />
                            Challenges: H&M's reputation regarding
                            sustainability issues, an area where customers
                            generally lack trust in H&M. The size of H&M's
                            existing digital solutions and initiatives, complex
                            to navigate both technically and theoretically when
                            the project was planned.
                            <br />
                            Client: The H&M Foundation in collaboration with
                            Berghs School of Communication.
                          </div>
                        </span>
                      </div>
                      <div className='flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0'>
                        <span className='items-stretch flex grow flex-col max-md:mt-8'>
                          <div className='text-black text-xl font-bold leading-7 whitespace-nowrap'>
                            Results and next steps
                          </div>
                          <div className='text-black text-lg leading-7 mt-4'>
                            Results: According to user interviews and selected
                            surveys, H&M has significant credibility with its
                            customers regarding trend levels and commercial
                            offerings. However, many customers face difficulties
                            when it comes to buying second-hand items. Questions
                            like &quot;What's trendy?&quot; and &quot;How should
                            these items be worn?&quot; arise. H&M annually
                            collects a vast amount of discarded garments through
                            textile recycling from their stores. By curating
                            second-hand items in line with current trends,
                            sorting models and colors, and creating trend
                            capsules in the same way as new collections are
                            developed, H&M makes it easy for customers to
                            purchase and establishes a sustainable cycle for
                            clothing, over and over again. We have developed a
                            model for how H&M could use its existing product
                            development for a new product category (second-hand
                            clothes) and built a prototype to test this concept.
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className='aspect-[1.87] object-contain object-center w-full overflow-hidden mt-20 mb-10 max-md:max-w-full max-md:mt-10'>
            <ImageHmProj2 title='H&M Project Image 2' />
          </div>
        </div>
        <div className='items-stretch bg-white flex w-full flex-col justify-center px-16  max-md:max-w-full max-md:px-5'>
          <div className='aspect-[1.87] object-contain object-center w-full overflow-hidden mb-10 max-md:max-w-full max-md:mt-10'>
            <ImageHmProj3 title='H&M Project Image 2' />
          </div>
        </div>
      </div>
    </>
  );
}
