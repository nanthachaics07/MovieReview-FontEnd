function HomePage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex">
        <label className="block">
          <input 
            autoComplete=""
            type="search" 
            name="search" 
            style={{ width: '350px' }}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 
                      focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full 
                      rounded-md sm:text-sm focus:ring-1" 
                      placeholder="Search Movie" 
          />
        </label>
        <input 
          type="submit" 
          value="Search" 
          className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
        />
      </div>
    </div>
  );
}

export default HomePage;
