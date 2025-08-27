'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { ProjectCard } from '@/components/ProjectCard';
import { projects as allProjects } from '@/lib/projects';
import type { Project } from '@/lib/types';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const tags = useMemo(() => {
    const allTags = new Set<string>();
    allProjects.forEach((project) => {
      project.tags.forEach((tag) => allTags.add(tag));
    });
    return Array.from(allTags);
  }, []);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag = selectedTag ? project.tags.includes(selectedTag) : true;
      return matchesSearch && matchesTag;
    });
  }, [searchTerm, selectedTag]);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
          Welcome to Project Vista
        </h1>
        <p className="text-lg text-muted-foreground">
          Explore a curated collection of innovative projects.
        </p>
      </header>

      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <Input
          type="text"
          placeholder="Search projects by keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:flex-1"
          aria-label="Search projects"
        />
      </div>
        <div className="mb-8 flex flex-wrap justify-center gap-2">
            <Badge
                variant={selectedTag === null ? 'default' : 'secondary'}
                onClick={() => setSelectedTag(null)}
                className="cursor-pointer text-sm"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedTag(null)}
            >
                All
            </Badge>
            {tags.map((tag) => (
                <Badge
                    key={tag}
                    variant={selectedTag === tag ? 'default' : 'secondary'}
                    onClick={() => setSelectedTag(tag)}
                    className="cursor-pointer text-sm"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setSelectedTag(tag)}
                >
                    {tag}
                </Badge>
            ))}
        </div>

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No projects found.</p>
            <p className="text-md text-muted-foreground mt-2">Try adjusting your search or filter.</p>
        </div>
      )}
    </div>
  );
}
