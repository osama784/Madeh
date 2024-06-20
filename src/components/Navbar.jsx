import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faList } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"


const Navbar = (props) => {
  const closedTabs = {
    'item1': false,
    'item2': false,
    'item3': false,
    'item4': false,
    'item5': false,
  }
    const [openedTab, setOpenedTab] = useState({
      'item1': true,
      'item2': false,
      'item3': false,
      'item4': false,
      'item5': false,
    })

    function openTab(id) {
      setOpenedTab(_ => {
        return {
          ...closedTabs,
          [id] : true

        }
      })
    }


    let navClassName = "fixed top-0 bottom-0 w-3/4 sm:w-1/3 bg-white z-50 transition-all px-4 pt-4 flex flex-col gap-5 overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent"
    let arrowClassName = "fixed top-8 size-5 text-slate-500 rounded-full p-1 border active:bg-slate-500 active:text-white transition-colors cursor-pointer hover:bg-slate-50"

  return (
    <div className={props.navShown ? navClassName + " right-0 duration-300" : navClassName + " -right-full duration-500"}>
      <FontAwesomeIcon icon={faArrowRight} className={props.navShown ? arrowClassName + "right-5" : arrowClassName + "-right-5"} onClick={props.flipShownNav}/>
      <div className="w-1/3 flex shadow-md rounded-full mx-auto">
          <img src="/mohammed.png" alt="" className="" draggable="false"/>
      </div>
      <div className=" bg-white flex flex-col gap-5">
        <ul className="space-y-5 *:transition-colors *:cursor-pointer">
            <li onClick={() => {
              props.flipShownNav()
              openTab('item1')

            }} className={`text-right flex justify-end px-2 rounded py-2 items-center gap-5 hover:bg-slate-200 ${openedTab.item1 ? 'bg-slate-100' : ''}`}>
              <FontAwesomeIcon icon={faList} className="order-2" />
              <p>جميع القصائد</p>
            </li>
        </ul>
        <div className="text-right flex justify-end border-b border-slate-200 ml-20">
            الفصول
        </div>
        
        <ul className="space-y-5 *:transition-colors *:cursor-pointer *:border mb-3">
          <li onClick={() => {
            props.flipShownNav()
            openTab('item2')

          }} className={`text-right flex justify-end px-2 rounded py-2 items-center gap-5 hover:bg-slate-200 ${openedTab.item2 ? 'bg-slate-100' : ''}`}>
            <p>الابتهالات و الأدعية</p>
          </li>
          <li onClick={() => {
            props.flipShownNav()
            openTab('item3')

          }} className={`text-right flex justify-end px-2 rounded py-2 items-center gap-5 hover:bg-slate-200 ${openedTab.item3 ? 'bg-slate-100' : ''}`}>
            
            <p>مجامع الصلوات على النبي ﷺ </p>
          </li>
          <li onClick={() => {
            props.flipShownNav()
            openTab('item4')

          }} className={`text-right flex justify-end px-2 rounded py-2 items-center gap-5 hover:bg-slate-200 ${openedTab.item4 ? 'bg-slate-100' : ''}`}>
            
            <p>الموالد النبويَّة</p>
          </li>
        </ul>

        <div className="text-right flex justify-end border-b border-slate-200 ml-20">
            الأدوات
        </div>
        <ul className="space-y-5 *:transition-colors *:cursor-pointer *:border">
          <li onClick={() => {
            props.flipShownNav()
            openTab('item5')

          }} className={`text-right flex justify-end px-2 rounded py-2 items-center gap-5 hover:bg-slate-200 ${openedTab.item5 ? 'bg-slate-100' : ''}`}>
            <p>المسبحة الإلكترونيَّة</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar