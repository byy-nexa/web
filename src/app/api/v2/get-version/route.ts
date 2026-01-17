import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: "OK",
    panel: "2.2.0",
    wings: "1.12.1",
    sftp: "1.0.5",
    cli: "2.1.1",
    telegram: "https://kifzl-x-pterodactyl.dev/telegram",
    donations: "https://github.com/sponsors/kifzl-x-pterodactyl",
  });
}
