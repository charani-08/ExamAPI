using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace UseCaseAPI.Models
{
    public class Project
    {
        [Key]
        [Required]
        public int ProductId { get; set; }
        public string description { get; set; }
        public bool IsDone { get; set; }
        
    }
}
