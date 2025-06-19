import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {


  return (
    <>
      <div className='p-4'>
        <div className='flex justify-end gap-4'>
          <Button variant='primary' text='Share Brain' startIcon={<ShareIcon size='md' />} />
          <Button variant='secondary' text='Add Content' startIcon={<PlusIcon size='md' />} />
        </div>
        <div className='flex gap-4'>
          <Card title='tweet post' link='https://x.com/amit_intj/status/1910726593930015070' type='twitter' />
          <Card title='Youtube Video' link='https://www.youtube.com/watch?v=bsvmj3521Vs' type='youtube' />
        </div>
      </div>
    </>
  )
}
;
export default App
