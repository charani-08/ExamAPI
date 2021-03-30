using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UseCaseAPI.Models
{
    public interface IProjectRepository
    {
        void Add(Project project);
        IEnumerable<Project> GetAll();
        Project Find(int projectId);
        Project Remove(int projectId);


        void Update(Project project);
    }
}
