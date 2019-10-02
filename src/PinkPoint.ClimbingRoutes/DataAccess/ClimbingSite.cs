using System;
using System.Collections.Generic;

namespace PinkPoint.ClimbingRoutes.DataAccess
{
    public class ClimbingSite
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public Address Address { get; set; }

        public IEnumerable<ClimbingRoute> Routes { get; set; }
    }
}
