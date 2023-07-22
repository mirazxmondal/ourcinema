import MainNavbar from "../components/MainNavbar"

export const metadata = {
  title: 'Support Us',
  description: 'Support Us Page',
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
