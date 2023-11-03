"use client"

import ToggleButton from "./ToggleButton"

interface ControlItemProps {
  text: string
}

const ControlItem: React.FC<ControlItemProps> = ({
  text,
}) => {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        py-2
      "
    >
      <p>{text}</p>
      <ToggleButton />
    </div>
    
  )
}

export default ControlItem;