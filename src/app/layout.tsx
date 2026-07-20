import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const baseUrl = `${protocol}://${host}`;
  const description =
    "Informações, horários, serviços e benefícios para aproveitar sua estadia no Hotel das Marés, em Mundaú.";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "Guia do Hóspede | Hotel das Marés",
      template: "%s | Hotel das Marés",
    },
    description,
    openGraph: {
      title: "Guia do Hóspede | Hotel das Marés",
      description,
      type: "website",
      locale: "pt_BR",
      images: [
        {
          url: `${baseUrl}/og.png`,
          width: 1731,
          height: 909,
          alt: "Hotel das Marés — seu guia para uma estadia mais leve",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Guia do Hóspede | Hotel das Marés",
      description,
      images: [`${baseUrl}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${lato.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
