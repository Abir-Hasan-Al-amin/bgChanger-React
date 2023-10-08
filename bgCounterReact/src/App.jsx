import { useState } from "react"

function App() {
  const [color,setColor]=useState('#618264');
  return (
    <>
    <div className="w-full h-screen" style={{backgroundColor: color}}>
      <div className="fixed bottom-12 inset-x-0 px-2 flex flex-wrap justify-center">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={()=>setColor('#6499E9')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: '#6499E9'}}>Blue</button>
        <button onClick={()=>setColor('#BB2525')}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: '#BB2525'}}>Red</button>
        <button onClick={()=>setColor('#219C90')}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: '#219C90'}}>Teal</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
