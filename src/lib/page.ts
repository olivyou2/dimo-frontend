import type { Category } from "./category";
import type { Tag } from "./tag";
import type { User } from "./user"

export type PageResponse = {
    categories: Category[],
    tags: Tag[],
    place: BookmarkPage,
    bookmark: Bookmark
}

export type BookmarkPage = { id: number, title: string, content: string, link: string, createdAt: string }
export type Bookmark = { user: User, place: BookmarkPage, id: number };
export type BookmarkResponse = { bookmarks: Bookmark[] }

export type RenderPage = {
    category: string,
    title: string,
    link: string,
    tags: string[],
    description: string,
    id: number,
    bookmark: Bookmark | null
};