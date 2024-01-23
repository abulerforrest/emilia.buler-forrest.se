import ImageApple from "./ImageApple";
import ImagePencil from "./ImagePencil";
import ImagePortfolioUX7 from "./ImagePortfolioUX7";

type ImagePortfolioHeaderProps = {
  title: string;
  extended?: object;
};

const ImagePortfolioHeader = ({
  title,
  extended,
}: ImagePortfolioHeaderProps) => {
  return (
    <div className='flex-wrap transition-all duration-200 sm:flex-nowrap border-b-2 sm:pt-16 md:pt-24 pb-24 border-[#1D1D1D] flex w-full justify-center overflow-hidden max-md:max-w-full'>
      <span className='animate-slide-up animate-delay-[0.25s]'>
        <ImagePencil title='Pencil' />
      </span>
      <span className='animate-slide-up-2 animate-delay-[0.35s]'>
        <ImageApple title='Apple' />
      </span>
      <span className='mt-10 max-h-60 animate-slide-up-3 animate-delay-[0.45s]'>
        <ImagePortfolioUX7 title='Package!' />
      </span>
    </div>
  );
};

export default ImagePortfolioHeader;
