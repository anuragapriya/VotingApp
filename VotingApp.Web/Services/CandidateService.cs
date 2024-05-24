using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using VotingApp.Core.Features.Candidates;
using VotingApp.Web.Areas.Api.Models.Candidates;
using VotingApp.Web.Data;

namespace VotingApp.Web.Services
{
    public class CandidateService : ICandidateService
    {
        private readonly DataContext _dataContext;
        private readonly IMapper mapper;

        public CandidateService(DataContext dataContext,
            IMapper mapper)
        {
            this.mapper = mapper;
            this._dataContext = dataContext;
        }

        public async Task<ServiceResponse<List<CandidateDto>>> Get()
        {
            var candidateDetails = await _dataContext.Candidates.ProjectTo<CandidateDto>(mapper.ConfigurationProvider).ToListAsync();

            if (candidateDetails != null && candidateDetails.Any())
            {
                var votes = await _dataContext.Votes.ToListAsync();

                if (votes != null && votes.Any())
                {
                    candidateDetails.ForEach(candidate => {

                        candidate.VoteCount = votes.Count(x => x.CandidateId == candidate.Id);
                    });
                }
            }

            return new ServiceResponse<List<CandidateDto>>
            {
                Data = candidateDetails == null ?[] : candidateDetails,
            };
        }

        public async Task<ServiceResponse<bool>> Save(CandidateDto candidateDto)
        {
            if (!candidateDto.Id.HasValue)
            {
                await _dataContext.Candidates.AddAsync(new Candidate { Name = candidateDto.Name });
                _dataContext.SaveChanges(true);
            }

            return new ServiceResponse<bool>
            {
                Data = true
            };
        }
    }
}
