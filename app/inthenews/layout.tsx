import MainNavbar from "../components/MainNavbar"

export const metadata = {
  title: 'In The News',
  description: 'In the news',
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
