const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <section className='flex w-full justify-center bg-white pt-20'>
    <div
      id='page-wrapper'
      className='flex px-4 max-w-screen-2xl mt-16 md:mt-8 min-w-80 self-center sm:px-6 md:px-10 lg:px-20'
    >
      {children}
    </div>
  </section>
);

export default Wrapper;
