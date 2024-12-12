import { Repository } from '../types/github';

const GITHUB_API_BASE = 'https://api.github.com';

interface GitHubError {
  message: string;
  documentation_url?: string;
}

export const fetchGithubProjects = async (username: string): Promise<Repository[]> => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}/repos`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        // Add a user agent to comply with GitHub API requirements
        'User-Agent': 'Portfolio-App'
      }
    });

    if (response.status === 403) {
      console.warn('GitHub API rate limit exceeded. Using fallback data.');
      return getFallbackProjects();
    }

    if (!response.ok) {
      const error: GitHubError = await response.json();
      throw new Error(error.message || 'Failed to fetch projects');
    }

    const data = await response.json();
    return data
      .filter((repo: Repository) => !repo.fork)
      .sort((a: Repository, b: Repository) => 
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      )
      .slice(0, 6);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return getFallbackProjects();
  }
};

// Fallback data in case GitHub API fails
const getFallbackProjects = (): Repository[] => [
  {
    name: "web-portfolio",
    description: "My personal portfolio website built with React, TypeScript, and Tailwind CSS",
    html_url: "https://github.com/Sujeeth-infosec/web-portfolio",
    topics: ["react", "typescript", "tailwindcss"],
    homepage: "https://sujeeth.netlify.app",
    created_at: new Date().toISOString(),
    fork: false
  },
  {
    name: "cybersecurity-tools",
    description: "A collection of cybersecurity tools and scripts for penetration testing",
    html_url: "https://github.com/Sujeeth-infosec/cybersecurity-tools",
    topics: ["python", "security", "pentesting"],
    homepage: "",
    created_at: new Date().toISOString(),
    fork: false
  },
  {
    name: "aws-security-automation",
    description: "AWS security automation scripts and CloudFormation templates",
    html_url: "https://github.com/Sujeeth-infosec/aws-security-automation",
    topics: ["aws", "security", "automation"],
    homepage: "",
    created_at: new Date().toISOString(),
    fork: false
  }
];