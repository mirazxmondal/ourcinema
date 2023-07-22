import MainNavbar from "../components/MainNavbar"

export const metadata = {
  title: 'Publications',
  description: 'Publications',
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
