FROM mcr.microsoft.com/dotnet/core/aspnet:3.0-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.0-buster AS build
WORKDIR /src
COPY PinkPoint.Media/PinkPoint.Media.csproj PinkPoint.Media/
RUN dotnet restore "PinkPoint.Media/PinkPoint.Media.csproj"
COPY . .
WORKDIR "/src/PinkPoint.Media"
RUN dotnet build "PinkPoint.Media.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "PinkPoint.Media.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "PinkPoint.Media.dll"]
