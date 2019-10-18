FROM mcr.microsoft.com/dotnet/core/aspnet:3.0-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.0-buster AS build
WORKDIR /src
COPY PinkPoint.RouteSearch/PinkPoint.RouteSearch.csproj PinkPoint.RouteSearch/
RUN dotnet restore "PinkPoint.RouteSearch/PinkPoint.RouteSearch.csproj"
COPY . .
WORKDIR "/src/PinkPoint.RouteSearch"
RUN dotnet build "PinkPoint.RouteSearch.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "PinkPoint.RouteSearch.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "PinkPoint.RouteSearch.dll"]
