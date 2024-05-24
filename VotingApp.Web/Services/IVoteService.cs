using VotingApp.Web.Areas.Api.Models.Votes;

namespace VotingApp.Web.Services
{
    public interface IVoteService
    {
        Task<ServiceResponse<List<VoteDetailsDto>>> Get();

        Task<ServiceResponse<bool>> Save(VoteDetailsDto voteDetailsDto);
    }
}
