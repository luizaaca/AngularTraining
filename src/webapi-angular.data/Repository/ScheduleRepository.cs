using WebApiAngular.Model;
using WebApiAngular.Data.Abstract;

namespace WebApiAngular.Data.Repository
{
    public class ScheduleRepository : EntityBaseRepository<Schedule>, IScheduleRepository
    {
        public ScheduleRepository(SchedulerContext context) : base(context) { }
    }
}