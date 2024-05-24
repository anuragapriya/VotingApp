namespace VotingApp.Web.Areas.Api.Models.Votes
{
    public class VoteDetailsDto
    {
        public int? Id { get; set; }

        public int VoterId { get; set; }

        public int CandidateId { get; set; }
    }
}
