export type Task = {
    id: number;
    description: string;
    status: 'todo' | 'pending' | 'done';
    createdAt: string;
    updatedAt: string;
}