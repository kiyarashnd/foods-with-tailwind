function App() {
  return (
    <div className='text-gray-600 font-serif'>
      <div className='grid md:grid-cols-3'>
        <div className='md:col-span-1'>
          <nav>
            <div>
              <h1 className='font-bold uppercase p-4 border-b border-gray-100'>
                <a
                  href='/'
                  className='text-green-500 sm:text-red-500 lg:text-blue-500'
                >
                  Food Ninja
                </a>
              </h1>
            </div>
            <ul>
              <li className='text-gray-700 font-bold'>
                <a href='#' className='text-primary'>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href='#' className='text-secondary-200'>
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <main className='px-16 py-6 bg-gray-100 md:col-span-2'>
          <div className='flex justify-center md:justify-end'>
            <a href='#' className='text-primary'>
              Log in
            </a>
            <a href='#' className='text-primary ml-2'>
              Sign up
            </a>
          </div>

          <div className='flex items-end justify-center'>
            <div className='bg-red-500 h-4 w-6'></div>
            <div className='bg-blue-500 h-8 w-6'></div>
            <div className='bg-green-500 h-12 w-6'></div>
          </div>

          <header>
            <h2 className='text-gray-700 text-6xl font-semibold'>Recipes</h2>
            <h3 className='text-2xl font-semibold'>For Ninjas</h3>
          </header>

          <div>
            <h4 className='font-bold mt-12 pb-2 border-b border-gray-400'>
              Latest Recipes
            </h4>

            <div className='mt-8 grid md:grid-cols-3 gap-10'>
              <div className='card'>
                <img
                  src='img/img1.jpg'
                  alt='stew'
                  className='w-full h-32 sm:h-48 object-cover'
                ></img>
                <div className='m-4'>
                  <span className='font-bold'>5 Bean Chili Stew</span>
                  <span className='block text-gray-500 text-sm'>
                    Recipe by Mario
                  </span>
                </div>
                <div className='badge'>
                  <span>25 mins</span>
                </div>
              </div>
              <div className='card'>
                <img
                  src='img/noodles.jpg'
                  alt='noodle'
                  className='w-full h-32 sm:h-48 object-cover'
                ></img>
                <div className='m-4'>
                  <span className='font-bold'>Veg Noodles</span>
                  <span className='block text-gray-500 text-sm'>
                    Noodle by kiya
                  </span>
                </div>
                <div className='badge'>
                  <span>25 mins</span>
                </div>
              </div>
              <div className='card'>
                <img
                  src='img/curry.jpg'
                  alt='stew'
                  className='w-full h-32 sm:h-48 object-cover'
                ></img>
                <div className='m-4'>
                  <span className='font-bold'>Tofu Curry</span>
                  <span className='block text-gray-500 text-sm'>
                    Curry by Mario
                  </span>
                </div>
                <div className='badge'>
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
            <div className='bg-secondary-100'>Load more</div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
