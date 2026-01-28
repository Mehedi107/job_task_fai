import { menuItems } from "@/data/menuItems"
import Overview from "./Overview"
import Logs from "./Logs"
import Appointments from "./Appointments"
import Settings from "./Settings"

const tabComponents = {
  overview: Overview,
  logs: Logs,
  appointments: Appointments,
  settings: Settings,
}

export default function MainContent({activeTab}: {activeTab: string | number}) {
    const menuItem = menuItems.find(item => item.id === activeTab)
    if (!menuItem) return null

    const Component = tabComponents[menuItem.id] || null
  
  return <main id="main" className="p-8 flex-1 bg-secondary">
          {Component && <Component />}
        </main>
}