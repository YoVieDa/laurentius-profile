import { Cousine } from "next/font/google";
import "./globals.css";

const cousine = Cousine({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cousine.className}>
        {children}
      </body>
    </html>
  );
}