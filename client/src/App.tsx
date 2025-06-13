import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'

function App() {


  return (
    <>
      <h1 className='text-primary bg-blue-300 rounded-xl' >This is a react App intitialised with vite and typescript.</h1>
      <Button startIcon={<PlusIcon/>} variant="primary"  size="sm" text="Hello" onClick={() => { console.log("button clikced") }} />
      <Button variant="secondary" size="md" text="Hello" onClick={() => { console.log("button clikced") }} />
      <Button variant="secondary" size="lg" text="Hello" onClick={() => { console.log("button clikced") }} />


    </>
  )
}

export default App
