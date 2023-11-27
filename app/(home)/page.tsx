"use client"

import DashboardCard from '@/components/DashboardCard'
import ControlItem from '@/components/ControlItem'
import { cards } from './cards'
import { setLightOff, setLightOn } from '@/functions/lightControls'

export default function Home() {

  const dashboardCards = cards.map((card, index) => (
    <DashboardCard
      key={index}
      title={card.title}
    >
      {card.controlItems.map((controlItem, index) => (
        <ControlItem
          key={index}
          text={controlItem.title}
          type={controlItem.type}
          onToggleOff={() => setLightOff(controlItem.options.deviceId)}
          onToggleOn={() => setLightOn(controlItem.options.deviceId)}
        />
      ))}
    </DashboardCard>
  ))

  dashboardCards.push(
    <DashboardCard
      key={dashboardCards.length}
      title="Testkrams"
    >
      <div
        onClick={() => {
          fetch("/api/hue", {
            method: "GET",
            headers: {
              "endpoint": "/resource/device",
            },
          }).then((res) => {
            res.json().then((data) => {
              console.log(data)
            })
          })
        }}
      >
        get devices
      </div>
      <div
        onClick={() => {
          fetch("/api/hue", {
            method: "GET",
            headers: {
              "endpoint": "/resource/light",
            },
          }).then((res) => {
            res.json().then((data) => {
              console.log(data)
            })
          })
        }}
      >
        get lights
      </div>
    </DashboardCard>
  )
  
  
  return (
    <div
      className="
        p-4
        space-y-4
        overflow-y-auto
      "
    >
      <h1 className="text-2xl pb-2">Home</h1>
      {dashboardCards}
    </div>
  )
}
