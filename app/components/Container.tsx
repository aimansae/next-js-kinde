import React, { ReactNode } from 'react'
type ContainerType = {
    children: ReactNode
}
const Container = ({children}:ContainerType) => {
  return (
    <div className='max-w[1100px] mx-auto bg-white min-h-screen flex flex-col border-l border-r'>
      {children}
    </div>
  )
}

export default Container
