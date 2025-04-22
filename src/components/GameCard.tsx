import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  path: string;
  buttonText?: string;
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  description,
  image,
  path,
  buttonText = "Играть сейчас",
}) => {
  const navigate = useNavigate();

  return (
    <Card className="game-card overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white drop-shadow-md">
          {title}
        </h3>
      </div>
      <CardContent className="p-4">
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <Button 
          className="w-full bg-primary hover:bg-primary/90"
          onClick={() => navigate(path)}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default GameCard;
