type TagsListProps = {
  tags: string[];
};

const TagsList = ({ tags }: TagsListProps) => {
  return (
    <div className='w-full transition-all duration-700 flex flex-wrap select-none justify-center md:justify-normal items-stretch gap-2 tracking-[0.02em]'>
      {tags.map((tag, index) => {
        return (
          <span
            key={index}
            className='transition-all duration-1000 rounded-sm text-black text-sm md:w-min font-semibold leading-5 whitespace-nowrap items-center bg-zinc-100 justify-center px-2 py-1'
          >
            {tag}
          </span>
        );
      })}
    </div>
  );
};

export default TagsList;
