// @ts-expect-error tutorial-only
import MyButton1 from 'remoteApp1/Button'
// @ts-expect-error tutorial-only
import MyButton2 from 'remoteApp2/Button'

function App() {


  return (
      <div className="border-4 border-red-300 flex flex-col justify-center h-80">
          <div className='w-full text-center'>APP CONTAINTER</div>
          <div className='flex h-full w-full justify-center items-center gap-3'>
              <div className='basis-1/3 border-purple-700 border-2'>
                  <div className='text-center w-full'>APP1 - React</div>
                  <div className='my-3 mx-2'>APP1 CONTENT ...</div>
                  <MyButton1 id="my-host-custom-css-to-remote-1"/>
              </div>
              <div className='basis-1/3 border-cyan-700 border-2'>
                  <div className='text-center w-full' >APP2 - React</div>
                  <div className='my-3 mx-2'>APP2 CONTENT ... </div>
                  <MyButton2/>
              </div>

          </div>
      </div>

  )
}

export default App
