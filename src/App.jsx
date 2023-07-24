function App() {
  return (
    <div className='text-gray-600 font-serif'>
      <div>
        <nav>
          <div>
            <h1 className='font-bold uppercase p-4 border-b border-gray-100'>
              <a href='/'>Food Ninja</a>
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

      <main className='px-16 py-6'>
        <div>
          <a href='#'>Log in</a>
          <a href='#'>Sign up</a>
        </div>

        <header>
          <h2 className='text-gray-700 text-6xl font-semibold'>Recipes</h2>
          <h3 className='text-2xl font-semibold'>For Ninjas</h3>
        </header>

        <div>
          <h4 className='font-bold mt-12 pb-2 border-b border-gray-400'>
            Latest Recipes
          </h4>

          <div className='mt-8'>
            <div>
              <img src='img/img1.jpg' alt='stew'></img>
              <div>
                <span>5 Bean Chili Stew</span>
                <span>Recipe by Mario</span>
              </div>
            </div>
          </div>

          <h4 className='font-bold mt-12 pb-2 border-b border-gary-400'>
            Most Popular
          </h4>

          <div className='mt-8'>{/* cards go hereS */}</div>
        </div>

        <div>
          <div className='bg-secondary-100'>Load more</div>
        </div>
      </main>
    </div>
  );
}

export default App;
