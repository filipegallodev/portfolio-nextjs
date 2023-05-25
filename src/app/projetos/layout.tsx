import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filipe Gallo | Projetos",
  description: "Projetos do Desenvolvedor Front-End Filipe Gallo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
