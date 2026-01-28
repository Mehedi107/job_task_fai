import avatar from '../assets/Avatar Style 6.png'
import notificationIcon from '../assets/notifications_none.png'

export default function Header() {
  return <header id="header" className="h-24 border-b border-slate-800 flex items-center px-8 justify-between">
          <p>Dashboard Overview</p>
          <div className='flex items-center gap-10'>
            <img src={notificationIcon} alt="notification icon" className='w-8 h-8 block' />
            <img src={avatar} alt="user image" className='w-20 h-20 block'/>
          </div>
        </header>
}