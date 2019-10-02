using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PinkPoint.ClimbingRoutes.DataAccess;

namespace PinkPoint.ClimbingRoutes.Controllers.ClimbingSites
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class ClimbingSitesController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly ILogger<ClimbingSitesController> logger;

        public ClimbingSitesController(IMapper mapper, ILogger<ClimbingSitesController> logger)
        {
            this.mapper = mapper;
            this.logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClimbingSiteResponse>>> Get([FromQuery]PagingParameters paging)
        {
            var sites = ClimbingSitesData.ClimbingSites
                .OrderBy(s => s.Name)
                .Skip(paging.Skip ?? 0)
                .Take(paging.Take ?? 10)
                .ToArray();

            return Ok(await Task.FromResult(this.mapper.Map<IEnumerable<ClimbingSiteResponse>>(sites)));
        }
    }
}
