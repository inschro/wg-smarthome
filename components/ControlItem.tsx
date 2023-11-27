"use client"

import ToggleButton from "./ToggleButton"

interface ControlItemProps {
  text: string,
  type: string,
  onToggleOff?: () => void,
  onToggleOn?: () => void,
}

const ControlItem: React.FC<ControlItemProps> = ({
  text,
  type,
  onToggleOff = () => {},
  onToggleOn = () => {},
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
      <ToggleButton onToggleOff={onToggleOff} onToggleOn={onToggleOn}/>
    </div>
    
  )
}

export default ControlItem;