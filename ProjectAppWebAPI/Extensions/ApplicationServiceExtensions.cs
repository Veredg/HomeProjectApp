using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProjectAppWebAPI.Interfaces;
using ProjectAppWebAPI.Services;

namespace ProjectAppWebAPI.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddAplicationServices(this IServiceCollection services)
        {
            services.AddHttpClient();
            services.AddCors();
            services.AddScoped<ITokenService, TokenService>();

            return services;
        }
    }
}