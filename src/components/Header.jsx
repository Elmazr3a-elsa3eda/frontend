import { Link } from "react-router-dom";
function Header() {

  return (
    <div  className='bg-darkerblue/30 w-full py-7 px-20 flex flex-row justify-between gap-52 items-end relative z-10'>
        <h1 className="font-protest text-4xl font-bold text-green capitalize w-20">HappyFarm</h1>
        <div className="text-white flex flex-row justify-center items-center gap-2.5 ">
          <div className="flex flex-row gap-2.5 justify-center items-center">
            <div className="flex flex-col justify-center items-start gap-1">
              <h3 className="font-bold">Abdo</h3>
              <Link to={"/"} className="text-primaryViolet text-xs font-bold">Workspace Settings</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header