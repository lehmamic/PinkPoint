using System.Text.Json.Serialization;

namespace PinkPoint.ClimbingRoutes.DataAccess
{
    public class ClimbingRoute
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        [JsonConverter(typeof(JsonStringEnumConverter))]
        public ClimbingRouteType Type { get; set; }

        public string Grade { get; set; }

        public string Color { get; set; }

        public string ImageUri { get; set; }
    }
}
