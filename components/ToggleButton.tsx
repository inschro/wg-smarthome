import { useState } from "react"

interface ToggleButtonProps {
  initialToggled?: boolean
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  initialToggled = false,
}) => {

  const [toggled, setToggled] = useState(initialToggled)

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
      onClick={() => setToggled(!toggled)}
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
