"use client"

import ToggleButton from "./ToggleButton"

interface ControlItemProps {
  text: string
}

const ControlItem: React.FC<ControlItemProps> = ({
  text,
}) => {

  const lightOn = async () => {
    
  }

  const lightOff = async () => {
    /*
    await fetch('http://[fe80::eeb5:faff:fe98:2403]:80/api/GWl0EP03SM0hqgcMfwoL-r0eiRyXM5ZgK18i-sS5/lights/1/state', {
      method: 'put',
      body: JSON.stringify({
        "on": false
      })
    })
    await fetch('http://[fe80::eeb5:faff:fe98:2403]:80/api/GWl0EP03SM0hqgcMfwoL-r0eiRyXM5ZgK18i-sS5/lights/2/state', {
      method: 'put',
      body: JSON.stringify({
        "on": false
      })
    })*/
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