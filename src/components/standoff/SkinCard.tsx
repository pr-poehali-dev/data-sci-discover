import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skin, rarityColors } from "@/types/StandoffTypes";

interface SkinCardProps {
  skin: Skin;
  isSelected: boolean;
  onSelect: (skin: Skin) => void;
}

const SkinCard: React.FC<SkinCardProps> = ({ skin, isSelected, onSelect }) => {
  return (
    <Card 
      className={`cursor-pointer hover:border-primary transition-all ${isSelected ? 'border-2 border-primary' : ''}`}
      onClick={() => onSelect(skin)}
    >
      <CardContent className="p-3 flex flex-col items-center">
        <div className={`w-full h-28 rounded-md flex justify-center items-center mb-3 ${rarityColors[skin.rarity]} bg-opacity-10`}>
          <img src={skin.image} alt={skin.name} className="h-24 object-contain" />
        </div>
        <h3 className="font-medium text-sm">{skin.name}</h3>
        <div className={`px-2 py-0.5 rounded-full text-xs text-white mt-1 ${rarityColors[skin.rarity]}`}>
          {skin.rarity.charAt(0).toUpperCase() + skin.rarity.slice(1)}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkinCard;