using VotingApp.Web.Areas.Api.Models.Voters;

namespace VotingApp.Web.Services
{
    public interface IVoterService
    {
        Task<ServiceResponse<List<VoterDetailsDto>>> Get();
        Task<ServiceResponse<bool>> Save(VoterDetailsDto voterDetailsDto);
    }
}
