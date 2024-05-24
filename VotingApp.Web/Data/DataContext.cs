using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using VotingApp.Core.Features.Candidates;
using VotingApp.Core.Features.Voters;
using VotingApp.Core.Features.Votes;

namespace VotingApp.Web.Data
{
    public class DataContext : DbContext
    {
        public DataContext()
        {
        }

        public DataContext(IDbContextOptions options)
        {
        }

        public DbSet<Candidate> Candidates { get; set; }

        public DbSet<Voter> Voters { get; set; }

        public DbSet<Vote> Votes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if(!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=VotingApp;Trusted_Connection=True");
            }
        }
    }
}
