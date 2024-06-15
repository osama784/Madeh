import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"


const Header = (props) => {
  return (
    <nav className="bg-slate-400 flex justify-between text-white px-10 py-5 text-lg items-center text-center gap-3.5 shadow-lg fixed top-0 left-0 right-0 h-20 z-30">
        <p className='text-2xl grow text-center pl-14 md:pl-4 '>قَصائِدُ المَدِيحِ</p>
        <FontAwesomeIcon icon={faBars} className='cursor-pointer bg-white text-black p-1 w-5  rounded hover:bg-slate-100 transition-all md:hidden'  onClick={props.flipShownNav}/>
    </nav>
  )
}

export default Header