"use client"

import ShoppingListItem from "@/components/SchoppinglistItem";
import { useEffect, useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { getShoppinglistItems } from "@/functions/getShoppinglistItems"
import { addShoppinglistItem } from "@/functions/addShoppinglistItem";

export default function Home() {
  
  const [shoppingList, setShoppingList] = useState<string[]>([])

  const submitNewItem = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const inputElement: HTMLInputElement = event.currentTarget.querySelector("#newItem") as HTMLInputElement
    const newItem: string = inputElement.value
    addShoppinglistItem(newItem).then(() => {
      getShoppinglistItems().then((items) => {
        setShoppingList(items)
        inputElement.value = ""
      })
    })
  }

  useEffect(() => {
    getShoppinglistItems().then((items) => {
      setShoppingList(items)
    })
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
        <ShoppingListItem key={index} item={`${shoppingList[index]}`}/>
      ))}
      </div>
      <form
        onSubmit={submitNewItem}
        className="
          primary
          flex
          flex-row
          items-center
          gap-1
          rounded-full
          pl-3
          w-full
          justify-between
          h-12
        "
      >
        <input
          id="newItem"
          type="text"
          placeholder="Hinzufügen..."
          className="
            w-full
            outline-none
            bg-inherit
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
