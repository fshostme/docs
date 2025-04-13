---
slug: matchzy
id: cs2-plugins-matchzy
title: "MatchZy w/ Practice Mode"
description: "Comprehensive match management for CS2 servers with practice mode, knife rounds, and more"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

# MatchZy | CS2 Match Management Plugin

MatchZy is a plugin for CS2 that runs and manages practice/pugs/scrims/matches with easy configuration!

## What can MatchZy do?
MatchZy can solve a lot of match management requirements. It provides basic commands like `!ready`, `!unready`, `!pause`, `!unpause`, `!tac`, `!tech`, match stats, and much more!

**Feature highlights:**
- Practice Mode with many powerful commands
- Warmup with infinite money 🤑
- Knife round (With expected logic, i.e., the team with the most players wins. If the same number of players, then the team with HP advantage wins. If the same HP, the winner is decided randomly)
- Start live match (after knife winner makes side selection.
- Automatically starts demo recording and stops recording when the match is ended
- Coaching system - **(Coach need to join team, before `.coach ct` or `.coach t` work)**
- Damage report after every round
- Support for round restore (Currently using the vanilla valve's backup system)
- Provides easy configuration

<Admonition type="info">
  Most commands can be used with <code>.</code> prefix, <code>!</code> prefix, or <code>/</code> prefix (e.g., <code>.ready</code>, <code>!ready</code>, or <code>/ready</code>).
</Admonition>

## 🎮 Command Reference

<Tabs>
  <TabItem value="match" label="Match Control" default>
    <h3 className="command-category-header">🔄 Match Control Commands</h3>
    
    <div className="command-list">
      <div className="command-card">
        <div className="command-header">.ready</div>
        <div className="command-description">
          Marks you as ready to start the match. All players must be ready before the match can begin.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.ready</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.ready</div>
        </div>
      </div>

      <div className="command-card">
        <div className="command-header">.unready</div>
        <div className="command-description">
          Removes your ready status.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.unready</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.unready</div>
        </div>
      </div>

      <div className="command-card">
        <div className="command-header">.pause</div>
        <div className="command-description">
          Initiates a normal match pause during freezetime.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.pause</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.pause</div>
        </div>
      </div>

      <div className="command-card">
        <div className="command-header">.unpause</div>
        <div className="command-description">
          Requests to resume the match. Both teams must type .unpause to continue.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.unpause</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.unpause</div>
        </div>
      </div>

      <div className="command-card">
        <div className="command-header">.tech</div>
        <div className="command-description">
          Initiates a technical pause during freezetime for technical issues.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.tech</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.tech</div>
        </div>
      </div>

      <div className="command-card">
        <div className="command-header">.tac</div>
        <div className="command-description">
          Calls a tactical timeout for your team.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.tac</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.tac</div>
        </div>
      </div>

      <div className="command-card">
        <div className="command-header">.stop</div>
        <div className="command-description">
          Requests to restore the current round. Both teams must type .stop to restore.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.stop</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.stop</div>
        </div>
      </div>

      <div className="command-card">
        <div className="command-header">.coach</div>
        <div className="command-description">
          Starts coaching the specified team side (t/ct).
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.coach [side]</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.coach t</div>
        </div>
      </div>

      <div className="command-card">
        <div className="command-header">.uncoach</div>
        <div className="command-description">
          Leaves coaching slot.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.uncoach</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.uncoach</div>
        </div>
      </div>

      <div className="command-card">
        <div className="command-header">.stay</div>
        <div className="command-description">
          Stays on the same side after winning knife round.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.stay</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.stay</div>
        </div>
      </div>

      <div className="command-card">
        <div className="command-header">.switch</div>
        <div className="command-description">
          Switches sides after winning knife round.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.switch</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.switch</div>
        </div>
        <div className="command-aliases">
          <div className="aliases-label">Aliases:</div>
          <div className="aliases-list">.swap</div>
        </div>
      </div>
    </div>
  </TabItem>
  
  <TabItem value="practice" label="Practice Mode">
    <h3 className="command-category-header">🎮 Practice Mode Commands</h3>
    
    <div className="command-list">
      <div className="command-card">
        <div className="command-header">.back</div>
        <div className="command-description">
          Teleports to a specific position in grenade history.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.back [number]</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.back 1</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.bot</div>
        <div className="command-description">
          Adds a bot at your current position.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.bot</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.bot</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.nobot</div>
        <div className="command-description">
          Removes one bot each.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.nobot</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.nobot</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.nobots</div>
        <div className="command-description">
          Removes all the bots.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.nobots</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.nobots</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.crouchbot</div>
        <div className="command-description">
          Adds a crouched bot at your position.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.crouchbot</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.crouchbot</div>
        </div>
        <div className="command-aliases">
          <div className="aliases-label">Aliases:</div>
          <div className="aliases-list">.cbot</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.crouchboost</div>
        <div className="command-description">
          Adds crouched bot and boosts you on it.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.crouchboost</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.crouchboost</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.break</div>
        <div className="command-description">
          Breaks all breakable entities (glass, doors, vents).
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.break</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.break</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.breakrestore</div>
        <div className="command-description">
          Restore all breakable entities (glass, doors, vents).
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.breakrestore</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.breakrestore</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.dryrun</div>
        <div className="command-description">
          Enables dry-run mode for practice.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.dryrun</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.dryrun</div>
        </div>
        <div className="command-aliases">
          <div className="aliases-label">Aliases:</div>
          <div className="aliases-list">.dry</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.ct, .t, .spec</div>
        <div className="command-description">
          Changes to specified team.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.ct</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.ct</div>
        </div>
      </div>

      <div className="command-card">
        <div className="command-header">.god</div>
        <div className="command-description">
          Toggles god mode.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.god</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.god</div>
        </div>
      </div>
    </div>
    
    <h3 className="command-category-header">🧭 Spawn Management</h3>
    
    <div className="command-list">
      <div className="command-card">
        <div className="command-header">.ctspawn</div>
        <div className="command-description">
          Teleports to CT spawn position.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.ctspawn [number]</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.ctspawn 1</div>
        </div>
        <div className="command-aliases">
          <div className="aliases-label">Aliases:</div>
          <div className="aliases-list">.cts</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.tspawn</div>
        <div className="command-description">
          Teleports to T spawn position.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.tspawn [number]</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.tspawn 1</div>
        </div>
        <div className="command-aliases">
          <div className="aliases-label">Aliases:</div>
          <div className="aliases-list">.ts</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.spawn</div>
        <div className="command-description">
          Spawns to the provided competitive spawn number of same team.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.spawn [number]</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.spawn 1</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.bestspawn</div>
        <div className="command-description">
          Teleports you to your team closest spawn from your current position.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.bestspawn</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.bestspawn</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.worstspawn</div>
        <div className="command-description">
          Teleports you to your team furthest spawn from your current position.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.worstspawn</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.worstspawn</div>
        </div>
      </div>

      <div className="command-card">
        <div className="command-header">.showspawns</div>
        <div className="command-description">
          Highlights all the competitive spawns.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.showspawns</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.showspawns</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.hidespawns</div>
        <div className="command-description">
          Hides the highlighted spawns.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.hidespawns</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.hidespawns</div>
        </div>
      </div>
    </div>
  </TabItem>
  
  <TabItem value="grenade" label="Grenade Practice">
    <h3 className="command-category-header">💣 Grenade Practice Commands</h3>
    
    <div className="command-list">
      <div className="command-card">
        <div className="command-header">.rethrow</div>
        <div className="command-description">
          Rethrows your last thrown grenade.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.rethrow</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.rethrow</div>
        </div>
        <div className="command-aliases">
          <div className="aliases-label">Aliases:</div>
          <div className="aliases-list">.rt</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.last</div>
        <div className="command-description">
          Returns to last grenade throw position.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.last</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.last</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.delay</div>
        <div className="command-description">
          Sets delay for .rethrow or .throwindex.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.delay [seconds]</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.delay 5</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.throwindex</div>
        <div className="command-description">
          Throws grenades from history positions.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.throwindex [index1] [index2] [index3]</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.throwindex 1 2</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.savenade</div>
        <div className="command-description">
          Saves current lineup.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.savenade [name] [description]</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.savenade smoke_a_main Smoke for A main</div>
        </div>
        <div className="command-aliases">
          <div className="aliases-label">Aliases:</div>
          <div className="aliases-list">.sn</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.loadnade</div>
        <div className="command-description">
          Loads saved lineup.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.loadnade [name]</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.loadnade smoke_mid</div>
        </div>
        <div className="command-aliases">
          <div className="aliases-label">Aliases:</div>
          <div className="aliases-list">.ln</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.listnades</div>
        <div className="command-description">
          Lists saved lineups, optional filter.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.listnades [filter]</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.listnades smoke</div>
        </div>
        <div className="command-aliases">
          <div className="aliases-label">Aliases:</div>
          <div className="aliases-list">.lin</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.deletenade</div>
        <div className="command-description">
          Deletes saved lineup.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.deletenade [name]</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.deletenade smoke_a_site</div>
        </div>
        <div className="command-aliases">
          <div className="aliases-label">Aliases:</div>
          <div className="aliases-list">.dn</div>
        </div>
      </div>
    </div>
  </TabItem>

  <TabItem value="admin" label="Admin Controls">
    <h3 className="command-category-header">🛡️ Admin Commands</h3>
    
    <div className="command-list">
      <div className="command-card">
        <div className="command-header">.match</div>
        <div className="command-description">
          Activates Match mode with knife round enabled.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.match</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.match</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.prac</div>
        <div className="command-description">
          Starts Practice mode.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.prac</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.prac</div>
        </div>
        <div className="command-aliases">
          <div className="aliases-label">Aliases:</div>
          <div className="aliases-list">.tactics</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.scrim</div>
        <div className="command-description">
          Activates Scrim mode (no knife round, all rounds played).
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.scrim</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.scrim</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.knife</div>
        <div className="command-description">
          Toggles knife round. If disabled, skips Warmup phase.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.knife</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.knife</div>
        </div>
        <div className="command-aliases">
          <div className="aliases-label">Aliases:</div>
          <div className="aliases-list">.rk, .kr, .kniferound</div>
        </div>
      </div>

      <div className="command-card">
        <div className="command-header">.force</div>
        <div className="command-description">
          Starts the match while skipping the knife round.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.force</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.force</div>
        </div>
        <div className="command-aliases">
          <div className="aliases-label">Aliases:</div>
          <div className="aliases-list">.start</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.ctname</div>
        <div className="command-description">
          Sets CT team name.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.ctname [name]</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.ctname TeamName</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.tname</div>
        <div className="command-description">
          Sets T team name.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.tname [name]</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.tname TeamName</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.forcepause</div>
        <div className="command-description">
          Admin-pauses match (players cannot unpause).
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.forcepause</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.forcepause</div>
        </div>
        <div className="command-aliases">
          <div className="aliases-label">Aliases:</div>
          <div className="aliases-list">.fp</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.forceunpause</div>
        <div className="command-description">
          Force-unpauses match.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.forceunpause</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.forceunpause</div>
        </div>
        <div className="command-aliases">
          <div className="aliases-label">Aliases:</div>
          <div className="aliases-list">.fup</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.readyrequired</div>
        <div className="command-description">
          Sets required ready players count.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.readyrequired [count]</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.readyrequired 10</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.restart</div>
        <div className="command-description">
          Forcefully restarts/resets match.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.restart</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.restart</div>
        </div>
        <div className="command-aliases">
          <div className="aliases-label">Aliases:</div>
          <div className="aliases-list">.end, .endgame, .endmatch, .forceend, .stopmatch</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.restore</div>
        <div className="command-description">
          Restores specified round backup.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.restore [round]</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.restore 5</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.settings</div>
        <div className="command-description">
          Shows current match settings.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.settings</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.settings</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.exitprac</div>
        <div className="command-description">
          Exits Practice mode to Match mode.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.exitprac</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.exitprac</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.exitdry</div>
        <div className="command-description">
          Exits DryRun mode to Practice mode.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.exitdry</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.exitdry</div>
        </div>
      </div>
    </div>
  </TabItem>
  
  <TabItem value="utility" label="Utilities">
    <h3 className="command-category-header">🛠️ Utility Commands</h3>
    
    <div className="command-list">
      <div className="command-card">
        <div className="command-header">.clear</div>
        <div className="command-description">
          Removes all active utility (smokes, molotovs, incendiaries).
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.clear</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.clear</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.fastforward</div>
        <div className="command-description">
          Fast-forwards server time to 20 seconds.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.fastforward</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.fastforward</div>
        </div>
        <div className="command-aliases">
          <div className="aliases-label">Aliases:</div>
          <div className="aliases-list">.ff</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.impacts</div>
        <div className="command-description">
          Toggles sv_showimpacts.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.impacts</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.impacts</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.solid</div>
        <div className="command-description">
          Toggles mp_solid_teammates.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.solid</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.solid</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.traj</div>
        <div className="command-description">
          Toggles sv_grenade_trajectory_prac_pipreview.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.traj</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.traj</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.timer</div>
        <div className="command-description">
          Starts a timer immediately and stops it when you type .timer again, telling you the duration of time.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.timer</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.timer</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.noflash</div>
        <div className="command-description">
          Toggles immunity for flashbang.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.noflash</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.noflash</div>
        </div>
        <div className="command-aliases">
          <div className="aliases-label">Aliases:</div>
          <div className="aliases-list">.noblind</div>
        </div>
      </div>
      
      <div className="command-card">
        <div className="command-header">.watchme</div>
        <div className="command-description">
          Forces all players into spectator except the player who called this command.
        </div>
        <div className="command-syntax">
          <div className="syntax-label">Syntax:</div>
          <div className="syntax-code">.watchme</div>
        </div>
        <div className="command-example">
          <div className="example-label">Example:</div>
          <div className="example-code">.watchme</div>
        </div>
        <div className="command-aliases">
          <div className="aliases-label">Aliases:</div>
          <div className="aliases-list">.fas</div>
        </div>
      </div>
    </div>
  </TabItem>
</Tabs>

<style>
{`
/* Dark Theme Command Layout Styles */
.command-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 30px;
}

.command-card {
  background-color: #1e1e1e;
  border-left: 4px solid #4caf50;
  border-radius: 4px;
  overflow: hidden;
  padding: 0;
}

.command-header {
  background-color: #2d2d2d;
  color: #4caf50;
  font-family: monospace;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
}

.command-description {
  color: #e0e0e0;
  padding: 12px 16px;
  border-bottom: 1px solid #333;
}

.command-syntax, .command-example, .command-aliases {
  display: flex;
  padding: 8px 16px;
  border-bottom: 1px solid #333;
}

.command-syntax:last-child, .command-example:last-child, .command-aliases:last-child {
  border-bottom: none;
}

.syntax-label, .example-label, .aliases-label {
  color: #9e9e9e;
  width: 80px;
  font-weight: bold;
}

.syntax-code, .example-code, .aliases-list {
  color: #e0e0e0;
  font-family: monospace;
  background-color: #333;
  padding: 2px 6px;
  border-radius: 3px;
}

.command-category-header {
  color: #e0e0e0;
  margin-top: 30px;
  margin-bottom: 16px;
  border-bottom: 1px solid #4caf50;
  padding-bottom: 8px;
}

:root {
  --ifm-color-primary: #4caf50;
}

.tab-item-active {
  background-color: #2d2d2d !important;
}
`}
</style>
