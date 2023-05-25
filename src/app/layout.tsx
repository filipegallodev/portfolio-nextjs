import StyledComponentsRegistry from "@/lib/registry";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Providers } from "@/store/provider";
import ReduxThemeProvider from "@/components/ReduxThemeProvider";
import GlobalStyle from "@/styles/GlobalStyle";

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
    <Providers>
      <StyledComponentsRegistry>
        <ReduxThemeProvider>
          <GlobalStyle />
          <html lang="pt-br">
            <body>{children}</body>
          </html>
        </ReduxThemeProvider>
      </StyledComponentsRegistry>
    </Providers>
  );
}
