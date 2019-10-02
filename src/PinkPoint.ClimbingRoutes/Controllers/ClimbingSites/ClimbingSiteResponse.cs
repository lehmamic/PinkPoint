using System;

namespace PinkPoint.ClimbingRoutes.Controllers.ClimbingSites
{
    public class ClimbingSiteResponse
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public AddressResponse Address { get; set; }
    }
}
