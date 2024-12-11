import Mermaid from '@/components/mermaid';
import path from 'path';
import fs from 'fs';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  let chart = '';
  try {
    const filePath = path.join(process.cwd(), 'charts', `${slug}.mmd`);
    chart = fs.readFileSync(filePath, 'utf8');
  } catch {
    return <div> 404 Not Found </div>;
  }

  return (
    <div>
      <h1 className="text-xl">{slug}</h1>
      <Mermaid chart={chart} />
      <pre className="rounded-lg border-2 border-black p-2">{chart}</pre>
    </div>
  );
}
