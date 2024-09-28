import Class from '@/frontends/components/classComp'
import ContainerClass from '@/frontends/components/containerClass'
import NavbarEl from '@/frontends/components/navbar'
import React from 'react'

const Classes = () => {
  return (
    <div className="w-full h-full">
      <NavbarEl />
    <Class isClasses={true} />
  </div>
  )
}

export default Classes
