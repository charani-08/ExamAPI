using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UseCaseAPI.Models;

namespace UseCaseAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        public IProjectRepository _IProjectRepository { get; set; }
        public ProjectController(IProjectRepository projectRepository)
        {
            _IProjectRepository = projectRepository;
        }
        [HttpPost]
        public IActionResult Create([FromBody] Project model)
        {
            if (model == null)
                return BadRequest();
            _IProjectRepository.Add(model);
            return new ObjectResult("Success");
        }
        [HttpGet]
        public IActionResult GetProjects()
        {
            IEnumerable<Project> projects= _IProjectRepository.GetAll();
            return Ok(projects);
        }
        [HttpGet("{id}", Name = "GetProject")]
        public IActionResult GetProjects(int id)
        {
            Project projects = _IProjectRepository.Find(id);
            return Ok(projects);
        }
        [HttpPut("{id}")]
        public IActionResult put(int id, [FromBody] Project updateproj)
        {
            updateproj.ProductId = id;
            _IProjectRepository.Update(updateproj);
            return Ok("Updated");
        }
        [HttpDelete("{id}")]
        public IActionResult delete(int id)
        {
            _IProjectRepository.Remove(id);
            return Ok("deleted");
        }

    }
}
