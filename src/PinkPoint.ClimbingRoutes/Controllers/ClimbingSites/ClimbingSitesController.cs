using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PinkPoint.ClimbingRoutes.DataAccess;
using Raven.Client.Documents;
using Raven.Client.Documents.Session;

namespace PinkPoint.ClimbingRoutes.Controllers.ClimbingSites
{
    [ApiController]
    [Route("api/v1/climbing-sites")]
    public class ClimbingSitesController : ControllerBase
    {
        private readonly IAsyncDocumentSession documentSession;
        private readonly IMapper mapper;
        private readonly ILogger<ClimbingSitesController> logger;

        public ClimbingSitesController(IAsyncDocumentSession documentSession, IMapper mapper, ILogger<ClimbingSitesController> logger)
        {
            this.documentSession = documentSession ?? throw new ArgumentNullException(nameof(documentSession));
            this.mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
            this.logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<ClimbingSiteDto>>> Get([FromQuery]PagingParameters paging)
        {
            IEnumerable<ClimbingSite> sites = await this.documentSession.Query<ClimbingSite>()
                .OrderBy(s => s.Name)
                .Skip(paging.Skip ?? 0)
                .Take(paging.Take ?? 10)
                .ToListAsync();

            return Ok(this.mapper.Map<IEnumerable<ClimbingSiteDto>>(sites));
        }

        [HttpGet("{id}", Name = "GetClimbingSite")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ClimbingSiteDto>> Get(Guid id)
        {
            ClimbingSite site = await this.documentSession.LoadAsync<ClimbingSite>(id.ToString());
            if (site == null)
            {
                return NotFound();
            }

            return Ok(this.mapper.Map<ClimbingSiteDto>(site));
        }


        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<ClimbingSiteDto>> Post([FromBody] CreateClimbingSiteDto request)
        {
            ClimbingSite site = this.mapper.Map<ClimbingSite>(request);
            await this.documentSession.StoreAsync(site);
            await this.documentSession.SaveChangesAsync();

            var response = this.mapper.Map<ClimbingSiteDto>(site);
            return CreatedAtRoute("GetClimbingSite", new { id = response.Id }, response);
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult> Put([FromRoute]string id, [FromBody] UpdateClimbingSiteDto request)
        {
            ClimbingSite site = await this.documentSession.LoadAsync<ClimbingSite>(id);
            if (site == null)
            {
                return NotFound();
            }

            this.mapper.Map(request, site);
            await this.documentSession.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<ActionResult> Delete([FromRoute]string id)
        {
            ClimbingSite site = await this.documentSession.LoadAsync<ClimbingSite>(id);
            if (site == null)
            {
                return NoContent();
            }

            this.documentSession.Delete(site);
            await this.documentSession.SaveChangesAsync();

            return NoContent();
        }
    }
}
