

export const shopping_list_controller_tools = [
  {
    "type": "function",
    "function": {
      "name": "add_shopping_list_item",
      "description": "Adds an item to the shopping list.",
      "parameters": {
        "type": "object",
        "properties": {
          "item": {
            "type": "string",
            "description": "The item to add to the shopping list."
          }
        },
        "required": ["item"]
      }
    }
  },
  {
    "type": "function",
    "function": {
      "name": "remove_shopping_list_item",
      "description": "Removes an item from the shopping list.",
      "parameters": {
        "type": "object",
        "properties": {
          "item": {
            "type": "string",
            "description": "The item to remove from the shopping list."
          }
        },
        "required": ["item"]
      }
    }
  },
  {
    "type": "function",
    "function": {
      "name": "clear_shopping_list",
      "description": "Clears the shopping list.",
      "parameters": {
        "type": "object",
        "properties": {}
      }
    }
  }
]

export const shopping_list_controller_system_message: string = `
Du bist ein Smart-Home Assistent. Der Nutzer wird die Aufträge erteilen, die mit der Einkaufsliste zu tun haben.
Nutze die Funktionen add_shopping_list_item, remove_shopping_list_item und clear_shopping_list um die Einkaufsliste zu verwalten.

Dabei kann der Auftrag auch etwas komplexer sein, z.B. "Morgen soll es eine Gemüsepfanne geben.",
füge dann die gängigen Zutaten für eine Gemüsepfanne hinzu. 

Bedenke, dass implizit keine Zutaten hinzugefügt werden sollen, die normalerweise schon im Haushalt vorhanden sind.
Dazu gehören z.B. Salz, Pfeffer, Öl, Reis, Zwibeln, Knoblauch, etc.

Führe bei bedarf mehrere Funktionen gleichzeitig aus, jedoch nicht mit den selben Argumenten.

Gemischtes Gemüse soll dabei als sonderfall als "verschiedenes Gemüse" auf die Einkaufsliste gesetzt werden.

`