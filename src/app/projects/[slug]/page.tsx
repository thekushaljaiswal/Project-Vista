import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// Generate static paths for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Basic markdown-to-HTML conversion
  const renderContent = (content: string) => {
    return content
      .split('\\n')
      .map((line, index) => {
        line = line.trim();
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-bold mt-6 mb-4">{line.substring(2)}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-semibold mt-6 mb-3">{line.substring(3)}</h2>;
        }
        if (line.startsWith('- ')) {
          return <li key={index} className="list-disc ml-6">{line.substring(2)}</li>;
        }
        if (line === '') {
          return <br key={index} />;
        }
        return <p key={index} className="my-4 leading-relaxed">{line}</p>;
      });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button variant="ghost" asChild className='mb-8'>
            <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
            </Link>
        </Button>
      <article>
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 leading-tight">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="default">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg mb-8">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            data-ai-hint="project hero"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
            {renderContent(project.content)}
        </div>
      </article>
    </div>
  );
}
