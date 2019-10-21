using AutoMapper;
using PinkPoint.ImageRecognition.Services;

namespace PinkPoint.ImageRecognition.Controllers.Targets
{
    public class TargetsProfile : Profile
    {
        public TargetsProfile()
        {
            CreateMap<Target, TargetDto>();

            CreateMap<ReferenceImage, ReferenceImageDto>();
        }
    }
}
