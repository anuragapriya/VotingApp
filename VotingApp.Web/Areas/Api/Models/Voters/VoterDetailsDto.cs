namespace VotingApp.Web.Areas.Api.Models.Voters
{
    public class VoterDetailsDto
    {
        public int? Id { get; set; }

        public string? Name { get; set; }

        public bool HasVoted { get; set; }
    }
}
