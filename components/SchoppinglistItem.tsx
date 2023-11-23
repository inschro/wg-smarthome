// components/SchoppinglistItem.tsx
"use client"

import { on } from "events"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

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
    const prevChecked = checked
    onItemCheck(!prevChecked)
    setChecked(!prevChecked)
    
    // Continue with the rest of your code here
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
        {checked ? (
          <div
            className="
              w-6
              h-6
              rounded-lg
              primary
            "
          >

          </div>
        ) : (
          <div
            className="
              w-6
              h-6
              rounded-lg
              border-2
              border-light
            "
          >

          </div>
        )}
      </button>
    </div>
  )
}

export default ShoppingListItem