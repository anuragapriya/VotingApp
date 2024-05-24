using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using VotingApp.Core.Features.Votes;
using VotingApp.Web.Areas.Api.Models.Votes;
using VotingApp.Web.Data;

namespace VotingApp.Web.Services
{
    public class VoteService : IVoteService
    {
        private readonly DataContext _dataContext;
        private readonly IMapper mapper;

        public VoteService(DataContext dataContext,
            IMapper mapper)
        {
            this.mapper = mapper;
            this._dataContext = dataContext;
        }

        public async Task<ServiceResponse<List<VoteDetailsDto>>> Get()
        {
            var voteDetails = await _dataContext.Votes.ProjectTo<VoteDetailsDto>(mapper.ConfigurationProvider).ToListAsync();

            return new ServiceResponse<List<VoteDetailsDto>>
            {
                Data = voteDetails
            };
        }

        public async Task<ServiceResponse<bool>> Save(VoteDetailsDto voteDetailsDto)
        {
            if (!voteDetailsDto.Id.HasValue)
            {
                await _dataContext.Votes.AddAsync(new Vote { CandidateId = voteDetailsDto.CandidateId, VoterId = voteDetailsDto.VoterId });
                _dataContext.SaveChanges(true);
            }

            return new ServiceResponse<bool>
            {
                Data = true
            };
        }
    }
}
