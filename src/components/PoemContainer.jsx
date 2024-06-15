import Poem from "./Poem"

const PoemContainer = (props) => {
  if (!props.currentPoems.length) {
    return (
      <div className="w-96 mx-auto bg-white h-10 content-center text-center my-10 rounded">
        no poems match the given query.
        
      </div>
    )
  }
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mx-auto my-10 container px-4"> 
        {props.currentPoems.map((poem, index) => {
            return <Poem key={index} title={poem.title} author={poem.author}/>
        })}
    </div>
  )
}

export default PoemContainer