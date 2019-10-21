using System.ComponentModel.DataAnnotations;

namespace PinkPoint.ClimbingRoutes.Controllers.ClimbingSites
{
    public class UpdateClimbingSiteDto
    {
        [Required]
        public string Name { get; set; }

        public string Description { get; set; }

        [Required]
        public AddressDto Address { get; set; }
    }
}
