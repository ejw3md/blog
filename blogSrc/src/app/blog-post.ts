export interface BlogPost {
    id: number;
    title: string;          /* title of post                */
    date: string;           /* date of post                 */
    contentPath: string;    /* content filepath on server   */
    photoPath: string;      /* photo filepath on server     */
    primaryContent: string; /* content shown on main page   */
}