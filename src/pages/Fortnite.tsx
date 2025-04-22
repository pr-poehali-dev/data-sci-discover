import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Skin {
  id: number;
  name: string;
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary";
  image: string;
}

const Fortnite: React.FC = () => {
  const [selectedSkin, setSelectedSkin] = useState<Skin | null>(null);
  const [activeTab, setActiveTab] = useState("skins");

  const skins: Skin[] = [
    {
      id: 1,
      name: "Кристальный рыцарь",
      rarity: "legendary",
      image: "https://fortnite-api.com/images/cosmetics/br/cid_028_athena_commando_f/icon.png",
    },
    {
      id: 2,
      name: "Зверь",
      rarity: "epic",
      image: "https://fortnite-api.com/images/cosmetics/br/cid_519_athena_commando_m_lopex/icon.png",
    },
    {
      id: 3,
      name: "Черная вдова",
      rarity: "legendary",
      image: "https://fortnite-api.com/images/cosmetics/br/cid_362_athena_commando_f_raptorsnow/icon.png",
    },
  ];

  const rarityColors = {
    common: "bg-gray-400",
    uncommon: "bg-green-500",
    rare: "bg-blue-500",
    epic: "bg-purple-500",
    legendary: "bg-amber-500",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container py-8 flex-1">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left panel - Character preview */}
          <div className="w-full md:w-2/5">
            <Card className="h-full bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardContent className="p-6 h-full flex flex-col items-center justify-center">
                {selectedSkin ? (
                  <>
                    <div className="relative mb-4">
                      <div className={`absolute inset-0 rounded-full blur-lg opacity-30 ${rarityColors[selectedSkin.rarity]}`}></div>
                      <img 
                        src={selectedSkin.image} 
                        alt={selectedSkin.name} 
                        className="relative z-10 h-72 object-contain"
                      />
                    </div>
                    <h2 className="text-2xl font-bold">{selectedSkin.name}</h2>
                    <div className={`px-3 py-1 rounded-full text-xs text-white mt-2 ${rarityColors[selectedSkin.rarity]}`}>
                      {selectedSkin.rarity.charAt(0).toUpperCase() + selectedSkin.rarity.slice(1)}
                    </div>
                    <Button className="mt-6">Использовать скин</Button>
                  </>
                ) : (
                  <div className="text-center">
                    <img src="/placeholder.svg" alt="Выберите скин" className="h-64 opacity-30 mx-auto mb-4" />
                    <h2 className="text-xl text-muted-foreground">Выберите скин из коллекции</h2>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          {/* Right panel - Customization options */}
          <div className="w-full md:w-3/5">
            <Tabs defaultValue="skins" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="skins">Скины</TabsTrigger>
                <TabsTrigger value="backpacks">Рюкзаки</TabsTrigger>
                <TabsTrigger value="pickaxes">Кирки</TabsTrigger>
              </TabsList>

              <TabsContent value="skins" className="space-y-4">
                <h2 className="text-2xl font-bold">Все скины Fortnite</h2>
                <p className="text-muted-foreground">Выберите любой скин для вашего персонажа.</p>
                <Separator className="my-4" />
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skins.map((skin) => (
                    <Card 
                      key={skin.id} 
                      className={`skin-card cursor-pointer hover:border-primary ${selectedSkin?.id === skin.id ? 'border-2 border-primary' : ''}`}
                      onClick={() => setSelectedSkin(skin)}
                    >
                      <CardContent className="p-3 flex flex-col items-center">
                        <div className={`w-full h-36 rounded-md flex justify-center items-center mb-3 ${rarityColors[skin.rarity]} bg-opacity-10`}>
                          <img src={skin.image} alt={skin.name} className="h-32 object-contain" />
                        </div>
                        <h3 className="font-medium text-sm">{skin.name}</h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="backpacks">
                <div className="text-center py-12">
                  <img src="/placeholder.svg" alt="Рюкзаки" className="h-24 opacity-30 mx-auto mb-3" />
                  <h3 className="text-lg font-medium">Раздел рюкзаков</h3>
                  <p className="text-muted-foreground mt-2">Здесь будут доступны все рюкзаки из игры.</p>
                </div>
              </TabsContent>

              <TabsContent value="pickaxes">
                <div className="text-center py-12">
                  <img src="/placeholder.svg" alt="Кирки" className="h-24 opacity-30 mx-auto mb-3" />
                  <h3 className="text-lg font-medium">Раздел кирок</h3>
                  <p className="text-muted-foreground mt-2">Здесь будут доступны все кирки из игры.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <footer className="border-t py-6 bg-background">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2023 ИгроСкины. Этот сайт не имеет отношения к разработчикам Fortnite.</p>
        </div>
      </footer>
    </div>
  );
};

export default Fortnite;
