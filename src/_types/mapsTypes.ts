export interface mapsTypes {
  uuid: string;
  displayName: string;
  narrativeDescription: null;
  tacticalDescription: string;
  coordinates: string;
  displayIcon: string;
  listViewIcon: string;
  listViewIconTall: string;
  splash: string;
  premierBackgroundImage: string;
  assetPath: string;
  mapUrl: string;
  xMultiplier: number;
  yMultiplier: number;
  xScalarToAdd: number;
  yScalarToAdd: number;
  callouts: [
    {
      regionName: string;
      superRegionName: string;
      location: {
        x: number;
        y: number;
      };
    }
  ];
}
