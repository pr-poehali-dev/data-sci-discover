import React from "react";
import { Separator } from "@/components/ui/separator";
import SkinCard from "./SkinCard";
import { Weapon, Skin } from "@/types/StandoffTypes";

interface SkinsTabProps {
  selectedWeapon: Weapon | null;
  skins: Skin[];
  selectedSkin: Skin | null;
  onSkinSelect: (skin: Skin) => void;
}

const SkinsTab: React.FC<SkinsTabProps> = ({ selectedWeapon, skins, selectedSkin, onSkinSelect }) => {
  // Filter skins based on selected weapon
  const filteredSkins = selectedWeapon 
    ? skins.filter(skin => skin.weaponId === selectedWeapon.id)
    : [];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Скины для {selectedWeapon?.name}</h2>
      <p className="text-muted-foreground">Выберите любой скин для вашего оружия.</p>
      <Separator className="my-4" />
      
      {filteredSkins.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredSkins.map((skin) => (
            <SkinCard 
              key={skin.id} 
              skin={skin}
              isSelected={selectedSkin?.id === skin.id}
              onSelect={onSkinSelect}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p>Для выбранного оружия нет доступных скинов.</p>
        </div>
      )}
    </div>
  );
};

export default SkinsTab;