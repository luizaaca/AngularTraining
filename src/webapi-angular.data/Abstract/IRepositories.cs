namespace WebApiAngular.Data.Abstract
{
    public interface IScheduleRepository : IEntityBaseRepository<Model.Schedule> { }
    public interface IUserRepository : IEntityBaseRepository<Model.User> { }
    public interface IAttendeeRepository : IEntityBaseRepository<Model.Attendee> { }
}