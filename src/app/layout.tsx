import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khushboo Ashra - Research Associate & Data Analyst",
  description: "Professional portfolio of Khushboo Ashra, Research Associate specializing in sustainable finance, financial markets, and data analysis. M.Com Finance graduate with expertise in quantitative research and financial modeling.",
  keywords: "Research Associate, Data Analyst, Financial Research, Quantitative Analysis, Sustainable Finance, R Programming, PLS-SEM, Financial Modeling",
  authors: [{ name: "Khushboo Ashra" }],
  openGraph: {
    title: "Khushboo Ashra - Research Associate & Data Analyst",
    description: "Professional portfolio showcasing research expertise in sustainable finance and data analysis",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body
        className="antialiased bg-white text-gray-900"
        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}