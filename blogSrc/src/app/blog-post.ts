export interface BlogPost {
    ID: number;             /* ID of the post               */
    Title: string;          /* title of post                */
    DatePosted: string;     /* date of post                 */
    PhotoPath: string;      /* photo filepath on server     */
    Category: string;       /* content shown on main page   */
    Username: string;       /* username of poster           */
}