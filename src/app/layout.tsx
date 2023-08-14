import ReduxThemeProvider from "@/components/ReduxThemeProvider";
import "@/styles/globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import { Providers } from "@/store/provider";
import GlobalStyle from "@/styles/GlobalStyle";

export const metadata = {
  title: "Filipe Gallo | Desenvolvedor de Software",
  description: "Site oficial do Desenvolvedor de Software Filipe Gallo.",
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
