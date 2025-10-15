import { NextIntlClientProvider } from "next-intl";
import "./globals.css";

export const metadata = {
  title: "Albion Crafter",
  description: "Tu asistente de crafteo - AndyRrch Tools",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-black text-gray-200">
        <NextIntlClientProvider locale="es">
          <nav className="flex justify-center gap-8 py-4 border-b border-yellow-600 text-yellow-400">
            <a href="/">Albion Crafter</a>
            <a href="/optimizer">Optimizador</a>
            <a href="/import">Importar</a>
          </nav>
          <main className="p-6 text-center">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
