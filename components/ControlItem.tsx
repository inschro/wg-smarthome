"use client"

import ToggleButton from "./ToggleButton"

interface ControlItemProps {
  text: string
}

const ControlItem: React.FC<ControlItemProps> = ({
  text,
}) => {

  const lightOn = async () => {
    await fetch('http://192.168.0.232/api/GWl0EP03SM0hqgcMfwoL-r0eiRyXM5ZgK18i-sS5/lights/1/state', {
      method: 'put',
      body: JSON.stringify({
        "on": true
      })
    })
  }

  const lightOff = async () => {
    await fetch('http://192.168.0.232/api/GWl0EP03SM0hqgcMfwoL-r0eiRyXM5ZgK18i-sS5/lights/1/state', {
      method: 'put',
      body: JSON.stringify({
        "on": false
      })
    })
  }

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
      <ToggleButton onToggleOff={lightOff} onToggleOn={lightOn}/>
    </div>
    
  )
}

export default ControlItem;