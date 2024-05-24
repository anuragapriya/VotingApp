using Microsoft.AspNetCore.Mvc;
using System.Net;
using VotingApp.Web.Areas.Api.Models.Voters;
using VotingApp.Web.Services;

namespace VotingApp.Web.Areas.Api.Controllers
{
    [Route("api/voters")]
    public class VotersApiController: Controller
    {
        private readonly IVoterService _voterService;
        
        public VotersApiController(IVoterService voterService)
        {
            _voterService = voterService;
        }

        [HttpGet("Get")]
        [ProducesResponseType(typeof(VoterDetailsDto), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(Dictionary<string, string[]>), (int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Get()
        {
            var result = await _voterService.Get();
            if(result.Errors.Any())
            {
                return BadRequest(result.Errors);
            }
            var verification = result.Data;
            return Ok(verification);
        }

        [HttpPost("Post")]
        [ProducesResponseType(typeof(VoterDetailsDto), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(Dictionary<string, string[]>), (int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Post([FromBody] VoterDetailsDto voterDetailsDto)
        {
            var result = await _voterService.Save(voterDetailsDto);
            if (result.Errors.Any())
            {
                return BadRequest(result.Errors);
            }
            var verification = result.Data;
            return Ok(verification);
        }
    }
}
