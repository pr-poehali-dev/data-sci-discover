import React from "react";

interface PageFooterProps {
  copyrightName: string;
  disclaimerText: string;
  trademarkText: string;
}

export const PageFooter: React.FC<PageFooterProps> = ({
  copyrightName,
  disclaimerText,
  trademarkText
}) => {
  return (
    <footer className="border-t py-6 bg-background">
      <div className="container text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} {copyrightName}. {disclaimerText}</p>
        <p className="mt-1">{trademarkText}</p>
      </div>
    </footer>
  );
};
