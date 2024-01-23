type ImageSLProj2Props = {
  title: string;
  extended?: object;
};

const ImageSLProj2 = ({ title, extended }: ImageSLProj2Props) => {
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
      <rect width='1312' height='700' fill='url(#pattern30)' />
      <defs>
        <pattern
          id='pattern30'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            xlinkHref='#image0_4247_28'
            transform='matrix(0.000472993 0 0 0.000886525 0.110253 0)'
          />
        </pattern>
        <image
          id='image0_4247_28'
          width='1648'
          height='1128'
        />
      </defs>
    </svg>
  );
};

export default ImageSLProj2;