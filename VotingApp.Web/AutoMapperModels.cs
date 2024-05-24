using AutoMapper;
using VotingApp.Core.Features.Candidates;
using VotingApp.Core.Features.Voters;
using VotingApp.Core.Features.Votes;
using VotingApp.Web.Areas.Api.Models.Candidates;
using VotingApp.Web.Areas.Api.Models.Voters;
using VotingApp.Web.Areas.Api.Models.Votes;

namespace Backend
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Voter, VoterDetailsDto>();
            CreateMap<VoterDetailsDto, Voter>();

            CreateMap<Candidate, CandidateDto>();
            CreateMap<CandidateDto, Candidate>();

            CreateMap<Vote, VoteDetailsDto>();
            CreateMap<VoteDetailsDto, Vote>();
        }

    }
}
