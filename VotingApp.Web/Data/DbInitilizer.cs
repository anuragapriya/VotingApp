using Microsoft.EntityFrameworkCore;
using VotingApp.Core.Features.Candidates;
using VotingApp.Core.Features.Voters;
using VotingApp.Core.Features.Votes;

namespace VotingApp.Web.Data
{
    public class DbInitilizer
    {
        public static void SeedData(DataContext dataContext)
        {

        }

        private static void _SeedCandidate(DbContext dataContext)
        {
            var candidate = dataContext.Set<Candidate>();
            if (candidate.Any())
            {
                return;
            }
            candidate.Add(new Candidate
            {
                Name = "Rahul",
            });
            dataContext.SaveChanges();
        }

        private static void _SeedVoter(DbContext dataContext)
        {
            var candidate = dataContext.Set<Voter>();
            if (candidate.Any())
            {
                return;
            }
            candidate.Add(new Voter
            {
                Name = "Raj",
            });
            dataContext.SaveChanges();
        }

        private static void _SeedVote(DbContext dataContext)
        {
            var vote = dataContext.Set<Vote>();
            var candidate = dataContext.Set<Candidate>().ToArray();
            var voter = dataContext.Set<Voter>().ToArray();

            vote.Add(new Vote
            {
                Candidate = candidate[0],
                Voter = voter[0],
            });
            dataContext.SaveChanges();
        }
    }
}
