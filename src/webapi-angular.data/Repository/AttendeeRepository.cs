using WebApiAngular.Data.Abstract;
using WebApiAngular.Model;

namespace WebApiAngular.Data.Repository
{
    public class AttendeeRepository : EntityBaseRepository<Attendee>, IAttendeeRepository
    {
        public AttendeeRepository(SchedulerContext context) : base(context) { }
    }
}