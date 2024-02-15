import { useContext, useEffect, useState, useRef } from "react";
import { FaRegCopy } from "react-icons/fa";
import AuthContext from "../context/userContext";
import { useSnackbar } from "../context/SnackBarContext";
function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [userData, setUserData] = useState({});
	const { user } = useContext(AuthContext);

	const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
	return (
		<header className="max-w-screen w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-darkerblue/80 relative z-30">
			<div className="flex flex-row justify-between items-center">
				<div className="text-center sm:text-left">
					<h1 className="font-protest text-xl font-bold text-green capitalize w-20 md:w-fit sm:text-3xl">
						elmazr3a elsa3eda
					</h1>
				</div>
				<div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
					<div
						ref={menuRef}
						onClick={() => setMenuOpen(!menuOpen)}
						className="cursor-pointer flex items-center justify-center h-12 w-12 bg-green rounded-full"
					>
						<span className="text-black text-3xl font-bold capitalize">
							{user?.username?.[0]}
						</span>
					  {menuOpen && <Menu />}
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;

function Menu() {
  const copyRef = useRef();
  const { openSnackbar  } = useSnackbar();
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(copyRef.current.innerText)
    .then(() => {
      console.log('Text copied to clipboard');
      openSnackbar('ID Copied to Clipboard')
    })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  };

	const { user } = useContext(AuthContext);
	return (
			<div
				className="absolute  top-24 right-6 end-0 z-10 mt-2 rounded-md border border-darkerblue bg-green shadow-lg"
				role="menu"
			>
				<div className="w-full p-4">
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
          					<p className="w-full flex gap-2 items-center">ID: <span ref={copyRef} >{user?._id}</span>
            <span  className="bg-darkerblue text-white p-1 rounded">
              <FaRegCopy  onClick={copyToClipboard} />
            </span>
          </p>
				</div>
			</div>
	);
}
