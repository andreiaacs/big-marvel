export class Comic {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: Data;
}

class Data {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Result[];
}

class Result {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description?: string;
    modified: string;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    textObjects: TextObject[];
    resourceURI: string;
    urls: Url[];
    series: Series;
    variants: Series[];
    collections: any[];
    collectedIssues: Series[];
    dates: Date[];
    prices: Price[];
    thumbnail: Thumbnail;
    images: Thumbnail[];
    creators: Creators;
    characters: Characters;
    stories: Stories;
    events: Events;
}

class Events {
    available: number;
    collectionURI: string;
    items: any[];
    returned: number;
}

class Stories {
    available: number;
    collectionURI: string;
    items: Item2[];
    returned: number;
}

class Item2 {
    resourceURI: string;
    name: string;
    type: string;
}

class Characters {
    available: number;
    collectionURI: string;
    items: Series[];
    returned: number;
}

class Creators {
    available: number;
    collectionURI: string;
    items: Item[];
    returned: number;
}

class Item {
    resourceURI: string;
    name: string;
    role: string;
}

class Thumbnail {
    path: string;
    extension: string;
}

class Price {
    type: string;
    price: number;
}

class Date {
    type: string;
    date: string;
}

class Series {
    resourceURI: string;
    name: string;
}

class Url {
    type: string;
    url: string;
}

class TextObject {
    type: string;
    language: string;
    text: string;
}