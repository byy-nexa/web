import { Building2, PuzzleIcon } from 'lucide-react';
import Link, { type LinkProps } from 'next/link';
import { FaTelegramPlane, FaGithub } from 'react-icons/fa';

type PortalItem = {
  name: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  target?: '_blank';
  rel?: string;
};

export default function Portal() {
  const items: PortalItem[] = [
    {
      name: 'Kifzl X Pterodactyl Panel',
      description: 'Documentation for Kifzl X Pterodactyl panel.',
      icon: <Building2 className="size-full" />,
      href: '/docs/panel',
    },
    {
      name: 'Blueprint Framework',
      description: 'Guide for installing Blueprint on Kifzl X Pterodactyl.',
      icon: <PuzzleIcon className="size-full" />,
      href: '/docs/blueprint',
    },
    {
      name: 'Telegram Support',
      description: 'Join the official telegram community for Kifzl X Pterodactyl.',
      icon: <FaTelegramPlane className="size-full" />,
      href: 'https://t.me/kifzloffcial',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      name: 'GitHub Repository',
      description: 'View the source code and contribute on GitHub.',
      icon: <FaGithub className="size-full" />,
      href: 'https://github.com/byy-nexa/panel',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      name: 'Email Support',
      description: 'Contact us via email for support.',
      icon: <Building2 className="size-full" />,
      href: 'mailto:kikimodesad8@gmail.com',
    },
  ];

  return (
    <main className="w-full max-w-page mx-auto flex flex-col flex-1 justify-center items-center px-4 py-16 text-center z-2">
      <h1 className="mb-4 text-3xl font-semibold md:text-4xl">
        Getting Started
      </h1>
      <p className="text-fd-muted-foreground">
        Portal to different sections of docs.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 text-start md:grid-cols-2">
        {items.map((item, index) => (
          <Item
            key={index}
            href={item.href}
            target={item.target}
            rel={item.rel}
          >
            <Icon>{item.icon}</Icon>
            <h2 className="mb-2 font-medium">{item.name}</h2>
            <p className="text-sm text-fd-muted-foreground">
              {item.description}
            </p>
          </Item>
        ))}
      </div>
    </main>
  );
}

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-2 size-8 rounded-lg border p-1 text-fd-muted-foreground bg-fd-muted shadow-md">
      {children}
    </div>
  );
}

function Item(props: LinkProps & { children: React.ReactNode }) {
  return (
    <Link {...props} className="bg-fd-card rounded-2xl border p-4 shadow-lg">
      {props.children}
    </Link>
  );
}
