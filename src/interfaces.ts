export interface Video {
    id: string;
    title: string;
    description: string;
    channel: Channel;
    views: number;
    likes: number;
    durationSeconds: string;
    hash: string;
    categoryId: string;
}

export interface Channel {
    id: string;
    name: string;
    description: string;
    profilePicture: string;
}
