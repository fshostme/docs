---
slug: matchzy
id: cs2-plugins-matchzy
title: "MatchZy w/ Practice Mode"
---

import CommandSearch from '@site/src/components/CommandSearch';
import matchzyCommands from '@site/src/data/commands/matchzyCommands';

MatchZy is a plugin for CS2 that runs and manages practice/pugs/scrims/matches with easy configuration!

## What can MatchZy do?
MatchZy can solve a lot of match management requirements. It provides basic commands like `!ready`, `!unready`, `!pause`, `!unpause`, `!tac`, `!tech`, match stats, and much more!

**Feature highlights:**
- Practice Mode many more commands!
- Warmup with infinite money 🤑
- Knife round (With expected logic, i.e., the team with the most players wins. If the same number of players, then the team with HP advantage wins. If the same HP, the winner is decided randomly)
- Start live match (after knife winner makes side selection. Knife round can also be disabled by the `!kniferound`, `!kr` and `!rk` commands).
- Automatically starts demo recording and stops recording when the match is ended
- Coaching system - **(Coach need to join team, before `.coach ct` or `.coach t` work)**
- Damage report after every round
- Support for round restore (Currently using the vanilla valve's backup system)
- Provides easy configuration

## Usage Commands
Most of the commands can also be used using ! prefix instead of . (like !ready or /ready)

Use the search bar below to find a command:

<CommandSearch commandCategories={matchzyCommands} />
