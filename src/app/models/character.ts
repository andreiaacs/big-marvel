export class Character {
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
    name: string;
    description: string;
    modified: string;
    thumbnail: Thumbnail;
    resourceURI: string;
    comics: Comics;
    series: Comics;
    stories: Stories;
    events: Comics;
    urls: Url[];
}

class Url {
    type: string;
    url: string;
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

class Comics {
    available: number;
    collectionURI: string;
    items: Item[];
    returned: number;
}

class Item {
    resourceURI: string;
    name: string;
}

class Thumbnail {
    path: string;
    extension: string;
}