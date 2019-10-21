using System;
using AutoMapper;
using PinkPoint.ClimbingRoutes.DataAccess;

namespace PinkPoint.ClimbingRoutes.Controllers.ClimbingRoutes
{
    public class ClimbingRoutesProfile : Profile
    {
        public ClimbingRoutesProfile()
        {
            CreateMap<ClimbingRoute, ClimbingRouteDto>()
                .ReverseMap();

            CreateMap<CreateClimbingRouteDto, ClimbingRoute>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => Guid.NewGuid()))
                .ForMember(dest => dest.ImageUri, opt => opt.Ignore());

            CreateMap<UpdateClimbingRouteDto, ClimbingRoute>()
                .ForMember(dest => dest.Id, opt => opt.Ignore())
                .ForMember(dest => dest.ImageUri, opt => opt.Ignore());
        }
    }
}
