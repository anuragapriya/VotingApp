using Microsoft.AspNetCore.Mvc;
using System.Net;
using VotingApp.Web.Areas.Api.Models.Votes;
using VotingApp.Web.Services;

namespace VotingApp.Web.Areas.Api.Controllers
{
    [Route("api/votes")]
    public class VotesApiController: Controller
    {
        private readonly IVoteService _voteService;
        
        public VotesApiController(IVoteService voteService)
        {
            _voteService = voteService;
        }

        [HttpGet("Get")]
        [ProducesResponseType(typeof(VoteDetailsDto), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(Dictionary<string, string[]>), (int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Get()
        {
            var result = await _voteService.Get();
            if(result.Errors.Any())
            {
                return BadRequest(result.Errors);
            }
            var verification = result.Data;
            return Ok(verification);
        }

        [HttpPost("Post")]
        [ProducesResponseType(typeof(VoteDetailsDto), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(Dictionary<string, string[]>), (int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> Post([FromBody] VoteDetailsDto voteDetailsDto)
        {
            var result = await _voteService.Save(voteDetailsDto);
            if (result.Errors.Any())
            {
                return BadRequest(result.Errors);
            }
            var verification = result.Data;
            return Ok(verification);
        }
    }
}
