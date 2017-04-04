using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace WebApplicationBasic
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
                .UseKestrel() //em desenvolvimento, não utilizar para sites públicos (não muito seguro)
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}
