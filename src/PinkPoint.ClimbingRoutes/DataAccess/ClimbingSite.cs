using System.Collections.Generic;

namespace PinkPoint.ClimbingRoutes.DataAccess
{
    public class ClimbingSite
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public Address Address { get; set; }

        public ICollection<ClimbingRoute> Routes { get; set; }
    }
}
