

export interface ExternalUrls {
    spotify: string;
}

export interface Artist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface ExternalUrls2 {
    spotify: string;
}

export interface Image {
    height: number;
    url: string;
    width: number;
}

export interface Album {
    album_type: string;
    artists: Artist[];
    external_urls: ExternalUrls2;
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}

export interface ExternalUrls3 {
    spotify: string;
}

export interface Artist2 {
    external_urls: ExternalUrls3;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface ExternalIds {
    isrc: string;
}

export interface ExternalUrls4 {
    spotify: string;
}

export interface ItemA {
    album: Album;
    artists: Artist2[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIds;
    external_urls: ExternalUrls4;
    href: string;
    id: string;
    is_local: boolean;
    is_playable: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
    isSelected?: ItemA;
}

export interface Tracks {
    href: string;
    items: Item[];
    limit: number;
    next: string;
    offset: number;
    previous?: any;
    total: number;
}

export interface RootObject {
    tracks: Tracks;
}



export interface IUser {
    name: string;
    description: string;
    public: boolean;
}
export interface Stringer {
    AUTH_ENDPOINT: string
    CLIENT_ID: string
    RESPONSE_TYPE: string
    REDIRECT_URL: string
    SCOPE: string
}

export interface Item {
}

export interface RootObjectA {
    href: string;
    items: Item[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}
export interface ExternalUrls {
    spotify: string;
}

export interface Followers {
    href: string;
    total: number;
}

export interface Image {
    url: string;
    height: number;
    width: number;
}

export interface ExternalUrls2 {
    spotify: string;
}

export interface Followers2 {
    href: string;
    total: number;
}

export interface Owner {
    external_urls: ExternalUrls2;
    followers: Followers2;
    href: string;
    id: string;
    type: string;
    uri: string;
    display_name: string;
}

export interface Item {
}

export interface Tracks {
    href: string;
    items: Item[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

export interface RootObject {
    collaborative: boolean;
    description: string;
    external_urls: ExternalUrls;
    followers: Followers;
    href: string;
    id: string;
    images: Image[];
    name: string;
    owner: Owner;
    public: boolean;
    snapshot_id: string;
    tracks: Tracks;
    type: string;
    uri: string;
}



