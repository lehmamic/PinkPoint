using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace PinkPoint.ClimbingRoutes.Controllers.ClimbingRoutes
{
    public class UpdateClimbingRouteDto
    {
        [Required]
        public string Name { get; set; }

        public string Description { get; set; }

        [Required]
        [RegularExpression("[0-9][abcABC]")]
        public string Grade { get; set; }

        [Required]
        public string Color { get; set; }

        [Required]
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public ClimbingRouteType Type { get; set; }
    }
}
