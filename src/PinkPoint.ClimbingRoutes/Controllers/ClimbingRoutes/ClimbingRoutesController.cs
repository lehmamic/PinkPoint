using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PinkPoint.ClimbingRoutes.Controllers.ClimbingSites;
using PinkPoint.ClimbingRoutes.DataAccess;

namespace PinkPoint.ClimbingRoutes.Controllers.ClimbingRoutes
{
    [ApiController]
    [Route("api/v1/climbing-sites")]
    public class ClimbingRoutesController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly ILogger<ClimbingRoutesController> logger;

        public ClimbingRoutesController(IMapper mapper, ILogger<ClimbingRoutesController> logger)
        {
            this.mapper = mapper;
            this.logger = logger;
        }

        [HttpGet("{sideId}/climbing-routes")]
        public async Task<ActionResult<IEnumerable<ClimbingRouteResponse>>> Get(Guid siteId, [FromQuery]PagingParameters paging)
        {
            var site = ClimbingSitesData.ClimbingSites.SingleOrDefault(s => s.Id == siteId);
            if(site == null)
            {
                return NotFound();
            }

            var routes = site.Routes.OrderBy(s => s.Name)
                .Skip(paging.Skip ?? 0)
                .Take(paging.Take ?? 10)
                .ToArray();

            return Ok(await Task.FromResult(this.mapper.Map<IEnumerable<ClimbingRouteResponse>>(routes)));
        }
    }
}
