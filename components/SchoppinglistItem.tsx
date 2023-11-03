"use client"

import { useEffect, useState } from "react"

interface ShoppingListItemProps {
  item: string
  isChecked?: boolean
}

const ShoppingListItem: React.FC<ShoppingListItemProps> = ({
  item,
  isChecked = false,
}) => {

  const [checked, setChecked] = useState(isChecked)

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
      onClick={() => setChecked(!checked)}
    >
      <p>
        {item}
      </p>
      <input
        id="item-checkbox"
        type="checkbox"
        checked={checked}
        className="
          appearance-none
          rounded-lg
          border-2
          checked:bg-primary
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