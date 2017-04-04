using WebApiAngular.Data.Abstract;
using WebApiAngular.Model;

namespace WebApiAngular.Data.Repository
{
    public class UserRepository : EntityBaseRepository<User>, IUserRepository
    {
        public UserRepository(SchedulerContext context) : base(context)
        {

        }
    }
}