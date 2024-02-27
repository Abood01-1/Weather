import "./globals.css";

export const metadata = {
  title: "Weather App",
  description: "weather App using next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
