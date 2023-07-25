import { useState, useRef, useEffect } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const UlList = useRef(null);
  useEffect(() => {
    if (isOpen) {
      UlList.current.style.height = `${80}px`;
    } else {
      UlList.current.style.height = `${0}px`;
    }
  }, [isOpen]);

  return (
    <div className='text-gray-600 font-serif'>
      <div className='grid md:grid-cols-3'>
        <div className='md:col-span-1 md:flex md:justify-end'>
          <nav className='text-right'>
            <div className='flex justify-between items-center'>
              <h1 className='font-bold uppercase p-4 border-b border-gray-100'>
                <a
                  href='/'
                  className='text-green-500 sm:text-red-500 lg:text-blue-500 hover:text-gray-700'
                >
                  Food Ninja
                </a>
              </h1>
              <button
                className='px-4 cursor-pointer md:hidden'
                id='burger'
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className='w-10 transform hover:rotate-90 transition linear duration-700'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
                  ></path>
                </svg>
              </button>
            </div>
            <ul
              className='text-sm mt-0 md:block hover:transition linear duration-700 '
              id='menu'
              ref={UlList}
            >
              <li className='py-1'>
                <a
                  href='#'
                  className='px-4 flex justify-end border-r-4 border-white'
                >
                  <span>Home</span>
                  <svg
                    className='w-5 ml-2'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                    ></path>
                  </svg>
                </a>
              </li>
              <li className='py-1'>
                <a
                  href='#'
                  className='px-4 flex justify-end border-r-4 border-primary'
                >
                  <span>About</span>
                  <svg
                    className='w-5 ml-2'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z'
                    ></path>
                  </svg>
                </a>
              </li>
              <li className='py-1'>
                <a
                  href='#'
                  className='px-4 flex justify-end border-r-4 border-white'
                >
                  <span>Contact</span>
                  <svg
                    className='w-5 ml-2'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <main className='px-16 py-6 bg-gray-100 md:col-span-2'>
          <div className='flex justify-center md:justify-end'>
            <a
              href='#'
              className=' btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500'
            >
              Log in
            </a>
            <a
              href='#'
              className='btn text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500'
            >
              Sign up
            </a>
          </div>

          {/* <div className='flex items-end justify-center'>
            <div className='bg-red-500 h-4 w-6'></div>
            <div className='bg-blue-500 h-8 w-6'></div>
            <div className='bg-green-500 h-12 w-6'></div>
          </div> */}

          <header>
            <h2 className='text-gray-700 text-6xl font-semibold'>Recipes</h2>
            <h3 className='text-2xl font-semibold'>For Ninjas</h3>
          </header>

          <div>
            <h4 className='font-bold mt-12 pb-2 border-b border-gray-400'>
              Latest Recipes
            </h4>

            <div className='mt-8 grid lg:grid-cols-3 gap-10'>
              <div className='card hover:shadow-xl'>
                <img
                  src='img/img1.jpg'
                  alt='stew'
                  className='w-full h-32 sm:h-48 object-cover transform hover:translate-y-[5px] transition linear duration-500'
                ></img>
                <div className='m-4'>
                  <span className='font-bold'>5 Bean Chili Stew</span>
                  <span className='block text-gray-500 text-sm'>
                    Recipe by Mario
                  </span>
                </div>
                <div className='badge'>
                  <svg
                    className='w-5 inline-block mr-1'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
                    ></path>
                  </svg>
                  <span>25 mins</span>
                </div>
              </div>
              <div className='card hover:shadow-xl'>
                <img
                  src='img/noodles.jpg'
                  alt='noodle'
                  className='w-full h-32 sm:h-48 object-cover transform hover:translate-y-[5px] transition linear duration-500'
                ></img>
                <div className='m-4'>
                  <span className='font-bold'>Veg Noodles</span>
                  <span className='block text-gray-500 text-sm'>
                    Noodle by kiya
                  </span>
                </div>
                <div className='badge'>
                  <svg
                    className='w-5 inline-block mr-1'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
                    ></path>
                  </svg>
                  <span>25 mins</span>
                </div>
              </div>
              <div className='card hover:shadow-xl'>
                <img
                  src='img/curry.jpg'
                  alt='stew'
                  className='w-full h-32 sm:h-48 object-cover transform hover:translate-y-[5px] transition linear duration-500'
                ></img>
                <div className='m-4'>
                  <span className='font-bold'>Tofu Curry</span>
                  <span className='block text-gray-500 text-sm'>
                    Curry by Mario
                  </span>
                </div>
                <div className='badge'>
                  <svg
                    className='w-5 inline-block mr-1'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
                    ></path>
                  </svg>
                  <span>25 mins</span>
                </div>
              </div>
            </div>

            <h4 className='font-bold mt-12 pb-2 border-b border-gary-400'>
              Most Popular
            </h4>

            <div className='mt-8'>{/* cards go hereS */}</div>
          </div>

          <div className='flex justify-center'>
            <div className='btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300'>
              Load more
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
