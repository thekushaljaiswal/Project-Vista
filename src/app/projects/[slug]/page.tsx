
import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button variant="ghost" asChild className='mb-8'>
            <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
            </Link>
        </Button>
      <article>
        <header className="mb-8 border-b pb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {project.description}
          </p>
        </header>

        <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg mb-12">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            data-ai-hint="project hero"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-primary prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {project.content}
            </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
