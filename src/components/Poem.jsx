const Poem = (props) => {
  return (
    <div className=" bg-white/80 p-5 text-center flex flex-col rounded-xl cursor-pointer hover:bg-slate-50 transition-colors border shadow">
       <h2 className="text-4xl">{props.title}</h2>
       <small>{props.author}</small>
    </div>
  )
}

export default Poem