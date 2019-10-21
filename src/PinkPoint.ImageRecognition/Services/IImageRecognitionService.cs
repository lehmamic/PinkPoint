using System.Collections.Generic;
using System.Threading.Tasks;

namespace PinkPoint.ImageRecognition.Services
{
    public interface IImageRecognitionService
    {
        Task<IEnumerable<Target>> GetTargets(string targetSetId, int skip = 0, int take = 10);

        Task<Target> GetTarget(string targetId);
    }
}