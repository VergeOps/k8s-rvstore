export class SearchQuery {
    multi_match: MultiMatch;
}

export class MultiMatch {
    query: string;
    fields: string[]; 
}