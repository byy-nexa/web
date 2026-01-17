import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/'>) {
  return <HomeLayout 
  {...baseOptions()} 
  links={
    [
      {
        text: 'Documentation',
        url: '/docs',
      },
      {
        text: 'Demo',
        url: 'https://demo.kifzl-x-pterodactyl.dev/',
      },
      {
        text: 'Blog',
        url: '/blog',
      },
      {
        text: 'Get Help',
        url: '/telegram',
      },
    ]
  }
  >
  {children}
  </HomeLayout>;
}