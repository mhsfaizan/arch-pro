import { Observable } from 'rxjs';

export interface Blog{
    blogDirId:string;
    category:string;
    editor:string,
    name:string;
    title:string;
    userId: string;
    img:string;
    url:Observable<any>;
}