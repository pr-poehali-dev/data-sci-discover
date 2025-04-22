import React from "react";

interface PageFooterProps {
  gameName?: string;
}

const PageFooter: React.FC<PageFooterProps> = ({ gameName = "ИгроСкины" }) => {
  return (
    <footer className="border-t py-6 bg-background">
      <div className="container text-center text-sm text-muted-foreground">
        <p>© 2023 {gameName}. Этот сайт не имеет отношения к разработчикам игры.</p>
      </div>
    </footer>
  );
};

export default PageFooter;