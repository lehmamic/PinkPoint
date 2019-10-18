FROM mcr.microsoft.com/dotnet/core/aspnet:3.0-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.0-buster AS build
WORKDIR /src
COPY PinkPoint.ImageRecognition/PinkPoint.ImageRecognition.csproj PinkPoint.ImageRecognition/
RUN dotnet restore "PinkPoint.ImageRecognition/PinkPoint.ImageRecognition.csproj"
COPY . .
WORKDIR "/src/PinkPoint.ImageRecognition"
RUN dotnet build "PinkPoint.ImageRecognition.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "PinkPoint.ImageRecognition.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "PinkPoint.ImageRecognition.dll"]
