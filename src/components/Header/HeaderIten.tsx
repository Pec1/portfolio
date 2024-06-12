import React from 'react'

interface HeaderItenProps {
    text: string
}

export function HeaderIten({ text }: HeaderItenProps) {
  return (
    <li>
        <a href="">
            {text}
        </a>
    </li>
  )
}