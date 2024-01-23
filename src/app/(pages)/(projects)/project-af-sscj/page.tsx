import TagsList from "@/components/partials/TagsList";
import ImageAf2Proj1 from "@/components/svg-images/ImageAf2Proj1";
import ImageAf2Proj2 from "@/components/svg-images/ImageAf2Proj2";
import ImagePortfolioSD7 from "@/components/svg-images/ImagePortfolioSD7";

/**
 * Project AF - Service Design
 * Public Employment Service (Arbetsförmedlingen)
 * Self-Service Customer Journey /Service Blueprint
 */
export default function ProjectAfSSCJ() {
  return (
    <>
      <div className='flex flex-col items-stretch mt-16'>
        <span className='items-center bg-white flex w-full flex-col pb-12 px-5 max-md:max-w-full'>
          <div className='aspect-[2.47] object-contain object-center w-full self-stretch overflow-hidden max-md:max-w-full'>
            <ImagePortfolioSD7 title='Heart!' />
          </div>
          <div className='hyphens-auto font-heading text-black text-center text-7xl xl:leading-[86px] tracking-[7.2px] self-center max-w-screen-sm mt-20 max-md:max-w-full max-md:text-4xl max-md:leading-[53px] max-md:mt-10'>
            <span className='text-4xl lg:text-6xl lg:leading-[83.19999694824219px] tracking-[3.2px]'>
              Service Design, Public Employment Service
              (Arbets&shy;förmedlingen){" "}
            </span>

            <span className='text-4xl lg:text-7xl italic tracking-[3.6px]'>
              Self-Service Customer Journey /Service Blueprint
            </span>
          </div>
          <div className='text-black text-lg leading-7 self-center max-w-[768px] mt-6'>
            In an attempt to understand the customers journey and touchpoint a
            complete map needed to be created. From June to October 2022, we
            delved into the intricacies of the self-service flow for job seekers
            approaching the job market.
            <br />
            Our mission was clear – to unravel the complexities of the
            self-service flow. Which units, services, and systems are
            intricately linked in this customer journey? <br />
            What insights do caseworkers possess, and how do the systems support
            them? Crucially, how does this dynamic impact customers in the
            self-service flow during their initial quarter at the Public
            Employment Service?
            <br />
            Commissioned by the Department of Digital Services at the Public
            Employment Service, we set out to visualise diverse perspectives.
            Our aim was to compile the agency's services and architecture,
            aligning them seamlessly with the intricate tapestry of the customer
            journey.
            <br />
            The challenges were formidable. Past mapping efforts were confined
            to isolated, internal services, lacking collaboration across product
            teams. Transparency was elusive, hindered by technical limitations
            in measuring how these services intersect with the customer
            experience.
            <br />
            The result? A digital mapping masterpiece, intricately considering
            touch-points and internal systems, with a spotlight on the
            customer's journey. Join us in exploring how this mapping not only
            delineates agency enforcement but also sheds light on the nuanced
            landscape of agency services.
          </div>
          <div className='justify-center items-center self-center flex max-w-full flex-col mt-6 mb-8 px-16 max-md:px-5'>
            <TagsList
              tags={[
                "Customer Journey Map",
                "Service Design",
                "Service Blueprint",
              ]}
            />
          </div>
        </span>
        <div className='items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5'>
          <div className='aspect-[1.87] object-contain object-center w-full overflow-hidden mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10'>
            <ImageAf2Proj1 title='AF2 Project 1' />
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
                  <div className='hyphens-auto font-heading text-black text-7xl xl:leading-[86px] tracking-[7.2px] self-center max-w-screen-sm mt-20 max-md:max-w-full max-md:text-4xl max-md:leading-[53px] max-md:mt-10'>
                    <span className='text-4xl lg:text-6xl lg:leading-[83.19999694824219px] tracking-[3.2px]'>
                      Service Design, Public Employment Service
                      (Arbets&shy;förmedlingen){" "}
                    </span>
                    <span className='italic tracking-[3.6px]'>
                      Self-Service Customer Journey /Service Blueprint
                    </span>
                  </div>
                </span>
              </div>
              <div className='flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0'>
                <span className='flex grow flex-col items-start max-md:max-w-full max-md:mt-10'>
                  <div className='self-stretch text-black text-lg leading-7 max-md:max-w-full'>
                    Service Design <br />
                    Public Employment Service (Arbetsförmedlingen)
                    <br />
                    Self-Service Customer Journey Map / Service Blueprint
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
                            Date: June - October 2022
                            <br />
                            Brief: How might the self-service flow function for
                            job seekers approaching the job market? Which units,
                            services, and systems are linked in the customer
                            journey? What insights do caseworkers have, and
                            which systems support them? How does this impact
                            customers in the self-service flow who don't meet
                            caseworkers during their first quarter at the Public
                            Employment Service?
                            <br />
                            Purpose: To visualise various perspectives and
                            compile both the agency's services and architecture
                            with the experience of the customer journey.
                            <br />
                            Challenges: All previous mapping of services is
                            limited to a single, highly restricted internal
                            service without collaboration across product teams.
                            For example, one team tracks its product, such as
                            the number of application forms for service x
                            received.{" "}
                          </div>
                        </span>
                      </div>
                      <div className='flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0'>
                        <span className='items-stretch flex flex-col max-md:mt-8'>
                          <div className='text-black text-xl font-bold leading-7 whitespace-nowrap'>
                            Results and next steps
                          </div>
                          <div className='text-black text-lg leading-7 mt-4'>
                            This process lacks transparency for other teams. How
                            these services interact with the customer experience
                            cannot be measured due to technical limitations.
                            <br />
                            Client: Department of Digital Services, Public
                            Employment Service (Arbetsförmedlingen)
                            <br />
                            Results: A customer journey map / service blueprint
                            that considers numerous touch-points and internal
                            systems but focuses on how the customer navigates.
                            It maps both agency enforcement, information
                            architecture and agency services.
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
            <ImageAf2Proj2 title='AF2 Project 2' />
          </div>
        </div>
      </div>
    </>
  );
}
