import '../App.css'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { CreateContentModal } from '../components/CreateContentModal'
import { Sidebar } from '../components/Sidebar'

import { useState } from 'react';

function Dashboard() {
  const [open, setOpen] = useState(false);
  const content = localStorage.getItem("content");

  return (
    <>
      <div className='flex'>
        <div className='w-1/5 '>
          <Sidebar/>
        </div>
        <div className=' min-h-screen bg-gray-100 w-full'>
          <CreateContentModal open={open} onClose={() => setOpen(false)} />
          <div className='flex justify-end gap-4 m-4 '>
            <Button variant='primary' text='Share Brain' startIcon={<ShareIcon size='md' />} />
            <Button variant='secondary' text='Add Content' startIcon={<PlusIcon size='md' />} click={() => setOpen(true)} />
          </div>
          <div className='flex flex-wrap gap-4 mt-8 mx-8'>
            <Card title='tweet post' link='https://x.com/amit_intj/status/1910726593930015070' type='twitter' />
            <Card title='Youtube Video' link='https://www.youtube.com/watch?v=bsvmj3521Vs' type='youtube' />
            {content && JSON.parse(content).map((item: { title: string; link: string; type: string }, index: number) => {
              const cardType = item.type === "twitter" || item.type === "youtube" ? item.type : "twitter";
              return <Card key={index} title={item.title} link={item.link} type={cardType} />;
            })}
          </div>
        </div>
      </div>
    </>
  )
} ;
export default Dashboard
