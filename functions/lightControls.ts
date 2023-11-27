

export const setLightOff = (id: string) => {
  fetch("/api/hue", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "endpoint": `/resource/light/${id}`
    },
    body: JSON.stringify({
      "on": { "on": false }
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
  //wait 3 seconds
  await new Promise(r => setTimeout(r, 3000));
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
        "duration": 4000,
      }
    })
  })
}