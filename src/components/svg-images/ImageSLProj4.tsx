type ImageSLProj4Props = {
  title: string;
  extended?: object;
};

const ImageSLProj4 = ({ title, extended }: ImageSLProj4Props) => {
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
      <rect width='1312' height='700' fill='url(#pattern32)' />
      <defs>
        <pattern
          id='pattern32'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use
            xlinkHref='#image0_4247_2034'
            transform='matrix(0.000469662 0 0 0.000880282 0.11065 0)'
          />
        </pattern>
        <image
          id='image0_4247_2034'
          width='1658'
          height='1136'
        />
      </defs>
    </svg>
  );
};

export default ImageSLProj4;