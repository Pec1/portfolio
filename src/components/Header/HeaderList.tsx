import React, { ReactNode } from 'react'

interface HeaderListProps {
  children: ReactNode
}

export function HeaderList({ children }:HeaderListProps) {
  return (
    <ul className="flex gap-28">
        {children}
    </ul>
  )
}