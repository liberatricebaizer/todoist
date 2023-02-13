import { collectedTasks } from "../constants";

export const collectedTasksExist = (selectedProject) =>
  collectedTasksExist.find((task) => task.key === selectedProject);
