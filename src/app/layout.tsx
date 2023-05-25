import StyledComponentsRegistry from "@/lib/registry";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Providers } from "@/store/provider";
import ReduxThemeProvider from "@/components/ReduxThemeProvider";

export const metadata: Metadata = {
  title: "Filipe Gallo | Desenvolvedor Front-End",
  description: "Site oficial do Desenvolvedor Front-End Filipe Gallo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <Providers>
          <ReduxThemeProvider>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </ReduxThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
