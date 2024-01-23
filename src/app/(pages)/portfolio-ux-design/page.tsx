"use client";
import ImpressiveWords from "@/components/partials/ImpressiveWords";
import VisitProjectLink from "@/components/partials/VisitProjectLink";
import ImagePortfolioUX1 from "@/components/svg-images/ImagePortfolioUX1";
import ImagePortfolioUX2 from "@/components/svg-images/ImagePortfolioUX2";
import ImagePortfolioUX3 from "@/components/svg-images/ImagePortfolioUX3";
import ImagePortfolioUX4 from "@/components/svg-images/ImagePortfolioUX4";
import ImagePortfolioUX5 from "@/components/svg-images/ImagePortfolioUX5";
import ImagePortfolioUX6 from "@/components/svg-images/ImagePortfolioUX6";
import ImagePortfolioUX7 from "@/components/svg-images/ImagePortfolioUX7";
import { scrollToPos } from "@/helpers/func";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MutableRefObject, useRef } from "react";

/**
 * Portfolio UX Design
 */
export default function PortfolioUXDesign() {
  const projectWellOrganisedRef: MutableRefObject<HTMLDivElement | null> =
    useRef(null);

  const projectSlRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const projectPrelovedRef: MutableRefObject<HTMLDivElement | null> =
    useRef(null);

  const hilmaConveyRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const router = useRouter();
  return (
    <>
      <div className='flex flex-col items-stretch -mt-20 md:mt-0'>
        <span className='items-stretch bg-white flex w-full flex-col py-12 max-md:max-w-full max-md:px-5'>
          <div className='font-heading self-center text-black text-center text-7xl leading-[98px] tracking-[3.6px] max-w-screen-md mt-16 max-md:max-w-full max-md:text-4xl max-md:leading-[53px] max-md:mt-10'>
            <span className='md:text-7xl text-5xl leading-[86.4000015258789px] tracking-[7.2px]'>
              Portfolio
            </span>{" "}
            <span className='md:text-7xl text-5xl leading-[86.4000015258789px] tracking-[3.6px]'>
              UX{" "}
            </span>
            <span className='md:text-7xl text-5xl md:leading-[86.4000015258789px] tracking-[7.2px]'>
              Design
            </span>
          </div>
          <ImpressiveWords />
          <div className='mt-20 mb-10 max-md:max-w-full max-md:mt-10'>
            <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
              <div className='flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0'>
                <div className='items-stretch flex flex-col max-md:mt-8'>
                  <div className='aspect-[1.66] md:aspect-[0.76] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10'>
                    <ImagePortfolioUX1 title='Camera!' />
                  </div>
                  <div className='aspect-[1.46] md:aspect-[0.76] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10'>
                    <Link
                      href='#hilma-convey-group'
                      className='cursor-pointer'
                      onClick={(event) => {
                        event.preventDefault();
                        router.push("#hilma-convey-group", {
                          scroll: false,
                        });
                        scrollToPos(hilmaConveyRef);
                      }}
                    >
                      <div className='has-tooltip flex items-center justify-center h-full'>
                        <span className='opacity-0 hover:opacity-95 hidden xl:flex hyphens-manual text-wrap w-min font-bimbo text-3xl tooltip px-3 py-2 rounded bg-[#1D1D1D] text-white'>
                          UX, Hilma / Convey Group: Crafting Presentations with
                          Purpose
                        </span>
                        <ImagePortfolioUX2 title='Key!' />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0'>
                <div className='items-stretch flex grow flex-col max-md:mt-8'>
                  <div className='aspect-[1.78] md:aspect-[1.76] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10'>
                    <Link
                      href='#well-organised-blog'
                      className='cursor-pointer'
                      onClick={(event) => {
                        event.preventDefault();
                        router.push("#well-organised-blog", {
                          scroll: false,
                        });
                        scrollToPos(projectWellOrganisedRef);
                      }}
                    >
                      <div className='has-tooltip flex items-center justify-center h-full'>
                        <span className='opacity-0 hover:opacity-95 hidden xl:flex hyphens-manual text-wrap w-min font-bimbo text-3xl tooltip px-3 py-2 rounded bg-[#1D1D1D] text-white'>
                          Well Organised Blog project
                        </span>
                        <ImagePortfolioUX3 title='Lightbulb!' />
                      </div>
                    </Link>
                  </div>
                  <div className='aspect-[1.78] md:aspect-[1.1] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10'>
                    <Link
                      href='#stockholm-lokaltrafik-sl'
                      className='cursor-pointer'
                      onClick={(event) => {
                        event.preventDefault();
                        router.push("#stockholm-lokaltrafik-sl", {
                          scroll: false,
                        });
                        scrollToPos(projectSlRef);
                      }}
                    >
                      <div className='has-tooltip flex items-center justify-center h-full'>
                        <span className='opacity-0 hover:opacity-95 hidden xl:flex hyphens-manual text-wrap w-min font-bimbo text-3xl tooltip px-3 py-2 rounded bg-[#1D1D1D] text-white'>
                          Stockholm Lokaltrafik (SL)
                        </span>
                        <ImagePortfolioUX4 title='Plaster!' />
                      </div>
                    </Link>
                  </div>
                  <div className='aspect-[1.46] md:aspect-[0.76] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10'>
                    <ImagePortfolioUX5 title='Cloud!' />
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0'>
                <div className='items-stretch flex flex-col max-md:mt-8'>
                  <div className='aspect-[1.78] md:aspect-[1.1] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10'>
                    <Link
                      href='#stockholm-lokaltrafik-sl'
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
                        <ImagePortfolioUX6 title='Bag!' />
                      </div>
                    </Link>
                  </div>
                  <div className='aspect-[1.46] md:aspect-[0.96] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10'>
                    <ImagePortfolioUX7 title='Package!' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
        <div
          id='well-organised-blog'
          ref={projectWellOrganisedRef}
          className='items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5'
        >
          <div className='mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10'>
            <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
              <div className='flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0'>
                <span className='items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10'>
                  <div className='font-heading text-black text-7xl leading-[86px] tracking-[7.2px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]'>
                    The Well Organised Blog{" "}
                    <span className='italic tracking-[3.6px]'>
                      UX design for Wordpress
                    </span>
                  </div>{" "}
                  <div className='text-black text-base leading-6 mt-6 max-md:max-w-full'>
                    UX, Well-Organised Blog Design
                    <br />
                    Date: June - July 2022
                    <br />
                    In the realms of WordPress, a project unfolded between
                    October and November 2021, aiming to enhance the blogging
                    experience. The objective was to integrate UI and UX
                    elements seamlessly, creating a responsive design catering
                    to both mobile and desktop platforms.
                  </div>{" "}
                  <div className='text-black text-base leading-6 mt-4 max-md:max-w-full'>
                    Challenges: Navigating through the intricacies of design
                    systems, the project sought a delicate equilibrium between
                    custom UI components and the familiarity of Material Design
                    icons. The challenge was not only aesthetic but also aimed
                    to ensure an intuitive and functional design, marrying
                    visual appeal with usability.
                    <br />
                    Platform: Tailoring a unique UI and UX for WordPress, the
                    project addressed the needs of both mobile and desktop
                    interfaces.
                  </div>{" "}
                  <div className='text-black text-base leading-6 mt-4 max-md:max-w-full'>
                    Client: An internally initiated project that required a
                    blend of creativity and practicality.
                    <br />
                    Results: The project resulted in a scalable design that
                    introduced a thoughtful set of UI and UX elements. This
                    design sets the stage for a user journey that is both
                    practical and visually pleasing.
                    <br />
                    Join us as we delve into the details of this project—a
                    harmonious blend of design and functionality, where
                    aesthetics meet user experience in the intricate dance of
                    pixels and code
                  </div>
                  <VisitProjectLink
                    alt='Well Organised link'
                    label='Visit project'
                    href='/project-well-organised'
                  />
                </span>
              </div>
              <div className='order-first md:order-last flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0'>
                <div className='object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10'>
                  <ImagePortfolioUX3 title='Lightbulb!' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id='hilma-convey-group'
          ref={hilmaConveyRef}
          className='items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5'
        >
          <div className='justify-center mt-16 max-md:max-w-full max-md:mr-1 max-md:mt-10'>
            <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
              <div className='flex flex-col items-stretch w-[62%] max-md:w-full max-md:ml-0'>
                <div className='aspect-[1.3] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10'>
                  <ImagePortfolioUX2 title='Key!' />
                </div>
              </div>
              <div className='flex flex-col items-stretch w-[38%] ml-5 max-md:w-full max-md:ml-0'>
                <span className='items-stretch flex grow flex-col pb-12 max-md:max-w-full max-md:mt-10'>
                  <div className='hyphens-manual leading-[51.4000015258789px] font-heading text-black text-4xl md:text-4xl md:leading-[51.4000015258789px] lg:text-5xl lg:leading-[69.4000015258789px] xl:text-6xl xl:leading-[86.4000015258789px] tracking-[3.2px] max-md:max-w-full'>
                    The Hilma Presentations App -{" "}
                    <span className='italic tracking-[3.6px]'>UX design</span>
                  </div>{" "}
                  <div className='text-black text-base leading-6 mt-6 mb-9 max-md:max-w-full'>
                    UX, Hilma / Convey Group: Crafting Presentations with
                    Purpose
                    <br />
                    Date: February-May 2022
                    <br />
                    In the spring of 2022, a new UX project unfolded in
                    collaboration with Hilma, an application designed to shape
                    presentations for business and lectures. Unlike conventional
                    platforms that often prioritise creating slides over content
                    and rhetorical principles, Hilma aimed to shift the focus to
                    the substance of presentations.
                    <br />
                    Challenges: This endeavour ventured into uncharted
                    territory, aiming to design an application that encourages
                    communication through verbal and rhetorical techniques
                    rather than relying on visually crafted messages. The
                    challenge lay in creating a visually intuitive interface
                    that stimulates communication rather than text
                    visualisation.
                    <br />
                    Complicating matters, user testers hailed from a major
                    banking institution, adding layers of complexity.
                    Determining the balance between visual aids and storytelling
                    in scenarios like presenting financial reports posed
                    intriguing questions.
                    <br />
                    Platform: The project spanned both mobile and desktop
                    interfaces, ensuring a seamless user experience across
                    devices.
                    <br />
                    Client: The visionary force behind Hilma, partnered with
                    Convey Group, steering this project towards a novel approach
                    in presentation tools.
                    <br />
                    <br />
                    The result was a journey through the intricacies of UX
                    design where visual elements and rhetoric intertwine to
                    redefine how presentations are made. This project was an
                    exploration of the dynamics of Hilma—an application that
                    seeks to elevate the art of communication in the realm of
                    presentations.
                    <VisitProjectLink
                      alt='Self-Service Customer Journey /Service Blueprint link'
                      label='Visit project'
                      href='/project-hilma-convey'
                    />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          id='h&m-preloved'
          ref={projectPrelovedRef}
          className='items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5'
        >
          <div className='mt-16 mb-20 max-md:max-w-full max-md:mr-1 max-md:my-10'>
            <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
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
              <div className='order-first md:order-last flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0'>
                <div className='aspect-[1.2] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10'>
                  <ImagePortfolioUX6 title='Bag!' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id='stockholm-lokaltrafik-sl'
          ref={projectSlRef}
          className='items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5'
        >
          <div className='mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10'>
            <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
              <div className='flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0'>
                <div className='aspect-[1.4] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10'>
                  <ImagePortfolioUX4 title='Plaster!' />
                </div>
              </div>
              <div className='flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0'>
                <span className='items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10'>
                  <div className='hyphens-manual font-heading text-black text-4xl md:text-4xl md:leading-[51.4000015258789px] lg:text-5xl lg:leading-[79.4000015258789px] xl:text-6xl xl:leading-[86.4000015258789px] tracking-[3.2px] max-md:max-w-full'>
                    <span className=''>SL - Stockholm Lokaltrafik</span>
                    <br />
                    <span>Service Design and UX, </span>
                    <span className='italic'>Stockholm Public Transport</span>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
