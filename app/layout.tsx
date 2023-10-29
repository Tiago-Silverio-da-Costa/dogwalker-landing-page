import type { Metadata } from 'next'
import "@/styles/globals.css";
import StyledComponentsRegistry from '@/lib/styledRegistry';
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
})


// export const metadata: Metadata = {
//   title: " ",
//   metadataBase: new URL("https://"),
//   description: "",
//   openGraph: {
//     title: "",
//     description: "",
//     siteName: "",
//     images: [
//       {
//         url: "https:// /banner.jpg",
//         width: 1080,
//         height: 720,
//       },
//     ],
//     locale: "pt-BR",
//     type: "website",
//   },
//   robots: {
//     index: process.env.VERCEL_ENV === "production",
//   },
//   themeColor: "#xxx",
//   twitter: {
//     card: "summary_large_image",
//     title: "",
//     description: "",
//     creator: "@",
//     images: ["https:// /banner.jpg"],
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
