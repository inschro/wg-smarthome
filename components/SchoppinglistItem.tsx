// components/SchoppinglistItem.tsx
"use client"

import { on } from "events"
import { useEffect, useState } from "react"

interface ShoppingListItemProps {
  item: string
  onItemCheck?: (checked: boolean) => void
  initialChecked?: boolean
}

const ShoppingListItem: React.FC<ShoppingListItemProps> = ({
  item,
  onItemCheck = () => {},
  initialChecked = false,
}) => {

  const [checked, setChecked] = useState(false)

  const handleCheck = async () => {
    console.warn(checked)
    setChecked(!checked)
    console.log(checked)
  
    onItemCheck(!checked)
  }

  return (
    <div
      className="
        flex
        flex-row
        items-center
        justify-between
        py-2
        hover:cursor-pointer
        hover:text-bright
      "
      onClick={handleCheck}
    >
      <p>
        {item}
      </p>
      <button>
        {checked ? "✅" : "❌"}
      </button>
    </div>
  )
}

export default ShoppingListItem