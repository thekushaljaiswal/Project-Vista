import type { Project } from './types';

export const projects: Project[] = [
  {
    slug: 'ai-powered-search-engine',
    title: 'AI-Powered Search Engine',
    description: 'A cutting-edge search engine that uses AI to provide more relevant and contextual results.',
    tags: ['AI', 'React', 'Next.js', 'Machine Learning'],
    imageUrl: 'https://picsum.photos/600/400?random=1',
    content: `
# AI-Powered Search Engine

This project redefines the search experience by integrating advanced AI models to understand user intent better.

## Features
- **Natural Language Processing:** Understands complex queries.
- **Personalized Results:** Tailors search results based on user history and preferences.
- **Image and Voice Search:** Supports multiple modes of input for enhanced accessibility.

## Tech Stack
- Next.js
- Python (for AI backend)
- TensorFlow
- Tailwind CSS

Building this was a journey into the heart of machine learning and user experience design. The goal was to create a search tool that feels less like a machine and more like a conversation.
    `,
  },
  {
    slug: 'e-commerce-platform',
    title: 'Scalable E-commerce Platform',
    description: 'A feature-rich and highly scalable e-commerce platform built with modern web technologies.',
    tags: ['E-commerce', 'React', 'Node.js', 'Stripe'],
    imageUrl: 'https://picsum.photos/600/400?random=2',
    content: `
# Scalable E-commerce Platform

A complete solution for online businesses, designed for high performance and scalability.

## Key Features
- **Product Management:** Easy-to-use interface for managing products, inventory, and orders.
- **Secure Payments:** Integrated with Stripe for secure and reliable payment processing.
- **Responsive Design:** Optimized for a seamless shopping experience on all devices.
- **Customer Accounts:** Full-featured customer accounts with order history and profile management.

We focused on creating a robust architecture that can handle high traffic and a large number of products without compromising on speed or user experience.
    `,
  },
  {
    slug: 'real-time-chat-app',
    title: 'Real-Time Chat Application',
    description: 'A fast and responsive chat application that allows users to communicate in real-time.',
    tags: ['WebSockets', 'React', 'Firebase', 'Real-Time'],
    imageUrl: 'https://picsum.photos/600/400?random=3',
    content: `
# Real-Time Chat Application

Connect with people instantly with this sleek and modern chat application.

## Functionality
- **Instant Messaging:** Messages are delivered in real-time using WebSockets.
- **Group Chats:** Create and join group conversations.
- **Typing Indicators:** See when other users are typing a message.
- **Authentication:** Secure user authentication powered by Firebase.

The challenge was to ensure low latency and a smooth user experience, which we achieved by leveraging Firebase's real-time database and authentication services.
    `,
  },
  {
    slug: 'project-management-tool',
    title: 'Collaborative Project Management Tool',
    description: 'A tool to help teams organize, track, and manage their work from start to finish.',
    tags: ['SaaS', 'React', 'Productivity', 'Collaboration'],
    imageUrl: 'https://picsum.photos/600/400?random=4',
    content: `
# Collaborative Project Management Tool

Streamline your team's workflow and boost productivity.

## Core Components
- **Task Boards:** Visualize tasks with Kanban-style boards.
- **Drag & Drop:** Intuitively organize tasks by dragging and dropping them.
- **Team Collaboration:** Assign tasks, add comments, and share files.
- **Progress Tracking:** Monitor project progress with dashboards and reports.

This project was born out of the need for a simple yet powerful project management tool that fosters collaboration and transparency within teams.
    `,
  },
  {
    slug: 'interactive-data-visualization',
    title: 'Interactive Data Visualization Dashboard',
    description: 'A powerful dashboard for visualizing complex datasets with interactive charts and graphs.',
    tags: ['Data Viz', 'D3.js', 'React', 'Charts'],
    imageUrl: 'https://picsum.photos/600/400?random=5',
    content: `
# Interactive Data Visualization Dashboard

Turn raw data into beautiful, insightful stories.

## Visualization Tools
- **Variety of Charts:** Includes bar charts, line graphs, pie charts, and more.
- **Interactive Filters:** Filter and drill down into data in real-time.
- **Customizable Dashboards:** Users can create and save their own dashboard layouts.

Using D3.js and React, we built a flexible and performant library of components for creating stunning and interactive data visualizations. The platform helps users uncover insights that might be hidden in spreadsheets.
    `,
  },
  {
    slug: 'fitness-tracker-pwa',
    title: 'Fitness Tracker PWA',
    description: 'A Progressive Web App to track workouts, set goals, and monitor fitness progress.',
    tags: ['PWA', 'React', 'Mobile', 'Fitness'],
    imageUrl: 'https://picsum.photos/600/400?random=6',
    content: `
# Fitness Tracker PWA

Your personal fitness companion, available on any device.

## Features
- **Workout Logging:** Easily log your exercises, sets, and reps.
- **Progress Analytics:** Visualize your progress over time with charts.
- **Goal Setting:** Set personal fitness goals and track your achievements.
- **Offline Access:** As a PWA, it works seamlessly even without an internet connection.

This app is designed to be fast, reliable, and engaging, providing a native-app-like experience directly in the browser. The focus is on a clean, intuitive UI to make fitness tracking effortless.
    `,
  },
];
