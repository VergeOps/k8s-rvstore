import { Product } from "./product";

export class SearchResult {
    hits: HitsResult;
}

export class HitsResult {
    hits: Hits[];
}

export class Hits {
    _source: Product;
}