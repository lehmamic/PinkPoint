FROM mcr.microsoft.com/dotnet/core/aspnet:3.0-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.0-buster AS build
WORKDIR /src
COPY PinkPoint.Cockpit/PinkPoint.Cockpit.csproj PinkPoint.Cockpit/
RUN dotnet restore "PinkPoint.Cockpit/PinkPoint.Cockpit.csproj"
COPY . .
WORKDIR "/src/PinkPoint.Cockpit"
RUN dotnet build "PinkPoint.Cockpit.csproj" -c Release -o /app/build

FROM node:12.12 AS build-client
WORKDIR /src
COPY PinkPoint.CockpitApp/package.json PinkPoint.CockpitApp/
COPY PinkPoint.CockpitApp/package-lock.json PinkPoint.CockpitApp/
RUN npm install --prefix PinkPoint.CockpitApp
COPY . .
WORKDIR "/src/PinkPoint.CockpitApp"
RUN npm run build -- --prod

FROM build AS publish
COPY --from=build-client /src/PinkPoint.CockpitApp/dist/pinkpoint-cockpitapp/ ./wwwroot/
RUN dotnet publish "PinkPoint.Cockpit.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "PinkPoint.Cockpit.dll"]
