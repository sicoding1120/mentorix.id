
import { SidebarDemo } from '@/frontends/components/sidebar'
import Profile from '@/frontends/fragments/dashboard/profile';
import { useRouter } from 'next/router'
import React from 'react'

const Dynamic = () => {
  const { query } = useRouter();
  let content;
  console.log(query);

  switch (query.dashboard?.at(0)) {
    case 'profile':
      content = <Profile />
      break;
    default:
      content = <SidebarDemo/>
  }
  return content
}

export default Dynamic
