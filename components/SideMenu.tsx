"use client"

import Link from "next/link"
import { useState } from "react"
import { BsThreeDotsVertical } from "react-icons/bs"

const SideMenu = () => {

  const [open, setOpen] = useState(false)

  const sideMenuItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Einkaufsliste",
      href: "/shoppinglist",
    },
    {
      name: "Einstellungen",
      href: "/settings",
    }
  ]

  if (!open) {
    return (
      <BsThreeDotsVertical
        className="
            fixed
            top-0
            right-0
            w-12
            h-12
            p-2
            bg-dark-200
            rounded-full
            cursor-pointer
            hover:bg-dark-300
            transition
            hover:text-bright
          "
        onClick={() => {
          setOpen(true)
          console.log("open")
        }}
      />
    )
  }

  return (
    <div
      className="
        z-10
        fixed
        top-0
        right-0
        w-screen
        h-screen
        bg-dark-200
        transition
        overflow-y-auto
        scrollbar-hidden
      "
    >
      <BsThreeDotsVertical 
        className="
          fixed
          top-0
          right-0
          w-12
          h-12
          p-2
          bg-dark-200
          rounded-full
          cursor-pointer
          hover:bg-dark-300
          transition
          hover:text-bright
        "
        onClick={() => setOpen(false)}
      />
      <div className="divide-y-2 divide-secondary pt-12">
        {sideMenuItems.map((item, index) => (
          <div
            key={index}
            className="
              p-2
              hover:bg-dark-300
              transition
              cursor-pointer
            "
          >
            <Link
              className="flex"
              href={item.href}
              onClick={setOpen.bind(null, false)}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideMenu