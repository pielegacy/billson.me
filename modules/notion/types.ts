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