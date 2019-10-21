using System;
using System.Collections.ObjectModel;
using AutoMapper;
using PinkPoint.ClimbingRoutes.DataAccess;

namespace PinkPoint.ClimbingRoutes.Controllers.ClimbingSites
{
    public class ClimbingSitesProfile : Profile
    {
        public ClimbingSitesProfile()
        {
            CreateMap<ClimbingSite, ClimbingSiteDto>();

            CreateMap<CreateClimbingSiteDto, ClimbingSite>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => Guid.NewGuid()))
                .ForMember(dest => dest.Routes, opt => opt.MapFrom(src => new Collection<ClimbingRoute>()));

            CreateMap<UpdateClimbingSiteDto, ClimbingSite>()
                .ForMember(dest => dest.Id, opt => opt.Ignore())
                .ForMember(dest => dest.Routes, opt => opt.Ignore());

            CreateMap<Address, AddressDto>()
                .ReverseMap();
        }
    }
}
