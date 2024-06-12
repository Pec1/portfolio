import React, { ReactNode } from 'react'

interface HeaderRootProps {
  children: ReactNode
}

export function HeaderRoot({ children }: HeaderRootProps) {
  return (
    <header className='sticky top-0 p-2 shadow-lg '> {/* bg-zinc-400 */}
        <nav className='flex items-center justify-between p-1 ml-24 mr-24'>
          {children}
        </nav>
    </header>  

  )
}