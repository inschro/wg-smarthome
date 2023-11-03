"use client"

import ShoppingListItem from "@/components/SchoppinglistItem";
import { useEffect, useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";

export default function Home() {

  const [shoppingList, setShoppingList] = useState<string[]>([])

  useEffect(() => {
    setShoppingList(["Eier", "Milch", "Mehl"])
  }, [])

  return (
    <div
      className="
        p-3
        space-y-8
        overflow-y-auto
      "
    >
      <h1 className="text-2xl">Einkaufsliste</h1>
      <div
        className="
          divide-y
          divide-primary
        "
      >
        {shoppingList.map((item, index) => (
        <ShoppingListItem item={`Shopping list item ${index}`}/>
      ))}
      </div>
      <form
        action=""
        className="
          flex
          flex-row
          items-center
          gap-1
          bg-primary
          rounded-full
          pl-3
          w-full
          justify-between
          h-12
        "
      >
        <input 
          type="text"
          placeholder="Hinzufügen..."
          className="
            w-full
            outline-none
            bg-primary
            ml-2
            focus:border-b-light
            focus:border-opacity-50
            border-b-2
            border-transparent
          "
        />
        <button type="submit">
          <HiOutlinePlus 
            className="
              h-12
              w-12
              p-2
              hover:cursor-pointer
              hover:text-bright
              transition
              
            "
          />
        </button>
      </form>
    </div>
  )
}
