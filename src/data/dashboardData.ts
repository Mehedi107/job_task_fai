import icon1 from '../assets/Container-2.png'
import icon2 from '../assets/Container-3.png'
import icon3 from '../assets/Container-4.png'
import icon4 from '../assets/Container-5.png'
import icon5 from '../assets/Container-6.png'
import icon6 from '../assets/Container-7.png'
import clockIcon from '../assets/clock.png'
import errorIcon from '../assets/error.png'
import checkedIcon from '../assets/checked.png'

export const dashboardData = [
  {
    id: "overview",
    data: [
      {
        label: 'Total Calls Today',
        value: '127',
        percentage: +12, 
        trend: 'up',
        icon: icon1
      },
      {
        label: 'AI-Handled Calls',
        value: '98',
        percentage: +77, 
        trend: 'up',
        icon: icon2
      },
      {
        label: 'Warm Transfer',
        value: '23',
        percentage: +18, 
        trend: 'up',
        icon: icon3
      },
      {
        label: 'Appointments Booked',
        value: '34',
        percentage: +8, 
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
        percentage: +15, 
        trend: 'up',
        icon: icon6
      }
    ]
  },
  {
    id: "logs",
    data: {
      title: 'Call List',
      lists: [
        {
          id: 1,
          icon: icon1,
          phone: "+1 (555) 345-6789",
          date: "2025-12-16 • 09:42 AM",
          duration: "5:23",
          action: "Quote Provided",
          category: "Screen",
          status: "AI Resolved",
          statusType: "success",
        },
        {
          id: 2,
          icon: icon1,
          phone: "+1 (555) 345-6789",
          date: "2025-12-16 • 09:42 AM",
          duration: "5:23",
          action: "Escalated to technician",
          category: "Software",
          status: "Warm Transfer",
          statusType: "warning",
        },
        {
          id: 3,
          icon: icon1,
          phone: "+1 (555) 345-6789",
          date: "2025-12-16 • 09:42 AM",
          duration: "5:23",
          action: "Appointment Booked",
          category: "Battery",
          status: "Appointment",
          statusType: "info",
        },
        {
          id: 4,
          icon: icon1,
          phone: "+1 (555) 345-6789",
          date: "2025-12-16 • 09:42 AM",
          duration: "0:20",
          action: "Call Dropped",
          category: "Unknown",
          status: "Dropped",
          statusType: "error",
        },
        {
          id: 5,
          icon: icon1,
          phone: "+1 (555) 345-6789",
          date: "2025-12-16 • 09:42 AM",
          duration: "5:23",
          action: "Quote Provided",
          category: "Screen",
          status: "AI Resolved",
          statusType: "success",
        },
      ],
    }
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

export const statusVariants = {
  success: "border-green-500/50 bg-green-500/20 text-green-400",
  warning: "border-orange-500/50 bg-orange-500/20 text-orange-400",
  info: "border-blue-500/50 bg-blue-500/20 text-blue-400",
  error: "border-red-500/50 bg-red-500/20 text-red-400",
};
