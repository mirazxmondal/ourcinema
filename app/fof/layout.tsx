import FOFNavbar from "../components/FOFNavbar"

export const metadata = {
  title: 'Frames of Freedom',
  description: 'Landing Page of Frames of Freedom',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <FOFNavbar />
        {children}
      </body>
    </html>
  )
}
