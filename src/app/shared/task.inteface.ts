export default interface ITask {
    id?: number;
    title: string;
    description: string;
    assign: string;
    priority: string;
    deadline: Date;
    status: string;
}
