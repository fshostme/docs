const matchzyCommands = [
  {
    title: 'Match Control Commands',
    description: 'Commands can be used with . or ! prefix (e.g., .ready or !ready)',
    commands: [
      {
        command: '.ready',
        description: 'Marks you as ready to start the match. All players must be ready before the match can begin.',
        example: '.ready'
      },
      {
        command: '.unready',
        description: 'Removes your ready status.',
        example: '.unready'
      },
      {
        command: '.pause',
        description: 'Initiates a normal match pause during freezetime.',
        example: '.pause'
      },
      {
        command: '.unpause',
        description: 'Requests to resume the match. Both teams must type .unpause to continue.',
        example: '.unpause'
      },
      {
        command: '.tech',
        description: 'Initiates a technical pause during freezetime for technical issues.',
        example: '.tech'
      },
      {
        command: '.tac',
        description: 'Calls a tactical timeout for your team.',
        example: '.tac'
      },
      {
        command: '.stop',
	      description: 'Requests to restore the current round. Both teams must type .stop to restore.',
        example: '.stop'
      },
      {
        command: '.uncoach',
	      description: 'Leaves coaching slot',
        example: '.uncoach'
      },      
      {
        command: '.coach',
        aliases: ['.coach ct'],
        description: 'Starts coaching the specified team side (t/ct).',
        example: '.coach t',
      },
      {
        command: '.stay',
        description: 'Stays on the same side after winning knife round.',
        example: '.stay'
      },
      {
        command: '.switch',
        aliases: ['.swap'],
        description: 'Switches sides after winning knife round.',
        example: '.switch'
      }
    ]
  },
  {
    title: 'Practice Commands',
    commands: [
      {
        command: '.back <number>',
        description: 'Teleports to a specific position in grenade history.',
        example: '.back 1',
        arguments: {
          number: 'Optional: Position number to teleport to'
        }
      },
      {
        command: '.bot',
        description: 'Adds a bot at your current position.',
        example: '.bot'
      },
      {
        command: '.nobot',
        description: 'Removes one bot each.',
        example: '.nobot'
      },
      {
        command: '.nobots',
        description: 'Removes all the bots',
        example: '.nobots'
      },      
      {
        command: '.crouchbot',
        aliases: ['.cbot'],
        description: 'Adds a crouched bot at your position.',
        example: '.crouchbot'
      },
      {
        command: '.crouchboost',
        description: 'Adds crouched bot and boosts you on it.',
        example: '.crouchboost'
      },
      {
        command: '.break',
        description: 'Breaks all breakable entities (glass, doors, vents).',
        example: '.break'
      },
      {
        command: '.breakrestore',
        description: 'Restore all breakable entities (glass, doors, vents).',
        example: '.breakrestore'
      },      
      {
        command: '.clear',
        description: 'Removes all active utility (smokes, molotovs, incendiaries).',
        example: '.clear'
      },
      {
        command: '.ct, .t, .spec',
        description: 'Changes to specified team.',
        example: '.ct'
      },
      {
        command: '.ctspawn',
        aliases: ['.cts'],
        description: 'Teleports to CT spawn position.',
        example: '.ctspawn 1',
        arguments: {
          number: 'Required: Spawn position number'
        }
      },
      {
        command: '.tspawn',
        aliases: ['.ts'],
        description: 'Teleports to T spawn position.',
        example: '.tspawn 1',
        arguments: {
          number: 'Required: Spawn position number'
        }
      },
      {
        command: '.spawn <number>',
        description: 'Spawns to the provided competitive spawn number of same team',
        example: '.spawn 1',
      },
      {
        command: '.dryrun',
        aliases: ['.dry'],
        description: 'Enables dry-run mode for practice.',
        example: '.dryrun'
      },
      {
        command: '.fastforward',
        aliases: ['.ff'],
        description: 'Fast-forwards server time to 20 seconds.',
        example: '.fastforward'
      },
      {
        command: '.god',
        description: 'Toggles god mode.',
        example: '.god'
      },
      {
        command: '.bestspawn',
        description: 'Teleports you to your team closest spawn from your current position',
        example: '.bestspawn'
      },
      {
        command: '.worstspawn',
        description: 'Teleports you to your team furthest spawn from your current position',
        example: '.worstspawn'
      },
      {
        command: '.bestctspawn',
        description: ' Teleports you to CT team closest spawn from your current position',
        example: '.bestctspawn'
      },
      {
        command: '.worstctspawn',
        description: 'Teleports you to CT team furthest spawn from your current position',
        example: '.worstctspawn'
      },
      {
        command: '.besttspawn',
        description: 'Teleports you to T team closest spawn from your current position',
        example: '.besttspawn'
      },
      {
        command: '.worsttspawn',
        description: 'Teleports you to T team furthest spawn from your current position',
        example: '.worsttspawn'
      },
      {
        command: '.showspawns',
        description: 'Highlights all the competitive spawns',
        example: '.showspawns'
      },
      {
        command: '.hidespawns',
        description: 'Hides the highlighted spawns',
        example: '.hidespawns'
      },
      {
        command: '.watchme',
        aliases: ['.fas'],
        description: 'Forces all players into spectator except the player who called this command',
        example: '.watchme'
      },
      {
        command: '.noflash',
        aliases: ['.noblind'],
        description: 'Toggles immunity for flashbang',
        example: '.noflash'
      },
      {
        command: '.rethrow',
        aliases: ['.rt'],
        description: 'Rethrows your last thrown grenade',
        example: '.rethrow'
      },
      {
        command: '.timer',
        description: 'Starts a timer immediately and stops it when you type .timer again, telling you the duration of time',
        example: '.timer'
      },
      {
        command: '.throwindex <index> <optional index> <optional index>',
        description: 'Throws grenade of provided position(s) from your grenade thrown history.',
        example: '.throwindex 1 2'
      },
      {
        command: '.lastindex',
        description: 'Prints index number of your last thrown grenade.',
        example: '.lastindex'
      },
      {
        command: '.rethrowsmoke',
        description: 'Throws your last thrown smoke grenade.',
        example: '.rethrowsmoke'
      },
      {
        command: '.rethrownade',
        description: 'Throws your last thrown HE grenade.',
        example: '.rethrownade'
      },
      {
        command: '.rethrowflash',
        description: 'Throws your last thrown flash.',
        example: '.rethrowflash'
      },
      {
        command: '.rethrowmolotov',
        description: 'Throws your last thrown molotov.',
        example: '.rethrowmolotov'
      },
      {
        command: '.rethrowdecoy',
        description: 'Throws your last thrown decoy.',
        example: '.rethrowdecoy'
      },      
      {
        command: '.solid',
        description: 'Toggles mp_solid_teammates',
        example: '.solid'
      },
      {
        command: '.impacts',
        description: 'Toggles sv_showimpacts',
        example: '.impacts'
      },
      {
        command: '.traj',
        description: 'Toggles sv_grenade_trajectory_prac_pipreview',
        example: '.traj'
      }
    ]
  },
  {
    title: 'Grenade Practice Commands',
    commands: [
      {
        command: '.delay',
        description: 'Sets delay for .rethrow or .throwindex.',
        example: '.delay 5',
      },
      {
        command: '.deletenade',
        aliases: ['.dn'],
        description: 'Deletes saved lineup.',
        example: '.deletenade smoke_a_site',
      },
      {
        command: '.importnade',
        description: 'Imports a grenade lineup using a provided code.',
        aliases: ['.in'],
      },
      {
        command: '.last',
        description: 'Returns to last grenade throw position.',
        example: '.last'
      },
      {
        command: '.listnades',
        aliases: ['.lin'],
        description: 'Lists saved lineups, optional filter.',
        example: '.listnades smoke',
      },
      {
        command: '.loadnade',
        aliases: ['.ln'],
        description: 'Loads saved lineup.',
        example: '.loadnade smoke_mid',
      },
      {
        command: '.rethrow',
        aliases: ['.rt'],
        description: 'Rethrows last grenade.',
        example: '.rethrow'
      },
      {
        command: '.savenade',
        aliases: ['.sn'],
        description: 'Saves current lineup.',
        example: '.savenade smoke_a_main Smoke for A main',
      },
      {
        command: '.throwindex',
        description: 'Throws grenades from history positions.',
        example: '.throwindex 1 2',
      }
    ]
  },
  {
    title: 'Admin Commands',
    commands: [
      {
        command: '.ctname',
        description: 'Sets CT team name.',
        example: '.ctname TeamName',
      },
      {
        command: '.tname',
        description: 'Sets T team name.',
        example: '.tname TeamName',
      },
      {
        command: '.exitdry',
        description: 'Exits DryRun mode to Practice mode.',
        example: '.exitdry'
      },
      {
        command: '.exitprac',
        description: 'Exits Practice mode to Match mode.',
        example: '.exitprac'
      },
      {
        command: '.force',
        aliases: ['.start'],
        description: 'Starts the match while skipping the knife round.',
        example: '.force'
      },
      {
        command: '.forcepause',
        aliases: ['.fp'],
        description: 'Admin-pauses match (players cannot unpause).',
        example: '.forcepause'
      },
      {
        command: '.forceunpause',
        aliases: ['.fup'],
        description: 'Force-unpauses match.',
        example: '.forceunpause'
      },
      {
        command: '.knife',
        aliases: ['.rk', '.kr', '.kniferound'],
        description: 'Toggles knife round. If disabled, skips Warmup phase.',
        example: '.knife'
      },
      {
        command: '.match',
        description: 'Activates Match mode with knife round enabled.',
        example: '.match'
      },
      {
        command: '.prac',
        aliases: ['.tactics'],
        description: 'Starts Practice mode.',
        example: '.prac'
      },
      {
        command: '.readyrequired',
        description: 'Sets required ready players count.',
        example: '.readyrequired 10',
      },
      {
        command: '.restore',
        description: 'Restores specified round backup.',
        example: '.restore 5',
      },
      {
        command: '.restart',
        aliases: ['.end', '.endgame', '.endmatch', '.forceend', '.stopmatch'],
        description: 'Forcefully restarts/resets match.',
        example: '.restart'
      },
      {
        command: '.scrim',
        description: 'Activates Scrim mode (no knife round, all rounds played).',
        example: '.scrim'
      },
      {
        command: '.settings',
        description: 'Shows current match settings.',
        example: '.settings'
      }
    ]
  }
];

export default matchzyCommands;
