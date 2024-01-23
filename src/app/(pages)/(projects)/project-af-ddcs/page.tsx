import TagsList from "@/components/partials/TagsList";
import ImageAf1Proj1 from "@/components/svg-images/ImageAf1Proj1";
import ImageAf1Proj2 from "@/components/svg-images/ImageAf1Proj2";
import ImagePortfolioSD1 from "@/components/svg-images/ImagePortfolioSD1";

/**
 * Project Service Design AF
 * Data-driven Customer Segmentation
 */
export default function ProjectAfDDCS() {
  return (
    <>
      <div className='flex flex-col items-stretch mt-16'>
        <span className='items-center bg-white flex w-full flex-col pb-12 px-5 max-md:max-w-full'>
          <div className='aspect-[2.47] object-contain object-center w-full self-stretch overflow-hidden max-md:max-w-full'>
            <ImagePortfolioSD1 title='Globe!' />
          </div>
          <div className='hyphens-auto font-heading text-black text-center text-7xl xl:leading-[86px] tracking-[7.2px] self-center max-w-screen-sm mt-20 max-md:max-w-full max-md:text-4xl max-md:leading-[53px] max-md:mt-10'>
            <span className='text-4xl lg:text-6xl lg:leading-[83.19999694824219px] tracking-[3.2px]'>
              Service Design, Public Employment Service (Arbetsförmedlingen){" "}
            </span>
            <br />
            <span className='text-4xl lg:text-6xl italic tracking-[3.6px]'>
              Data-driven Customer Segmentation
            </span>
          </div>
          <div className='text-black text-lg leading-7 self-center max-w-[768px] mt-6'>
            Inroduction to the project: <br />
            Dive into the realm of Service Design at the Public Employment
            Service! From January 2023 and ongoing, we've been on a mission to
            harness the power of data for customer segmentation.
            <br />
            Our task is no small feat – we're working within the existing IT
            architecture and navigating the intricacies of regulations to create
            a data-driven learning environment. The goal? To establish a robust
            process for data-verified customer segmentation that not only
            enhances case management efficiency but also sheds light on how job
            seekers approach the job market.
            <br />
            Commissioned by the Department of Digital Services at the Public
            Employment Service, our journey has been marked by challenges. From
            grappling with data scarcity to navigating legal restrictions, we're
            also addressing the nuances of the organization's structure and
            digital maturity.
            <br />
          </div>
          <div className='justify-center items-center self-center flex max-w-full flex-col mt-6 mb-8 px-16 max-md:px-5'>
            <TagsList
              tags={[
                "Arbetsförmedlingen",
                "Service Design",
                "Customer Segmentation",
              ]}
            />
          </div>
        </span>
        <div className='items-stretch bg-white flex w-full flex-col justify-center max-md:max-w-full max-md:px-5'>
          <div className='aspect-[1.27] object-contain object-center w-full overflow-hidden mt-16 mb-4 max-md:max-w-full max-md:mr-1 max-md:mt-10'>
            <ImageAf1Proj1 title='AF1 Project 1' />
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
                    <div className='hyphens-auto font-heading text-black text-7xl xl:leading-[86px] tracking-[7.2px] self-center max-w-screen-sm mt-20 max-md:max-w-full max-md:text-4xl max-md:leading-[53px] max-md:mt-10'>
                      <span className='text-4xl lg:text-6xl lg:leading-[83.19999694824219px] tracking-[3.2px]'>
                        Service Design, Public Employment Service
                        (Arbetsförmedlingen){` `}
                      </span>
                      <br />
                      <span className='text-4xl lg:text-6xl italic tracking-[3.6px]'>
                        Data-driven Customer Segmentation
                      </span>
                    </div>
                  </div>
                </span>
              </div>
              <div className='flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0'>
                <span className='flex grow flex-col items-start max-md:max-w-full max-md:mt-10'>
                  <div className='self-stretch text-black text-lg leading-7 max-md:max-w-full'>
                    Service Design <br />
                    Public Employment Service (Arbetsförmedlingen)
                    <br />
                    Capacity for Data-Driven Customer Segmentation
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
                            Date: January 2023 - Ongoing
                            <br />
                            Brief: Based on existing IT architecture and current
                            regulations, create opportunities for data-driven
                            learning and establish the foundation for a
                            data-verified customer segmentation process. This
                            process should provide iterative customer value and
                            be used to evaluate how job seekers approach the
                            labor market.
                            <br />
                            Purpose: To streamline case management, identify
                            customer needs, and enable the Public Employment
                            Service to evaluate the customer value created by
                            its own products.
                            <br />
                            Challenges: Lack of data and legal restrictions on
                            the use of existing data. The organization's
                            structure and digital maturity level.
                            <br />
                            Client: Department of Digital Services, Public
                            Employment Service (Arbetsförmedlingen)
                          </div>
                        </span>
                      </div>{" "}
                      <div className='flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0'>
                        <span className='items-stretch flex flex-col max-md:mt-8'>
                          <div className='text-black text-xl font-bold leading-7 whitespace-nowrap'>
                            Results and next steps
                          </div>{" "}
                          <div className='text-black text-lg leading-7 mt-4'>
                            Results: The work has so far provided insights into
                            the technical conditions and how we can use existing
                            technical solutions as a springboard for new ways to
                            segment customers and avenues to access new data.
                            Through an agile approach, where we build components
                            to test and gather insights in the existing
                            environment, we create opportunities to achieve
                            results that were previously hindered by overly
                            advanced technical specifications.
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
            <ImageAf1Proj2 title='AF1 Project 2' />
          </div>
        </div>
      </div>
    </>
  );
}
