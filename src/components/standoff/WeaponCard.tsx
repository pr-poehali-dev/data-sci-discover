import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Weapon } from "@/types/StandoffTypes";

interface WeaponCardProps {
  weapon: Weapon;
  isSelected: boolean;
  onSelect: (weapon: Weapon) => void;
}

const WeaponCard: React.FC<WeaponCardProps> = ({ weapon, isSelected, onSelect }) => {
  return (
    <Card 
      className={`cursor-pointer hover:border-secondary transition-all ${isSelected ? 'border-2 border-secondary' : ''}`}
      onClick={() => onSelect(weapon)}
    >
      <CardContent className="p-4 flex flex-col items-center">
        <div className="w-full h-32 rounded-md flex justify-center items-center mb-3 bg-secondary/10">
          <img src={weapon.image} alt={weapon.name} className="h-24 object-contain" />
        </div>
        <h3 className="font-medium">{weapon.name}</h3>
        <p className="text-xs text-muted-foreground">{weapon.type}</p>
      </CardContent>
    </Card>
  );
};

export default WeaponCard;