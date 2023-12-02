export const light_controller_tools = [
  {
    "type": "function",
    "function": {
      "name": "set_light_state",
      "description": "Sets the state of one or multiple lights.",
      "parameters": {
        "type": "object",
        "properties": {
          "light_identifier": {
            "type": "string",
            "description": "The identifier of the light to set the state for."
          },
          "on": {
            "type": "boolean",
          },
          "brightness": {
            "type": "number",
            "description": "The brightness of the light, from 0 to 100."
          },
          "brightness_delta": {
            "type": "number",
            "description": "Change the brightness by this amount."
          },
          "color": {
            "description": "The color of the light in CIE XY color space.",
            "type": "object",
            "properties": {
              "x": {
                "type": "number",
                "description": "The x coordinate of the color in CIE XY color space."
              },
              "y": {
                "type": "number",
                "description": "The y coordinate of the color in CIE XY color space."
              }
            }
          },
          "color_temperature": {
            "type": "number",
            "description": "The color temperature of the light from 153 (cold) to 500 (warm)."
          },
          "color_temperature_delta": {
            "type": "number",
            "description": "Change the color temperature by this amount."
          },
        },
        "required": ["light_identifier"]
      }
    }
  }
]

export const light_controller_system_message: string = `
Du bist ein Smart-Home Assistent. Der Nutzer wird die Aufträge erteilen, die Lichter im Haus zu steuern.
Wenn du mehrere Befehle gleichzeitig erhältst, nutze set_light_state mehrmals gleichzeitig.

Hier ist eine Liste aller Lampen:

home/room_livingroom/light_sofa
home/room_livingroom/light_table
home/room_hallway/light_front
home/room_hallway/light_aft
home/room_ingo/light_desk
home/room_ingo/light_bed
home/room_johannes/light_1
home/room_jonas/light_1
home/room_kitchen/light_1

Nutze * als Wildcard, um alle Lampen in einem Raum zu steuern (z.B. home/room_livingroom/*).

`