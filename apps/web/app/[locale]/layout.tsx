// Components
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";

// Providers
import { ThemeProvider } from "@/lib/providers/theme-provider";
import { NextIntlClientProvider } from "next-intl";

// Utils
import { routing } from "@/config/i18n/routing";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";

// Font
import "@fontsource-variable/onest";

// Styles
import "@/styles/globals.css";

// Metadata
import { MetadataParams } from "@/lib/types";

export async function generateMetadata({ params }: MetadataParams) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "siteConfig" });

  const metadataBase =
    locale === "en"
      ? process.env.NEXT_PUBLIC_APP_URL_EN
      : process.env.NEXT_PUBLIC_APP_URL_ES;

  return {
    metadataBase: new URL(metadataBase ?? "http://localhost:3000"),
    title: {
      default: t("titleDefault"),
      template: `%s - ${t("titleTemplate")} `,
    },
    description: t("description"),
    authors: [
      {
        name: t("author.name"),
        url: t("author.url"),
      },
    ],
    creator: t("creator"),
    keywords: t("keywords"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  const messages = await getMessages();
  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextTopLoader color="#7e22ce" showSpinner={false} />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
