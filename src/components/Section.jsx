import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const Section = (props) => {
  
  return (
    <>
    
    <section className="w-full min-[365px]:w-72 min-[365px]:mx-auto px-10 min-[365px]:px-0">
        <form className="flex justify-between items-center *:shadow-lg relative ">
            <label htmlFor="bar" className="bg-white text-sm items-center flex justify-center size-12 rounded-3xl border-slate-200 border text-slate-800 cursor-pointer transition-colors order-2 -translate-x-5 absolute -right-10"><FontAwesomeIcon icon={faMagnifyingGlass} /></label>
            <input type="text" id="bar" name="bar" placeholder="...ابحث عن اسم مؤلف أو أول بيت من القصيدة" className=" h-12 w-full max-[365px]:text-sm text-right pr-10 flex-grow placeholder:text-slate-500 placeholder:text-center placeholder:pr-0 outline-none transition-all rounded-s-3xl caret-slate-300" onChange={props.handleChange}/>
        </form>
    </section>

    </>
  )
}

export default Section