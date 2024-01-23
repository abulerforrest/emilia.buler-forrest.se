type ImageSLProj3Props = {
  title: string;
  extended?: object;
};

const ImageSLProj3 = ({ title, extended }: ImageSLProj3Props) => {
  return (
    <svg
      width='inherit'
      height='inherit'
      viewBox='0 0 1312 700'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      {...extended}
    >
      <title>{title}</title>
      <rect width='1312' height='700' fill='url(#pattern31)' />
      <defs>
        <pattern
          id='pattern31'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            xlinkHref='#image0_4247_666'
            transform='matrix(0.000473834 0 0 0.000888099 0.110035 0)'
          />
        </pattern>
        <image
          id='image0_4247_666'
          width='1646'
          height='1126'
        />
      </defs>
    </svg>
  );
};

export default ImageSLProj3;