export const formatTableProject = (projects) => {
  return projects.map((project) => ({
    Id: project.id,
    Name: project.name,
    Tech: project.tech,
  }));
};