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
    <div className='flex-wrap transition-all duration-200 sm:flex-nowrap border-b-2 sm:pt-4 md:pt-8 pb-24 border-[#1D1D1D] flex w-full justify-center overflow-hidden max-md:max-w-full'>
      <span>
        <ImagePencil title='Pencil' />
      </span>
      <span>
        <ImageApple title='Apple' />
      </span>
      <span className='max-h-60'>
        <ImagePortfolioUX7 title='Package!' />
      </span>
    </div>
  );
};

export default ImagePortfolioHeader;
