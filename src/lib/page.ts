import type { User } from "./user"

export type BookmarkPage = {id: number, title: string, content: string, link: string, createdAt: string}
export type BookmarkResponse = {bookmarks: {user: User, place: BookmarkPage, id: number}[]}