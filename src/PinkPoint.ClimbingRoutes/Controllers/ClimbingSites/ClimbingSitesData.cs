using System;
using System.Collections.Generic;

namespace PinkPoint.ClimbingRoutes.Controllers.ClimbingSites
{
    public class ClimbingSitesData
    {
        public static IEnumerable<ClimbingSiteResponse> ClimbingSites = new[]
        {
            new ClimbingSiteResponse
            {
                Id = Guid.NewGuid(),
                Name = "6a plus - Kletterhalle Winterthur",
                Address = new Address
                {
                    Street = "Klosterstrasse 17",
                    PostCode = "8406",
                    City ="Winterthur",
                    State = "Zürich",
                },
            },
            new ClimbingSiteResponse
            {
                Id = Guid.NewGuid(),
                Name = "BLOCKFELD Boulderpark - Winterthur",
                Address = new Address
                {
                    Street = "Oberer Deutweg 4",
                    PostCode = "8400",
                    City ="Winterthur",
                    State = "Zürich",
                },
            },
            new ClimbingSiteResponse
            {
                Id = Guid.NewGuid(),
                Name = "Kletterzentrum Milandia Greifensee",
                Address = new Address
                {
                    Street = "Migros Sport- und Erlebnispark",
                    PostCode = "8606",
                    City ="Greifensee",
                    State = "Zürich",
                },
            },
            new ClimbingSiteResponse
            {
                Id = Guid.NewGuid(),
                Name = "Griffig Kletterhalle Uster",
                Address = new Address
                {
                    Street = "Hallenbadweg 2",
                    PostCode = "8610",
                    City ="Uster",
                    State = "Zürich",
                },
            },
            new ClimbingSiteResponse
            {
                Id = Guid.NewGuid(),
                Name = "Aranea Schaffhausen",
                Address = new Address
                {
                    Street = "Ebnatstrasse 65",
                    PostCode = "8201",
                    City ="Schafhausen",
                    State = "Schaffhausen",
                },
            },
            new ClimbingSiteResponse
            {
                Id = Guid.NewGuid(),
                Name = "Ap und Daun",
                Address = new Address
                {
                    Street = "Pulvermühlestrasse 8",
                    PostCode = "7000",
                    City ="Chur",
                    State = "Graubünden",
                },
            },
            new ClimbingSiteResponse
            {
                Id = Guid.NewGuid(),
                Name = "BLOCKFELD Boulders und Kletterwand",
                Address = new Address
                {
                    Street = "Hauptstrasse 98",
                    PostCode = "8264",
                    City ="Eschenz",
                    State = "Thurgau",
                },
            },
            new ClimbingSiteResponse
            {
                Id = Guid.NewGuid(),
                Name = "Minimum (Boulderhalle)",
                Address = new Address
                {
                    Street = "Flüelastrasse 31",
                    PostCode = "8047",
                    City ="Zürich",
                    State = "Zürich",
                },
            },
            new ClimbingSiteResponse
            {
                Id = Guid.NewGuid(),
                Name = "Boulderei Flums",
                Address = new Address
                {
                    Street = "Bergstrasse 31c",
                    PostCode = "8890",
                    City ="Flums",
                    State = "St. Gallen",
                },
            },
            new ClimbingSiteResponse
            {
                Id = Guid.NewGuid(),
                Name = "Bloczone, Salle d'escalade",
                Address = new Address
                {
                    Street = "Route Henri-Stephan 12",
                    PostCode = "1762",
                    City ="Givisiez",
                    State = "Freiburg",
                },
            },
            new ClimbingSiteResponse
            {
                Id = Guid.NewGuid(),
                Name = "boulder-gade in Arth",
                Address = new Address
                {
                    Street = "Luzernerstrasse 91",
                    PostCode = "6415",
                    City ="Arth",
                    State = "Schwyz",
                },
            },
            new ClimbingSiteResponse
            {
                Id = Guid.NewGuid(),
                Name = "Boulderraum Sportzentrum Grindelwald",
                Address = new Address
                {
                    Street = "Dorfstrasse 110",
                    PostCode = "3818",
                    City ="Grindelwald",
                    State = "Bern",
                },
            },
            new ClimbingSiteResponse
            {
                Id = Guid.NewGuid(),
                Name = "Boulderraum Altstadt Brugg",
                Address = new Address
                {
                    Street = "Hauptstrasse 19",
                    PostCode = "5200",
                    City ="Brugg",
                    State = "Aargau",
                },
            },
            new ClimbingSiteResponse
            {
                Id = Guid.NewGuid(),
                Name = "B2 Boulder & Bar",
                Address = new Address
                {
                    Street = "Brodtbeck Areal, Hardstrasse 46",
                    PostCode = "4133",
                    City ="Pratteln",
                    State = "Basel",
                },
            },
            new ClimbingSiteResponse
            {
                Id = Guid.NewGuid(),
                Name = "Nordwandhalle",
                Address = new Address
                {
                    Street = "Am Inselpark 20",
                    PostCode = "21109",
                    City ="Hamburg",
                    State = "Freie und Hansestadt Hamburg",
                },
            },
        };
    }
}
