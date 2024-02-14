import { useContext, useEffect, useState,useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import AuthContext from "../context/userContext";
function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [userData, setUserData] = useState({});
	const { user } = useContext(AuthContext);
  useEffect(() => {
    try {
      const userDataFromStorage = localStorage.getItem('user');
      if (userDataFromStorage) {
        setUserData(JSON.parse(userDataFromStorage));
      }
    } catch (error) {
      console.error('Error parsing user data from local storage:', error);
    }
  }, []);
	const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
	return (
		<header className="max-w-screen w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-darkerblue/80 relative z-10">
			<div className="flex flex-row justify-between items-center">
				<div className="text-center sm:text-left">
					<h1 className="font-protest text-xl font-bold text-green capitalize w-20 md:w-fit sm:text-3xl">
						elmazr3a elsa3eda
					</h1>
				</div>
				<div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
					<div class="flex items-center justify-center h-12 w-12 bg-green rounded-full">
						<span class="text-black text-3xl font-bold capitalize">{userData?.username?.[0]}</span>
					</div>
					<button ref={menuRef} onClick={()=>setMenuOpen(!menuOpen)} className="md:hidden">
						{menuOpen ? <MdClose className="text-3xl text-red-500" /> :<GiHamburgerMenu className="text-3xl" />}
						{menuOpen && <Menu />}
    			</button>
				</div>
			</div>
		</header>
	);
}

export default Header;

function Menu(){
	return(
		<div className="absolute top-20 right-0">
  <div className="inline-flex items-center overflow-hidden rounded-md border bg-darkerblue/90">
  </div>

  <div
    className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-black bg-darkerblue shadow-lg"
    role="menu"
  >
    <div className="p-2">
      <a
        href="#"
        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        role="menuitem"
      >
        View on Storefront
      </a>

      <a
        href="#"
        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        role="menuitem"
      >
        View Warehouse Info
      </a>

      <a
        href="#"
        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        role="menuitem"
      >
        Duplicate Product
      </a>

      <a
        href="#"
        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        role="menuitem"
      >
        Unpublish Product
      </a>
    </div>
  </div>
</div>
	)
}