'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContributePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
          Contribute a Project
        </h1>
        <p className="text-lg text-muted-foreground">
          Share your work with the Project Vista community!
        </p>
      </header>
      
      <Card>
        <CardHeader>
          <CardTitle>Project Submission</CardTitle>
          <CardDescription>
            Fill out the form below to submit your project. All submissions will be reviewed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Project Title</Label>
              <Input id="title" placeholder="e.g., AI-Powered Search Engine" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Short Description</Label>
              <Input id="description" placeholder="A brief, one-sentence summary of your project" required />
            </div>
             <div className="space-y-2">
              <Label htmlFor="tags">Tags / Keywords</Label>
              <Input id="tags" placeholder="e.g., AI, React, Next.js, Machine Learning" required />
              <p className="text-sm text-muted-foreground">
                Please provide a comma-separated list of tags.
              </p>
            </div>
             <div className="space-y-2">
              <Label htmlFor="imageUrl">Image URL</Label>
              <Input id="imageUrl" placeholder="https://example.com/your-project-image.png" type="url" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Full Project Details (Markdown)</Label>
              <Textarea
                id="content"
                placeholder="Use Markdown to describe your project in detail. Include sections like 'Core Features', 'Tech Stack', etc."
                rows={12}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Submit Project for Review
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
