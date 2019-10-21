using System;

namespace PinkPoint.ClimbingRoutes.Controllers.ClimbingSites
{
    public class ClimbingSiteDto
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public AddressDto Address { get; set; }
    }
}
