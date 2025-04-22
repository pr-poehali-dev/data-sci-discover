import React from "react";
import Navbar from "@/components/Navbar";
import GameCard from "@/components/GameCard";

const Index: React.FC = () => {
  const games = [
    {
      title: "Fortnite",
      description: "Испытайте популярную игру Fortnite с доступом ко всем скинам! Создайте своего уникального персонажа и погрузитесь в увлекательный мир игры.",
      image: "https://cdn2.unrealengine.com/fortnite-chapter-4-season-og-1900x600-e7ec62004a02.jpg",
      path: "/fortnite",
    },
    {
      title: "Standoff 2",
      description: "Играйте в Standoff 2 с полной коллекцией скинов! Выбирайте любое оружие и кастомизируйте его на свой вкус.",
      image: "https://staticg.sportskeeda.com/editor/2022/03/95cdd-16473204152699-1920.jpg",
      path: "/standoff",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Добро пожаловать в мир игровых скинов!
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Откройте доступ ко всем скинам в популярных играх без ограничений. 
            Выбирайте игру и настраивайте своего персонажа на свой вкус!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {games.map((game, index) => (
            <GameCard
              key={index}
              title={game.title}
              description={game.description}
              image={game.image}
              path={game.path}
            />
          ))}
        </div>

        <div className="mt-16 p-6 bg-primary/10 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-2">Что вы можете делать на нашем сайте?</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-background rounded-md shadow">
              <h3 className="text-lg font-semibold mb-2">📱 Играйте</h3>
              <p className="text-sm text-muted-foreground">
                Испытайте игровой процесс с нашим веб-эмулятором
              </p>
            </div>
            <div className="p-4 bg-background rounded-md shadow">
              <h3 className="text-lg font-semibold mb-2">🎮 Выбирайте скины</h3>
              <p className="text-sm text-muted-foreground">
                Все скины доступны бесплатно и без ограничений
              </p>
            </div>
            <div className="p-4 bg-background rounded-md shadow">
              <h3 className="text-lg font-semibold mb-2">💫 Настраивайте</h3>
              <p className="text-sm text-muted-foreground">
                Комбинируйте различные скины для создания уникального образа
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t py-6 bg-background">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2023 ИгроСкины. Все скины представлены в образовательных целях.</p>
          <p className="mt-1">Этот сайт не имеет отношения к разработчикам игр.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
