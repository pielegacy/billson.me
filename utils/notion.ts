import { BlogPostBlockResult, BlogPostPageResult, isListQueryResult } from "../types/notion.ts";

const ENV_KEY_NOTION_SECRET = "NOTION_SECRET";
const ENV_KEY_NOTION_DATABASE_ID = "NOTION_DATABASE_ID";
const BASE_URL = `https://api.notion.com/v1`;

function getDatabaseRequestUrl() {
  if (!Deno.env.has(ENV_KEY_NOTION_DATABASE_ID)) {
    throw new Error("No Notion secret defined");
  }

  return `${BASE_URL}/databases/${
    Deno.env.get(ENV_KEY_NOTION_DATABASE_ID)
  }`;
}

function getRequestHeaders() {
  if (!Deno.env.has(ENV_KEY_NOTION_SECRET)) {
    throw new Error("No Notion secret defined");
  }

  return {
    "Content-Type": "application/json",
    "Notion-Version": " 2022-02-22",
    Authorization: `Bearer ${Deno.env.get(ENV_KEY_NOTION_SECRET)}`,
  };
}

export async function getPosts(): Promise<BlogPostPageResult[]> {
  const response = await fetch(
    `${getDatabaseRequestUrl()}/query`,
    {
      method: "POST",
      headers: getRequestHeaders(),
      body: JSON.stringify({
        "page_size": 100,
        "filter": { "property": "Released", "checkbox": { "equals": false } },
        "sorts": [{ "property": "Publish Date", "direction": "descending" }],
      }),
    },
  );
  const responseJson = await response.json();
  if (!isListQueryResult<BlogPostPageResult>(responseJson)) {
    throw new Error("Invalid query");
  }

  return responseJson.results;
}

export async function getPost(postId: string): Promise<BlogPostPageResult> {
  const response = await fetch(
    `${BASE_URL}/pages/${encodeURIComponent(postId)}`,
    {
      method: "GET",
      headers: getRequestHeaders(),
    },
  );

  return await response.json() as BlogPostPageResult;
}

export async function getPostBlocks(postId: string): Promise<BlogPostBlockResult[]> {
  const response = await fetch(
    `${BASE_URL}/blocks/${encodeURIComponent(postId)}/children`,
    {
      method: "GET",
      headers: getRequestHeaders(),
    },
  );

  const responseJson = await response.json();

  if (!isListQueryResult<BlogPostBlockResult>(responseJson)) {
    throw new Error("Invalid return type for post blocks");
  }

  return responseJson.results;
}