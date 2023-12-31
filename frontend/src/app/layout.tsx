import Header from "@/components/layout/Header";
import { ApolloWrapper } from "@/lib/apollo-provide";
import StyledComponentsRegistry from "@/lib/registry";
import type { Metadata } from "next";
import { Saira } from "next/font/google";

const inter = Saira({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ApolloWrapper>
          <StyledComponentsRegistry>
            <Header />
            {children}
          </StyledComponentsRegistry>
        </ApolloWrapper>
      </body>
    </html>
  );
}
