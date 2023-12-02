

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
  dimming,
  color,
  color_temperature,
  color_temperature_delta
}: {
  light_identifier: string,
  on?: boolean,
  dimming?: {
    brightness?: number,
    brightness_delta?: number
  },
  color?: {
    x?: number,
    y?: number
  },
  color_temperature?: number,
  color_temperature_delta?: number
}) => {
  // get all light ids considering the wildcards like home/room_livingroom/*
  let ids: string[] = []
  if (light_identifier.endsWith("*")) {
    const prefix = light_identifier.slice(0, -1)
    for (const key of Object.keys(light_URI_mapping)) {
      if (key.startsWith(prefix)) {
        ids.push(light_URI_mapping[key])
      }
    }
  } else {
    ids.push(light_URI_mapping[light_identifier])
  }
  console.log("ids:", ids)
  for (const id of ids) {
    fetch("/api/hue", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "endpoint": `/resource/light/${id}`
      },
      body: JSON.stringify({
        "on": { "on": on },
        "dimming": {
          "brightness": 100,
        },
        "dynamics": {
          "duration": 1000,
        }
      })
    })
  }
  
}