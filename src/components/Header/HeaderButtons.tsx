import React from 'react'

export function HeaderButtons() {
  return (
    <div className='flex gap-8'>
      <button className='bg-transparent hover:bg-main-color text-main-color font-bold hover:text-white py-2 px-4 border-2 border-main-color hover:border-transparent rounded-2xl'>Button 1</button>
      <button className='bg-main-color p-4 text-white rounded-2xl'>Button 2</button>
    </div>
  )
}