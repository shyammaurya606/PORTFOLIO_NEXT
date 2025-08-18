export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  tags: string[];
  published: boolean;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export const posts: Post[] = [
  {
    id: "1",
    title: "Building Scalable Web Applications with Next.js",
    slug: "scalable-nextjs-apps",
    content: `# Building Scalable Web Applications with Next.js

Next.js has revolutionized the way we build React applications by providing a comprehensive framework that handles many complex aspects of web development out of the box. In this comprehensive guide, we'll explore how to build scalable web applications using Next.js and modern development practices.

## Why Next.js for Scalable Applications?

Next.js offers several key features that make it ideal for building scalable applications:

### 1. Server-Side Rendering (SSR)
Server-side rendering improves performance and SEO by rendering pages on the server before sending them to the client. This results in faster initial page loads and better search engine visibility.

### 2. Static Site Generation (SSG)
For content that doesn't change frequently, SSG pre-renders pages at build time, resulting in incredibly fast loading times and reduced server load.

### 3. API Routes
Next.js allows you to create API endpoints within your application, eliminating the need for a separate backend for simple operations.

## Best Practices for Scalable Next.js Applications

### Code Organization
- Use a clear folder structure
- Implement proper component composition
- Separate business logic from UI components
- Use TypeScript for better type safety

### Performance Optimization
- Implement proper image optimization with Next.js Image component
- Use dynamic imports for code splitting
- Optimize bundle size with proper tree shaking
- Implement caching strategies

### SEO and Accessibility
- Use proper meta tags and structured data
- Implement semantic HTML
- Ensure proper keyboard navigation
- Test with screen readers

## Deployment and Monitoring

When deploying scalable Next.js applications, consider:

- Using CDN for static assets
- Implementing proper monitoring and logging
- Setting up automated testing and CI/CD pipelines
- Monitoring Core Web Vitals

## Conclusion

Next.js provides an excellent foundation for building scalable web applications. By following these best practices and leveraging the framework's built-in features, you can create applications that perform well at scale and provide excellent user experiences.`,
    tags: ["Next.js", "React", "Web Development", "Performance"],
    published: true,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: "2",
    title: "TypeScript Best Practices for Large Projects",
    slug: "typescript-best-practices",
    content: `# TypeScript Best Practices for Large Projects

TypeScript has become the go-to choice for large-scale JavaScript applications, providing static type checking, better IDE support, and improved code maintainability. This guide covers essential best practices for using TypeScript in large projects.

## Setting Up Your TypeScript Project

### Configuration Best Practices

Start with a strict \`tsconfig.json\` configuration:

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
\`\`\`

### Project Structure

Organize your TypeScript project with clear boundaries:

- \`src/types/\` - Global type definitions
- \`src/interfaces/\` - Interface definitions
- \`src/utils/\` - Utility functions with proper typing
- \`src/services/\` - API services with typed responses

## Advanced TypeScript Patterns

### Generic Constraints

Use generic constraints to create flexible yet type-safe functions:

\`\`\`typescript
interface Identifiable {
  id: string;
}

function updateEntity<T extends Identifiable>(
  entity: T, 
  updates: Partial<T>
): T {
  return { ...entity, ...updates };
}
\`\`\`

### Utility Types

Leverage TypeScript's built-in utility types:

- \`Partial<T>\` - Make all properties optional
- \`Required<T>\` - Make all properties required
- \`Pick<T, K>\` - Select specific properties
- \`Omit<T, K>\` - Exclude specific properties

## Conclusion

TypeScript's power lies in its ability to catch errors at compile time and provide excellent developer experience. By following these best practices, you can build maintainable, scalable applications that leverage TypeScript's full potential.`,
    tags: ["TypeScript", "JavaScript", "Best Practices", "Architecture"],
    published: true,
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
  },
  {
    id: "3",
    title: "Modern CSS Techniques and Animations",
    slug: "modern-css-techniques",
    content: `# Modern CSS Techniques and Animations

CSS has evolved tremendously over the past few years, introducing powerful new features that enable developers to create stunning user interfaces without relying heavily on JavaScript. This guide explores the latest CSS techniques and animation capabilities.

## CSS Grid and Flexbox Mastery

### CSS Grid for Complex Layouts

CSS Grid revolutionizes how we approach layout design:

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  grid-auto-rows: minmax(200px, auto);
}
\`\`\`

### Flexbox for Component Layout

Flexbox excels at component-level layouts:

\`\`\`css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
\`\`\`

## Advanced CSS Animations

### CSS Custom Properties (Variables)

Use CSS variables for dynamic animations:

\`\`\`css
:root {
  --primary-color: #3b82f6;
  --animation-duration: 0.3s;
}

.animated-element {
  background-color: var(--primary-color);
  transition: all var(--animation-duration) ease;
}
\`\`\`

## Conclusion

Modern CSS provides powerful tools for creating beautiful, performant, and accessible user interfaces. By mastering these techniques, you can create engaging experiences that work well across all devices and user preferences.`,
    tags: ["CSS", "Animation", "Frontend", "UI/UX"],
    published: true,
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05'),
  }
];

export const getLatestPosts = (): Post[] => {
  return posts.filter(post => post.published).slice(0, 3);
};

export const getPostBySlug = (slug: string): Post | null => {
  return posts.find(post => post.slug === slug && post.published) || null;
};