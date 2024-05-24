using VotingApp.Core.Features.Candidates;
using VotingApp.Core.Features.Voters;

namespace VotingApp.Core.Features.Votes
{
    public class Vote
    {
        public int Id { get; set; }

        public int? VoterId { get; set; }

        public int? CandidateId { get; set; }

        public virtual Candidate Candidate { get; set; }

        public virtual Voter Voter { get; set; }
    }
}
