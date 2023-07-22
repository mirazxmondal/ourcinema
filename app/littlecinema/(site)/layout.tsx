import "../../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";

export const metadata = {
  title: "Little Cinema",
  description: "Little Cinema blog page",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-8">
        <header className="flex items-center justify-between">
          <Link
            href="/littlecinema"
            className="text-red-600 text-lg font-bold"
          >
            Little Cinema
          </Link>
          <div className="flex items-center gap-5 text-sm text-gray-600">
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`littlecinema/${page.slug}`}
                className="hover:underline"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
