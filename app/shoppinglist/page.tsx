// app/shoppinglist/page.tsx
"use client"

import ShoppingListItem from "@/components/SchoppinglistItem";
import { useEffect, useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import {
  getShoppinglistItems,
  addShoppinglistItem,
  removeShoppinglistItem,
} from "@/functions/shoppingList";


export default function ShoppingList() {
  
  const [shoppingList, setShoppingList] = useState<string[]>([])

  const [checkedItems, setCheckedItems] = useState<string[]>([])

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

  const handleCheckout = async () => {
    checkedItems.forEach((item) => {
      setCheckedItems
      console.log(item)
      removeShoppinglistItem(item).then(() => {
        getShoppinglistItems().then((items) => {
          setShoppingList(items)
        })
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
        h-full
        w-full
      "
    >
      <h1 className="text-2xl">Einkaufsliste</h1>

      <ul
        className="
          divide-y
          divide-primary
        "
      >
        {shoppingList.map((item, index) => (
          <ShoppingListItem 
            key={item}
            item={`${item}`}
            onItemCheck={(checked) => {
              checked ? (
                setCheckedItems([...checkedItems, item])
              ) : (
                setCheckedItems(checkedItems.filter((checkedItem) => checkedItem !== item))
              )
            }}
          />
        ))}
      </ul> 

      <div className="hover:text-bright hover:cursor-pointer" onClick={handleCheckout}>Checkout</div>
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
