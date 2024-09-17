
import { SidebarDemo } from '@/frontends/components/sidebar'
import { useRouter } from 'next/router'
import React from 'react'

const Dynamic = () => {
  const { query } = useRouter();
  console.log(query);
  return (
    <div>
      <SidebarDemo></SidebarDemo>
    </div>
  )
}

export default Dynamic
