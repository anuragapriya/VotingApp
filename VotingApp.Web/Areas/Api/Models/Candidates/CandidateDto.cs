namespace VotingApp.Web.Areas.Api.Models.Candidates
{
    public class CandidateDto
    {
        public int? Id { get; set; }

        public string? Name { get; set; }

        public int VoteCount { get; set; }
    }
}
