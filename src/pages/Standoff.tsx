import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Weapon {
  id: number;
  name: string;
  type: string;
  image: string;
}

interface Skin {
  id: number;
  name: string;
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary";
  image: string;
  weaponId: number;
}

const Standoff: React.FC = () => {
  const [selectedWeapon, setSelectedWeapon] = useState<Weapon | null>(null);
  const [selectedSkin, setSelectedSkin] = useState<Skin | null>(null);

  const weapons: Weapon[] = [
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

  const skins: Skin[] = [
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

  const rarityColors = {
    common: "bg-gray-400",
    uncommon: "bg-green-500",
    rare: "bg-blue-500",
    epic: "bg-purple-500",
    legendary: "bg-amber-500",
  };

  // Filter skins based on selected weapon
  const filteredSkins = selectedWeapon 
    ? skins.filter(skin => skin.weaponId === selectedWeapon.id)
    : [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container py-8 flex-1">
        <h1 className="text-3xl font-bold mb-6">Standoff 2 - Все скины</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left panel - Weapon preview */}
          <div className="w-full md:w-2/5">
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
          </div>
          
          {/* Right panel - Customization options */}
          <div className="w-full md:w-3/5">
            <Tabs defaultValue="weapons">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="weapons">Оружие</TabsTrigger>
                <TabsTrigger value="skins" disabled={!selectedWeapon}>Скины</TabsTrigger>
              </TabsList>

              <TabsContent value="weapons" className="space-y-4">
                <h2 className="text-2xl font-bold">Выберите оружие</h2>
                <p className="text-muted-foreground">Сначала выберите тип оружия для просмотра доступных скинов.</p>
                <Separator className="my-4" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {weapons.map((weapon) => (
                    <Card 
                      key={weapon.id} 
                      className={`skin-card cursor-pointer hover:border-secondary ${selectedWeapon?.id === weapon.id ? 'border-2 border-secondary' : ''}`}
                      onClick={() => {
                        setSelectedWeapon(weapon);
                        setSelectedSkin(null);
                      }}
                    >
                      <CardContent className="p-4 flex flex-col items-center">
                        <div className="w-full h-32 rounded-md flex justify-center items-center mb-3 bg-secondary/10">
                          <img src={weapon.image} alt={weapon.name} className="h-24 object-contain" />
                        </div>
                        <h3 className="font-medium">{weapon.name}</h3>
                        <p className="text-xs text-muted-foreground">{weapon.type}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="skins" className="space-y-4">
                <h2 className="text-2xl font-bold">Скины для {selectedWeapon?.name}</h2>
                <p className="text-muted-foreground">Выберите любой скин для вашего оружия.</p>
                <Separator className="my-4" />
                
                {filteredSkins.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {filteredSkins.map((skin) => (
                      <Card 
                        key={skin.id} 
                        className={`skin-card cursor-pointer hover:border-primary ${selectedSkin?.id === skin.id ? 'border-2 border-primary' : ''}`}
                        onClick={() => setSelectedSkin(skin)}
                      >
                        <CardContent className="p-3 flex flex-col items-center">
                          <div className={`w-full h-28 rounded-md flex justify-center items-center mb-3 ${rarityColors[skin.rarity]} bg-opacity-10`}>
                            <img src={skin.image} alt={skin.name} className="h-24 object-contain" />
                          </div>
                          <h3 className="font-medium text-sm">{skin.name}</h3>
                          <div className={`px-2 py-0.5 rounded-full text-xs text-white mt-1 ${rarityColors[skin.rarity]}`}>
                            {skin.rarity}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p>Для выбранного оружия нет доступных скинов.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <footer className="border-t py-6 bg-background">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2023 ИгроСкины. Этот сайт не имеет отношения к разработчикам Standoff 2.</p>
        </div>
      </footer>
    </div>
  );
};

export default Standoff;
