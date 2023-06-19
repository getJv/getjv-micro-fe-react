

function App() {


  return (
      <div className="border-4 border-red-300 flex flex-col justify-center h-80">
          <div className='w-full text-center'>APP CONTAINTER</div>
          <div className='flex h-full w-full justify-center items-center gap-3'>
              <div className='basis-1/3 border-purple-700 border-2'>
                  <div className='text-center w-full'>APP1 - React</div>
                  <div className='my-3 mx-2'>APP1 CONTENT  LOADING ...</div>
              </div>
              <div className='basis-1/3 border-cyan-700 border-2'>
                  <div className='text-center w-full' >APP2 - React</div>
                  <div className='my-3 mx-2'>APP2 CONTENT LOADING ... </div>
              </div>

          </div>
      </div>

  )
}

export default App
