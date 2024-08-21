import SiteHeader from '@/components/FrontEnd/Navbar'
import React, { ReactNode } from 'react'

export default async function Layout({children}:{children:ReactNode}) {
  return (
    <div>
        <SiteHeader />
        {children}
    </div>
  )
}