import {
  IconAperture, IconCopy, IconLayoutDashboard, IconLogin, IconMoodHappy, IconTypography, IconUserPlus
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  // {
  //   navlabel: true,
  //   subheader: 'Customer',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Clients',
  //   icon: IconTypography,
  //   href: '/ui/typography',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Shadow',
  //   icon: IconCopy,
  //   href: '/ui/shadow',
  // },
  {
    navlabel: true,
    subheader: 'Clients',
  },
  {
    id: uniqueId(),
    title: 'Clients',
    icon: IconLogin,
    href: '/sample-page/Details',
  },
  // {
  //   id: uniqueId(),
  //   title: 'Register',
  //   icon: IconUserPlus,
  //   href: '/auth/register',
  // },
  {
    navlabel: true,
    subheader: 'Projects',
  },
  {
    id: uniqueId(),
    title: 'Projects',
    icon: IconMoodHappy,
    href: '/sample-page/ProjectForm',
  },
  // {
  //   id: uniqueId(),
  //   title: 'Recent Project',
  //   icon: IconMoodHappy,
  //   href: '/icons',
  // },
  {
    id: uniqueId(),
    title: 'Assigned Projects',
    icon: IconAperture,
    href: '/sample-page',
  },
  {
    navlabel: true,
    subheader: 'Products',
  },
  {
    id: uniqueId(),
    title: 'Products',
    icon: IconMoodHappy,
    href: '/products',
  },
];

export default Menuitems;
