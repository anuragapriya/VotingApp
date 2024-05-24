using Microsoft.AspNetCore.Mvc;
using System.Net;
using VotingApp.Web.Areas.Api.Models.Candidates;
using VotingApp.Web.Services;

namespace VotingApp.Web.Areas.Api.Controllers
{
    [Route("api/candidates")]
    public class CandidatesApiController: Controller
    {
        private readonly ICandidateService _candidateService;
        
        public CandidatesApiController(ICandidateService candidateService)
        {
            _candidateService = candidateService;
        }

        [HttpGet("Get")]
        [ProducesResponseType(typeof(CandidateDto), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(Dictionary<string, string[]>), (int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Get()
        {
            var result = await _candidateService.Get();
            if(result.Errors.Any())
            {
                return BadRequest(result.Errors);
            }
            var verification = result.Data;
            return Ok(verification);
        }

        [HttpPost("Post")]
        [ProducesResponseType(typeof(CandidateDto), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(Dictionary<string, string[]>), (int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Post([FromBody] CandidateDto candidateDto)
        {
            var result = await _candidateService.Save(candidateDto);
            if (result.Errors.Any())
            {
                return BadRequest(result.Errors);
            }
            var verification = result.Data;
            return Ok(verification);
        }
    }
}
