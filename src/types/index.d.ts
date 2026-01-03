export interface ChurchEvent {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    category: string;
}
export interface Service {
    id: number;
    title: string;
    description: string;
    time: string;
    features: string[];
}
export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    category: string;
    readTime: string;
}
export interface SocialPlatform {
    platform: string;
    handle: string;
    followers: string;
    link: string;
    description: string;
}
export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
    prayerRequest: boolean;
}
