using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using PinkPoint.ImageRecognition.Services;

namespace PinkPoint.ImageRecognition
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAutoMapper(typeof(Startup).Assembly);

            services.Configure<GoogleCloudSettings>(Configuration.GetSection("GoogleCloud"));
            services.AddTransient<IImageRecognitionService, ImageRecognitionService>();

            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            var logger = app.ApplicationServices.GetService<ILogger<Startup>>();
            logger.LogInformation($"Google key path: {Environment.GetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS")}");
            logger.LogInformation($"File exists: {System.IO.File.Exists(Environment.GetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS"))}");
            logger.LogInformation($"{System.IO.Directory.GetCurrentDirectory()}");

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
