import DashboardCard from '@/components/DashboardCard'
import ControlItem from '@/components/ControlItem'

export default function Home() {

  const dummyCards = new Array(10).fill(null).map((_, index) => (
    <DashboardCard key={index} title={`Card ${index + 1}`}>
      <ControlItem text="Control Item 1" />
      <ControlItem text="Control Item 2" />
      <ControlItem text="Control Item 3" />
    </DashboardCard>
  ));
  
  return (
    <div
      className="
        p-4
        space-y-4
        overflow-y-auto
      "
    >
      <h1 className="text-2xl pb-2">Home</h1>
      {dummyCards}
    </div>
  )
}
