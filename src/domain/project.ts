export type ProjectsListItem = {
  id: number;
  name: string;
  tasksCompleted: number;
  tasksTotal: number;
};

export type ProjectPayload = {
  name: string;
};

export type ProjectDetails = {
  id: number;
  name: string;
  tasks: []; // TODO:
};
