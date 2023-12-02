import ControlItem from "@/components/ControlItem";

interface Card {
  title: string;
  type: string;
  controlItems: ControlItem[];
}

interface ControlItem {
  title: string;
  type: string;
  options?: any;
}


export const cards: Card[] = [
  {
    title: "Wohnzimmer",
    type: "room",
    controlItems: [
      {
        title: "Sofalampe",
        type: "light",
        options: {
          deviceId: "1e373d20-e6e6-4c55-b3d9-2173cd2b7c70",
        }
      },
      {
        title: "Tischlampe",
        type: "light",
        options: {
          deviceId: "f094eab6-53fc-4302-8bc6-782ac95d5c82",
        }
      },
    ]
  },
  {
    title: "Infos",
    type: "info",
    controlItems: [
      {
        title: "Wetter",
        type: "weather",
      },
      {
        title: "Einkafsliste",
        type: "shoppinglist",
      },
    ]
  },
  {
    title: "Jonas' Zimmer",
    type: "room",
    controlItems: [
      {
        title: "Lampe",
        type: "light",
        options: {
          deviceId: "1532636f-3a38-47c6-820c-b0b29471b24a",
        }
      }
    ]
  },
  {
    title: "Johannes' Zimmer",
    type: "room",
    controlItems: [
      {
        title: "Lampe",
        type: "light",
        options: {
          deviceId: "cb843579-f69e-4009-beb9-299e1543537d",
        }
      }
    ]
  },
  {
    title: "Ingo's Zimmer",
    type: "room",
    controlItems: [
      {
        title: "Bettlampe",
        type: "light",
        options: {
          deviceId: "bd6e2457-abc6-4947-99a0-7e92103c70af",
        }
      },
      {
        title: "Tischlampe",
        type: "light",
        options: {
          deviceId: "5f90bf66-7018-43c4-a843-21c4a4b1e934",
        }
      },
    ]
  }
]