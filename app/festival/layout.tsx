import KPFFNavbar from "../components/KPFFNavbar";

export const metadata = {
  title: "KPFF",
  description: "Landing Page of KPFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <KPFFNavbar />
        {children}
      </body>
    </html>
  );
}
