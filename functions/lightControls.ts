

export const setLightOff = async (id: string) => {
  // set brightness to 0%
  await fetch("/api/hue", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "endpoint": `/resource/light/${id}`
    },
    body: JSON.stringify({
      "dimming": {
        "brightness": 0,
      },
      "dynamics": {
        "duration": 10000,
      }
    })
  })
  // set light off
  await fetch("/api/hue", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "endpoint": `/resource/light/${id}`
    },
    body: JSON.stringify({
      "on": { "on": false },
    })
  })
}

export const setLightOn = async (id: string) => {
  await fetch("/api/hue", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "endpoint": `/resource/light/${id}`
    },
    body: JSON.stringify({
      "on": { "on": true },
      "dimming": {
        "brightness": 0,
      }
    })
  })
  //set brightness to 100%
  await fetch("/api/hue", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "endpoint": `/resource/light/${id}`
    },
    body: JSON.stringify({
      "dimming": {
        "brightness": 100,
      },
      "dynamics": {
        "duration": 10000,
      }
    })
  })
}