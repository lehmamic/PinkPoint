using AutoMapper;
using PinkPoint.ClimbingRoutes.DataAccess;

namespace PinkPoint.ClimbingRoutes.Controllers.ClimbingRoutes
{
    public class ClimbingRoutesProfile : Profile
    {
        public ClimbingRoutesProfile()
        {
            CreateMap<ClimbingRoute, ClimbingRouteResponse>();
        }
    }
}
