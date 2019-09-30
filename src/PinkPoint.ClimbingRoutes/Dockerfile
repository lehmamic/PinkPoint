FROM mcr.microsoft.com/dotnet/core/aspnet:3.0-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.0-buster AS build
WORKDIR /src
COPY PinkPoint.ClimbingRoutes/PinkPoint.ClimbingRoutes.csproj PinkPoint.ClimbingRoutes/
RUN dotnet restore "PinkPoint.ClimbingRoutes/PinkPoint.ClimbingRoutes.csproj"
COPY . .
WORKDIR "/src/PinkPoint.ClimbingRoutes"
RUN dotnet build "PinkPoint.ClimbingRoutes.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "PinkPoint.ClimbingRoutes.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "PinkPoint.ClimbingRoutes.dll"]
