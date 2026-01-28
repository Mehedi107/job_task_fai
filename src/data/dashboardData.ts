import icon1 from '../assets/Container-2.png'
import icon2 from '../assets/Container-3.png'
import icon3 from '../assets/Container-4.png'
import icon4 from '../assets/Container-5.png'
import icon5 from '../assets/Container-6.png'
import icon6 from '../assets/Container-7.png'

export const dashboardData = [
  {
    id: "overview",
    data: [
      {
        label: 'Total Calls Today',
        value: '127',
        percentage: 12, 
        trend: 'up',
        icon: icon1
      },
      {
        label: 'AI-Handled Calls',
        value: '98',
        percentage: 77, 
        trend: 'up',
        icon: icon2
      },
      {
        label: 'Warm Transfer',
        value: '23',
        percentage: 18, 
        trend: 'up',
        icon: icon3
      },
      {
        label: 'Appointments Booked',
        value: '34',
        percentage: 8, 
        trend: 'up',
        icon: icon4
      },
      {
        label: 'Missed/Failed Calls',
        value: '6',
        percentage: -3, 
        trend: 'down',
        icon: icon5
      },
      {
        label: 'Avg Call Duration',
        value: '3:42',
        percentage: 15, 
        trend: 'up',
        icon: icon6
      }
    ]
  },
  {
    id: "logs",
    data: 'logs data'
  },
  {
    id: "appointments",
    data: 'appointments'
  },
  {
    id: "settings",
    data: 'settings'
  }
];