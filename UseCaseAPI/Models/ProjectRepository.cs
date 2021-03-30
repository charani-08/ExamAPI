using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UseCaseAPI.Models
{
    public class ProjectRepository : IProjectRepository
    {
        private readonly ProjectDbContext _projectDbContext;
        public ProjectRepository(ProjectDbContext projectDbContext)
        {
           _projectDbContext = projectDbContext;
        }
        public void Add(Project project)
        {
            _projectDbContext.Projects.Add(project);
            _projectDbContext.SaveChanges();
        }

        public Project Find(int projectId)
        {
            var data = _projectDbContext.Projects.Find(projectId);
            return data;
        }
        public IEnumerable<Project> GetAll()
        {
            return _projectDbContext.Projects.ToList();
        }

        public Project Remove(int projectId)
        {
            var projdelete = Find(projectId);
            _projectDbContext.Projects.Remove(projdelete);
            _projectDbContext.SaveChanges();
            return projdelete;
        }
        public void Update(Project project)
        {
            _projectDbContext.Entry(project).State = EntityState.Modified;
            _projectDbContext.SaveChanges();
        }

    }
}
