import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filipe Gallo | Sobre",
  description: "Sobre o Desenvolvedor Front-End Filipe Gallo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
