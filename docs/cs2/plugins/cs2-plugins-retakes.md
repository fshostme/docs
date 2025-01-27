---
slug: retakes
id: cs2-plugins-retakes
title: "Retakes w/ RetakesAllocator"
---

A C# implementation of Retakes for CS2, built using CounterStrikeSharp and inspired by Splewis's version for CS:GO.

**We use RetakesAllocator from Yoni [cs2-retakes-allocator](https://github.com/yonilerner/cs2-retakes-allocator)**

## Plugin Configuration for Pro Server
<details>
  <summary>Click to expand</summary>
```json
{
  "UsableWeapons": [
    "Deagle",
    "Glock",
    "USPS",
    "HKP2000",
    "Elite",
    "Tec9",
    "P250",
    "CZ",
    "FiveSeven",
    "Revolver",
    "Mac10",
    "MP9",
    "MP7",
    "P90",
    "MP5SD",
    "Bizon",
    "UMP45",
    "XM1014",
    "Nova",
    "MAG7",
    "SawedOff",
    "M249",
    "Negev",
    "AK47",
    "M4A1S",
    "M4A1",
    "GalilAR",
    "Famas",
    "SG556",
    "AWP",
    "AUG",
    "SSG08",
    "SCAR20",
    "G3SG1"
  ],
  "AllowedWeaponSelectionTypes": [
    "PlayerChoice",
    "Random",
    "Default"
  ],
  "DefaultWeapons": {
    "Terrorist": {
      "FullBuyPrimary": "AK47",
      "HalfBuyPrimary": "Mac10",
      "Secondary": "Deagle",
      "PistolRound": "Glock"
    },
    "CounterTerrorist": {
      "FullBuyPrimary": "M4A1S",
      "HalfBuyPrimary": "MP9",
      "Secondary": "Deagle",
      "PistolRound": "USPS"
    }
  },
  "MaxNades": {
    "GLOBAL": {
      "Terrorist": {
        "Flashbang": 2,
        "Smoke": 1,
        "Molotov": 1,
        "HighExplosive": 1
      },
      "CounterTerrorist": {
        "Flashbang": 2,
        "Smoke": 1,
        "Incendiary": 2,
        "HighExplosive": 1
      }
    }
  },
  "MaxTeamNades": {
    "GLOBAL": {
      "Terrorist": {
        "Pistol": "AverageOnePerPlayer",
        "HalfBuy": "AverageOnePointFivePerPlayer",
        "FullBuy": "AverageOnePointFivePerPlayer"
      },
      "CounterTerrorist": {
        "Pistol": "AverageOnePerPlayer",
        "HalfBuy": "AverageOnePointFivePerPlayer",
        "FullBuy": "AverageOnePointFivePerPlayer"
      }
    }
  },
  "RoundTypeSelection": "Random",
  "RoundTypePercentages": {
    "Pistol": 15,
    "HalfBuy": 25,
    "FullBuy": 60
  },
  "RoundTypeRandomFixedCounts": {
    "Pistol": 5,
    "HalfBuy": 10,
    "FullBuy": 15
  },
  "RoundTypeManualOrdering": [
    {
      "Type": "Pistol",
      "Count": 5
    },
    {
      "Type": "HalfBuy",
      "Count": 10
    },
    {
      "Type": "FullBuy",
      "Count": 15
    }
  ],
  "MigrateOnStartup": true,
  "ResetStateOnGameRestart": true,
  "AllowAllocationAfterFreezeTime": true,
  "UseOnTickFeatures": true,
  "CapabilityWeaponPaints": true,
  "EnableRoundTypeAnnouncement": true,
  "EnableRoundTypeAnnouncementCenter": false,
  "EnableBombSiteAnnouncementCenter": false,
  "BombSiteAnnouncementCenterToCTOnly": false,
  "DisableDefaultBombPlantedCenterMessage": false,
  "ForceCloseBombSiteAnnouncementCenterOnPlant": true,
  "BombSiteAnnouncementCenterDelay": 1,
  "BombSiteAnnouncementCenterShowTimer": 5,
  "EnableBombSiteAnnouncementChat": false,
  "EnableNextRoundTypeVoting": false,
  "NumberOfExtraVipChancesForPreferredWeapon": 1,
  "AllowPreferredWeaponForEveryone": false,
  "ChanceForPreferredWeapon": 100,
  "MaxPreferredWeaponsPerTeam": {
    "Terrorist": 1,
    "CounterTerrorist": 1
  },
  "MinPlayersPerTeamForPreferredWeapon": {
    "Terrorist": 1,
    "CounterTerrorist": 1
  },
  "EnableCanAcquireHook": true,
  "LogLevel": "Information",
  "ChatMessagePluginName": "Retakes",
  "ChatMessagePluginPrefix": null,
  "InGameGunMenuCenterCommands": "gunsmenu,gunmenu,!gunmenu,!gunsmenu,!menugun,!menuguns,/gunsmenu,/gunmenu",
  "InGameGunMenuChatCommands": "guns,!guns,/guns",
  "ZeusPreference": "Never",
  "DatabaseProvider": "Sqlite",
  "DatabaseConnectionString": "Data Source=data.db; Pooling=False",
  "AutoUpdateSignatures": true
}
```
</details>

Use the search bar below to find a command:

import CommandSearch from '@site/src/components/CommandSearch';
import retakeCommands from '@site/src/data/commands/retakeCommands';

<CommandSearch commandCategories={retakeCommands} />
