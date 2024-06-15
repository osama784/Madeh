import Header from './components/Header'
import Section from './components/Section'
import PoemContainer from './components/PoemContainer'
import Navbar from './components/Navbar'
import poems from './assets/poems.json'
import { useState } from 'react'


// const STORAGE_KEY = 'poems'
// localStorage.setItem(STORAGE_KEY, JSON.stringify(poems))


function App() {
  // state for search for poems
  // const data = localStorage.getItem(STORAGE_KEY)
  // const poems = data ? JSON.parse(data) : []
  const [currentPoems, setCurrentPoems] = useState(poems)
  
  function handleChange(event) {
    var result = []
    setCurrentPoems(() => {
      poems.map((poem) => {
        if (poem.title.startsWith(event.target.value) || poem.author.includes(event.target.value)) {
          if (!result.includes(poem)) result.push(poem)
        }
      })
      return result
    })
  }


  // showing the navbar
  const [navShown, setNavShown] = useState(false)
  let themeClassName = 'left-0 top-0 right-0 bottom-0 z-40 bg-slate-300/40 fixed'
  
  
  function flipShownNav() {
    setNavShown(prevNavShown => {
      if (!prevNavShown) {
        const x = window.scrollX
        const y = window.scrollY
        window.onscroll = () => {
          window.scrollTo(x, y)
        } 
        return true
      } else {
        window.onscroll = null
        return false
      }
    })
  }
   
  
  return (
    <>
    <Header flipShownNav={flipShownNav}/>
    <Navbar navShown={navShown} flipShownNav={flipShownNav}/>
    <Section handleChange={handleChange}/>
    <PoemContainer currentPoems={currentPoems}/>
    <div className={navShown ? themeClassName: themeClassName + " hidden"} onClick={flipShownNav}>

    </div>
    </>
  )
}

export default App
