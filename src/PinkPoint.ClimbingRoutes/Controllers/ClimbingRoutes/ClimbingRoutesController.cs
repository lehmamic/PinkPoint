using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PinkPoint.ClimbingRoutes.DataAccess;
using Raven.Client.Documents.Session;

namespace PinkPoint.ClimbingRoutes.Controllers.ClimbingRoutes
{
    [ApiController]
    [Route("api/v1/climbing-sites/{siteId}/climbing-routes")]
    public class ClimbingRoutesController : ControllerBase
    {
        private readonly IAsyncDocumentSession documentSession;
        private readonly IMapper mapper;
        private readonly ILogger<ClimbingRoutesController> logger;

        public ClimbingRoutesController(IAsyncDocumentSession documentSession, IMapper mapper, ILogger<ClimbingRoutesController> logger)
        {
            this.documentSession = documentSession ?? throw new ArgumentNullException(nameof(documentSession));
            this.mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
            this.logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        [HttpGet()]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<IEnumerable<ClimbingRouteDto>>> Get(string siteId, [FromQuery]PagingParameters paging)
        {
            ClimbingSite site = await this.documentSession.LoadAsync<ClimbingSite>(siteId);
            if (site == null)
            {
                return NotFound();
            }

            var routes = site.Routes.OrderBy(s => s.Name)
                .Skip(paging.Skip ?? 0)
                .Take(paging.Take ?? 10)
                .AsEnumerable();

            var result = this.mapper.Map<IEnumerable<ClimbingRouteDto>>(routes);
            return Ok(result);
        }

        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpGet("{id}", Name = "GetClimbingRoute")]
        public async Task<ActionResult<ClimbingRouteDto>> Get(string siteId, string id)
        {
            ClimbingSite site = await this.documentSession.LoadAsync<ClimbingSite>(siteId);
            if (site == null)
            {
                return NotFound();
            }

            var routes = site.Routes.OrderBy(s => s.Name)
                .AsEnumerable();

            var route = routes.SingleOrDefault(r => string.Equals(r.Id, id, StringComparison.OrdinalIgnoreCase));
            if (route == null)
            {
                return NotFound();
            }

            var result = this.mapper.Map<ClimbingRouteDto>(route);
            return Ok(result);
        }


        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<ClimbingRouteDto>> Post([FromRoute]string siteId, [FromBody] CreateClimbingRouteDto request)
        {
            ClimbingSite site = await this.documentSession.LoadAsync<ClimbingSite>(siteId);
            if (site == null)
            {
                return NotFound();
            }

            ClimbingRoute route = this.mapper.Map<ClimbingRoute>(request);
            site.Routes.Add(route);

            await this.documentSession.SaveChangesAsync();

            var response = this.mapper.Map<ClimbingRouteDto>(route);
            return CreatedAtRoute("GetClimbingRoute", new { siteId, id = response.Id }, response);
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult> Put([FromRoute]string siteId, [FromRoute]string id, [FromBody] UpdateClimbingRouteDto request)
        {
            ClimbingSite site = await this.documentSession.LoadAsync<ClimbingSite>(siteId);
            if (site == null)
            {
                return NotFound();
            }

            ClimbingRoute route = site.Routes.FirstOrDefault(r => string.Equals(r.Id, id, StringComparison.OrdinalIgnoreCase));
            if (route == null)
            {
                return NotFound();
            }

            this.mapper.Map(request, route);
            await this.documentSession.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<ActionResult> Delete([FromRoute]string siteId, [FromRoute]string id)
        {
            ClimbingSite site = await this.documentSession.LoadAsync<ClimbingSite>(siteId);
            if (site == null)
            {
                return NoContent();
            }

            ClimbingRoute route = site.Routes.FirstOrDefault(r => string.Equals(r.Id, id, StringComparison.OrdinalIgnoreCase));
            if (route != null)
            {
                site.Routes.Remove(route);
                await this.documentSession.SaveChangesAsync();
            }

            return NoContent();
        }
    }
}
