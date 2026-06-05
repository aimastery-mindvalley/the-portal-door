import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://theportaldoor.com"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  title: "The Portal Door — The Time of Remembering | A Book by 4 Brooms",
  description:
    "An awakening for humanity. The Portal Door — The Time of Remembering is a planetary invitation to return to who you are. Read the book and step through.",
  keywords: [
    "The Portal Door",
    "The Time of Remembering",
    "4 Brooms",
    "spiritual awakening book",
    "consciousness",
    "ascension",
    "new earth",
  ],
  openGraph: {
    title: "The Portal Door — The Time of Remembering",
    description:
      "A planetary invitation to return to who you are. The book is now available.",
    images: ["/book-cover.jpeg"],
    type: "book",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Portal Door — The Time of Remembering",
    description:
      "A planetary invitation to return to who you are. The book is now available.",
    images: ["/book-cover.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* JSON-LD Book schema — static trusted content, no user input */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Book",
              name: "The Portal Door — The Time of Remembering",
              author: { "@type": "Person", name: "4 Brooms" },
              bookFormat: "https://schema.org/EBook",
              inLanguage: "en",
              image: "https://theportaldoor.com/book-cover.jpeg",
              url: "https://www.amazon.com/Portal-Door-Time-Remembering-ebook/dp/B0GB5S4T8Q/",
              genre: ["Spiritual Fiction", "Awakening", "Visionary Fiction"],
              description:
                "Five strangers feel the same frequency from opposite corners of the world. The Portal Door is the story of the five who answered the call.",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
