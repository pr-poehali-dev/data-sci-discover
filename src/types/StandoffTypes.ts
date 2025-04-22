export interface Weapon {
  id: number;
  name: string;
  type: string;
  image: string;
}

export interface Skin {
  id: number;
  name: string;
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary";
  image: string;
  weaponId: number;
}

export const rarityColors = {
  common: "bg-gray-400",
  uncommon: "bg-green-500",
  rare: "bg-blue-500",
  epic: "bg-purple-500",
  legendary: "bg-amber-500",
};

export const mockWeapons: Weapon[] = [
  {
    id: 1,
    name: "AK-47",
    type: "Штурмовая винтовка",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "M4A1",
    type: "Штурмовая винтовка",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "AWP",
    type: "Снайперская винтовка",
    image: "/placeholder.svg"
  }
];

export const mockSkins: Skin[] = [
  {
    id: 1,
    name: "Драконья ярость",
    rarity: "legendary",
    image: "/placeholder.svg",
    weaponId: 1
  },
  {
    id: 2,
    name: "Азимов",
    rarity: "epic",
    image: "/placeholder.svg",
    weaponId: 1
  },
  {
    id: 3,
    name: "Нео-нуар",
    rarity: "rare",
    image: "/placeholder.svg",
    weaponId: 2
  },
  {
    id: 4,
    name: "Гиперзверь",
    rarity: "legendary",
    image: "/placeholder.svg",
    weaponId: 3
  }
];