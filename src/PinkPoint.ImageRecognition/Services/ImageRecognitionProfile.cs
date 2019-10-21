using System.Collections.Generic;
using AutoMapper;
using Google.Cloud.Vision.V1;
using Google.Protobuf.Collections;
using static Google.Cloud.Vision.V1.Product.Types;

namespace PinkPoint.ImageRecognition.Services
{
    public class ImageRecognitionProfile : Profile
    {
        public ImageRecognitionProfile()
        {
            CreateMap<Product, Target>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.ProductName.ProductId))
                .ForMember(dest => dest.DisplayName, opt => opt.MapFrom(src => src.DisplayName))
                .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Description))
                .ForMember(dest => dest.Labels, opt => opt.MapFrom(src => src.ProductLabels))
                .ForMember(dest => dest.ReferenceImages, opt => opt.Ignore());

            CreateMap<RepeatedField<KeyValue>, IReadOnlyDictionary<string, string>>()
                .ConvertUsing<KeyValueRepeatedFieldConverter>();

            CreateMap<Google.Cloud.Vision.V1.ReferenceImage, ReferenceImage>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.ReferenceImageName.ReferenceImageId));
        }
    }
}
