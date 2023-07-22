import MainNavbar from "../components/MainNavbar"

export const metadata = {
  title: 'People Film Collective',
  description: 'Landing Page of People Film Collective',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MainNavbar />
        {children}
      </body>
    </html>
  )
}
