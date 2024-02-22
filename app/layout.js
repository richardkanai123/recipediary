import Header from "@/Components/Header";
import "./globals.css";


export const metadata = {
  title: "Recipe Diary",
  description: "Your recipe search and store site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='container mx-auto bg-green-500 p-0'>
        <Header />
        <main className="w-full mx-auto flex min-h-screen flex-col items-center justify-between px-4 py-2">
          {children}
        </main>
      </body>
    </html>
  );
}
