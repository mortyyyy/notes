import { request } from "./common/client";
import Note from "./dto/note";

export async function getNotes() {
    return request<Note[]>({
        method: 'get',
        url: '/notes'
    })
}