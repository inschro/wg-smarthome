
interface DashboardCardProps {
  title: string
  children: React.ReactNode
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  children,
}) => {
  return (
    <div
      className="
        w-full
        bg-primary
        rounded-2xl
        p-3
        divide-y-[1px]
        divide-secondary
      "
    >
      <h2 className="text-lg text-light font-bold">{title}</h2>
      {children}
    </div>
  )
}

export default DashboardCard