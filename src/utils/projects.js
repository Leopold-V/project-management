export const formatProject = (projects) => {
    return projects.map((project) => ({
        Id: project.id,
        Name: project.name,
        Tech: project.tech,
        Resume: project.resume
    }))
}