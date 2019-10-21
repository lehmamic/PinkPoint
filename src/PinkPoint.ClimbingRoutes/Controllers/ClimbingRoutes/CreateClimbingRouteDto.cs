using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace PinkPoint.ClimbingRoutes.Controllers.ClimbingRoutes
{
    public class CreateClimbingRouteDto
    {
        [Required]
        public string Name { get; set; }

        public string Description { get; set; }

        [Required]
        public string Grade { get; set; }

        [Required]
        public string Color { get; set; }

        [Required]
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public ClimbingRouteType Type { get; set; }
    }
}
