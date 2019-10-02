using AutoMapper;
using PinkPoint.ClimbingRoutes.DataAccess;

namespace PinkPoint.ClimbingRoutes.Controllers.ClimbingSites
{
    public class ClimbingSitesProfile : Profile
    {
        public ClimbingSitesProfile()
        {
            CreateMap<ClimbingSite, ClimbingSiteResponse>();
            CreateMap<Address, AddressResponse>();
        }
    }
}
