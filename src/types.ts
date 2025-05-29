export enum TaskStatus {
    TODO = 'todo',
    PENDING = 'pending',
    DONE = 'done',
}

export type Task = {
    id: number;
    description: string;
    status: TaskStatus;
    createdAt: string;
    updatedAt: string;
}