import { menuItems } from '@/data/menuItems';
import avatar from '../assets/avatar.png'
import notificationIcon from '../assets/notifications_none.png'

export default function Header({activeTab}: {activeTab: string | number}) {
  const [title] = menuItems.filter(item => item.id === activeTab)

  return <header id="header" className="h-24 border-b border-slate-800 flex items-center px-8 justify-between">
          <p className='text-3xl'>{title.label}</p>
          <div className='flex items-center gap-10'>
            <img src={notificationIcon} alt="notification icon" className='w-8 h-8 block' />
            <img src={avatar} alt="user image" className='w-20 h-20 block'/>
          </div>
        </header>
}