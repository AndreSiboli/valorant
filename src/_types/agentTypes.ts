export interface agentType {
  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  releaseDate: string;
  characterTags: null;
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait: string;
  fullPortrait: string;
  fullPortraitV2: string;
  killfeedPortrait: string;
  background: string;
  backgroundGradientColors: string[];
  assetPath: string;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  isAvailableForTest: boolean;
  isBaseContent: boolean;
  role: {
    uuid: string;
    displayName: string;
    description: string;
    displayIcon: string;
    assetPath: string;
  };
  recruitmentData: null;
  abilities: [
    {
      slot: string;
      displayName: string;
      description: string;
      displayIcon: string;
    }
  ];
  voiceLine: null;
}
