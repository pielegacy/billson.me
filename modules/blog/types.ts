export interface BlogPostSummary {
    id: string;
    title: string;
}

export interface BlogPost extends BlogPostSummary {
    contents: string[];
}