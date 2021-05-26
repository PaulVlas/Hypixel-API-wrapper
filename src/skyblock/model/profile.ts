export interface Profile {
    profile_id: string
    members: Members
    community_upgrades: CommunityUpgrades
    banking?: Banking
    cute_name?: string
    game_mode?: string
}

interface CommunityUpgrades {
    currently_upgrading: string
    upgrade_states: UpgradeState[]
}

interface UpgradeState {
  upgrade: string;
  tier: number;
  started_ms: number;
  started_by: string;
  claimed_ms: number;
  claimed_by: string;
  fasttracked: boolean;
}

interface Banking {
    balance: number
    transactions: Transaction[]
}

interface Transaction {
  amount: number;
  timestamp: number;
  action: string;
  initiator_name: string;
}

interface Members {
    [uuid: string]: Member
}

interface Member {
    last_save: number
    inv_armor: Inventory
    first_join: number
    first_join_hub: number
    stats: Stats
    objectives: Objectives
    tutorial: string[]
    quests: Quests
    coin_purse: number
    last_death: number
    crafted_generators: string[]
    visited_zones: string[]
    fairy_souls_collected: number
    fairy_souls: number
    fairy_exchanges: number
    fishing_treasure_caught: number
    death_count: number
    achievement_spawned_island_types: string[]
    slayer_bosses: SlayerBosses
    pets: Pet[]
    dungeons: Dungeons
    griffin: Griffin
    jacob2: Jacob
    experimentation: Experimentation
    experience_skill_runecrafting: number
    experience_skill_mining: number
    unlocked_coll_tiers: string[]
    experience_skill_alchemy: number
    backpack_contents: Inventories
    quiver: Inventory
    experience_skill_taming: number
    sacks_counts: Sack
    talisman_bag: Inventory
    backpack_icons: Inventories
    experience_skill_combat: number
    fishing_bag: Inventory
    experience_skill_farming: number
    wardrobe_equipped_slot: number
    collection: Collection
    ender_chest_contents: Inventory
    wardrobe_contents: Inventory
    potion_bag: Inventory
    experience_skill_enchanting: number
    personal_vault_contents: Inventory
    experience_skill_fishing: number
    inv_contents: Inventory
    experience_skill_foraging: number
    candy_inventory_contents: Inventory
    experience_skill_carpentry: number
}

interface Inventories {
    [inventory_id: string]: Inventory
}

interface Inventory {
    type: number
    data: string
}

interface Stats {
    [stat: string]: number
}

interface Objectives {
    [objective: string]: Objective
}

interface Objective {
    status: string
    progress: number
    completed_at: number
    [objective: string]: any
}

interface Quests {
    [quest_name: string]: Quest
}

interface Quest {
    status: string
    activated_at: number
    activated_at_sb: number
    completed_at: number
    completed_at_sb: number
}

interface SlayerBosses {
    [boss_name: string]: SlayerBoss
}

interface SlayerBoss {
    claimed_levels: ClaimedLevels
    xp: number
    boss_kills_tier_0?: number
    boss_kills_tier_1?: number
    boss_kills_tier_2?: number
    boss_kills_tier_3?: number
    boss_kills_tier_4?: number
}

interface ClaimedLevels {
    [level: string]: boolean
}

interface Pet {
    uuid: string
    type: string
    exp: number
    active: boolean
    tier: string
    heldItem: string
    candyUsed: number
    skin: string
}

interface Dungeons {
    dungeon_types: DungeonTypes
    player_classes: DungeonClasses
    dungeon_journal: DungeonJournal
    dungeons_blah_blah: string[]
    selected_dungeon_class: string
}

interface DungeonTypes {
    [dungeon_name: string]: DungeonType
}

interface DungeonType {
    times_played?: FloorValues
    experience?: number
    tier_completions: FloorValues
    fastest_time: FloorValues
    best_runs: DungeonRuns
    best_score: FloorValues
    mobs_killed: FloorValues
    most_mobs_killed: FloorValues
    most_damage_berserk?: FloorValues
    most_healing?: FloorValues
    watcher_kills?: FloorValues
    highest_tier_completed: number
    most_damage_archer?: FloorValues
    fastest_time_s?: FloorValues
    fastest_time_s_plus?: FloorValues
    most_damage_mage?: FloorValues
    most_damage_healer?: FloorValues
    milestone_completions?: FloorValues
}

interface FloorValues {
    [floor: string]: number
}

interface DungeonRuns {
    [floor: string]: DungeonRun
}

interface DungeonRun {
    timestamp: number
    score_exploration: number
    score_speed: number
    score_skill: number
    score_bonus: number
    dungeon_class: string
    teammates: string[]
    elapsed_time: number
    damage_dealt: number
    deaths: number
    mobs_killed: number
    secrets_found: number
    damage_mitigated: number
    ally_healing: number
}

interface DungeonClasses {
    [class_name: string]: DungeonClass
}

interface DungeonClass {
    experience: number
}

interface DungeonJournal {
    journal_entries: JournalEntries
}

interface JournalEntries {
    [journal_name: string]: number[]
}

interface Griffin {
    burrows: Burrow[]
}

interface Burrow {
    ts: number
    x: number
    y: number
    z: number
    type: number
    tier: number
    chain: number
}

interface Jacob {
    medals_inv: Medals
    perks: any
    contests: Contests
    talked: boolean
    unique_golds2: string[]
}

interface Medals {
    bronze: number
    silver: number
    gold: number
}

interface Contests {
    [contest_id: string]: Contest
}

interface Contest {
    collected: number
    claimed_rewards?: boolean
    claimed_position?: number
    claimed_participants?: number
}

interface Experimentation {
    simon: Simon
    pairing: Pairings
    numbers: Numbers
    claims_resets: number
    claims_resets_timestamp: number
}

interface Simon {
  last_attempt: number;
  attempts_0: number;
  bonus_clicks: number;
  last_claimed: number;
  claims_0: number;
  best_score_0: number;
  attempts_1: number;
  claims_1: number;
  best_score_1: number;
  attempts_2: number;
  claims_2: number;
  best_score_2: number;
  attempts_3: number;
  claims_3: number;
  best_score_3: number;
  attempts_5: number;
  claims_5: number;
  best_score_5: number;
}

interface Pairings {
  last_claimed: number;
  claims_1: number;
  best_score_1: number;
  last_attempt: number;
  claims_2: number;
  best_score_2: number;
  claims_3: number;
  best_score_3: number;
  claims_4: number;
  best_score_4: number;
  claims_5: number;
  best_score_5: number;
}

interface Numbers {
  last_attempt: number;
  attempts_1: number;
  bonus_clicks: number;
  last_claimed: number;
  claims_1: number;
  best_score_1: number;
  attempts_2: number;
  claims_2: number;
  best_score_2: number;
  attempts_3: number;
  claims_3: number;
  best_score_3: number;
}

interface Sack {
    [item: string]: number
}

interface Collection {
    [collection: string]: number
}