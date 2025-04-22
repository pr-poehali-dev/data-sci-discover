import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, CheckCircle2, AlertTriangle, Lock, ArrowRight, Trophy, Gift } from "lucide-react";
import { PageFooter } from "@/components/PageFooter";

const RobloxRobux: React.FC = () => {
  const { toast } = useToast();
  const [username, setUsername] = useState("");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<"input" | "generating" | "verification">("input");
  
  const robuxOptions = [
    { amount: 400, image: "/placeholder.svg", popular: false },
    { amount: 800, image: "/placeholder.svg", popular: true },
    { amount: 1700, image: "/placeholder.svg", popular: false },
    { amount: 4500, image: "/placeholder.svg", popular: false },
  ];

  const handleGenerate = () => {
    if (!username) {
      toast({
        title: "Ошибка",
        description: "Введите имя пользователя Roblox",
        variant: "destructive",
      });
      return;
    }
    
    if (!selectedAmount) {
      toast({
        title: "Ошибка",
        description: "Выберите количество Robux",
        variant: "destructive",
      });
      return;
    }
    
    setIsGenerating(true);
    setStage("generating");
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setStage("verification");
          return 100;
        }
        
        return newProgress;
      });
    }, 50);
  };

  const handleVerification = () => {
    toast({
      title: "Требуется подтверждение",
      description: "Для завершения получения Robux требуется подтверждение. Это демонстрационный сайт, реальные Robux не выдаются.",
    });
  };

  const resetGenerator = () => {
    setUsername("");
    setSelectedAmount(null);
    setIsGenerating(false);
    setProgress(0);
    setStage("input");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/5">
      <Navbar />
      
      <div className="container py-8 flex-1">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-secondary mb-3">Бесплатные Robux для Roblox</h1>
            <p className="text-muted-foreground">Получите валюту для вашего аккаунта Roblox</p>
          </div>
          
          <Alert className="mb-6 border-destructive/30 bg-destructive/10">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <AlertTitle className="text-destructive">Важное уведомление!</AlertTitle>
            <AlertDescription>
              Это демонстрационный сайт. Реальные Robux не выдаются. Сайт создан в образовательных целях.
            </AlertDescription>
          </Alert>
          
          {stage === "input" && (
            <Card className="border-secondary/20">
              <CardHeader>
                <CardTitle>Генератор Robux</CardTitle>
                <CardDescription>Заполните необходимые данные для получения валюты</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="username">Имя пользователя Roblox</Label>
                  <Input 
                    id="username" 
                    placeholder="Введите ваш игровой ник" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Выберите количество Robux</Label>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {robuxOptions.map((option) => (
                      <div 
                        key={option.amount}
                        className={`relative border rounded-lg p-3 cursor-pointer transition-all hover:bg-secondary/5 ${selectedAmount === option.amount ? 'border-secondary bg-secondary/10' : 'border-border'}`}
                        onClick={() => setSelectedAmount(option.amount)}
                      >
                        {option.popular && (
                          <div className="absolute -top-2 -right-2 bg-secondary text-white text-xs px-2 py-1 rounded-full">
                            Популярно
                          </div>
                        )}
                        <div className="flex flex-col items-center">
                          <div className="bg-secondary/10 p-2 rounded-full mb-2">
                            <Gift className="h-10 w-10 text-secondary" />
                          </div>
                          <span className="font-medium">{option.amount}</span>
                          <span className="text-xs text-muted-foreground">Robux</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-secondary hover:bg-secondary/90" 
                  onClick={handleGenerate}
                  disabled={!username || !selectedAmount}
                >
                  Получить Robux
                </Button>
              </CardFooter>
            </Card>
          )}
          
          {stage === "generating" && (
            <Card className="border-secondary/20">
              <CardHeader>
                <CardTitle>Генерация Robux</CardTitle>
                <CardDescription>Пожалуйста, подождите, идет процесс...</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="text-center py-4">
                  <div className="inline-block p-4 bg-secondary/10 rounded-full mb-4">
                    <Gift className="h-20 w-20 text-secondary animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{selectedAmount} Robux</h3>
                  <p className="text-muted-foreground">для пользователя {username}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Прогресс</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                    <span>Подключение к серверам Roblox</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className={`h-4 w-4 mr-2 ${progress > 30 ? 'text-green-500' : 'text-muted-foreground'}`} />
                    <span className={progress > 30 ? '' : 'text-muted-foreground'}>Поиск аккаунта пользователя</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className={`h-4 w-4 mr-2 ${progress > 60 ? 'text-green-500' : 'text-muted-foreground'}`} />
                    <span className={progress > 60 ? '' : 'text-muted-foreground'}>Генерация Robux</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className={`h-4 w-4 mr-2 ${progress > 85 ? 'text-green-500' : 'text-muted-foreground'}`} />
                    <span className={progress > 85 ? '' : 'text-muted-foreground'}>Завершение процесса</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          {stage === "verification" && (
            <Card className="border-secondary/20">
              <CardHeader>
                <CardTitle>Требуется верификация</CardTitle>
                <CardDescription>Последний шаг перед получением Robux</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-center py-4">
                  <div className="bg-yellow-500/10 p-6 rounded-full">
                    <Lock className="h-16 w-16 text-yellow-500" />
                  </div>
                </div>
                
                <Alert variant="default" className="bg-yellow-500/10 border-yellow-500/30">
                  <Info className="h-4 w-4" />
                  <AlertTitle>Защита от ботов</AlertTitle>
                  <AlertDescription>
                    Для завершения процесса и получения {selectedAmount} Robux на аккаунт {username}, 
                    необходимо пройти верификацию.
                  </AlertDescription>
                </Alert>
                
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Это демонстрационный сайт</h3>
                  <p className="text-sm text-muted-foreground">
                    Данный сайт создан в образовательных целях и не выдаёт реальные Robux. 
                    Roblox Corporation не разрешает получение бесплатной валюты через сторонние сервисы.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                <Button 
                  variant="outline"
                  className="w-full sm:w-auto" 
                  onClick={resetGenerator}
                >
                  Начать заново
                </Button>
                <Button 
                  className="w-full sm:w-auto flex items-center gap-2 bg-secondary hover:bg-secondary/90" 
                  onClick={handleVerification}
                >
                  Пройти проверку <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}
          
          <Tabs defaultValue="howto" className="mt-8">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="howto">Как это работает</TabsTrigger>
              <TabsTrigger value="faq">Частые вопросы</TabsTrigger>
              <TabsTrigger value="testimonials">Отзывы</TabsTrigger>
            </TabsList>
            
            <TabsContent value="howto" className="mt-4 space-y-4 p-4 bg-card rounded-lg border">
              <h3 className="text-lg font-medium">Как работает генератор Robux?</h3>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10 text-secondary mb-3">1</div>
                      <h4 className="font-medium mb-2">Введите данные</h4>
                      <p className="text-sm text-muted-foreground">Укажите ваш игровой ник и выберите количество Robux</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10 text-secondary mb-3">2</div>
                      <h4 className="font-medium mb-2">Дождитесь генерации</h4>
                      <p className="text-sm text-muted-foreground">Система обработает запрос и сгенерирует валюту</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary/10 text-secondary mb-3">3</div>
                      <h4 className="font-medium mb-2">Пройдите верификацию</h4>
                      <p className="text-sm text-muted-foreground">Завершите процесс, подтвердив, что вы человек</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="faq" className="mt-4 space-y-4 p-4 bg-card rounded-lg border">
              <h3 className="text-lg font-medium">Частые вопросы</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">Это легально?</h4>
                  <p className="text-sm text-muted-foreground">Нет. Roblox Corporation не позволяет получать Robux через сторонние сервисы. Данный сайт создан в образовательных целях.</p>
                </div>
                <div>
                  <h4 className="font-medium">Сколько времени занимает получение Robux?</h4>
                  <p className="text-sm text-muted-foreground">Это демонстрационный сайт, на котором невозможно получить реальные Robux.</p>
                </div>
                <div>
                  <h4 className="font-medium">Могу ли я получить бан за использование генератора?</h4>
                  <p className="text-sm text-muted-foreground">В реальном мире попытки взлома или использование подобных сервисов могут привести к бану аккаунта.</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="testimonials" className="mt-4 space-y-4 p-4 bg-card rounded-lg border">
              <h3 className="text-lg font-medium">Отзывы пользователей</h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <p className="italic text-sm mb-3">"Это демонстрационный сайт, созданный в образовательных целях. Реальные Robux через такие сервисы получить невозможно."</p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 mr-2"></div>
                      <div>
                        <div className="font-medium text-sm">Администрация сайта</div>
                        <div className="text-xs text-muted-foreground">Образовательный проект</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <p className="italic text-sm mb-3">"Пожалуйста, помните, что единственный официальный способ получить Robux - через официальный сайт Roblox или авторизованных партнеров."</p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 mr-2 flex items-center justify-center">
                        <Trophy className="h-4 w-4 text-secondary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">Модератор</div>
                        <div className="text-xs text-muted-foreground">Информационное сообщение</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <PageFooter 
        copyrightName="ИгроСкины"
        disclaimerText="Это демонстрационный сайт, созданный в образовательных целях."
        trademarkText="Roblox и Robux являются зарегистрированными товарными знаками Roblox Corporation."
      />
    </div>
  );
};

export default RobloxRobux;
