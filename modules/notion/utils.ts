import { isListQueryResult, BlogPostPageResult } from "./types.ts";

const ENV_KEY_NOTION_SECRET = "NOTION_SECRET";
const ENV_KEY_NOTION_DATABASE_ID = "NOTION_DATABASE_ID";

function getRequestUrl() {
  if (!Deno.env.has(ENV_KEY_NOTION_DATABASE_ID)) {
    throw new Error("No Notion secret defined");
  }

  return `https://api.notion.com/v1/databases/${
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

export async function getPosts() {
  const response = await fetch(
    `${getRequestUrl()}/query`,
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
