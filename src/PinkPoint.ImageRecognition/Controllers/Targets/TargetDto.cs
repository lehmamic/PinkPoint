using System.Collections.Generic;

namespace PinkPoint.ImageRecognition.Controllers.Targets
{
    public class TargetDto
    {
        public string Id { get; set; }

        public string DisplayName { get; set; }

        public string Description { get; set; }

        public IReadOnlyDictionary<string, string> Labels { get; set; }

        public IEnumerable<ReferenceImageDto> ReferenceImages { get; set; }
    }
}
