FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.2-stretch AS build
WORKDIR /src
COPY PinkPoint.ApiGateway/PinkPoint.ApiGateway.csproj PinkPoint.ApiGateway/
RUN dotnet restore "PinkPoint.ApiGateway/PinkPoint.ApiGateway.csproj"
COPY . .
WORKDIR "/src/PinkPoint.ApiGateway"
RUN dotnet build "PinkPoint.ApiGateway.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "PinkPoint.ApiGateway.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "PinkPoint.ApiGateway.dll"]
