export const formatTableProject = (projects) => {
    return projects.map((project) => ({
        Name: project.name,
        Tech: project.tech,
    }))
}