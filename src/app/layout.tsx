import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Foodfy',
  description:
    'Aprenda a construir os melhores pratos com receitas criadas por profissionais do mundo inteiro.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
