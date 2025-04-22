import React from "react";
import { Separator } from "@/components/ui/separator";
import WeaponCard from "./WeaponCard";
import { Weapon } from "@/types/StandoffTypes";

interface WeaponsTabProps {
  weapons: Weapon[];
  selectedWeapon: Weapon | null;
  onWeaponSelect: (weapon: Weapon) => void;
}

const WeaponsTab: React.FC<WeaponsTabProps> = ({ weapons, selectedWeapon, onWeaponSelect }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Выберите оружие</h2>
      <p className="text-muted-foreground">Сначала выберите тип оружия для просмотра доступных скинов.</p>
      <Separator className="my-4" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {weapons.map((weapon) => (
          <WeaponCard 
            key={weapon.id} 
            weapon={weapon}
            isSelected={selectedWeapon?.id === weapon.id}
            onSelect={onWeaponSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default WeaponsTab;