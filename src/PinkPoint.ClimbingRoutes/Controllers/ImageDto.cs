using System.ComponentModel.DataAnnotations;

namespace PinkPoint.ClimbingRoutes.Controllers
{
    public class ImageDto
    {
        [Required]
        public string Base64 { get; set; }
    }
}
