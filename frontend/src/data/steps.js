const steps = [
  {
    status: 'pending',
    label: 'Pending',
    description: 'Your order has been created and is awaiting processing.',
    icon: { iconName: 'time-line', bgColor: 'red-500', textColor: 'white' }, // 🔴 RED
  },
  {
    status: 'processing',
    label: 'Processing',
    description: 'Your order is currently being processed.',
    icon: { iconName: 'loader-line', bgColor: 'yellow-800', textColor: 'white' },
  },
  {
    status: 'shipped',
    label: 'Shipped',
    description: 'Your order has been shipped.',
    icon: { iconName: 'track-line', bgColor: 'blue-800', textColor: 'white' },
  },
  {
    status: 'completed',
    label: 'Completed',
    description: 'Your order has been successfully completed.',
    icon: { iconName: 'truck-line', bgColor: 'green-800', textColor: 'white' },
  },
];



// timeline steps 
const iconBgColor=isCompleted || isCurrent ? `bg-${icon.bgColor}` : 'bg-gray-100';
const iconTextColor=isCompleted || isCurrent ? 'text-white' : `text-${icon.textColor}`;
const connectorColor = isCompleted || isCurrent ? 'bg-blue-500' : 'bg-gray-200';
const labelTextColor=isCompleted || isCurrent ? 'text-gray-900' : 'text-gray-500';
const descriptionTextColor = isCompleted || isCurrent ? 'text-gray-900' : 'text-gray-500';