

export const setLightOff = (id: string) => {
  fetch("/api/hue", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "endpoint": `/resource/light/${id}`
    },
    body: JSON.stringify({
      "on": { "on": false },
      "dynamics": {
        "duration": 1000,
      }
    })
  })
}

export const setLightOn = (id: string) => {
  fetch("/api/hue", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "endpoint": `/resource/light/${id}`
    },
    body: JSON.stringify({
      "on": { "on": true },
      "dimming": {
        "brightness": 100,
      },
      "dynamics": {
        "duration": 1000,
      }
    })
  })
}