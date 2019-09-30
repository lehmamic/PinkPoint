using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace PinkPoint.ClimbingRoutes.Controllers.ClimbingSites
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class ClimbingSitesController : ControllerBase
    {
        private readonly ILogger<ClimbingSitesController> logger;

        public ClimbingSitesController(ILogger<ClimbingSitesController> logger)
        {
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

            return Ok(await Task.FromResult(sites));
        }
    }
}
