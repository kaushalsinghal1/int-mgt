import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Students',
    icon: 'nb-keypad',
    link: '/pages/student',
    children: [
      {
        title: 'Student List',
        link: '/pages/student',
      }
    ]
    }
];
    