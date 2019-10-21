﻿using System;
using System.Collections.Generic;

namespace PinkPoint.ImageRecognition.Services
{
    public class Target
    {
        public string Id { get; set; }

        public string DisplayName { get; set; }

        public string Description { get; set; }

        public IReadOnlyDictionary<string, string> Labels { get; set; }

        public IEnumerable<ReferenceImage> ReferenceImages { get; set; }
    }
}
