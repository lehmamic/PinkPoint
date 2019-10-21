using System.ComponentModel.DataAnnotations;

namespace PinkPoint.ClimbingRoutes.Controllers.ClimbingSites
{
    public class AddressDto
    {
        [Required]
        public string Street { get; set; }

        [Required]
        public string PostCode { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string State { get; set; }

        [Required]
        public string Country { get; set; }
    }
}
