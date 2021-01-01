export interface Task {
    _id: String,
    projectName: String,
    description: String,
    completed: boolean,
    estimatedTime: String,
    colaborators: String,
    created: { Date: any }
}
