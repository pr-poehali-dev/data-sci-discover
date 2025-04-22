import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageFooter from "@/components/PageFooter";
import WeaponPreview from "@/components/standoff/WeaponPreview";
import WeaponsTab from "@/components/standoff/WeaponsTab";
import SkinsTab from "@/components/standoff/SkinsTab";
import { Weapon, Skin, mockWeapons, mockSkins } from "@/types/StandoffTypes";

const Standoff: React.FC = () => {
  const [selectedWeapon, setSelectedWeapon] = useState<Weapon | null>(null);
  const [selectedSkin, setSelectedSkin] = useState<Skin | null>(null);

  const handleWeaponSelect = (weapon: Weapon) => {
    setSelectedWeapon(weapon);
    setSelectedSkin(null);
  };

  const handleSkinSelect = (skin: Skin) => {
    setSelectedSkin(skin);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container py-8 flex-1">
        <h1 className="text-3xl font-bold mb-6">Standoff 2 - Все скины</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left panel - Weapon preview */}
          <div className="w-full md:w-2/5">
            <WeaponPreview 
              selectedWeapon={selectedWeapon} 
              selectedSkin={selectedSkin} 
            />
          </div>
          
          {/* Right panel - Customization options */}
          <div className="w-full md:w-3/5">
            <Tabs defaultValue="weapons">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="weapons">Оружие</TabsTrigger>
                <TabsTrigger value="skins" disabled={!selectedWeapon}>Скины</TabsTrigger>
              </TabsList>

              <TabsContent value="weapons">
                <WeaponsTab 
                  weapons={mockWeapons}
                  selectedWeapon={selectedWeapon}
                  onWeaponSelect={handleWeaponSelect}
                />
              </TabsContent>

              <TabsContent value="skins">
                <SkinsTab 
                  selectedWeapon={selectedWeapon}
                  skins={mockSkins}
                  selectedSkin={selectedSkin}
                  onSkinSelect={handleSkinSelect}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <PageFooter gameName="Standoff 2" />
    </div>
  );
};

export default Standoff;
