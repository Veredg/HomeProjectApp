export interface Repo {
    owner: Owner;
    id: string;
    name: string;
}

export interface Owner {
    avatar_url: string;
    login: string;
}