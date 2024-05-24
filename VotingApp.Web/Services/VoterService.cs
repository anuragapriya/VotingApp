using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using VotingApp.Core.Features.Voters;
using VotingApp.Web.Areas.Api.Models.Voters;
using VotingApp.Web.Data;

namespace VotingApp.Web.Services
{
    public class VoterService : IVoterService
    {
        private readonly DataContext _dataContext;
        private readonly IMapper mapper;

        public VoterService(DataContext dataContext,
            IMapper mapper)
        {
            this.mapper = mapper;
            this._dataContext = dataContext;
        }

        public async Task<ServiceResponse<List<VoterDetailsDto>>> Get()
        {
            var voterDetails = await _dataContext.Voters.ProjectTo<VoterDetailsDto>(mapper.ConfigurationProvider).ToListAsync();

            if (voterDetails != null && voterDetails.Any())
            {
                var votes = await _dataContext.Votes.ToListAsync();

                if (votes != null && votes.Any())
                {
                    voterDetails.ForEach(voter =>
                    {
                        voter.HasVoted = votes.Any(x => x.VoterId == voter.Id);
                    });
                }
            }

            return new ServiceResponse<List<VoterDetailsDto>>
            {
                Data = voterDetails == null ? [] : voterDetails,
            };
        }

        public async Task<ServiceResponse<bool>> Save(VoterDetailsDto voterDetailsDto)
        {
            if (!voterDetailsDto.Id.HasValue)
            {
                await _dataContext.Voters.AddAsync(new Voter { Name = voterDetailsDto.Name });
                _dataContext.SaveChanges(true);
            }

            return new ServiceResponse<bool>
            {
                Data = true
            };
        }
    }
}
