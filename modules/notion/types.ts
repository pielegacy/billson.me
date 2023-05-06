export interface QueryResult {
    object: string;
    results: unknown;
}

export interface ListQueryResult<TResult> extends QueryResult {
    object: "list";
    results: TResult[];
}

export function isListQueryResult<TResult>(result: QueryResult): result is ListQueryResult<TResult> {
    return result.object === "list";
}

export interface BlogPostPageResult {
    object: "page";
    id: string;
    properties: {
        Name: {
            type: "title";
            title: [
                {
                    type: "text";
                    text: {
                        content: string;
                    }
                }
            ]
        }
    }
}

export interface BlogPostBlockResult {
    object: "block";
    paragraph: {
        rich_text: [
            {
                type: "text";
                text: {
                    content: string;
                    link: null | {
                        url: string;
                    }
                }
            }
        ]
    }
}