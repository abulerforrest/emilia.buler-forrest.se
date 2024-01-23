"use client";
import Link from "next/link";

import ImpressiveWords from "@/components/partials/ImpressiveWords";
import VisitProjectLink from "@/components/partials/VisitProjectLink";
import ImagePortfolioSD1 from "@/components/svg-images/ImagePortfolioSD1";
import ImagePortfolioSD2 from "@/components/svg-images/ImagePortfolioSD2";
import ImagePortfolioSD3 from "@/components/svg-images/ImagePortfolioSD3";
import ImagePortfolioSD4 from "@/components/svg-images/ImagePortfolioSD4";
import ImagePortfolioSD5 from "@/components/svg-images/ImagePortfolioSD5";
import ImagePortfolioSD6 from "@/components/svg-images/ImagePortfolioSD6";
import ImagePortfolioSD7 from "@/components/svg-images/ImagePortfolioSD7";

import { scrollToPos } from "@/helpers/func";
import { MutableRefObject, useRef } from "react";
import { useRouter } from "next/navigation";

/**
 * Portfolio Service Design
 */
export default function PortfolioServiceDesign() {
  // refs
  const projectAfDdcsRef: MutableRefObject<HTMLDivElement | null> =
    useRef(null);

  const projectSlSsptRef: MutableRefObject<HTMLDivElement | null> =
    useRef(null);

  const projectPrelovedRef: MutableRefObject<HTMLDivElement | null> =
    useRef(null);

  const projectAfFpop: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const router = useRouter();

  return (
    <>
      <div className='flex flex-col items-stretch -mt-20 md:mt-0'>
        <span className='items-stretch bg-white flex w-full flex-col py-12 max-md:max-w-full max-md:px-5'>
          <div className='animate-slide-down font-heading self-center text-black text-center text-7xl leading-[98px] tracking-[3.6px] max-w-screen-md mt-16 max-md:max-w-full max-md:text-4xl max-md:leading-[53px] max-md:mt-10'>
            <span className='md:text-7xl text-5xl leading-[86.4000015258789px] tracking-[7.2px]'>
              Portfolio
            </span>{" "}
            <span className='md:text-7xl text-5xl italic leading-[86.4000015258789px] tracking-[3.6px]'>
              Service{" "}
            </span>
            <br />
            <span className='md:text-7xl text-5xl md:leading-[86.4000015258789px] tracking-[7.2px]'>
              Design
            </span>
          </div>
          <ImpressiveWords />
          <div className='mt-20 mb-10 max-md:max-w-full max-md:mt-10'>
            <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
              <div className='flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0'>
                <div className='items-stretch flex flex-col max-md:mt-8'>
                  <div className='aspect-[1.46] md:aspect-[0.76] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10'>
                    <Link
                      href='#data-driven-customer-segmentation'
                      className=' cursor-pointer'
                      onClick={(event) => {
                        event.preventDefault();
                        router.push("#data-driven-customer-segmentation", {
                          scroll: false,
                        });
                        scrollToPos(projectAfDdcsRef);
                      }}
                    >
                      <div className='has-tooltip flex items-center justify-center h-full'>
                        <span className='opacity-0 hover:opacity-95 hidden xl:flex hyphens-manual text-wrap w-min font-bimbo text-3xl tooltip px-3 py-2 rounded bg-[#1D1D1D] text-white'>
                          Arbets&shy;förmedlingen Datadriven Kundsegmentering
                        </span>
                        <ImagePortfolioSD1 title='Globe!' />
                      </div>
                    </Link>
                  </div>
                  <div className='aspect-[1.46] md:aspect-[0.98] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10'>
                    <Link
                      href='#stockholm-public-transport'
                      className=' cursor-pointer'
                      onClick={(event) => {
                        event.preventDefault();
                        router.push("#stockholm-public-transport", {
                          scroll: false,
                        });
                        scrollToPos(projectSlSsptRef);
                      }}
                    >
                      <div className='has-tooltip flex items-center justify-center h-full'>
                        <span className='opacity-0 hover:opacity-95 hidden xl:flex hyphens-manual text-wrap w-min font-bimbo text-3xl tooltip px-3 py-2 rounded bg-[#1D1D1D] text-white'>
                          Stockholm Lokaltrafik (SL)
                        </span>
                        <ImagePortfolioSD2 title='Folder!' />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0'>
                <div className='items-stretch flex grow flex-col max-md:mt-8'>
                  <div className='aspect-[1.46] md:aspect-[1.16] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10'>
                    <ImagePortfolioSD3 title='Hat!' />
                  </div>
                  <div className='aspect-[1.46] md:aspect-[0.96] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10'>
                    <ImagePortfolioSD4 title='Folder!' />
                  </div>
                  <div className='aspect-[1.46] md:aspect-[0.96] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10'>
                    <Link
                      href='#facilitating-the-process'
                      className='cursor-pointer'
                      onClick={(event) => {
                        event.preventDefault();
                        router.push("#facilitating-the-process", {
                          scroll: false,
                        });
                        scrollToPos(projectAfFpop);
                      }}
                    >
                      <div className='has-tooltip flex items-center justify-center h-full'>
                        <span className='opacity-0 hover:opacity-95 hidden xl:flex hyphens-manual text-wrap w-min font-bimbo text-3xl tooltip px-3 py-2 rounded bg-[#1D1D1D] text-white'>
                          Arbetsförmedlingen Facilitering Av Verksamhets
                          planering
                        </span>
                        <ImagePortfolioSD5 title='Chess!' />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0'>
                <div className='items-stretch flex flex-col max-md:mt-8'>
                  <div className='aspect-[1.46] md:aspect-[0.86] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10'>
                    <Link
                      href='#h&m-preloved'
                      className='cursor-pointer'
                      onClick={(event) => {
                        event.preventDefault();
                        router.push("#h&m-preloved", {
                          scroll: false,
                        });
                        scrollToPos(projectPrelovedRef);
                      }}
                    >
                      <div className='has-tooltip flex items-center justify-center h-full'>
                        <span className='opacity-0 hover:opacity-95 hidden xl:flex hyphens-manual text-wrap w-min font-bimbo text-3xl tooltip px-3 py-2 rounded bg-[#1D1D1D] text-white'>
                          H&M Foundation: Concept for H&M Preloved
                        </span>
                        <ImagePortfolioSD6 title='Book!' />
                      </div>
                    </Link>
                  </div>
                  <div className='aspect-[1.46] md:aspect-[0.86] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10'>
                    <Link href='#service-blueprint' className=' cursor-pointer'>
                      <div className='has-tooltip flex items-center justify-center h-full'>
                        <span className='opacity-0 hover:opacity-95 hidden xl:flex hyphens-manual text-wrap w-min font-bimbo text-3xl tooltip px-3 py-2 rounded bg-[#1D1D1D] text-white'>
                          Service Blueprint
                        </span>
                        <ImagePortfolioSD7 title='Heart!' />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
        <div
          id='h&m-preloved'
          ref={projectPrelovedRef}
          className='items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5'
        >
          <div className='mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10'>
            <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
              <div className='flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0'>
                <div className='aspect-[1.16] md:aspect-[1.06] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10'>
                  <ImagePortfolioSD6 title='Book!' />
                </div>
              </div>
              <div className='flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0'>
                <span className='items-stretch flex flex-col max-md:max-w-full max-md:mt-10'>
                  <div className='hyphens-manual leading-[61.4000015258789px] font-heading text-black text-4xl md:text-4xl md:leading-[51.4000015258789px] lg:text-5xl lg:leading-[79.4000015258789px] xl:text-6xl xl:leading-[86.4000015258789px] tracking-[3.2px] max-md:max-w-full'>
                    H&M Foundation: Concept for <br />
                    <span className='italic text-4xl lg:text-6xl max-md:text-5xl leading-[36.4000015258789px] tracking-[3.6px]'>
                      H&M Preloved
                    </span>
                  </div>{" "}
                  <div className='text-black text-base leading-6 mt-6 max-md:max-w-full'>
                    This undertaking aimed not only to enhance H&M's credibility
                    as an ecologically sustainable collaborator but also to
                    address challenges such as navigating the complexities of
                    H&M's digital landscape and the general skepticism among
                    customers regarding the brand's sustainability efforts.
                  </div>
                  <div className='text-black text-base leading-6 mt-4 max-md:max-w-full'>
                    Commissioned by The H&M Foundation in collaboration with
                    Berghs School of Communication, our results have been
                    promising. Through user interviews and targeted surveys, we
                    discovered that H&M holds significant credibility in terms
                    of trends and commercial offerings. Yet, there remained a
                    challenge – making second-hand shopping as trendy and
                    accessible as purchasing new items.
                  </div>
                  <div className='text-black text-base leading-6 mt-4 max-md:max-w-full'>
                    We've devised a model, merging H&M's existing product
                    development prowess with a new product category –
                    second-hand clothes. The result is a prototype that paves
                    the way for a sustainable cycle, ensuring fashion keeps
                    spinning, year after year.
                  </div>
                  <VisitProjectLink
                    alt='Preloved project link'
                    label='Visit project'
                    href='/project-preloved'
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          id='data-driven-customer-segmentation'
          ref={projectAfDdcsRef}
          className='items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5'
        >
          <div className='mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10'>
            <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
              <div className='flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0'>
                <span className='items-stretch flex grow flex-col pb-10 max-md:max-w-full max-md:mt-10'>
                  <div className='hyphens-manual leading-[51.4000015258789px] font-heading text-black text-4xl md:text-4xl md:leading-[51.4000015258789px] lg:text-5xl lg:leading-[69.4000015258789px] xl:text-6xl xl:leading-[86.4000015258789px] tracking-[3.2px] max-md:max-w-full'>
                    Service Design, Public Employment Service
                    (Arbets&shy;förmedlingen){" "}
                    <span className='xl:text-7xl italic tracking-[3.6px]'>
                      Data-Driven Customer Segmen&shy;tation
                    </span>
                  </div>
                  <div className='text-black text-base leading-6 mt-6 max-md:max-w-full'>
                    Dive into the realm of Service Design at the Public
                    Employment Service! From January 2023 and ongoing, we've
                    been on a mission to harness the power of data for customer
                    segmentation.
                    <br />
                    Our task is no small feat – we're working within the
                    existing IT architecture and navigating the intricacies of
                    regulations to create a data-driven learning environment.
                    The goal? To establish a robust process for data-verified
                    customer segmentation that not only enhances case management
                    efficiency but also sheds light on how job seekers approach
                    the job market.
                  </div>
                  <div className='text-black text-base leading-6 mt-4 max-md:max-w-full'>
                    Commissioned by the Department of Digital Services at the
                    Public Employment Service, our journey has been marked by
                    challenges. From grappling with data scarcity to navigating
                    legal restrictions, we're also addressing the nuances of the
                    organization's structure and digital maturity.
                  </div>
                  <VisitProjectLink
                    alt='Data-driven Customer Segmentation project link'
                    label='Visit project'
                    href='/project-af-ddcs'
                  />
                </span>
              </div>
              <div className='order-first md:order-last flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0'>
                <div className='aspect-[1] md:aspect-[0.86] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10'>
                  <ImagePortfolioSD1 title='Globe!' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id='service-blueprint'
          className='items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5'
        >
          <div className='mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10'>
            <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
              <div className='flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0'>
                <span className='items-stretch flex grow flex-col pb-10 max-md:max-w-full max-md:mt-10'>
                  <div className='hyphens-manual leading-[51.4000015258789px] font-heading text-black text-4xl md:text-4xl md:leading-[51.4000015258789px] lg:text-5xl lg:leading-[69.4000015258789px] xl:text-6xl xl:leading-[86.4000015258789px] tracking-[3.2px] max-md:max-w-full'>
                    <span className='hyphens-manual font-heading text-black text-4xl xl:text-6xl  xl:leading-[83px] tracking-[3.2px] max-md:max-w-full max-md:text-4xl max-md:leading-[57px]'>
                      Service De&shy;sign, Public Employment Service
                      (Arbets&shy;förmedlingen){" "}
                    </span>
                    <span className='xl:text-7xl italic tracking-[3.6px]'>
                      Self-Service Customer Journey /Service Blueprint
                    </span>
                  </div>
                  <div className='text-black text-base leading-6 mt-6 max-md:max-w-full'>
                    In an attempt to understand the customers journey and
                    touchpoint a complete map needed to be created. From June to
                    October 2022, we delved into the intricacies of the
                    self-service flow for job seekers approaching the job
                    market.
                    <br />
                    Our mission was clear – to unravel the complexities of the
                    self-service flow. Which units, services, and systems are
                    intricately linked in this customer journey?{" "}
                  </div>
                  <div className='text-black text-base leading-6 mt-4 max-md:max-w-full'>
                    What insights do caseworkers possess, and how do the systems
                    support them? Crucially, how does this dynamic impact
                    customers in the self-service flow during their initial
                    quarter at the Public Employment Service?
                    <br />
                    Commissioned by the Department of Digital Services at the
                    Public Employment Service, we set out to visualise diverse
                    perspectives. Our aim was to compile the agency's services
                    and architecture, aligning them seamlessly with the
                    intricate tapestry of the customer journey.
                  </div>{" "}
                  <div className='text-black text-base leading-6 mt-4 max-md:max-w-full'>
                    The challenges were formidable. Past mapping efforts were
                    confined to isolated, internal services, lacking
                    collaboration across product teams. Transparency was
                    elusive, hindered by technical limitations in measuring how
                    these services intersect with the customer experience.
                    <br />
                    The result? A digital mapping masterpiece, intricately
                    considering touch-points and internal systems, with a
                    spotlight on the customer's journey. Join us in exploring
                    how this mapping not only delineates agency enforcement but
                    also sheds light on the nuanced landscape of agency
                    services.
                  </div>
                  <VisitProjectLink
                    alt='Self-Service Customer Journey /Service Blueprint link'
                    label='Visit project'
                    href='/project-af-sscj'
                  />
                </span>
              </div>

              <div className='order-first flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0'>
                <div className='aspect-[1.10] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10'>
                  <ImagePortfolioSD7 title='Heart!' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id='stockholm-public-transport'
          ref={projectSlSsptRef}
          className='items-stretch bg-white flex w-full flex-col pt-12 px-16 max-md:max-w-full max-md:px-5'
        >
          <div className='justify-center mt-16 pb-12 max-md:max-w-full max-md:mr-1 max-md:mt-10'>
            <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
              <div className='flex flex-col items-stretch w-[38%] ml-5 max-md:w-full max-md:ml-0'>
                <span className='items-stretch flex flex-col pb-12 max-md:max-w-full max-md:mt-10'>
                  <div className='font-heading text-black text-4xl xl:text-6xl leading-[50px] xl:leading-[83px] tracking-[3.2px] max-md:max-w-full max-md:text-4xl max-md:leading-[57px]'>
                    SL - Stockholm Lokaltrafik
                    <br />
                    Service Design and UX,{" "}
                    <span className='italic text-4xl xl:text-7xl xl:leading-[86.4000015258789px] tracking-[3.6px]'>
                      Stockholm Public Transport
                    </span>
                  </div>
                  <div className='text-black text-lg leading-7 mt-6 mb-14 max-md:max-w-full max-md:mb-10'>
                    Introduction to the Project:
                    <br />
                    Embark on a journey to enhance the user experience of the SL
                    app! In October and November 2021, we took on the challenge
                    of elevating the daily experience of thousands of
                    Stockholmers who rely on the SL app.
                    <br />
                    <br />
                    Our mission was clear – the SL app faced challenges with low
                    ratings in the app store and discontent expressed on social
                    media regarding user experience.
                    <br />
                    On the mobile platform, our goal was to not only address the
                    apparent UX issues but to significantly improve user
                    satisfaction with the SL app.
                    <br />
                    <br />
                    Navigating through the project, we encountered various
                    challenges. The interface presented numerous, often minor,
                    UX issues, creating a perception that the app was less
                    functional than it truly was. We grappled with understanding
                    how user tests had been conducted, especially concerning the
                    journey planner's functionality, and defining the line
                    between expected functionality for customers and
                    nice-to-have features, particularly when both were
                    experiencing inconsistencies.
                    <br />
                    <br />
                    Commissioned by Valtech for this pitch assignment, the
                    project's outcomes were steered by a series of user
                    interviews, establishing a clear prioritisation order.
                    <br />
                    Join us in exploring how we transformed challenges into
                    opportunities, shaping a more user-friendly SL app for the
                    vibrant city of Stockholm.
                    <VisitProjectLink
                      alt='SL project link'
                      label='Visit project'
                      href='/project-sl-sspt'
                    />
                  </div>
                </span>
              </div>
              <div className='order-first md:order-last flex flex-col items-stretch w-[62%] max-md:w-full max-md:ml-0'>
                <div className='order-first aspect-[1.20] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10'>
                  <ImagePortfolioSD2 title='Folder!' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id='facilitating-the-process'
          ref={projectAfFpop}
          className='items-stretch bg-white flex w-full flex-col pt-12 px-16 max-md:max-w-full max-md:px-5'
        >
          <div className='justify-center mt-16 pb-12 max-md:max-w-full max-md:mr-1 max-md:mt-10'>
            <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
              <div className='order-first flex flex-col items-stretch w-[62%] ml-5 max-md:w-full max-md:ml-0'>
                <div className='aspect-[1.40] md:aspect-[1.26] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10'>
                  <ImagePortfolioSD5 title='Chess!' />
                </div>
              </div>

              <div className='flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0'>
                <span className='items-stretch flex flex-col pb-12 max-md:max-w-full max-md:mt-10'>
                  <div className='font-heading text-black text-4xl xl:text-6xl leading-[50px] xl:leading-[83px] tracking-[3.2px] max-md:max-w-full max-md:text-4xl max-md:leading-[57px]'>
                    Service Design, Public Employment Service
                    (Arbets&shy;förmedlingen){" "}
                    <span className='italic'>
                      Facilitating the Process of Operational Planning
                    </span>
                  </div>
                  <div className='text-black text-lg leading-7 mt-6 mb-14 max-md:max-w-full max-md:mb-10'>
                    In the dynamic landscape of Arbetsförmedlingen, the
                    challenge was clear—how to structure the annual operational
                    planning of the Guidance and Education Unit (Enheten Vägleda
                    & Utbilda). The goal was to strike a balance: an overarching
                    structure that stays relevant yet is detailed enough for the
                    practical work of product teams. The mission extended beyond
                    a one-time effort, aiming to create a replicable approach
                    for subsequent years.
                    <VisitProjectLink
                      alt='Facilitating the Process of Operational Planning project link'
                      label='Visit project'
                      href='/project-af-fpop'
                    />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
