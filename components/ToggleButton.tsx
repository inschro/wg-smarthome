import { useState } from "react"

interface ToggleButtonProps {
  initialToggled?: boolean,
  onToggleOn?: () => void,
  onToggleOff?: () => void
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  initialToggled = false,
  onToggleOn = () => {},
  onToggleOff = () => {}
}) => {

  const [toggled, setToggled] = useState(initialToggled)

  const handleToggle = () => {
    setToggled(!toggled)
    if (toggled) {
      onToggleOff()
    } else {
      onToggleOn()
    }
  }

  return (
    <div
      className="
        w-20
        h-6
        flex
        items-center
        justify-end
        hover:cursor-pointer
      "
      onClick={handleToggle}
    >
      <div
        className="
          flex
          items-center
          w-12
          h-2
          bg-light
          rounded-full
        "
      >
        <div
          className={`
            w-6
            h-6
            rounded-full
            transform
            transition-transform
            ${toggled ? "translate-x-6" : ""}
            ${toggled ? "bg-secondary" : "bg-dark-300"}
          `}
        />
      </div>
    </div>
    
  )
}

export default ToggleButton
