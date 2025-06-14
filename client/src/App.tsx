import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {


  return (
    <>
      <h1 className='text-primary bg-blue-300 rounded-xl' >This is a react App intitialised with vite and typescript.</h1>
      <Button startIcon={<PlusIcon size="md"/>} variant="primary"  size="sm" text="Hello" onClick={() => { console.log("button clikced") }} />
      <Button startIcon={<ShareIcon size = "lg"/>}variant="secondary" size="md" text="Hello" onClick={() => { console.log("button clikced") }} />
      <Button endIcon={<ShareIcon size = "md"/>}variant="secondary" size="lg" text="Hello" onClick={() => { console.log("button clikced") }} />
    </>
  )
}

export default App
