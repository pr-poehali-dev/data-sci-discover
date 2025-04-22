import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Weapon, Skin, rarityColors } from "@/types/StandoffTypes";

interface WeaponPreviewProps {
  selectedWeapon: Weapon | null;
  selectedSkin: Skin | null;
}

const WeaponPreview: React.FC<WeaponPreviewProps> = ({ selectedWeapon, selectedSkin }) => {
  return (
    <Card className="h-full bg-gradient-to-br from-secondary/10 to-primary/10">
      <CardContent className="p-6 h-full flex flex-col items-center justify-center">
        {selectedWeapon && selectedSkin ? (
          <>
            <div className="relative mb-4">
              <div className={`absolute inset-0 rounded-md blur-lg opacity-30 ${rarityColors[selectedSkin.rarity]}`}></div>
              <img 
                src={selectedSkin.image} 
                alt={`${selectedWeapon.name} | ${selectedSkin.name}`} 
                className="relative z-10 h-56 object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold">{selectedWeapon.name} | {selectedSkin.name}</h2>
            <p className="text-sm text-muted-foreground mt-1">{selectedWeapon.type}</p>
            <div className={`px-3 py-1 rounded-full text-xs text-white mt-2 ${rarityColors[selectedSkin.rarity]}`}>
              {selectedSkin.rarity.charAt(0).toUpperCase() + selectedSkin.rarity.slice(1)}
            </div>
            <Button className="mt-6">Использовать скин</Button>
          </>
        ) : (
          <div className="text-center">
            <img src="/placeholder.svg" alt="Выберите оружие и скин" className="h-56 opacity-30 mx-auto mb-4" />
            <h2 className="text-xl text-muted-foreground">Сначала выберите оружие, затем скин</h2>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WeaponPreview;