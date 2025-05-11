import { ChevronDown, Loader, Search } from 'lucide-react';
import ProductItems from './data/ProductItems';
import { lazy, Suspense, useRef, useState, useEffect } from 'react';

interface List {
  name: string;
  id: number;
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredItems = ProductItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const CardProduct = lazy(() => import('./component/CardProduct'));

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  const menuList: List[] = [
    { name: 'A-Z', id: 1 },
    { name: 'Z-A', id: 2 },
    { name: 'Time: Low to High', id: 3 },
    { name: 'Time: High to Low', id: 4 },
  ];


  const [activeMenuName, setActiveMenuName] = useState(menuList[0].name);

  const handleMenuItemClick = (menu: List) => {
    setActiveMenuName(menu.name);
    setIsDropdownOpen(false);
  };

  return (
    <main>
      <div className="flex flex-col justify-center items-center gap-10 text-center p-7 py-[15vh]">
        <h1 className="text-3xl md:text-4xl font-bold">See our blog</h1>
        <p className="text-neutral-400 max-w-xl">
          Stay current with all the latest design trends, software updates, industry expectations, and more.
        </p>

        <div className="flex items-center gap-2 px-4 py-2 rounded-md ring-1 ring-neutral-200 w-full max-w-md">
          <Search size={20} className="text-neutral-300" />

          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent outline-none placeholder:text-neutral-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

        </div>
      </div>

      <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex justify-between items-center px-5">
        {/* Sort Dropdown */}
        <div className="max-w-[60%] flex items-center gap-2 text-[11px] px-4 py-2 rounded-md ring-1 ring-neutral-200 cursor-pointer">
          <h2 className="font-semibold">Sort by: {activeMenuName}</h2>
          <ChevronDown
            size={20}
            className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : null}`}
          />
        </div>

        {/* Results Count */}
        <h3 className="text-neutral-400">{filteredItems.length} Results</h3>
      </div>

      {/* Dropdown Menu for Sorting */}
      {isDropdownOpen && (
        <div ref={dropdownRef} className="absolute z-50 left-5 bg-white shadow-lg ring-1 ring-neutral-200 rounded-md mt-1 md:w-[20%]">
          <ul>
            {menuList.map((menu) => (
              <li
                key={menu.id}
                className="px-4 py-2 cursor-pointer hover:bg-neutral-100"
                onClick={() => handleMenuItemClick(menu)}
              >
                {menu.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      <Suspense
        fallback={
          <div className="h-[200px] flex justify-center items-center">
            <Loader size={40} className="animate-spin text-neutral-500" />
            <p className="text-neutral-500 ml-2">Loading...</p>
          </div>
        }
      >
        {filteredItems.length === 0 ? (
          <h2 className="text-center py-[20%] md:py-[10%] text-neutral-300">
            No results found for "<strong>{searchTerm}</strong>"
          </h2>
        )
          :
          <div className="p-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch max-w-[1200px] mx-auto mt-10">
            {filteredItems.map((item, index) => (
              <CardProduct
                key={index}
                image={item.image}
                category={item.category}
                readTime={item.readTime}
                title={item.title}
                authorName={item.author.name}
                authorAvatar={item.author.avatar}
                authorPostedAt={item.author.postedAt}
              />
            ))}
          </div>
        }
      </Suspense>
    </main>
  );
};

export default App;
