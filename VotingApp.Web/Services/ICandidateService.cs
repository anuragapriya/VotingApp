using VotingApp.Web.Areas.Api.Models.Candidates;

namespace VotingApp.Web.Services
{
    public interface ICandidateService
    {
        Task<ServiceResponse<List<CandidateDto>>> Get();

        Task<ServiceResponse<bool>> Save(CandidateDto candidateDto);
    }
}
