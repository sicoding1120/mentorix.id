
import { SidebarDemo } from '@/frontends/components/sidebar'
import Profile from '@/frontends/fragments/dashboard/profile';
import Setting from '@/frontends/fragments/dashboard/setting';
import { useRouter } from 'next/router'
import React from 'react'

const Dynamic = () => {
  const { query } = useRouter();
  let content;

  switch (query.dashboard?.at(1)) {
    case 'profile':
      content = <Profile />
      break;
    case 'setting':
      content = <Setting />
      break;
    default:
      content = <SidebarDemo/>
  }
  return content
}

export default Dynamic
