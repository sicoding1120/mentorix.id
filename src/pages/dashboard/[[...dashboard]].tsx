
import { SidebarDemo } from '@/frontends/components/sidebar'
import Profile from '@/frontends/fragments/dashboard/profile';
import Setting from '@/frontends/fragments/dashboard/setting';
import { useRouter } from 'next/router'
import React from 'react'
import Dashboard from '../../frontends/templates/dashboard';

const Dynamic = () => {
  const { query } = useRouter();
  let content; console.log(query);
  switch (query.dashboard?.at(1)) {
    case 'profile':
      content = <Profile />
      break;
    case 'setting':
      content = <Setting />
      break;
    default:
      content = <SidebarDemo  />
  }
  return content
}

export default Dynamic
