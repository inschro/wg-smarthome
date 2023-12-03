

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

export const light_URI_mapping: { [key: string]: string } = {
  "home/room_livingroom/light_sofa": "1e373d20-e6e6-4c55-b3d9-2173cd2b7c70",
  "home/room_livingroom/light_table": "f094eab6-53fc-4302-8bc6-782ac95d5c82",
  "home/room_ingo/light_desk": "5f90bf66-7018-43c4-a843-21c4a4b1e934",
  "home/room_ingo/light_bed": "bd6e2457-abc6-4947-99a0-7e92103c70af"
}


export const set_light_state = ({
  light_identifier,
  on,
  brightness,
  brightness_delta,
  color,
  color_temperature,
  color_temperature_delta
}: {
  light_identifier: string,
  on?: string,
  brightness?: number,
  brightness_delta?: number,
  color?: {
    x?: number,
    y?: number
  },
  color_temperature?: number,
  color_temperature_delta?: number
}) => {

  const id = light_URI_mapping[light_identifier]
  let body: {
    on?: { on: boolean },
    dimming?: {
      brightness?: number,
    },
    dimming_delta?: {
      action: "up" | "down",
      brightness_delta: number
    },
    color?: {
      xy?: {
        x?: number,
        y?: number
      }
    },
    color_temperature?: {
      mirek: number
    },
    color_temperature_delta?: {
      action: "up" | "down",
      mirek_delta: number
    }
  } = {}
  if (on) {
    body["on"] = { "on": on==="on" }
  }
  if (brightness) {
    body["dimming"] = { "brightness": brightness }
  }
  if (brightness_delta) {
    if (brightness_delta > 0) {
      body["dimming_delta"] = { action: "up", brightness_delta: brightness_delta }
    } else {
      body["dimming_delta"] = { action: "down", brightness_delta: -brightness_delta }
    }
  }
  if (color) {
    body["color"] = { xy: { x: color.x, y: color.y } }
  }
  if (color_temperature) {
    body["color_temperature"] = { mirek: color_temperature }
  }
  if (color_temperature_delta) {
    if (color_temperature_delta > 0) {
      body["color_temperature_delta"] = { action: "up", mirek_delta: color_temperature_delta }
    } else {
      body["color_temperature_delta"] = { action: "down", mirek_delta: -color_temperature_delta }
    }
  }

  console.log("body:", body)

  fetch("/api/hue", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "endpoint": `/resource/light/${id}`
    },
    body: JSON.stringify(body)
  })
}