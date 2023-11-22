// components/SchoppinglistItem.tsx
"use client"

import { useEffect, useState } from "react"

interface ShoppingListItemProps {
  item: string
  onItemCheck?: (checked: boolean) => void
  isChecked?: boolean
}

const ShoppingListItem: React.FC<ShoppingListItemProps> = ({
  item,
  onItemCheck = () => {},
  isChecked = false,
}) => {

  const [checked, setChecked] = useState(isChecked)

  const handleCheck = () => {
    setChecked(!checked)
    onItemCheck(checked)
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
      <input
        id="item-checkbox"
        type="checkbox"
        checked={checked}
        onChange={() => {}}
        className="
          appearance-none
          rounded-lg
          border-2
          checked:primary
          checked:border-transparent
          hover:cursor-pointer
          h-6
          w-6
        "
      />
    </div>
  )
}

export default ShoppingListItem