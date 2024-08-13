
import './App.css'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <div className='flex h-full'>
        <section className='border-2 w-[250px] object-contain flex flex-col p-4 items-center'>
          {/* <div className="bg-[url('./src/marinha.jpg')] w-[380px] h-[380px] bg-contain bg-no-repeat"></div> */}
            <div className="bg-[url('./src/profilepic.jpeg')] w-[140px] h-[140px] bg-contain bg-no-repeat mb-8"></div>
            <Sidebar />
        </section>
        <section className='border-2'>
    
        </section>
      </div>
    </>
  )
}

export default App
