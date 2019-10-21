using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using PinkPoint.ImageRecognition.Services;

namespace PinkPoint.ImageRecognition.Controllers.Targets
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class TargetsController : ControllerBase
    {
        private readonly IImageRecognitionService imageRecognition;
        private readonly IMapper mapper;
        private readonly IOptions<GoogleCloudSettings> options;

        public TargetsController(IImageRecognitionService imageRecognition, IMapper mapper, IOptions<GoogleCloudSettings> options)
        {
            this.imageRecognition = imageRecognition ?? throw new ArgumentNullException(nameof(imageRecognition));
            this.mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
            this.options = options ?? throw new ArgumentNullException(nameof(options));
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<TargetDto>>> GetTargets([FromQuery]PagingParameters paging)
        {
            IEnumerable<Target> targets = (await this.imageRecognition.GetTargets(this.options.Value.ProductSetId, 0, 100))
                .OrderBy(t => t.DisplayName)
                .Skip(paging.Skip ?? 0)
                .Take(paging.Take ?? 10);

            IEnumerable<TargetDto> response = this.mapper.Map<IEnumerable<TargetDto>>(targets);
            return Ok(response);
        }

        [HttpGet("{id}", Name = "GetTarget")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<TargetDto>> GetTarget(string id)
        {
            Target target = await this.imageRecognition.GetTarget(id);
            TargetDto response = this.mapper.Map<TargetDto>(target);

            return Ok(response);
        }
    }
}
