// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {


//地下城武器！！！


//双刃斧
event.recipes.createSequencedAssembly([ 
'mcdw:axe_double', 
], 'mcdw:axe_axe', [
event.recipes.createDeploying('mcdw:axe_axe', ['mcdw:axe_axe', 'mcdw:axe_axe']), 
event.recipes.createDeploying('mcdw:axe_axe', ['mcdw:axe_axe', 'minecraft:slime_ball']), 
event.recipes.createDeploying('mcdw:axe_axe', ['mcdw:axe_axe', 'minecraft:iron_block']), 
event.recipes.createPressing('mcdw:axe_axe', 'mcdw:axe_axe').processingTime(50)
]).transitionalItem('mcdw:axe_axe').loops(1)

//旋风斧
event.recipes.createSequencedAssembly([ 
	'mcdw:axe_whirlwind', 
	], 'mcdw:axe_double', [
	event.recipes.createDeploying('mcdw:axe_double', ['mcdw:axe_double', 'minecraft:feather']), 
	event.recipes.createDeploying('mcdw:axe_double', ['mcdw:axe_double','minecraft:phantom_membrane']), 
	event.recipes.createPressing('mcdw:axe_double', 'mcdw:axe_double').processingTime(50)
	]).transitionalItem('mcdw:axe_double').loops(2)

//高地之斧
event.recipes.createSequencedAssembly([ 
'mcdw:axe_highland', 
], Item.of('mcdw:axe_axe').weakNBT(), [
event.recipes.createDeploying('mcdw:axe_axe', ['mcdw:axe_axe', 'minecraft:iron_ingot']), 
event.recipes.createPressing('mcdw:axe_axe', 'mcdw:axe_axe').processingTime(50)
]).transitionalItem('mcdw:axe_axe').loops(3)

//烙火
event.recipes.createSequencedAssembly([ 
	'mcdw:axe_firebrand', 
	], 'mcdw:axe_axe', [
	event.recipes.createDeploying('mcdw:axe_axe', ['mcdw:axe_axe', 'minecraft:blaze_powder']),
	event.recipes.createDeploying('mcdw:axe_axe', ['mcdw:axe_axe', '#twilightforest:fiery_vial']), 
	event.recipes.createPressing('mcdw:axe_axe', 'mcdw:axe_axe').processingTime(50)
	]).transitionalItem('mcdw:axe_axe').loops(1)

//剪刀匕首
event.recipes.createSequencedAssembly([ 
	'mcdw:dagger_shear_dagger', 
	], 'mcdw:dagger_dagger', [
	event.recipes.createDeploying('mcdw:dagger_dagger', ['mcdw:dagger_dagger', 'minecraft:shears']),
	event.recipes.createPressing('mcdw:dagger_dagger', 'mcdw:dagger_dagger').processingTime(50)
	]).transitionalItem('mcdw:dagger_dagger').loops(1)

//灵魂之刃
event.recipes.createSequencedAssembly([ 
	'mcdw:dagger_soul_knife', 
	], 'mcdw:dagger_dagger', [
	event.recipes.createDeploying('mcdw:dagger_dagger', ['mcdw:dagger_dagger', 'minecraft:soul_sand']),
	event.recipes.createDeploying('mcdw:dagger_dagger', ['mcdw:dagger_dagger', 'minecraft:soul_lantern']), 
	event.recipes.createPressing('mcdw:dagger_dagger', 'mcdw:dagger_dagger').processingTime(50)
	]).transitionalItem('mcdw:dagger_dagger').loops(4)

//呢喃矛
event.recipes.createSequencedAssembly([ 
	'mcdw:spear_whispering_spear', 
	], 'mcdw:spear_spear', [
	event.recipes.createDeploying('mcdw:spear_spear', ['mcdw:spear_spear', 'minecraft:diamond']),
	event.recipes.createDeploying('mcdw:spear_spear', ['mcdw:spear_spear', 'minecraft:prismarine_crystals']), 
	event.recipes.createPressing('mcdw:spear_spear', 'mcdw:spear_spear').processingTime(50)
	]).transitionalItem('mcdw:spear_spear').loops(2)

//呢喃矛
event.recipes.createSequencedAssembly([ 
	'mcdw:spear_whispering_spear', 
	], 'mcdw:spear_spear', [
	event.recipes.createDeploying('mcdw:spear_spear', ['mcdw:spear_spear', 'minecraft:diamond']),
	event.recipes.createDeploying('mcdw:spear_spear', ['mcdw:spear_spear', 'minecraft:prismarine_crystals']), 
	event.recipes.createPressing('mcdw:spear_spear', 'mcdw:spear_spear').processingTime(50)
	]).transitionalItem('mcdw:spear_spear').loops(2)

//幸运长矛
event.recipes.createSequencedAssembly([ 
	'mcdw:spear_fortune', 
	], 'mcdw:spear_spear', [
	event.recipes.createDeploying('mcdw:spear_spear', ['mcdw:spear_spear', 'minecraft:gold_ingot']),
	event.recipes.createDeploying('mcdw:spear_spear', ['mcdw:spear_spear', 'minecraft:rabbit_foot']), 
	event.recipes.createPressing('mcdw:spear_spear', 'mcdw:spear_spear').processingTime(50)
	]).transitionalItem('mcdw:spear_spear').loops(1)

//永恒之刃
event.recipes.createSequencedAssembly([ 
	'mcdw:dagger_eternal_knife' 
	], 'mcdw:dagger_soul_knife', [
	event.recipes.createDeploying('mcdw:dagger_soul_knife', ['mcdw:dagger_soul_knife', 'betterend:eternal_crystal']),
	event.recipes.createDeploying('mcdw:dagger_soul_knife', ['mcdw:dagger_soul_knife', 'minecraft:crying_obsidian']),
	event.recipes.createDeploying('mcdw:dagger_soul_knife', ['mcdw:dagger_soul_knife', 'minecraft:wither_skeleton_skull']),
	event.recipes.createPressing('mcdw:dagger_soul_knife', 'mcdw:dagger_soul_knife').processingTime(50)
	]).transitionalItem('mcdw:dagger_soul_knife').loops(1)

//坚挺暴风刃
event.recipes.createSequencedAssembly([ 
	'mcdw:dagger_moon'
	], 'mcdw:dagger_tempest_knife', [
	event.recipes.createDeploying('mcdw:dagger_tempest_knife', ['mcdw:dagger_tempest_knife', 'minecraft:gold_ingot']),
	event.recipes.createDeploying('mcdw:dagger_tempest_knife', ['mcdw:dagger_tempest_knife', 'minecraft:diamond']), 
	event.recipes.createPressing('mcdw:dagger_tempest_knife', 'mcdw:dagger_tempest_knife').processingTime(50)
	]).transitionalItem('mcdw:dagger_tempest_knife').loops(2)

//霜风之刃
event.recipes.createSequencedAssembly([ 
	'mcdw:dagger_chill_gale_knife'
	], 'mcdw:dagger_resolute_tempest_knife', [
	event.recipes.createDeploying('mcdw:dagger_tempest_knife', ['mcdw:dagger_tempest_knife', 'minecraft:gold_ingot']),
	event.recipes.createDeploying('mcdw:dagger_tempest_knife', ['mcdw:dagger_tempest_knife', 'minecraft:diamond']),
	event.recipes.createDeploying('mcdw:dagger_tempest_knife', ['mcdw:dagger_tempest_knife', 'betterend:dense_snow']), 
	event.recipes.createPressing('mcdw:dagger_tempest_knife', 'mcdw:dagger_tempest_knife').processingTime(50)
	]).transitionalItem('mcdw:dagger_tempest_knife').loops(3)

//虚空之蚀
event.recipes.createSequencedAssembly([ 
	'mcdw:dagger_void_touched_blade'
	], 'mcdw:dagger_moon', [
	event.recipes.createDeploying('mcdw:dagger_moon', ['mcdw:dagger_moon', 'betterend:crystal_shards']),
	event.recipes.createDeploying('mcdw:dagger_moon', ['mcdw:dagger_moon', 'minecraft:diamond']),
	event.recipes.createPressing('mcdw:dagger_moon', 'mcdw:dagger_moon').processingTime(50)
	]).transitionalItem('mcdw:dagger_moon').loops(3)

//始
event.recipes.createSequencedAssembly([ 
	'mcdw:dagger_the_beginning'
	], 'mcdw:dagger_void_touched_blade', [
	event.recipes.createDeploying('mcdw:dagger_void_touched_blade', ['mcdw:dagger_void_touched_blade', 'minecraft:ender_pearl']),
	event.recipes.createDeploying('mcdw:dagger_void_touched_blade', ['mcdw:dagger_void_touched_blade', 'betterend:crystal_shards']),
	event.recipes.createDeploying('mcdw:dagger_void_touched_blade', ['mcdw:dagger_void_touched_blade', 'minecraft:gold_ingot']),
	event.recipes.createPressing('mcdw:dagger_void_touched_blade', 'mcdw:dagger_void_touched_blade').processingTime(50)
	]).transitionalItem('mcdw:dagger_void_touched_blade').loops(3)

//末
event.recipes.createSequencedAssembly([ 
	'mcdw:dagger_the_end'
	], 'mcdw:dagger_void_touched_blade', [
	event.recipes.createDeploying('mcdw:dagger_void_touched_blade', ['mcdw:dagger_void_touched_blade', 'minecraft:ender_eye']),
	event.recipes.createDeploying('mcdw:dagger_void_touched_blade', ['mcdw:dagger_void_touched_blade', 'betterend:crystal_shards']),
	event.recipes.createDeploying('mcdw:dagger_void_touched_blade', ['mcdw:dagger_void_touched_blade', 'minecraft:gold_ingot']),
	event.recipes.createPressing('mcdw:dagger_void_touched_blade', 'mcdw:dagger_void_touched_blade').processingTime(50)
	]).transitionalItem('mcdw:dagger_void_touched_blade').loops(3)

//背刺利刃
event.recipes.createSequencedAssembly([ 
	'mcdw:dagger_backstabber'
	], 'mcdw:dagger_moon', [
	event.recipes.createDeploying('mcdw:dagger_moon', ['mcdw:dagger_moon', 'minecraft:popped_chorus_fruit']),
	event.recipes.createDeploying('mcdw:dagger_moon', ['mcdw:dagger_moon', 'minecraft:gold_ingot']),
	event.recipes.createPressing('mcdw:dagger_moon', 'mcdw:dagger_moon').processingTime(50)
	]).transitionalItem('mcdw:dagger_moon').loops(3)

//迅捷利刃
event.recipes.createSequencedAssembly([ 
	'mcdw:dagger_swift_striker'
	], 'mcdw:dagger_backstabber', [
	event.recipes.createDeploying('mcdw:dagger_backstabber', ['mcdw:dagger_backstabber', 'betterend:crystal_shards']),
	event.recipes.createDeploying('mcdw:dagger_backstabber', ['mcdw:dagger_backstabber', 'minecraft:diamond']),
	event.recipes.createPressing('mcdw:dagger_backstabber', 'mcdw:dagger_backstabber').processingTime(50)
	]).transitionalItem('mcdw:dagger_backstabber').loops(3)

//灵魂拳套
event.recipes.createSequencedAssembly([ 
	'mcdw:gauntlet_soul_fists'
	], 'mcdw:gauntlet_gauntlet', [
	event.recipes.createDeploying('mcdw:gauntlet_gauntlet', ['mcdw:gauntlet_gauntlet', 'minecraft:experience_bottle']),
	event.recipes.createDeploying('mcdw:gauntlet_gauntlet', ['mcdw:gauntlet_gauntlet', 'minecraft:gold_ingot']),
	event.recipes.createDeploying('mcdw:gauntlet_gauntlet', ['mcdw:gauntlet_gauntlet', 'minecraft:gold_ingot']),
	event.recipes.createDeploying('mcdw:gauntlet_gauntlet', ['mcdw:gauntlet_gauntlet', 'minecraft:gold_ingot']),
	event.recipes.createPressing('mcdw:gauntlet_gauntlet', 'mcdw:gauntlet_gauntlet').processingTime(50)
	]).transitionalItem('mcdw:gauntlet_gauntlet').loops(1)

//撕裂者
event.recipes.createSequencedAssembly([ 
	'mcdw:gauntlet_maulers'
	], 'mcdw:gauntlet_gauntlet', [
	event.recipes.createDeploying('mcdw:gauntlet_gauntlet', ['mcdw:gauntlet_gauntlet', 'minecraft:leather']),
	event.recipes.createDeploying('mcdw:gauntlet_gauntlet', ['mcdw:gauntlet_gauntlet', 'minecraft:bone']),
	event.recipes.createPressing('mcdw:gauntlet_gauntlet', 'mcdw:gauntlet_gauntlet').processingTime(50)
	]).transitionalItem('mcdw:gauntlet_gauntlet').loops(9)

//舞者之剑
event.recipes.createSequencedAssembly([ 
	'mcdw:sword_dancers_sword'
	], 'mcdw:sword_cutlass', [
	event.recipes.createDeploying('mcdw:sword_cutlass', ['mcdw:sword_cutlass', 'mcdw:sword_cutlass']),
	event.recipes.createDeploying('mcdw:sword_cutlass', ['mcdw:sword_cutlass', 'minecraft:slime_ball']),
	event.recipes.createDeploying('mcdw:sword_cutlass', ['mcdw:sword_cutlass', 'minecraft:leather']),
	event.recipes.createPressing('mcdw:sword_cutlass', 'mcdw:sword_cutlass').processingTime(50)
	]).transitionalItem('mcdw:sword_cutlass').loops(1)

//无名之刃
event.recipes.createSequencedAssembly([ 
	'mcdw:sword_nameless_blade'
	], 'mcdw:sword_cutlass', [
	event.recipes.createDeploying('mcdw:sword_cutlass', ['mcdw:sword_cutlass', 'minecraft:polished_blackstone']),
	event.recipes.createDeploying('mcdw:sword_cutlass', ['mcdw:sword_cutlass', 'minecraft:polished_blackstone']),
	event.recipes.createDeploying('mcdw:sword_cutlass', ['mcdw:sword_cutlass', 'minecraft:polished_blackstone']),
	event.recipes.createDeploying('mcdw:sword_cutlass', ['mcdw:sword_cutlass', 'minecraft:name_tag']),
	event.recipes.createPressing('mcdw:sword_cutlass', 'mcdw:sword_cutlass').processingTime(50)
	]).transitionalItem('mcdw:sword_cutlass').loops(1)

//恐怖之杖
event.recipes.createSequencedAssembly([ 
	'mcdw:staff_battlestaff_of_terror'
	], 'mcdw:staff_battlestaff', [
	event.recipes.createDeploying('mcdw:staff_battlestaff', ['mcdw:staff_battlestaff', 'minecraft:gunpowder']),
	event.recipes.createDeploying('mcdw:staff_battlestaff', ['mcdw:staff_battlestaff', 'minecraft:iron_ingot']),
	event.recipes.createPressing('mcdw:staff_battlestaff', 'mcdw:staff_battlestaff').processingTime(50)
	]).transitionalItem('mcdw:staff_battlestaff').loops(3)

//长生之杖
event.recipes.createSequencedAssembly([ 
	'mcdw:staff_growing_staff'
	], 'mcdw:staff_battlestaff', [
	event.recipes.createDeploying('mcdw:staff_battlestaff', ['mcdw:staff_battlestaff', 'minecraft:string']),
	event.recipes.createDeploying('mcdw:staff_battlestaff', ['mcdw:staff_battlestaff', 'minecraft:gold_ingot']),
	event.recipes.createPressing('mcdw:staff_battlestaff', 'mcdw:staff_battlestaff').processingTime(50)
	]).transitionalItem('mcdw:staff_battlestaff').loops(3)

//蜜蜂毒刺
event.recipes.createSequencedAssembly([ 
	'mcdw:sword_beestinger'
	], 'mcdw:sword_rapier', [
	event.recipes.createDeploying('mcdw:sword_rapier', ['mcdw:sword_rapier', 'mcdw:item_bee_stinger']),
	event.recipes.createDeploying('mcdw:sword_rapier', ['mcdw:sword_rapier', 'minecraft:gold_ingot']),
	event.recipes.createDeploying('mcdw:sword_rapier', ['mcdw:sword_rapier', 'minecraft:gold_ingot']),
	event.recipes.createDeploying('mcdw:sword_rapier', ['mcdw:sword_rapier', 'minecraft:gold_ingot']),
	event.recipes.createPressing('mcdw:sword_rapier', 'mcdw:sword_rapier').processingTime(50)
	]).transitionalItem('mcdw:sword_rapier').loops(1)

//冷冻花剑
event.recipes.createSequencedAssembly([ 
	'mcdw:sword_freezing_foil'
	], 'mcdw:sword_rapier', [
	event.recipes.createDeploying('mcdw:sword_rapier', ['mcdw:sword_rapier', 'betterend:ancient_emerald_ice']),
	event.recipes.createPressing('mcdw:sword_rapier', 'mcdw:sword_rapier').processingTime(50)
	]).transitionalItem('mcdw:sword_rapier').loops(9)

//弑墓者
event.recipes.createSequencedAssembly([ 
	'mcdw:spear_grave_bane'
	], 'mcdw:spear_glaive', [
	event.recipes.createDeploying('mcdw:spear_glaive', ['mcdw:spear_glaive', 'minecraft:gold_ingot']),
	event.recipes.createDeploying('mcdw:spear_glaive', ['mcdw:spear_glaive', 'minecraft:soul_sand']),
	event.recipes.createPressing('mcdw:spear_glaive', 'mcdw:spear_glaive').processingTime(50)
	]).transitionalItem('mcdw:spear_glaive').loops(3)

//剧毒长刀
event.recipes.createSequencedAssembly([ 
	'mcdw:spear_venom_glaive'
	], 'mcdw:spear_glaive', [
	event.recipes.createDeploying('mcdw:spear_glaive', ['mcdw:spear_glaive', 'twilightforest:fiddlehead']),
	event.recipes.createDeploying('mcdw:spear_glaive', ['mcdw:spear_glaive', 'minecraft:poisonous_potato']),
	event.recipes.createPressing('mcdw:spear_glaive', 'mcdw:spear_glaive').processingTime(50)
	]).transitionalItem('mcdw:spear_glaive').loops(3)

//大骨棍
event.recipes.createSequencedAssembly([ 
	'mcdw:hammer_boneclub'
	], 'minecraft:bone', [
	event.recipes.createDeploying('minecraft:bone', ['minecraft:bone', 'minecraft:bone_block']),
	event.recipes.createDeploying('minecraft:bone', ['minecraft:bone', 'minecraft:string']),
	event.recipes.createPressing('minecraft:bone', 'minecraft:bone').processingTime(50)
	]).transitionalItem('minecraft:bone').loops(3)

//大骨棒
event.recipes.createSequencedAssembly([ 
	'mcdw:hammer_bone_cudgel'
	], 'mcdw:hammer_boneclub', [
	event.recipes.createDeploying('mcdw:hammer_boneclub', ['mcdw:hammer_boneclub', 'minecraft:bone_block']),
	event.recipes.createDeploying('mcdw:hammer_boneclub', ['mcdw:hammer_boneclub', 'minecraft:netherite_scrap']),
	event.recipes.createPressing('mcdw:hammer_boneclub', 'mcdw:hammer_boneclub').processingTime(50)
	]).transitionalItem('mcdw:hammer_boneclub').loops(4)

//日之恩惠
event.recipes.createSequencedAssembly([ 
	'mcdw:hammer_suns_grace'
	], 'mcdw:hammer_mace', [
	event.recipes.createDeploying('mcdw:hammer_mace', ['mcdw:hammer_mace', 'minecraft:gold_block']),
	event.recipes.createDeploying('mcdw:hammer_mace', ['mcdw:hammer_mace', 'twilightforest:charm_of_life_1']),
	event.recipes.createPressing('mcdw:hammer_mace', 'mcdw:hammer_mace').processingTime(50)
	]).transitionalItem('mcdw:hammer_mace').loops(1)

//链锤
event.recipes.createSequencedAssembly([ 
	'mcdw:hammer_flail'
	], 'mcdw:hammer_mace', [
	event.recipes.createDeploying('mcdw:hammer_mace', ['mcdw:hammer_mace', 'minecraft:stick']),
	event.recipes.createDeploying('mcdw:hammer_mace', ['mcdw:hammer_mace', 'twilightforest:knightmetal_ring']),
	event.recipes.createPressing('mcdw:hammer_mace', 'mcdw:hammer_mace').processingTime(50)
	]).transitionalItem('mcdw:hammer_mace').loops(1)

//引力之锤
event.recipes.createSequencedAssembly([ 
	'mcdw:hammer_gravity'
	], 'mcdw:hammer_great_hammer', [
	event.recipes.createDeploying('mcdw:hammer_great_hammer', ['mcdw:hammer_great_hammer', 'minecraft:ender_eye']),
	event.recipes.createDeploying('mcdw:hammer_great_hammer', ['mcdw:hammer_great_hammer', 'minecraft:anvil']),
	event.recipes.createDeploying('mcdw:hammer_great_hammer', ['mcdw:hammer_great_hammer', 'minecraft:purpur_block']),
	event.recipes.createPressing('mcdw:hammer_great_hammer', 'mcdw:hammer_great_hammer').processingTime(50)
	]).transitionalItem('mcdw:hammer_great_hammer').loops(4)

//雷霆之锤
event.recipes.createSequencedAssembly([ 
	'mcdw:hammer_stormlander'
	], 'mcdw:hammer_great_hammer', [
	event.recipes.createDeploying('mcdw:hammer_great_hammer', ['mcdw:hammer_great_hammer', 'minecraft:creeper_head']),
	event.recipes.createDeploying('mcdw:hammer_great_hammer', ['mcdw:hammer_great_hammer', 'minecraft:copper_block']),
	event.recipes.createDeploying('mcdw:hammer_great_hammer', ['mcdw:hammer_great_hammer', 'minecraft:redstone_block']),
	event.recipes.createDeploying('mcdw:hammer_great_hammer', ['mcdw:hammer_great_hammer', 'minecraft:anvil']),
	event.recipes.createPressing('mcdw:hammer_great_hammer', 'mcdw:hammer_great_hammer').processingTime(50)
	]).transitionalItem('mcdw:hammer_great_hammer').loops(1)

//嗥镐
event.recipes.createSequencedAssembly([ 
	'mcdw:pick_howling_pick'
	], 'mcdw:pick_mountaineer_pick', [
	event.recipes.createDeploying('mcdw:pick_mountaineer_pick', ['mcdw:pick_mountaineer_pick', 'minecraft:black_dye']),
	event.recipes.createDeploying('mcdw:pick_mountaineer_pick', ['mcdw:pick_mountaineer_pick', 'minecraft:yellow_dye']),
	event.recipes.createPressing('mcdw:pick_mountaineer_pick', 'mcdw:pick_mountaineer_pick').processingTime(50)
	]).transitionalItem('mcdw:pick_mountaineer_pick').loops(3)

//冰雹峰顶
event.recipes.createSequencedAssembly([ 
	'mcdw:pick_hailing_pinnacle'
	], 'mcdw:pick_howling_pick', [
	event.recipes.createDeploying('mcdw:pick_howling_pick', ['mcdw:pick_howling_pick', 'betterend:ancient_emerald_ice']),
	event.recipes.createDeploying('mcdw:pick_howling_pick', ['mcdw:pick_howling_pick', 'minecraft:diamond']),
	event.recipes.createDeploying('mcdw:pick_howling_pick', ['mcdw:pick_howling_pick', 'betterend:ancient_emerald_ice']),
	event.recipes.createPressing('mcdw:pick_howling_pick', 'mcdw:pick_howling_pick').processingTime(50)
	]).transitionalItem('mcdw:pick_howling_pick').loops(1)

//梦魇之噬
event.recipes.createSequencedAssembly([ 
	'mcdw:sickle_nightmares_bite'
	], 'mcdw:sickle_sickle', [
	event.recipes.createDeploying('mcdw:sickle_sickle', ['mcdw:sickle_sickle', 'minecraft:poisonous_potato']),
	event.recipes.createDeploying('mcdw:sickle_sickle', ['mcdw:sickle_sickle', 'minecraft:iron_ingot']),
	event.recipes.createPressing('mcdw:sickle_sickle', 'mcdw:sickle_sickle').processingTime(50)
	]).transitionalItem('mcdw:sickle_sickle').loops(3)

//冰霜长镰
event.recipes.createSequencedAssembly([ 
	'mcdw:sickle_frost_scythe'
	], 'mcdw:sickle_sickle', [
	event.recipes.createDeploying('mcdw:sickle_sickle', ['mcdw:sickle_sickle', 'betterend:ancient_emerald_ice']),
	event.recipes.createPressing('mcdw:sickle_sickle', 'mcdw:sickle_sickle').processingTime(50)
	]).transitionalItem('mcdw:sickle_sickle').loops(9)

//狱卒之镰
event.recipes.createSequencedAssembly([ 
	'mcdw:sickle_jailors_scythe'
	], 'mcdw:sickle_sickle', [
	event.recipes.createDeploying('mcdw:sickle_sickle', ['mcdw:sickle_sickle', 'minecraft:iron_ingot']),
	event.recipes.createDeploying('mcdw:sickle_sickle', ['mcdw:sickle_sickle', 'minecraft:iron_ingot']),
	event.recipes.createDeploying('mcdw:sickle_sickle', ['mcdw:sickle_sickle', 'minecraft:iron_ingot']),
	event.recipes.createDeploying('mcdw:sickle_sickle', ['mcdw:sickle_sickle', 'twilightforest:knightmetal_ring']),
	event.recipes.createPressing('mcdw:sickle_sickle', 'mcdw:sickle_sickle').processingTime(50)
	]).transitionalItem('mcdw:sickle_sickle').loops(1)

//骷髅长镰
event.recipes.createSequencedAssembly([ 
	'mcdw:sickle_skull_scythe'
	], 'mcdw:sickle_sickle', [
	event.recipes.createDeploying('mcdw:sickle_sickle', ['mcdw:sickle_sickle', 'minecraft:bone']),
	event.recipes.createDeploying('mcdw:sickle_sickle', ['mcdw:sickle_sickle', 'minecraft:bone']),
	event.recipes.createDeploying('mcdw:sickle_sickle', ['mcdw:sickle_sickle', 'minecraft:bone']),
	event.recipes.createDeploying('mcdw:sickle_sickle', ['mcdw:sickle_sickle', 'minecraft:netherite_scrap']),
	event.recipes.createPressing('mcdw:sickle_sickle', 'mcdw:sickle_sickle').processingTime(50)
	]).transitionalItem('mcdw:sickle_sickle').loops(1)

//灵魂长镰
event.recipes.createSequencedAssembly([ 
	'mcdw:sickle_soul_scythe'
	], 'mcdw:sickle_sickle', [
	event.recipes.createDeploying('mcdw:sickle_sickle', ['mcdw:sickle_sickle', 'minecraft:experience_bottle']),
	event.recipes.createDeploying('mcdw:sickle_sickle', ['mcdw:sickle_sickle', 'minecraft:netherite_scrap']),
	event.recipes.createPressing('mcdw:sickle_sickle', 'mcdw:sickle_sickle').processingTime(50)
	]).transitionalItem('mcdw:sickle_sickle').loops(4)

//破损锯剑
event.shaped('mcdw:sword_broken_sawblade', [
                ' AB',
                'ABA',
                'CA '
          ], {
                A:'minecraft:iron_nugget',
				B:'minecraft:deepslate',
				C:'minecraft:stick'
          })

//机械锯剑
event.recipes.createSequencedAssembly([ 
	'mcdw:sword_mechanized_sawblade'
	], 'mcdw:sword_broken_sawblade', [
	event.recipes.createDeploying('mcdw:sword_broken_sawblade', ['mcdw:sword_broken_sawblade', 'minecraft:blaze_powder']),
	event.recipes.createPressing('mcdw:sword_broken_sawblade', 'mcdw:sword_broken_sawblade').processingTime(50)
	]).transitionalItem('mcdw:sword_broken_sawblade').loops(1)

//大师武士刀
event.recipes.createSequencedAssembly([ 
	'mcdw:sword_masters_katana'
	], 'mcdw:sword_katana', [
	event.recipes.createDeploying('mcdw:sword_katana', ['mcdw:sword_katana', 'betterend:raw_amber']),
	event.recipes.createPressing('mcdw:sword_katana', 'mcdw:sword_katana').processingTime(50)
	]).transitionalItem('mcdw:sword_katana').loops(9)

//鞭子
event.recipes.createSequencedAssembly([ 
	'mcdw:sword_dark_katana'
	], 'mcdw:sword_masters_katana', [
	event.recipes.createDeploying('mcdw:sword_masters_katana', ['mcdw:sword_masters_katana', 'minecraft:netherite_scrap']),
	event.recipes.createPressing('mcdw:sword_masters_katana', 'mcdw:sword_masters_katana').processingTime(50)
	]).transitionalItem('mcdw:sword_masters_katana').loops(4)

//藤蔓长鞭
event.recipes.createSequencedAssembly([ 
	'mcdw:whip_vine_whip'
	], 'mcdw:whip_whip', [
	event.recipes.createDeploying('mcdw:whip_whip', ['mcdw:whip_whip', 'minecraft:vine']),
	event.recipes.createDeploying('mcdw:whip_whip', ['mcdw:whip_whip', 'minecraft:vine']),
	event.recipes.createDeploying('mcdw:whip_whip', ['mcdw:whip_whip', 'minecraft:vine']),
	event.recipes.createDeploying('mcdw:whip_whip', ['mcdw:whip_whip', 'twilightforest:steeleaf_ingot']),
	event.recipes.createPressing('mcdw:whip_whip', 'mcdw:whip_whip').processingTime(50)
	]).transitionalItem('mcdw:whip_whip').loops(1)

//珊瑚之刃
event.recipes.createSequencedAssembly([ 
	'mcdw:sword_coral_blade'
	], 'mcdw:dagger_dagger', [
	event.recipes.createDeploying('mcdw:dagger_dagger', ['mcdw:dagger_dagger', 'minecraft:brain_coral']),
	event.recipes.createPressing('mcdw:dagger_dagger', 'mcdw:dagger_dagger').processingTime(50)
	]).transitionalItem('mcdw:dagger_dagger').loops(9)

//海绵刺刃
event.recipes.createSequencedAssembly([ 
	'mcdw:sword_sponge_striker'
	], 'mcdw:sword_coral_blade', [
	event.recipes.createDeploying('mcdw:sword_coral_blade', ['mcdw:sword_coral_blade', 'minecraft:sponge']),
	event.recipes.createPressing('mcdw:sword_coral_blade', 'mcdw:sword_coral_blade').processingTime(50)
	]).transitionalItem('mcdw:sword_coral_blade').loops(9)
	
//覆藤船锚
event.recipes.createSequencedAssembly([ 
	'mcdw:axe_encrusted_anchor'
	], 'mcdw:axe_anchor', [
	event.recipes.createDeploying('mcdw:axe_anchor', ['mcdw:axe_anchor', 'twilightforest:steeleaf_ingot']),
	event.recipes.createDeploying('mcdw:axe_anchor', ['mcdw:axe_anchor', 'minecraft:gold_block']),
	event.recipes.createPressing('mcdw:axe_anchor', 'mcdw:axe_anchor').processingTime(50)
	]).transitionalItem('mcdw:axe_anchor').loops(4)

//鹰身大剑
event.recipes.createSequencedAssembly([ 
	'mcdw:sword_hawkbrand'
	], 'mcdw:sword_iron_sword_var', [
	event.recipes.createDeploying('mcdw:sword_iron_sword_var', ['mcdw:sword_iron_sword_var', 'minecraft:emerald']),
	event.recipes.createDeploying('mcdw:sword_iron_sword_var', ['mcdw:sword_iron_sword_var', 'minecraft:iron_ingot']),
	event.recipes.createPressing('mcdw:sword_iron_sword_var', 'mcdw:sword_iron_sword_var').processingTime(50)
	]).transitionalItem('mcdw:sword_iron_sword_var').loops(4)

//邪恶之剑
event.recipes.createSequencedAssembly([ 
	'mcdw:sword_sinister'
	], 'mcdw:sword_hawkbrand', [
	event.recipes.createDeploying('mcdw:sword_hawkbrand', ['mcdw:sword_hawkbrand', 'minecraft:nether_wart']),
	event.recipes.createDeploying('mcdw:sword_hawkbrand', ['mcdw:sword_hawkbrand', 'minecraft:obsidian']),
	event.recipes.createPressing('mcdw:sword_hawkbrand', 'mcdw:sword_hawkbrand').processingTime(50)
	]).transitionalItem('mcdw:sword_hawkbrand').loops(3)

//求真者
event.recipes.createSequencedAssembly([ 
	'mcdw:sword_truthseeker'
	], 'mcdw:sword_iron_sword_var', [
	event.recipes.createDeploying('mcdw:sword_iron_sword_var', ['mcdw:sword_iron_sword_var', 'twilightforest:carminite']),
	event.recipes.createPressing('mcdw:sword_iron_sword_var', 'mcdw:sword_iron_sword_var').processingTime(50)
	]).transitionalItem('mcdw:sword_iron_sword_var').loops(1)
	
//大剑
event.recipes.createSequencedAssembly([ 
	'mcdw:sword_broadsword'
	], 'mcdw:sword_iron_sword_var', [
	event.recipes.createDeploying('mcdw:sword_iron_sword_var', ['mcdw:sword_iron_sword_var', 'minecraft:iron_ingot']),
	event.recipes.createPressing('mcdw:sword_iron_sword_var', 'mcdw:sword_iron_sword_var').processingTime(50)
	]).transitionalItem('mcdw:sword_iron_sword_var').loops(4)

//阔剑
event.recipes.createSequencedAssembly([ 
	'mcdw:sword_claymore'
	], 'mcdw:sword_broadsword', [
	event.recipes.createDeploying('mcdw:sword_broadsword', ['mcdw:sword_broadsword', 'minecraft:iron_ingot']),
	event.recipes.createPressing('mcdw:sword_broadsword', 'mcdw:sword_broadsword').processingTime(50)
	]).transitionalItem('mcdw:sword_broadsword').loops(9)

//冰霜杀手
event.recipes.createSequencedAssembly([ 
	'mcdw:sword_frost_slayer'
	], 'mcdw:sword_claymore', [
	event.recipes.createDeploying('mcdw:sword_claymore', ['mcdw:sword_claymore', 'betterend:ancient_emerald_ice']),
	event.recipes.createPressing('mcdw:sword_claymore', 'mcdw:sword_claymore').processingTime(50)
	]).transitionalItem('mcdw:sword_claymore').loops(9)

//大斧头剑
event.recipes.createSequencedAssembly([ 
	'mcdw:sword_great_axeblade'
	], 'mcdw:sword_claymore', [
	event.recipes.createDeploying('mcdw:sword_claymore', ['mcdw:sword_claymore', 'mcdw:axe_axe']),
	event.recipes.createPressing('mcdw:sword_claymore', 'mcdw:sword_claymore').processingTime(50)
	]).transitionalItem('mcdw:sword_claymore').loops(2)

//窃心者
event.recipes.createSequencedAssembly([ 
	'mcdw:sword_heartstealer'
	], 'mcdw:sword_claymore', [
	event.recipes.createDeploying('mcdw:sword_claymore', ['mcdw:sword_claymore', 'twilightforest:charm_of_life_1']),
	event.recipes.createDeploying('mcdw:sword_claymore', ['mcdw:sword_claymore', 'minecraft:diamond']),
	event.recipes.createDeploying('mcdw:sword_claymore', ['mcdw:sword_claymore', 'minecraft:redstone_block']),
	event.recipes.createPressing('mcdw:sword_claymore', 'mcdw:sword_claymore').processingTime(50)
	]).transitionalItem('mcdw:sword_claymore').loops(1)

//黑曜石阔剑
event.recipes.createSequencedAssembly([ 
	'mcdw:sword_obsidian_claymore'
	], 'mcdw:sword_claymore', [
	event.recipes.createDeploying('mcdw:sword_claymore', ['mcdw:sword_claymore', 'minecraft:crying_obsidian']),
	event.recipes.createDeploying('mcdw:sword_claymore', ['mcdw:sword_claymore', 'minecraft:crying_obsidian']),
	event.recipes.createDeploying('mcdw:sword_claymore', ['mcdw:sword_claymore', 'minecraft:crying_obsidian']),
	event.recipes.createDeploying('mcdw:sword_claymore', ['mcdw:sword_claymore', 'minecraft:netherite_scrap']),
	event.recipes.createPressing('mcdw:sword_claymore', 'mcdw:sword_claymore').processingTime(50)
	]).transitionalItem('mcdw:sword_claymore').loops(1)

//无星之夜
event.recipes.createSequencedAssembly([ 
	'mcdw:sword_the_starless_night'
	], 'mcdw:sword_obsidian_claymore', [
	event.recipes.createDeploying('mcdw:sword_obsidian_claymore', ['mcdw:sword_obsidian_claymore', 'minecraft:crying_obsidian']),
	event.recipes.createDeploying('mcdw:sword_obsidian_claymore', ['mcdw:sword_obsidian_claymore', 'minecraft:crying_obsidian']),
	event.recipes.createDeploying('mcdw:sword_obsidian_claymore', ['mcdw:sword_obsidian_claymore', 'minecraft:crying_obsidian']),
	event.recipes.createDeploying('mcdw:sword_obsidian_claymore', ['mcdw:sword_obsidian_claymore', 'betterend:eternal_crystal']),
	event.recipes.createPressing('mcdw:sword_obsidian_claymore', 'mcdw:sword_obsidian_claymore').processingTime(50)
	]).transitionalItem('mcdw:sword_obsidian_claymore').loops(1)

//古代弓
event.recipes.createSequencedAssembly([ 
	'mcdw:bow_ancient_bow'
	], 'minecraft:bow', [
	event.recipes.createDeploying('minecraft:bow', ['minecraft:bow', 'minecraft:netherite_scrap']),
	event.recipes.createPressing('minecraft:bow', 'minecraft:bow').processingTime(50)
	]).transitionalItem('minecraft:bow').loops(1)

//骨弓
event.recipes.createSequencedAssembly([ 
	'mcdw:bow_bonebow'
	], 'minecraft:bow', [
	event.recipes.createDeploying('minecraft:bow', ['minecraft:bow', 'minecraft:bone']),
	event.recipes.createPressing('minecraft:bow', 'minecraft:bow').processingTime(50)
	]).transitionalItem('minecraft:bow').loops(9)

//鬼魅弓
event.recipes.createSequencedAssembly([ 
	'mcdw:bow_haunted_bow'
	], 'minecraft:bow', [
	event.recipes.createDeploying('minecraft:bow', ['minecraft:bow', 'minecraft:soul_sand']),
	event.recipes.createPressing('minecraft:bow', 'minecraft:bow').processingTime(50)
	]).transitionalItem('minecraft:bow').loops(9)

//幻翼弓
event.recipes.createSequencedAssembly([ 
	'mcdw:bow_phantom_bow'
	], 'minecraft:bow', [
	event.recipes.createDeploying('minecraft:bow', ['minecraft:bow', 'minecraft:phantom_membrane']),
	event.recipes.createPressing('minecraft:bow', 'minecraft:bow').processingTime(50)
	]).transitionalItem('minecraft:bow').loops(4)

//双子弓
event.recipes.createSequencedAssembly([ 
	'mcdw:bow_twin_bow'
	], 'minecraft:bow', [
	event.recipes.createDeploying('minecraft:bow', ['minecraft:bow', 'minecraft:bow']),
	event.recipes.createPressing('minecraft:bow', 'minecraft:bow').processingTime(50)
	]).transitionalItem('minecraft:bow').loops(1)

//蛛网弓
event.recipes.createSequencedAssembly([ 
	'mcdw:bow_web_bow'
	], 'minecraft:bow', [
	event.recipes.createDeploying('minecraft:bow', ['minecraft:bow', 'minecraft:fermented_spider_eye']),
	event.recipes.createPressing('minecraft:bow', 'minecraft:bow').processingTime(50)
	]).transitionalItem('minecraft:bow').loops(9)

//猪灵之傲
event.recipes.createSequencedAssembly([ 
	'mcdw:crossbow_pride_of_the_piglins'
	], 'minecraft:crossbow', [
	event.recipes.createDeploying('minecraft:crossbow', ['minecraft:crossbow', 'minecraft:lava_bucket']),
	event.recipes.createPressing('minecraft:crossbow', 'minecraft:crossbow').processingTime(50)
	]).transitionalItem('minecraft:crossbow').loops(9)

//杀戮之弩
event.recipes.createSequencedAssembly([ 
	'mcdw:crossbow_slayer_crossbow'
	], 'minecraft:crossbow', [
	event.recipes.createDeploying('minecraft:crossbow', ['minecraft:crossbow', 'minecraft:wither_rose']),
	event.recipes.createPressing('minecraft:crossbow', 'minecraft:crossbow').processingTime(50)
	]).transitionalItem('minecraft:crossbow').loops(1)

//虚空召唤者
event.recipes.createSequencedAssembly([ 
	'mcdw:crossbow_voidcaller_crossbow'
	], 'minecraft:crossbow', [
	event.recipes.createDeploying('minecraft:crossbow', ['minecraft:crossbow', 'minecraft:ender_eye']),
	event.recipes.createPressing('minecraft:crossbow', 'minecraft:crossbow').processingTime(50)
	]).transitionalItem('minecraft:crossbow').loops(9)

//穿刺者
event.recipes.createSequencedAssembly([ 
	'mcdw:crossbow_the_slicer'
	], 'minecraft:crossbow', [
	event.recipes.createDeploying('minecraft:crossbow', ['minecraft:crossbow', 'minecraft:pointed_dripstone']),
	event.recipes.createPressing('minecraft:crossbow', 'minecraft:crossbow').processingTime(50)
	]).transitionalItem('minecraft:crossbow').loops(9)

//气泡爆裂弓
event.recipes.createSequencedAssembly([ 
	'mcdw:bow_bubble_burster'
	], 'mcdw:bow_bubble_bow', [
	event.recipes.createDeploying('mcdw:bow_bubble_bow', ['mcdw:bow_bubble_bow', 'minecraft:gold_ingot']),
	event.recipes.createDeploying('mcdw:bow_bubble_bow', ['mcdw:bow_bubble_bow', 'minecraft:prismarine_shard']),
	event.recipes.createDeploying('mcdw:bow_bubble_bow', ['mcdw:bow_bubble_bow', 'minecraft:prismarine_crystals']),
	event.recipes.createPressing('mcdw:bow_bubble_bow', 'mcdw:bow_bubble_bow').processingTime(50)
	]).transitionalItem('mcdw:bow_bubble_bow').loops(3)

//爆裂风弓
event.recipes.createSequencedAssembly([ 
	'mcdw:bow_burst_gale_bow'
	], 'mcdw:bow_wind_bow', [
	event.recipes.createDeploying('mcdw:bow_wind_bow', ['mcdw:bow_wind_bow', 'minecraft:gold_ingot']),
	event.recipes.createPressing('mcdw:bow_wind_bow', 'mcdw:bow_wind_bow').processingTime(50)
	]).transitionalItem('mcdw:bow_wind_bow').loops(9)

//空谷回声
event.recipes.createSequencedAssembly([ 
	'mcdw:bow_echo_of_the_valley'
	], 'mcdw:bow_wind_bow', [
	event.recipes.createDeploying('mcdw:bow_wind_bow', ['mcdw:bow_wind_bow', 'minecraft:iron_ingot']),
	event.recipes.createDeploying('mcdw:bow_wind_bow', ['mcdw:bow_wind_bow', 'minecraft:gold_ingot']),
	event.recipes.createPressing('mcdw:bow_wind_bow', 'mcdw:bow_wind_bow').processingTime(50)
	]).transitionalItem('mcdw:bow_wind_bow').loops(4)

//虚空召唤
event.recipes.createSequencedAssembly([ 
	'mcdw:bow_call_of_the_void'
	], 'mcdw:bow_void_bow', [
	event.recipes.createDeploying('mcdw:bow_void_bow', ['mcdw:bow_void_bow', 'minecraft:diamond']),
	event.recipes.createDeploying('mcdw:bow_void_bow', ['mcdw:bow_void_bow', 'betterend:crystal_shards']),
	event.recipes.createDeploying('mcdw:bow_void_bow', ['mcdw:bow_void_bow', 'minecraft:ender_eye']),
	event.recipes.createPressing('mcdw:bow_void_bow', 'mcdw:bow_void_bow').processingTime(50)
	]).transitionalItem('mcdw:bow_void_bow').loops(2)

//精英力量弓
event.recipes.createSequencedAssembly([ 
	'mcdw:bow_elite_power_bow'
	], 'mcdw:bow_power_bow', [
	event.recipes.createDeploying('mcdw:bow_power_bow', ['mcdw:bow_power_bow', 'minecraft:gold_ingot']),
	event.recipes.createPressing('mcdw:bow_power_bow', 'mcdw:bow_power_bow').processingTime(50)
	]).transitionalItem('mcdw:bow_power_bow').loops(9)

//刀翅蜂鸟
event.recipes.createSequencedAssembly([ 
	'mcdw:bow_sabrewing'
	], 'mcdw:bow_power_bow', [
	event.recipes.createDeploying('mcdw:bow_power_bow', ['mcdw:bow_power_bow', 'minecraft:iron_block']),
	event.recipes.createDeploying('mcdw:bow_power_bow', ['mcdw:bow_power_bow', 'minecraft:dandelion']),
	event.recipes.createDeploying('mcdw:bow_power_bow', ['mcdw:bow_power_bow', 'minecraft:feather']),
	event.recipes.createPressing('mcdw:bow_power_bow', 'mcdw:bow_power_bow').processingTime(50)
	]).transitionalItem('mcdw:bow_power_bow').loops(2)

//粉红恶棍
event.recipes.createSequencedAssembly([ 
	'mcdw:bow_pink_scoundrel'
	], 'mcdw:bow_trickbow', [
	event.recipes.createDeploying('mcdw:bow_trickbow', ['mcdw:bow_trickbow', 'minecraft:redstone']),
	event.recipes.createDeploying('mcdw:bow_trickbow', ['mcdw:bow_trickbow', 'minecraft:pink_dye']),
	event.recipes.createDeploying('mcdw:bow_trickbow', ['mcdw:bow_trickbow', 'minecraft:gunpowder']),
	event.recipes.createPressing('mcdw:bow_trickbow', 'mcdw:bow_trickbow').processingTime(50)
	]).transitionalItem('mcdw:bow_trickbow').loops(3)

//翠绿之殇
event.recipes.createSequencedAssembly([ 
	'mcdw:bow_green_menace'
	], 'mcdw:bow_trickbow', [
	event.recipes.createDeploying('mcdw:bow_trickbow', ['mcdw:bow_trickbow', 'twilightforest:steeleaf_ingot']),
	event.recipes.createDeploying('mcdw:bow_trickbow', ['mcdw:bow_trickbow', 'minecraft:poisonous_potato']),
	event.recipes.createDeploying('mcdw:bow_trickbow', ['mcdw:bow_trickbow', 'minecraft:poisonous_potato']),
	event.recipes.createDeploying('mcdw:bow_trickbow', ['mcdw:bow_trickbow', 'minecraft:poisonous_potato']),
	event.recipes.createPressing('mcdw:bow_trickbow', 'mcdw:bow_trickbow').processingTime(50)
	]).transitionalItem('mcdw:bow_trickbow').loops(1)

//猎人之誓
event.recipes.createSequencedAssembly([ 
	'mcdw:bow_hunters_promise'
	], 'mcdw:bow_hunting_bow', [
	event.recipes.createDeploying('mcdw:bow_hunting_bow', ['mcdw:bow_hunting_bow', 'minecraft:feather']),
	event.recipes.createDeploying('mcdw:bow_hunting_bow', ['mcdw:bow_hunting_bow', 'minecraft:leather']),
	event.recipes.createDeploying('mcdw:bow_hunting_bow', ['mcdw:bow_hunting_bow', 'minecraft:honeycomb']),
	event.recipes.createPressing('mcdw:bow_hunting_bow', 'mcdw:bow_hunting_bow').processingTime(50)
	]).transitionalItem('mcdw:bow_hunting_bow').loops(2)
	
//主宰之弓
event.recipes.createSequencedAssembly([ 
	'mcdw:bow_masters_bow'
	], 'mcdw:bow_hunting_bow', [
	event.recipes.createDeploying('mcdw:bow_hunting_bow', ['mcdw:bow_hunting_bow', 'minecraft:rabbit_hide']),
	event.recipes.createDeploying('mcdw:bow_hunting_bow', ['mcdw:bow_hunting_bow', 'minecraft:leather']),
	event.recipes.createPressing('mcdw:bow_hunting_bow', 'mcdw:bow_hunting_bow').processingTime(50)
	]).transitionalItem('mcdw:bow_hunting_bow').loops(3)

//凛冬之触
event.recipes.createSequencedAssembly([ 
	'mcdw:bow_winters_touch'
	], 'mcdw:bow_snow_bow', [
	event.recipes.createDeploying('mcdw:bow_snow_bow', ['mcdw:bow_snow_bow', 'betterend:dense_snow']),
	event.recipes.createPressing('mcdw:bow_snow_bow', 'mcdw:bow_snow_bow').processingTime(50)
	]).transitionalItem('mcdw:bow_snow_bow').loops(9)

//魅力弓
event.recipes.createSequencedAssembly([ 
	'mcdw:bow_love_spell_bow'
	], 'mcdw:bow_shortbow', [
	event.recipes.createDeploying('mcdw:bow_shortbow', ['mcdw:bow_shortbow', 'betterend:raw_amber']),
	event.recipes.createDeploying('mcdw:bow_shortbow', ['mcdw:bow_shortbow', 'minecraft:magenta_dye']),
	event.recipes.createPressing('mcdw:bow_shortbow', 'mcdw:bow_shortbow').processingTime(50)
	]).transitionalItem('mcdw:bow_shortbow').loops(3)

//紫色风暴
event.recipes.createSequencedAssembly([ 
	'mcdw:bow_purple_storm'
	], 'mcdw:bow_shortbow', [
	event.recipes.createDeploying('mcdw:bow_shortbow', ['mcdw:bow_shortbow', 'minecraft:purple_dye']),
	event.recipes.createPressing('mcdw:bow_shortbow', 'mcdw:bow_shortbow').processingTime(50)
	]).transitionalItem('mcdw:bow_shortbow').loops(3)

//机械短弓
event.recipes.createSequencedAssembly([ 
	'mcdw:bow_mechanical_shortbow'
	], 'mcdw:bow_shortbow', [
	event.recipes.createDeploying('mcdw:bow_shortbow', ['mcdw:bow_shortbow', 'create:precision_mechanism']),
	event.recipes.createPressing('mcdw:bow_shortbow', 'mcdw:bow_shortbow').processingTime(50)
	]).transitionalItem('mcdw:bow_shortbow').loops(1)

//红蛇
event.recipes.createSequencedAssembly([ 
	'mcdw:bow_red_snake'
	], 'mcdw:bow_longbow', [
	event.recipes.createDeploying('mcdw:bow_longbow', ['mcdw:bow_longbow', 'minecraft:redstone']),
	event.recipes.createDeploying('mcdw:bow_longbow', ['mcdw:bow_longbow', 'minecraft:iron_ingot']),
	event.recipes.createPressing('mcdw:bow_longbow', 'mcdw:bow_longbow').processingTime(50)
	]).transitionalItem('mcdw:bow_longbow').loops(9)

//守卫者之弓
event.recipes.createSequencedAssembly([ 
	'mcdw:bow_red_snake'
	], 'mcdw:bow_longbow', [
	event.recipes.createDeploying('mcdw:bow_longbow', ['mcdw:bow_longbow', 'minecraft:prismarine_shard']),
	event.recipes.createDeploying('mcdw:bow_longbow', ['mcdw:bow_longbow', 'minecraft:iron_ingot']),
	event.recipes.createPressing('mcdw:bow_longbow', 'mcdw:bow_longbow').processingTime(50)
	]).transitionalItem('mcdw:bow_longbow').loops(3)

//自动弩
event.recipes.createSequencedAssembly([ 
	'mcdw:crossbow_auto_crossbow'
	], 'mcdw:crossbow_rapid_crossbow', [
	event.recipes.createDeploying('mcdw:crossbow_rapid_crossbow', ['mcdw:crossbow_rapid_crossbow', 'minecraft:redstone']),
	event.recipes.createDeploying('mcdw:crossbow_rapid_crossbow', ['mcdw:crossbow_rapid_crossbow', 'minecraft:iron_ingot']),
	event.recipes.createPressing('mcdw:crossbow_rapid_crossbow', 'mcdw:crossbow_rapid_crossbow').processingTime(50)
	]).transitionalItem('mcdw:crossbow_rapid_crossbow').loops(3)

//蝴蝶弩
event.recipes.createSequencedAssembly([ 
	'mcdw:crossbow_auto_crossbow'
	], 'mcdw:crossbow_rapid_crossbow', [
	event.recipes.createDeploying('mcdw:crossbow_rapid_crossbow', ['mcdw:crossbow_rapid_crossbow', 'minecraft:spore_blossom']),
	event.recipes.createDeploying('mcdw:crossbow_rapid_crossbow', ['mcdw:crossbow_rapid_crossbow', 'minecraft:iron_ingot']),
	event.recipes.createDeploying('mcdw:crossbow_rapid_crossbow', ['mcdw:crossbow_rapid_crossbow', 'minecraft:iron_ingot']),
	event.recipes.createDeploying('mcdw:crossbow_rapid_crossbow', ['mcdw:crossbow_rapid_crossbow', 'minecraft:iron_ingot']),
	event.recipes.createPressing('mcdw:crossbow_rapid_crossbow', 'mcdw:crossbow_rapid_crossbow').processingTime(50)
	]).transitionalItem('mcdw:crossbow_rapid_crossbow').loops(1)

//幼体弩
event.recipes.createSequencedAssembly([ 
	'mcdw:crossbow_baby_crossbow'
	], 'mcdw:crossbow_dual_crossbow', [
	event.recipes.createDeploying('mcdw:crossbow_dual_crossbow', ['mcdw:crossbow_dual_crossbow', 'minecraft:magenta_dye']),
	event.recipes.createDeploying('mcdw:crossbow_dual_crossbow', ['mcdw:crossbow_dual_crossbow', 'twilightforest:transformation_powder']),
	event.recipes.createPressing('mcdw:crossbow_dual_crossbow', 'mcdw:crossbow_dual_crossbow').processingTime(50)
	]).transitionalItem('mcdw:crossbow_dual_crossbow').loops(1)

//祛魔弩
event.recipes.createSequencedAssembly([ 
	'mcdw:crossbow_baby_crossbow'
	], 'mcdw:crossbow_dual_crossbow', [
	event.recipes.createDeploying('mcdw:crossbow_dual_crossbow', ['mcdw:crossbow_dual_crossbow', 'minecraft:black_dye']),
	event.recipes.createDeploying('mcdw:crossbow_dual_crossbow', ['mcdw:crossbow_dual_crossbow', 'minecraft:blue_dye']),
	event.recipes.createPressing('mcdw:crossbow_dual_crossbow', 'mcdw:crossbow_dual_crossbow').processingTime(50)
	]).transitionalItem('mcdw:crossbow_dual_crossbow').loops(3)

//腐化弩
event.recipes.createSequencedAssembly([ 
	'mcdw:crossbow_corrupted_crossbow'
	], 'mcdw:crossbow_burst_crossbow', [
	event.recipes.createDeploying('mcdw:crossbow_burst_crossbow', ['mcdw:crossbow_burst_crossbow', 'minecraft:wither_skeleton_skull']),
	event.recipes.createDeploying('mcdw:crossbow_burst_crossbow', ['mcdw:crossbow_burst_crossbow', 'fwaystones:abyss_watcher']),
	event.recipes.createPressing('mcdw:crossbow_burst_crossbow', 'mcdw:crossbow_burst_crossbow').processingTime(50)
	]).transitionalItem('mcdw:crossbow_burst_crossbow').loops(1)

//猎魂弩
event.recipes.createSequencedAssembly([ 
	'mcdw:crossbow_soul_hunter_crossbow'
	], 'mcdw:crossbow_burst_crossbow', [
	event.recipes.createDeploying('mcdw:crossbow_burst_crossbow', ['mcdw:crossbow_burst_crossbow', 'minecraft:soul_sand']),
	event.recipes.createDeploying('mcdw:crossbow_burst_crossbow', ['mcdw:crossbow_burst_crossbow', 'minecraft:diamond']),
	event.recipes.createDeploying('mcdw:crossbow_burst_crossbow', ['mcdw:crossbow_burst_crossbow', 'minecraft:experience_bottle']),
	event.recipes.createPressing('mcdw:crossbow_burst_crossbow', 'mcdw:crossbow_burst_crossbow').processingTime(50)
	]).transitionalItem('mcdw:crossbow_burst_crossbow').loops(3)

//末日弩
event.recipes.createSequencedAssembly([ 
	'mcdw:crossbow_doom_crossbow'
	], 'mcdw:crossbow_heavy_crossbow', [
	event.recipes.createDeploying('mcdw:crossbow_heavy_crossbow', ['mcdw:crossbow_heavy_crossbow', 'minecraft:iron_block']),
	event.recipes.createDeploying('mcdw:crossbow_heavy_crossbow', ['mcdw:crossbow_heavy_crossbow', 'minecraft:netherite_scrap']),
	event.recipes.createDeploying('mcdw:crossbow_heavy_crossbow', ['mcdw:crossbow_heavy_crossbow', 'minecraft:lapis_lazuli']),
	event.recipes.createPressing('mcdw:crossbow_heavy_crossbow', 'mcdw:crossbow_heavy_crossbow').processingTime(50)
	]).transitionalItem('mcdw:crossbow_heavy_crossbow').loops(1)

//野性灵魂弩
event.recipes.createSequencedAssembly([ 
	'mcdw:crossbow_feral_soul_crossbow'
	], 'mcdw:crossbow_soul_crossbow', [
	event.recipes.createDeploying('mcdw:crossbow_soul_crossbow', ['mcdw:crossbow_soul_crossbow', 'minecraft:experience_bottle']),
	event.recipes.createDeploying('mcdw:crossbow_soul_crossbow', ['mcdw:crossbow_soul_crossbow', 'minecraft:diamond']),
	event.recipes.createDeploying('mcdw:crossbow_soul_crossbow', ['mcdw:crossbow_soul_crossbow', 'minecraft:bone']),
	event.recipes.createPressing('mcdw:crossbow_soul_crossbow', 'mcdw:crossbow_soul_crossbow').processingTime(50)
	]).transitionalItem('mcdw:crossbow_soul_crossbow').loops(1)

//火弩箭
event.recipes.createSequencedAssembly([ 
	'mcdw:crossbow_feral_soul_crossbow'
	], 'mcdw:crossbow_exploding_crossbow', [
	event.recipes.createDeploying('mcdw:crossbow_exploding_crossbow', ['mcdw:crossbow_exploding_crossbow', '#twilightforest:fiery_vial']),
	event.recipes.createDeploying('mcdw:crossbow_exploding_crossbow', ['mcdw:crossbow_exploding_crossbow', 'minecraft:fire_charge']),
	event.recipes.createPressing('mcdw:crossbow_exploding_crossbow', 'mcdw:crossbow_exploding_crossbow').processingTime(50)
	]).transitionalItem('mcdw:crossbow_exploding_crossbow').loops(1)

//聚爆弩
event.recipes.createSequencedAssembly([ 
	'mcdw:crossbow_nautical_crossbow'
	], 'mcdw:crossbow_harpoon_crossbow', [
	event.recipes.createDeploying('mcdw:crossbow_harpoon_crossbow', ['mcdw:crossbow_harpoon_crossbow', 'minecraft:prismarine_crystals']),
	event.recipes.createDeploying('mcdw:crossbow_harpoon_crossbow', ['mcdw:crossbow_harpoon_crossbow', 'minecraft:gold_ingot']),
	event.recipes.createPressing('mcdw:crossbow_harpoon_crossbow', 'mcdw:crossbow_harpoon_crossbow').processingTime(50)
	]).transitionalItem('mcdw:crossbow_harpoon_crossbow').loops(5)

//竖琴弩
event.recipes.createSequencedAssembly([ 
	'mcdw:crossbow_harp_crossbow'
	], 'mcdw:crossbow_scatter_crossbow', [
	event.recipes.createDeploying('mcdw:crossbow_scatter_crossbow', ['mcdw:crossbow_scatter_crossbow', 'minecraft:gold_ingot']),
	event.recipes.createDeploying('mcdw:crossbow_scatter_crossbow', ['mcdw:crossbow_scatter_crossbow', 'minecraft:string']),
	event.recipes.createPressing('mcdw:crossbow_scatter_crossbow', 'mcdw:crossbow_scatter_crossbow').processingTime(50)
	]).transitionalItem('mcdw:crossbow_scatter_crossbow').loops(5)

//雷琴电弩
event.recipes.createSequencedAssembly([ 
	'mcdw:crossbow_lightning_harp_crossbow'
	], 'mcdw:crossbow_harp_crossbow', [
	event.recipes.createDeploying('mcdw:crossbow_harp_crossbow', ['mcdw:crossbow_harp_crossbow', 'twilightforest:raven_feather']),
	event.recipes.createDeploying('mcdw:crossbow_harp_crossbow', ['mcdw:crossbow_harp_crossbow', 'twilightforest:raven_feather']),
	event.recipes.createDeploying('mcdw:crossbow_harp_crossbow', ['mcdw:crossbow_harp_crossbow', 'twilightforest:raven_feather']),
	event.recipes.createDeploying('mcdw:crossbow_harp_crossbow', ['mcdw:crossbow_harp_crossbow', 'minecraft:creeper_head']),
	event.recipes.createPressing('mcdw:crossbow_harp_crossbow', 'mcdw:crossbow_harp_crossbow').processingTime(50)
	]).transitionalItem('mcdw:crossbow_harp_crossbow').loops(1)

//隐翳弩
event.recipes.createSequencedAssembly([ 
	'mcdw:crossbow_veiled_crossbow'
	], 'mcdw:crossbow_shadow_crossbow', [
	event.recipes.createDeploying('mcdw:crossbow_shadow_crossbow', ['mcdw:crossbow_shadow_crossbow', 'betterend:ender_dust']),
	event.recipes.createDeploying('mcdw:crossbow_shadow_crossbow', ['mcdw:crossbow_shadow_crossbow', 'betterend:crystal_shards']),
	event.recipes.createPressing('mcdw:crossbow_shadow_crossbow', 'mcdw:crossbow_shadow_crossbow').processingTime(50)
	]).transitionalItem('mcdw:crossbow_shadow_crossbow').loops(8)

//光灵弓
event.recipes.createSequencedAssembly([ 
	'mcdw:bow_nocturnal_bow'
	], 'mcdw:bow_soul_bow', [
	event.recipes.createDeploying('mcdw:bow_soul_bow', ['mcdw:bow_soul_bow', 'minecraft:ghast_tear']),
	event.recipes.createDeploying('mcdw:bow_soul_bow', ['mcdw:bow_soul_bow', 'minecraft:iron_ingot']),
	event.recipes.createDeploying('mcdw:bow_soul_bow', ['mcdw:bow_soul_bow', 'minecraft:iron_ingot']),
	event.recipes.createDeploying('mcdw:bow_soul_bow', ['mcdw:bow_soul_bow', 'minecraft:iron_ingot']),
	event.recipes.createPressing('mcdw:bow_soul_bow', 'mcdw:bow_soul_bow').processingTime(50)
	]).transitionalItem('mcdw:bow_soul_bow').loops(1)

//亡魂之弓
event.recipes.createSequencedAssembly([ 
	'mcdw:bow_lost_souls'
	], 'mcdw:bow_soul_bow', [
	event.recipes.createDeploying('mcdw:bow_soul_bow', ['mcdw:bow_soul_bow', 'minecraft:wither_skeleton_skull']),
	event.recipes.createDeploying('mcdw:bow_soul_bow', ['mcdw:bow_soul_bow', 'minecraft:ghast_tear']),
	event.recipes.createDeploying('mcdw:bow_soul_bow', ['mcdw:bow_soul_bow', 'minecraft:bone_block']),
	event.recipes.createDeploying('mcdw:bow_soul_bow', ['mcdw:bow_soul_bow', 'minecraft:bone_block']),
	event.recipes.createDeploying('mcdw:bow_soul_bow', ['mcdw:bow_soul_bow', 'minecraft:bone_block']),
	event.recipes.createPressing('mcdw:bow_soul_bow', 'mcdw:bow_soul_bow').processingTime(50)
	]).transitionalItem('mcdw:bow_soul_bow').loops(1)

//寒颤弓
event.recipes.createSequencedAssembly([ 
	'mcdw:bow_shivering_bow'
	], 'mcdw:bow_nocturnal_bow', [
	event.recipes.createDeploying('mcdw:bow_nocturnal_bow', ['mcdw:bow_nocturnal_bow', 'betterend:ancient_emerald_ice']),
	event.recipes.createPressing('mcdw:bow_nocturnal_bow', 'mcdw:bow_nocturnal_bow').processingTime(50)
	]).transitionalItem('mcdw:bow_nocturnal_bow').loops(9)

//铁木套
event.recipes.createSequencedAssembly([ 
	Item.of('twilightforest:ironwood_helmet', '{Damage:0}').enchant('minecraft:aqua_affinity', 1)
	], 'minecraft:leather_helmet', [
	event.recipes.createDeploying('minecraft:leather_helmet', ['minecraft:leather_helmet', 'twilightforest:ironwood_ingot']),
	event.recipes.createPressing('minecraft:leather_helmet', 'minecraft:leather_helmet').processingTime(50)
	]).transitionalItem('minecraft:leather_helmet').loops(4)

event.recipes.createSequencedAssembly([ 
	Item.of('twilightforest:ironwood_chestplate', '{Damage:0}').enchant('minecraft:protection', 1)
	], 'minecraft:leather_chestplate', [
	event.recipes.createDeploying('minecraft:leather_chestplate', ['minecraft:leather_chestplate', 'twilightforest:ironwood_ingot']),
	event.recipes.createPressing('minecraft:leather_chestplate', 'minecraft:leather_chestplate').processingTime(50)
	]).transitionalItem('minecraft:leather_chestplate').loops(8)

event.recipes.createSequencedAssembly([ 
	Item.of('twilightforest:ironwood_leggings', '{Damage:0}').enchant('minecraft:protection', 1)
	], 'minecraft:leather_leggings', [
	event.recipes.createDeploying('minecraft:leather_leggings', ['minecraft:leather_leggings', 'twilightforest:ironwood_ingot']),
	event.recipes.createPressing('minecraft:leather_leggings', 'minecraft:leather_leggings').processingTime(50)
	]).transitionalItem('minecraft:leather_leggings').loops(6)

event.recipes.createSequencedAssembly([ 
	Item.of('twilightforest:ironwood_boots', '{Damage:0}').enchant('minecraft:feather_falling', 1)
	], 'minecraft:leather_boots', [
	event.recipes.createDeploying('minecraft:leather_boots', ['minecraft:leather_boots', 'twilightforest:ironwood_ingot']),
	event.recipes.createPressing('minecraft:leather_boots', 'minecraft:leather_boots').processingTime(50)
	]).transitionalItem('minecraft:leather_boots').loops(3)

//娜迦套
event.recipes.createSequencedAssembly([ 
	Item.of('twilightforest:naga_chestplate', '{Damage:0}').enchant('minecraft:fire_protection', 3)
	], 'minecraft:leather_chestplate', [
	event.recipes.createDeploying('minecraft:leather_chestplate', ['minecraft:leather_chestplate', 'twilightforest:naga_scale']),
	event.recipes.createPressing('minecraft:leather_chestplate', 'minecraft:leather_chestplate').processingTime(50)
	]).transitionalItem('minecraft:leather_chestplate').loops(8)

event.recipes.createSequencedAssembly([ 
	Item.of('twilightforest:naga_leggings', '{Damage:0}').enchant('minecraft:protection', 3)
	], 'minecraft:leather_leggings', [
	event.recipes.createDeploying('minecraft:leather_leggings', ['minecraft:leather_leggings', 'twilightforest:naga_scale']),
	event.recipes.createPressing('minecraft:leather_leggings', 'minecraft:leather_leggings').processingTime(50)
	]).transitionalItem('minecraft:leather_leggings').loops(6)

//炽铁套
event.recipes.createSequencedAssembly([ 
	Item.of('twilightforest:fiery_helmet', '{Damage:0}')
	], 'minecraft:leather_helmet', [
	event.recipes.createDeploying('minecraft:leather_helmet', ['minecraft:leather_helmet', '#twilightforest:fiery_vial']),
	event.recipes.createPressing('minecraft:leather_helmet', 'minecraft:leather_helmet').processingTime(50)
	]).transitionalItem('minecraft:leather_helmet').loops(4)

event.recipes.createSequencedAssembly([ 
	Item.of('twilightforest:fiery_chestplate', '{Damage:0}')
	], 'minecraft:leather_chestplate', [
	event.recipes.createDeploying('minecraft:leather_chestplate', ['minecraft:leather_chestplate', '#twilightforest:fiery_vial']),
	event.recipes.createPressing('minecraft:leather_chestplate', 'minecraft:leather_chestplate').processingTime(50)
	]).transitionalItem('minecraft:leather_chestplate').loops(8)

event.recipes.createSequencedAssembly([ 
	Item.of('twilightforest:fiery_leggings', '{Damage:0}')
	], 'minecraft:leather_leggings', [
	event.recipes.createDeploying('minecraft:leather_leggings', ['minecraft:leather_leggings', '#twilightforest:fiery_vial']),
	event.recipes.createPressing('minecraft:leather_leggings', 'minecraft:leather_leggings').processingTime(50)
	]).transitionalItem('minecraft:leather_leggings').loops(6)

event.recipes.createSequencedAssembly([ 
	Item.of('twilightforest:fiery_boots', '{Damage:0}')
	], 'minecraft:leather_boots', [
	event.recipes.createDeploying('minecraft:leather_boots', ['minecraft:leather_boots', '#twilightforest:fiery_vial']),
	event.recipes.createPressing('minecraft:leather_boots', 'minecraft:leather_boots').processingTime(50)
	]).transitionalItem('minecraft:leather_boots').loops(3)

//钢叶套
event.recipes.createSequencedAssembly([ 
	Item.of('twilightforest:steeleaf_helmet', '{Damage:0}').enchant('minecraft:projectile_protection', 2)
	], 'minecraft:leather_helmet', [
	event.recipes.createDeploying('minecraft:leather_helmet', ['minecraft:leather_helmet', 'twilightforest:steeleaf_ingot']),
	event.recipes.createPressing('minecraft:leather_helmet', 'minecraft:leather_helmet').processingTime(50)
	]).transitionalItem('minecraft:leather_helmet').loops(4)

event.recipes.createSequencedAssembly([ 
	Item.of('twilightforest:steeleaf_chestplate', '{Damage:0}').enchant('minecraft:blast_protection', 2)
	], 'minecraft:leather_chestplate', [
	event.recipes.createDeploying('minecraft:leather_chestplate', ['minecraft:leather_chestplate', 'twilightforest:steeleaf_ingot']),
	event.recipes.createPressing('minecraft:leather_chestplate', 'minecraft:leather_chestplate').processingTime(50)
	]).transitionalItem('minecraft:leather_chestplate').loops(8)

event.recipes.createSequencedAssembly([ 
	Item.of('twilightforest:steeleaf_leggings', '{Damage:0}').enchant('minecraft:fire_protection', 2)
	], 'minecraft:leather_leggings', [
	event.recipes.createDeploying('minecraft:leather_leggings', ['minecraft:leather_leggings', 'twilightforest:steeleaf_ingot']),
	event.recipes.createPressing('minecraft:leather_leggings', 'minecraft:leather_leggings').processingTime(50)
	]).transitionalItem('minecraft:leather_leggings').loops(6)

event.recipes.createSequencedAssembly([ 
	Item.of('twilightforest:steeleaf_boots', '{Damage:0}').enchant('minecraft:feather_falling', 2)
	], 'minecraft:leather_boots', [
	event.recipes.createDeploying('minecraft:leather_boots', ['minecraft:leather_boots', 'twilightforest:steeleaf_ingot']),
	event.recipes.createPressing('minecraft:leather_boots', 'minecraft:leather_boots').processingTime(50)
	]).transitionalItem('minecraft:leather_boots').loops(3)

//骑士套
event.recipes.createSequencedAssembly([ 
	Item.of('twilightforest:knightmetal_helmet', '{Damage:0}')
	], 'minecraft:leather_helmet', [
	event.recipes.createDeploying('minecraft:leather_helmet', ['minecraft:leather_helmet', 'twilightforest:knightmetal_ingot']),
	event.recipes.createPressing('minecraft:leather_helmet', 'minecraft:leather_helmet').processingTime(50)
	]).transitionalItem('minecraft:leather_helmet').loops(4)

event.recipes.createSequencedAssembly([ 
	Item.of('twilightforest:knightmetal_chestplate', '{Damage:0}')
	], 'minecraft:leather_chestplate', [
	event.recipes.createDeploying('minecraft:leather_chestplate', ['minecraft:leather_chestplate', 'twilightforest:knightmetal_ingot']),
	event.recipes.createPressing('minecraft:leather_chestplate', 'minecraft:leather_chestplate').processingTime(50)
	]).transitionalItem('minecraft:leather_chestplate').loops(8)

event.recipes.createSequencedAssembly([ 
	Item.of('twilightforest:knightmetal_leggings', '{Damage:0}')
	], 'minecraft:leather_leggings', [
	event.recipes.createDeploying('minecraft:leather_leggings', ['minecraft:leather_leggings', 'twilightforest:knightmetal_ingot']),
	event.recipes.createPressing('minecraft:leather_leggings', 'minecraft:leather_leggings').processingTime(50)
	]).transitionalItem('minecraft:leather_leggings').loops(6)

event.recipes.createSequencedAssembly([ 
	Item.of('twilightforest:knightmetal_boots', '{Damage:0}')
	], 'minecraft:leather_boots', [
	event.recipes.createDeploying('minecraft:leather_boots', ['minecraft:leather_boots', 'twilightforest:knightmetal_ingot']),
	event.recipes.createPressing('minecraft:leather_boots', 'minecraft:leather_boots').processingTime(50)
	]).transitionalItem('minecraft:leather_boots').loops(3)

//基地套
event.recipes.createSequencedAssembly([ 
	Item.of('twilightforest:arctic_helmet', '{Damage:0}')
	], 'minecraft:leather_helmet', [
	event.recipes.createDeploying('minecraft:leather_helmet', ['minecraft:leather_helmet', 'twilightforest:arctic_fur']),
	event.recipes.createPressing('minecraft:leather_helmet', 'minecraft:leather_helmet').processingTime(50)
	]).transitionalItem('minecraft:leather_helmet').loops(4)

event.recipes.createSequencedAssembly([ 
	Item.of('twilightforest:arctic_chestplate', '{Damage:0}')
	], 'minecraft:leather_chestplate', [
	event.recipes.createDeploying('minecraft:leather_chestplate', ['minecraft:leather_chestplate', 'twilightforest:arctic_fur']),
	event.recipes.createPressing('minecraft:leather_chestplate', 'minecraft:leather_chestplate').processingTime(50)
	]).transitionalItem('minecraft:leather_chestplate').loops(8)

event.recipes.createSequencedAssembly([ 
	Item.of('twilightforest:arctic_leggings', '{Damage:0}')
	], 'minecraft:leather_leggings', [
	event.recipes.createDeploying('minecraft:leather_leggings', ['minecraft:leather_leggings', 'twilightforest:arctic_fur']),
	event.recipes.createPressing('minecraft:leather_leggings', 'minecraft:leather_leggings').processingTime(50)
	]).transitionalItem('minecraft:leather_leggings').loops(6)

event.recipes.createSequencedAssembly([ 
	Item.of('twilightforest:arctic_boots', '{Damage:0}')
	], 'minecraft:leather_boots', [
	event.recipes.createDeploying('minecraft:leather_boots', ['minecraft:leather_boots', 'twilightforest:arctic_fur']),
	event.recipes.createPressing('minecraft:leather_boots', 'minecraft:leather_boots').processingTime(50)
	]).transitionalItem('minecraft:leather_boots').loops(3)

//雪怪套
event.recipes.createSequencedAssembly([ 
	Item.of('twilightforest:yeti_helmet', '{Damage:0}').enchant('minecraft:protection', 2)
	], 'minecraft:leather_helmet', [
	event.recipes.createDeploying('minecraft:leather_helmet', ['minecraft:leather_helmet', 'twilightforest:alpha_yeti_fur']),
	event.recipes.createPressing('minecraft:leather_helmet', 'minecraft:leather_helmet').processingTime(50)
	]).transitionalItem('minecraft:leather_helmet').loops(4)

event.recipes.createSequencedAssembly([ 
	Item.of('twilightforest:yeti_chestplate', '{Damage:0}').enchant('minecraft:protection', 2)
	], 'minecraft:leather_chestplate', [
	event.recipes.createDeploying('minecraft:leather_chestplate', ['minecraft:leather_chestplate', 'twilightforest:alpha_yeti_fur']),
	event.recipes.createPressing('minecraft:leather_chestplate', 'minecraft:leather_chestplate').processingTime(50)
	]).transitionalItem('minecraft:leather_chestplate').loops(8)

event.recipes.createSequencedAssembly([ 
	Item.of('twilightforest:yeti_leggings', '{Damage:0}').enchant('minecraft:protection', 2)
	], 'minecraft:leather_leggings', [
	event.recipes.createDeploying('minecraft:leather_leggings', ['minecraft:leather_leggings', 'twilightforest:alpha_yeti_fur']),
	event.recipes.createPressing('minecraft:leather_leggings', 'minecraft:leather_leggings').processingTime(50)
	]).transitionalItem('minecraft:leather_leggings').loops(6)

event.recipes.createSequencedAssembly([ 
	Item.of('twilightforest:yeti_boots', '{Damage:0}').enchant('minecraft:protection', 2).enchant('minecraft:feather_falling', 4)
	], 'minecraft:leather_boots', [
	event.recipes.createDeploying('minecraft:leather_boots', ['minecraft:leather_boots', 'twilightforest:alpha_yeti_fur']),
	event.recipes.createPressing('minecraft:leather_boots', 'minecraft:leather_boots').processingTime(50)
	]).transitionalItem('minecraft:leather_boots').loops(3)

//紫颂木切割
event.recipes.createCutting('betterend:pythadendron_stripped_log',[
	'betterend:pythadendron_log'
	]).processingTime(10)

event.recipes.createCutting('betterend:pythadendron_stripped_bark',[
	'betterend:pythadendron_bark'
	]).processingTime(10)

event.recipes.createCutting('6x betterend:pythadendron_planks',[
	'betterend:pythadendron_stripped_log'
	]).processingTime(10)
	
event.recipes.createCutting('6x betterend:pythadendron_planks',[
	'betterend:pythadendron_stripped_bark'
	]).processingTime(10)	
	
//螺旋木切割
event.recipes.createCutting('betterend:helix_tree_stripped_log',[
	'betterend:helix_tree_log'
	]).processingTime(10)
	
event.recipes.createCutting('betterend:helix_tree_stripped_bark',[
	'betterend:helix_tree_bark'
	]).processingTime(10)
	
event.recipes.createCutting('6x betterend:helix_tree_planks',[
	'betterend:helix_tree_stripped_log'
	]).processingTime(10)
	
event.recipes.createCutting('6x betterend:helix_tree_planks',[
	'betterend:helix_tree_stripped_bark'
	]).processingTime(10)	
	
//十文木切割
event.recipes.createCutting('betterend:tenanea_stripped_log',[
	'betterend:helix_tree_log'
	]).processingTime(10)
	
event.recipes.createCutting('betterend:tenanea_stripped_bark',[
	'betterend:tenanea_bark'
	]).processingTime(10)
	
event.recipes.createCutting('6x betterend:tenanea_planks',[
	'betterend:tenanea_stripped_log'
	]).processingTime(10)
	
event.recipes.createCutting('6x betterend:tenanea_planks',[
	'betterend:tenanea_stripped_bark'
	]).processingTime(10)	
	
//龙鳞木切割
event.recipes.createCutting('betterend:dragon_tree_stripped_log',[
	'betterend:dragon_tree_log'
	]).processingTime(10)
	
event.recipes.createCutting('betterend:dragon_tree_stripped_bark',[
	'betterend:dragon_tree_bark'
	]).processingTime(10)
	
event.recipes.createCutting('6x betterend:dragon_tree_planks',[
	'betterend:dragon_tree_stripped_log'
	]).processingTime(10)
	
event.recipes.createCutting('6x betterend:dragon_tree_planks',[
	'betterend:dragon_tree_stripped_bark'
	]).processingTime(10)	
	
//林泊木切割
event.recipes.createCutting('betterend:lacugrove_stripped_log',[
	'betterend:lacugrove_log'
	]).processingTime(10)
	
event.recipes.createCutting('betterend:lacugrove_stripped_bark',[
	'betterend:lacugrove_bark'
	]).processingTime(10)
	
event.recipes.createCutting('6x betterend:lacugrove_planks',[
	'betterend:lacugrove_stripped_log'
	]).processingTime(10)
	
event.recipes.createCutting('6x betterend:lacugrove_planks',[
	'betterend:lacugrove_stripped_bark'
	]).processingTime(10)
	
//莲花木切割
event.recipes.createCutting('betterend:end_lotus_stripped_log',[
	'betterend:end_lotus_log'
	]).processingTime(10)
	
event.recipes.createCutting('betterend:end_lotus_stripped_bark',[
	'betterend:end_lotus_bark'
	]).processingTime(10)
	
event.recipes.createCutting('6x betterend:end_lotus_planks',[
	'betterend:end_lotus_stripped_log'
	]).processingTime(10)
	
event.recipes.createCutting('6x betterend:end_lotus_planks',[
	'betterend:end_lotus_stripped_bark'
	]).processingTime(10)	
	
//苔光木切割
event.recipes.createCutting('betterend:mossy_glowshroom_stripped_log',[
	'betterend:mossy_glowshroom_log'
	]).processingTime(10)
	
event.recipes.createCutting('betterend:mossy_glowshroom_stripped_bark',[
	'betterend:mossy_glowshroom_bark'
	]).processingTime(10)
	
event.recipes.createCutting('6x betterend:mossy_glowshroom_planks',[
	'betterend:mossy_glowshroom_stripped_log'
	]).processingTime(10)
	
event.recipes.createCutting('6x betterend:mossy_glowshroom_planks',[
	'betterend:mossy_glowshroom_stripped_bark'
	]).processingTime(10)	
	
//果冻木切割
event.recipes.createCutting('betterend:jellyshroom_stripped_log',[
	'betterend:jellyshroom_log'
	]).processingTime(10)
	
event.recipes.createCutting('betterend:jellyshroom_stripped_bark',[
	'betterend:jellyshroom_bark'
	]).processingTime(10)
	
event.recipes.createCutting('6x betterend:jellyshroom_planks',[
	'betterend:jellyshroom_stripped_log'
	]).processingTime(10)
	
event.recipes.createCutting('6x betterend:jellyshroom_planks',[
	'betterend:jellyshroom_stripped_bark'
	]).processingTime(10)	

//胶伞木切割
event.recipes.createCutting('betterend:umbrella_tree_stripped_log',[
	'betterend:umbrella_tree_log'
	]).processingTime(10)
	
event.recipes.createCutting('betterend:umbrella_tree_stripped_bark',[
	'betterend:umbrella_tree_bark'
	]).processingTime(10)
	
event.recipes.createCutting('6x betterend:umbrella_tree_planks',[
	'betterend:umbrella_tree_stripped_log'
	]).processingTime(10)
	
event.recipes.createCutting('6x betterend:umbrella_tree_planks',[
	'betterend:umbrella_tree_stripped_bark'
	]).processingTime(10)

//琉森木切割
event.recipes.createCutting('betterend:lucernia_stripped_log',[
	'betterend:lucernia_log'
	]).processingTime(10)
	
event.recipes.createCutting('betterend:lucernia_stripped_bark',[
	'betterend:lucernia_bark'
	]).processingTime(10)
	
event.recipes.createCutting('6x betterend:lucernia_planks',[
	'betterend:lucernia_stripped_log'
	]).processingTime(10)
	
event.recipes.createCutting('6x betterend:lucernia_planks',[
	'betterend:lucernia_stripped_bark'
	]).processingTime(10)

//输导台
event.recipes.createCompacting('infusion_table:infusion_table', [
	'4x minecraft:crying_obsidian',
	'4x minecraft:lapis_block',
	'4x minecraft:polished_deepslate',
	'kubejs:quest_mechanism'
  ]).superheated()

//合金碎片
event.recipes.createCompacting('3x minecraft:netherite_scrap', [
	'minecraft:ancient_debris'
  ]).superheated()



  //末影碎片
  event.recipes.createCompacting('betterend:ender_shard', [
	'4x minecraft:ender_pearl'
  ]).superheated()

//鼠鼠蛋
event.shaped('ratsmischief:rat_spawn_egg', [
			'SSS',
			'SAS',
			'SSS'
	  ], {
			S: 'minecraft:gold_nugget',
			A:'cse:basespawnegg'
	  })

//海龟刷怪蛋
event.shaped('minecraft:turtle_spawn_egg', [
	'SSS',
	'SAS',
	'SSS'
], {
	S: 'minecraft:sea_pickle',
	A: 'cse:basespawnegg'
})

//探索者指南针

event.shaped('explorerscompass:explorerscompass', [
	'ABA',
	'BCB',
	'ABA'
], {
	A: 'twilightforest:root_strand',
	B:'twilightforest:nagastone_head',
	C: 'kubejs:wormhole_mechanism'
})

//群系罗盘

event.shaped('naturescompass:naturescompass', [
	'ABA',
	'BCB',
	'ABA'
], {
	A:'twilightforest:twilight_oak_sapling',
	B:'twilightforest:twilight_oak_log',
	C: 'twilightforest:naga_trophy'
})

//分头行动

event.recipes.createCutting(['2x twilightforest:quest_ram_trophy'], ['twilightforest:quest_ram_trophy'])
event.recipes.createCutting(['2x twilightforest:naga_trophy'], ['twilightforest:naga_trophy'])
event.recipes.createCutting(['2x twilightforest:lich_trophy'], ['twilightforest:lich_trophy'])
event.recipes.createCutting(['2x twilightforest:knight_phantom_trophy'], ['twilightforest:knight_phantom_trophy'])
event.recipes.createCutting(['2x twilightforest:minoshroom_trophy'], ['twilightforest:minoshroom_trophy'])
event.recipes.createCutting(['2x twilightforest:alpha_yeti_trophy'], ['twilightforest:alpha_yeti_trophy'])
event.recipes.createCutting(['2x twilightforest:snow_queen_trophy'], ['twilightforest:snow_queen_trophy'])
event.recipes.createCutting(['2x twilightforest:ur_ghast_trophy'], ['twilightforest:ur_ghast_trophy'])
event.recipes.createCutting(['2x twilightforest:hydra_trophy'], ['twilightforest:hydra_trophy'])
event.recipes.createCutting(['2x minecraft:dragon_head'], ['minecraft:dragon_head'])
event.recipes.createCutting(['2x adventurez:prime_eye'], ['adventurez:prime_eye'])


//机械手
event.shaped('create:deployer', [
	'A',
	'B',
	'C'
], {
	A:'create:shaft',
	B:'create:andesite_casing',
	C:'create:andesite_alloy'
})

//灵魂火煅炉
event.recipes.createSequencedAssembly([ 
	'conjuring:soulfire_forge',
	], 'kubejs:flame_mechanism', [
	event.recipes.createDeploying('kubejs:flame_mechanism', ['kubejs:flame_mechanism', 'minecraft:obsidian']),
	event.recipes.createDeploying('kubejs:flame_mechanism', ['kubejs:flame_mechanism', 'minecraft:blackstone']),
	event.recipes.createDeploying('kubejs:flame_mechanism', ['kubejs:flame_mechanism', 'minecraft:soul_sand']),
	event.recipes.createPressing('kubejs:flame_mechanism', 'kubejs:flame_mechanism').processingTime(50)
	]).transitionalItem('kubejs:flame_mechanism').loops(512)

//升级核心
event.recipes.createSequencedAssembly([ 
	'mcda:upgrade_core'
	], 'kubejs:armor_mechanism', [
	event.recipes.createDeploying('kubejs:armor_mechanism', ['kubejs:armor_mechanism', 'mcda:fabric_bolt_red']),
	event.recipes.createDeploying('kubejs:armor_mechanism', ['kubejs:armor_mechanism', 'mcda:fabric_bolt_yellow']),
	event.recipes.createDeploying('kubejs:armor_mechanism', ['kubejs:armor_mechanism', 'mcda:fabric_bolt_blue']),
	event.recipes.createDeploying('kubejs:armor_mechanism', ['kubejs:armor_mechanism', 'minecraft:netherite_ingot']),
	event.recipes.createPressing('kubejs:armor_mechanism', 'kubejs:armor_mechanism').processingTime(50)
	]).transitionalItem('kubejs:armor_mechanism').loops(1)

//翼

  event.recipes.createMechanicalCrafting(Item.of('icarus:white_light_wings'), [
	'ABABA',
	'BCKCB',
	'CCACC',
	'CCACC',
	'ACACA'

  ], {
	A: 'minecraft:air',
	B: 'create:piston_extension_pole',
	C: 'create:white_sail',
	K: 'kubejs:wing_mechanism'
  })

  event.recipes.createMechanicalCrafting('icarus:white_feathered_wings', [
	'ACACA',
	'CBKBC',
	'CBABC',
	'CCACC',
	'ACACA'

  ], {
	A: 'minecraft:air',
	B: 'create:filter',
	C: 'minecraft:feather',
	K: 'kubejs:wing_mechanism'
  })

  event.recipes.createMechanicalCrafting('icarus:white_dragon_wings', [
	'ABABA',
	'BCKCB',
	'BCACB',
	'BCACB',
	'ACACA'

  ], {
	A: 'minecraft:air',
	B: 'minecraft:bone',
	C: 'minecraft:phantom_membrane',
	K: 'kubejs:wing_mechanism'
  })

  event.recipes.createMechanicalCrafting('icarus:white_mechanical_leather_wings', [
	'ACACA',
	'BDKDB',
	'BEAEB',
	'BEAEB',
	'AEAEA'

  ], {
	A: 'minecraft:air',
	B: 'create:shaft',
	C: 'create:cogwheel',
	D: 'create:encased_fan',
	E: 'minecraft:leather',
	K: 'kubejs:wing_mechanism'
  })

  event.recipes.createMechanicalCrafting('icarus:white_mechanical_feathered_wings', [
	'ACACA',
	'BDKDB',
	'BEAEB',
	'BEAEB',
	'AEAEA'

  ], {
	A: 'minecraft:air',
	B: 'create:shaft',
	C: 'create:large_cogwheel',
	D: 'create:water_wheel',
	E: 'minecraft:feather',
	K: 'kubejs:wing_mechanism'
  })

	
//芙兰朵露之翼
event.recipes.createSequencedAssembly([ 
'icarus:flandres_wings'
], '#kubejs:wing_flandres', [
event.recipes.createDeploying('#kubejs:wing_flandres', ['#kubejs:wing_flandres',Item.of('minecraft:elytra', '{Damage:431}')]),
event.recipes.createDeploying('#kubejs:wing_flandres', ['#kubejs:wing_flandres','minecraft:lapis_lazuli']),
event.recipes.createDeploying('#kubejs:wing_flandres', ['#kubejs:wing_flandres','minecraft:amethyst_shard']),
event.recipes.createDeploying('#kubejs:wing_flandres', ['#kubejs:wing_flandres','minecraft:copper_ingot']),
event.recipes.createDeploying('#kubejs:wing_flandres', ['#kubejs:wing_flandres','minecraft:gold_ingot']),
event.recipes.createDeploying('#kubejs:wing_flandres', ['#kubejs:wing_flandres','minecraft:emerald']),
event.recipes.createDeploying('#kubejs:wing_flandres', ['#kubejs:wing_flandres','minecraft:diamond'])
]).transitionalItem('#kubejs:wing_flandres').loops(1)

//无序之翼
event.recipes.createSequencedAssembly([ 
	'icarus:discords_wings'
	], '#kubejs:wing_discords', [
	event.recipes.createDeploying('#kubejs:wing_discords', ['#kubejs:wing_discords','minecraft:glow_ink_sac']),
	event.recipes.createDeploying('#kubejs:wing_discords', ['#kubejs:wing_discords','minecraft:glow_ink_sac']),
	event.recipes.createDeploying('#kubejs:wing_discords', ['#kubejs:wing_discords','minecraft:glow_ink_sac']),
	event.recipes.createDeploying('#kubejs:wing_discords', ['#kubejs:wing_discords',Item.of('minecraft:elytra', '{Damage:431}')]),
	event.recipes.createDeploying('#kubejs:wing_discords', ['#kubejs:wing_discords','minecraft:end_crystal']),
	event.recipes.createDeploying('#kubejs:wing_discords', ['#kubejs:wing_discords','minecraft:end_crystal']),
	event.recipes.createDeploying('#kubejs:wing_discords', ['#kubejs:wing_discords','minecraft:end_crystal']),
	event.recipes.createPressing('#kubejs:wing_discords', '#kubejs:wing_discords').processingTime(50)
	]).transitionalItem('#kubejs:wing_discords').loops(1)

//赞扎之翼
event.recipes.createSequencedAssembly([ 
	'icarus:zanzas_wings'
	], '#icarus:dragon_wings', [
	event.recipes.createDeploying('#icarus:dragon_wings', ['#icarus:dragon_wings',Item.of('minecraft:elytra', '{Damage:431}')]),
	event.recipes.createDeploying('#icarus:dragon_wings', ['#icarus:dragon_wings','minecraft:nether_star']),
	event.recipes.createPressing('#icarus:dragon_wings', '#icarus:dragon_wings').processingTime(50)
	]).transitionalItem('#icarus:dragon_wings').loops(1)

//末影之眼
event.recipes.createCompacting('minecraft:ender_eye', [
	'twilightforest:blue_castle_rune_brick',
	'twilightforest:yellow_castle_rune_brick',
	'minecraft:ender_pearl',
	'twilightforest:pink_castle_rune_brick',
	'twilightforest:violet_castle_rune_brick'
  ]).superheated()

//深渊观察者
event.shaped('fwaystones:abyss_watcher', [
	'ABA'
], {
	A:'minecraft:flint',
	B:'kubejs:wormhole_mechanism',
})


//水晶碎片
event.recipes.createSequencedAssembly([ 
	'5x betterend:crystal_shards'
	], 'adventurez:prime_eye', [
	event.recipes.createDeploying('adventurez:prime_eye', ['adventurez:prime_eye','betterend:aurora_crystal']),
	]).transitionalItem('adventurez:prime_eye').loops(1)

//末地尘埃
event.recipes.createMixing(['4x betterend:endstone_dust'], ['minecraft:end_stone','3x minecraft:sand']).superheated()

//末地石
event.blasting('minecraft:end_stone', 'betterend:endstone_dust')

//苍黄石
event.recipes.createHaunting(['betterend:flavolite'], ['minecraft:end_stone'])

//永恒符文苍黄石
  event.recipes.createMechanicalCrafting('betterend:flavolite_runed_eternal', [
	'AAABCAA',
	'AEFGDEA',
	'CDHIHFA',
	'BGLMJGB',
	'AFHKHDC',
	'AEDGFEA',
	'AACBAAA',
  ], {
	A: 'minecraft:air',
	B: 'betterend:charnia_red',
	C: 'betterend:charnia_orange',
	D: 'betterend:charnia_green',
	E: 'betterend:charnia_cyan',
	F: 'betterend:charnia_light_blue',
	G: 'betterend:charnia_purple',
	H: 'betterend:flavolite_polished',
	I: 'twilightforest:yellow_castle_rune_brick',
	J: 'twilightforest:blue_castle_rune_brick',
	K: 'twilightforest:pink_castle_rune_brick',
	L: 'twilightforest:violet_castle_rune_brick',
	M: 'betterend:enchanted_petal'

  })


//永恒基座
event.recipes.createCutting([Item.of('betterend:eternal_pedestal').withChance(0.001)], ['betterend:flavolite_runed_eternal'])


 /* //魔女的扫帚
event.recipes.createMechanicalCrafting('majobroom:broom_item', [
	'DDDCD',
	'AAEBC',
	'DDDCD',

  ], {
	A: 'minecraft:stick',
	B: 'twilightforest:snow_queen_trophy',
	C: 'minecraft:hay_block',
	D: 'minecraft:air',
	E: '#icarus:melts'
  })
//魔女套装
event.shaped('majobroom:majo_hat', [
	'DBC',
	'BAB',
], {
	A:'mcda:fabric_bolt_pink',
	B:'mcda:fabric_bolt_purple',
	C:'create:precision_mechanism',
	D:'minecraft:air'
})

event.shaped('majobroom:majo_cloth', [
	'DBD',
	'BAB',
	'BCB'
], {
	A:'mcda:fabric_bolt_white',
	B:'mcda:fabric_bolt_purple',
	C:'create:precision_mechanism',
	D:'minecraft:air'
})

event.shaped('majobroom:stocking', [
	'ADA',
	'BDB',
	'BDB'
], {
	A:'create:nozzle',
	B:'minecraft:string',
	D:'minecraft:air'
})*/

//四矿石
event.recipes.createMilling(['create:zinc_nugget',Item.of('create:zinc_nugget').withChance(0.5)], ['create:asurine'])
event.recipes.createMilling(['2x minecraft:iron_nugget'], ['create:crimsite'])
event.recipes.createMilling(['minecraft:gold_nugget'], ['create:ochrum'])
event.recipes.createMilling(['4x create:copper_nugget'], ['create:veridium'])

//附魔花瓣
event.recipes.createMixing(['betterend:enchanted_petal'], ['4x betterend:crystal_shards','betterend:hydralux_petal']).superheated()


//热带鱼
event.shaped('minecraft:tropical_fish_spawn_egg', [
	'CBC',
	'BAB',
	'CBC'
], {
	A:'minecraft:egg',
	B:'minecraft:tropical_fish',
	C:'minecraft:air'
})

//海泡菜
event.shaped('minecraft:sea_pickle', [
	'ABA',
	'CCC',
	'CCC'
], {
	A:'minecraft:air',
	B:'minecraft:soul_torch',
	C:'minecraft:kelp'
})

//珊瑚块
event.recipes.createCompacting([
	'minecraft:tube_coral_block',
	'minecraft:brain_coral_block',
	'minecraft:bubble_coral_block',
	'minecraft:fire_coral_block',
	'minecraft:horn_coral_block'
], ['5x minecraft:cobblestone','minecraft:sea_pickle'])

//珊瑚和珊瑚扇
event.recipes.createCutting(['minecraft:tube_coral','minecraft:tube_coral_fan'], ['minecraft:tube_coral_block'])
event.recipes.createCutting(['minecraft:brain_coral','minecraft:brain_coral_fan'], ['minecraft:brain_coral_block'])
event.recipes.createCutting(['minecraft:bubble_coral','minecraft:bubble_coral_fan'], ['minecraft:bubble_coral_block'])
event.recipes.createCutting(['minecraft:fire_coral','minecraft:fire_coral_fan'], ['minecraft:fire_coral_block'])
event.recipes.createCutting(['minecraft:horn_coral','minecraft:horn_coral_fan'], ['minecraft:horn_coral_block'])

//硫磺
event.recipes.createMixing(['4x betterend:crystalline_sulphur'], ['4x minecraft:quartz','minecraft:blaze_powder','#c:coal']).heated()

//硫磺块
event.recipes.createCompacting([
	'betterend:brimstone',
], ['4x betterend:crystalline_sulphur'])

//谜题粉末
event.recipes.createMixing(['kubejs:quest_dust'], ['twilightforest:quest_ram_trophy'])

//红石粉
event.recipes.createMixing(['2x minecraft:redstone'], ['kubejs:quest_dust','create:cinder_flour'])

//蛋
event.shaped('cse:basespawnegg', [
	'CCC',
	'CAC',
	'CCC'
], {
	A:'kubejs:quest_mechanism',
	C:'minecraft:egg'
})

event.shaped('cse:basespawnegg', [
	'CCC',
	'CAC',
	'CCC'
], {
	A:'minecraft:egg',
	C:'minecraft:diamond'
})
//地狱岩
event.recipes.createSplashing(['minecraft:netherrack'], ['minecraft:blackstone'])

//小型虫洞
event.recipes.createSequencedAssembly([ 
	'fwaystones:pocket_wormhole'
	], 'fwaystones:local_void', [
	event.recipes.createDeploying('fwaystones:local_void', ['fwaystones:local_void','fwaystones:abyss_watcher']),
	]).transitionalItem('fwaystones:local_void').loops(64)

//法杖

//橡木
  event.recipes.createMechanicalCrafting('hexcasting:wand_oak', [
	'A',
	'B',
	'C',
	'D',
	'E'

  ], {
	A: 'minecraft:amethyst_shard',
	B: 'kubejs:hex_mechanism',
	C: 'minecraft:oak_planks',
	D: 'minecraft:leather',
	E: 'minecraft:stick'
  })
 //云杉
  event.recipes.createMechanicalCrafting('hexcasting:wand_spruce', [
	'A',
	'B',
	'C',
	'D',
	'E'

  ], {
	A: 'minecraft:amethyst_shard',
	B: 'kubejs:hex_mechanism',
	C: 'minecraft:spruce_planks',
	D: 'minecraft:leather',
	E: 'minecraft:stick'
	})

//白桦
event.recipes.createMechanicalCrafting('hexcasting:wand_birch', [
	'A',
	'B',
	'C',
	'D',
	'E'

  ], {
	A: 'minecraft:amethyst_shard',
	B: 'kubejs:hex_mechanism',
	C: 'minecraft:birch_planks',
	D: 'minecraft:leather',
	E: 'minecraft:stick'
	})
//丛林木
event.recipes.createMechanicalCrafting('hexcasting:wand_jungle', [
	'A',
	'B',
	'C',
	'D',
	'E'

  ], {
	A: 'minecraft:amethyst_shard',
	B: 'kubejs:hex_mechanism',
	C: 'minecraft:jungle_planks',
	D: 'minecraft:leather',
	E: 'minecraft:stick'
	})
//金合欢
event.recipes.createMechanicalCrafting('hexcasting:wand_acacia', [
	'A',
	'B',
	'C',
	'D',
	'E'

  ], {
	A: 'minecraft:amethyst_shard',
	B: 'kubejs:hex_mechanism',
	C: 'minecraft:acacia_planks',
	D: 'minecraft:leather',
	E: 'minecraft:stick'
	})
//深色橡木
event.recipes.createMechanicalCrafting('hexcasting:wand_dark_oak', [
	'A',
	'B',
	'C',
	'D',
	'E'

  ], {
	A: 'minecraft:amethyst_shard',
	B: 'kubejs:hex_mechanism',
	C: 'minecraft:dark_oak_planks',
	D: 'minecraft:leather',
	E: 'minecraft:stick'
	})
//绯红木
event.recipes.createMechanicalCrafting('hexcasting:wand_crimson', [
	'A',
	'B',
	'C',
	'D',
	'E'

  ], {
	A: 'minecraft:amethyst_shard',
	B: 'kubejs:hex_mechanism',
	C: 'minecraft:crimson_planks',
	D: 'minecraft:leather',
	E: 'minecraft:stick'
	})
//诡异木
event.recipes.createMechanicalCrafting('hexcasting:wand_warped', [
	'A',
	'B',
	'C',
	'D',
	'E'

  ], {
	A: 'minecraft:amethyst_shard',
	B: 'kubejs:hex_mechanism',
	C: 'minecraft:warped_planks',
	D: 'minecraft:leather',
	E: 'minecraft:stick'
	})

//枪械

//小麦种子手枪
event.recipes.createMechanicalCrafting(Item.of('gardenarsenal:seed_pistol', '{Damage:0,skinType:"metallic_copper"}'), [
   'ABCD',
   'FEFF'

  ], {
	A: 'kubejs:agriculture_mechanism',
	B: 'create:fluid_tank',
	C: 'create:mechanical_pump',
	D: 'create:fluid_pipe',
	E: 'minecraft:lever',
	F: 'minecraft:air'

	})

//闪耀左轮手枪
event.recipes.createMechanicalCrafting(Item.of('gardenarsenal:glimmering_revolver', '{Damage:0,shellLoad:6,skinType:"metallic_copper"}'), [
	'FEFFF',
	'ABCDD',
	'FGFFF'
 
   ], {
	A: 'kubejs:agriculture_mechanism',
	B: Item.of('gardenarsenal:seed_pistol').ignoreNBT(),
	C: 'create:mechanical_pump',
	D: 'create:fluid_pipe',
	E: 'create:copper_valve_handle',
	F: 'minecraft:air',
	G: 'create:fluid_tank'
	 })

//可可豆猎枪
event.recipes.createMechanicalCrafting( Item.of('gardenarsenal:cocoa_bean_shotgun', '{Damage:0,skinType:"metallic_copper"}'), [
	'ABCDD',
	'FGFDD'
 
   ], {
	A: 'kubejs:agriculture_mechanism',
	B: Item.of('gardenarsenal:glimmering_revolver').ignoreNBT(),
	C: 'create:mechanical_pump',
	D: 'create:fluid_pipe',
	F: 'minecraft:air',
	G: 'create:fluid_tank'
	 })

//胡萝卜步枪
event.recipes.createMechanicalCrafting(Item.of('gardenarsenal:carrot_rifle', '{Damage:0,skinType:"metallic_copper"}'), [
	'ABCDDD',
	'FGFEFF'
 
   ], {
	A: 'kubejs:agriculture_mechanism',
	B: Item.of('gardenarsenal:cocoa_bean_shotgun').ignoreNBT(),
	C: 'create:mechanical_pump',
	D: 'create:fluid_pipe',
	E: 'create:shaft',
	F: 'minecraft:air',
	G: 'create:fluid_tank'
	 })

//甘蔗狙击枪
event.recipes.createMechanicalCrafting(Item.of('gardenarsenal:sugar_cane_sniper', '{Damage:0,skinType:"metallic_copper"}'), [
	'FFHFFFF',
	'ABCDDDD',
	'FGFEEFF'
 
   ], {
	A: 'kubejs:agriculture_mechanism',
	B: Item.of('gardenarsenal:carrot_rifle').ignoreNBT(),
	C: 'create:mechanical_pump',
	D: 'create:fluid_pipe',
	E: 'create:shaft',
	F: 'minecraft:air',
	G: 'create:fluid_tank',
	H: 'create:goggles'
	 })
	
//土豆火箭筒
event.recipes.createMechanicalCrafting(Item.of('gardenarsenal:potato_bazooka', '{Damage:0,skinType:"metallic_copper"}'), [
	'FFFFFHFF',
	'ABCDDDDD',
	'FGFEFEFF'
 
   ], {
	A: 'kubejs:agriculture_mechanism',
	B: Item.of('gardenarsenal:sugar_cane_sniper').ignoreNBT(),
	C: 'create:mechanical_pump',
	D: 'create:fluid_pipe',
	E: 'create:shaft',
	F: 'minecraft:air',
	G: 'create:fluid_tank',
	H: 'create:goggles'
	 })
	
//土豆加农炮
event.recipes.createMechanicalCrafting(Item.of('create:potato_cannon', '{Damage:0}'), [
	'ABCDDDD',
	'FGGDDDD'
 
   ], {
	A: 'kubejs:agriculture_mechanism',
	B: Item.of('gardenarsenal:potato_bazooka').ignoreNBT(),
	C: 'create:mechanical_pump',
	D: 'create:fluid_pipe',
	F: 'minecraft:air',
	G: 'create:fluid_tank',
	 })

//咒法学物品	 
//算盘
event.recipes.createMechanicalCrafting('hexcasting:abacus', [
	'ABCBA',
 
   ], {
	A: 'minecraft:stick',
	B: 'hexcasting:amethyst_dust',
	C: 'kubejs:casting_mechanism',
	 })

//核心
event.recipes.createMechanicalCrafting('hexcasting:focus', [
	'ABCBA',
 
   ], {
	A: 'minecraft:glowstone_dust',
	B: 'minecraft:amethyst_shard',
	C: 'kubejs:casting_mechanism',
	 })

//法术书
event.recipes.createMechanicalCrafting(Item.of('hexcasting:spellbook', '{page_idx:0,page_names:{}}'), [
	'ABCBD',
 
   ], {
	A: 'minecraft:gold_ingot',
	B: 'hexcasting:charged_amethyst',
	C: 'kubejs:casting_mechanism',
	D: 'minecraft:writable_book',
	 })

//杂件
event.recipes.createSequencedAssembly([ 
	'hexcasting:cypher'
	], 'hexcasting:amethyst_dust', [
	event.recipes.createDeploying('hexcasting:amethyst_dust', ['hexcasting:amethyst_dust','kubejs:casting_mechanism']),
	event.recipes.createDeploying('hexcasting:amethyst_dust', ['hexcasting:amethyst_dust','minecraft:copper_ingot']),
	]).transitionalItem('hexcasting:amethyst_dust').loops(1)

//缀品
event.recipes.createSequencedAssembly([ 
	'hexcasting:trinket'
	], 'minecraft:amethyst_shard', [
	event.recipes.createDeploying('minecraft:amethyst_shard', ['minecraft:amethyst_shard','kubejs:casting_mechanism']),
	event.recipes.createDeploying('minecraft:amethyst_shard', ['minecraft:amethyst_shard','minecraft:iron_ingot']),
	]).transitionalItem('minecraft:amethyst_shard').loops(1)

//造物
event.recipes.createSequencedAssembly([ 
	'hexcasting:artifact'
	], 'hexcasting:charged_amethyst', [
	event.recipes.createDeploying('hexcasting:charged_amethyst', ['hexcasting:charged_amethyst','kubejs:casting_mechanism']),
	event.recipes.createDeploying('hexcasting:charged_amethyst', ['hexcasting:charged_amethyst','minecraft:gold_ingot']),
	event.recipes.createDeploying('hexcasting:charged_amethyst', ['hexcasting:charged_amethyst','#minecraft:music_discs']),
	]).transitionalItem('hexcasting:charged_amethyst').loops(1)
	
//紫颂果
event.recipes.createHaunting(['minecraft:chorus_fruit'], ['minecraft:apple'])

//染色剂

event.shaped('hexcasting:pride_colorizer_pansexual', [
	'DBD',
	'BCB',
	'DBD'
], {
	D:'minecraft:air',
	B:'hexcasting:amethyst_dust',
	C:'minecraft:bowl'
})

//狱咒之环
event.recipes.createSequencedAssembly([ 
	'kubejs:hellspells_ring',
	], 'twilightforest:knightmetal_ring', [
	event.recipes.createDeploying('twilightforest:knightmetal_ring', ['twilightforest:knightmetal_ring', 'kubejs:hellspells_blue']),
	event.recipes.createDeploying('twilightforest:knightmetal_ring', ['twilightforest:knightmetal_ring', 'kubejs:hellspells_pink']),
	event.recipes.createDeploying('twilightforest:knightmetal_ring', ['twilightforest:knightmetal_ring', 'kubejs:hellspells_purple']),
	event.recipes.createDeploying('twilightforest:knightmetal_ring', ['twilightforest:knightmetal_ring', 'kubejs:hellspells_yellow']),
	event.recipes.createPressing('twilightforest:knightmetal_ring', 'twilightforest:knightmetal_ring').processingTime(50)
	]).transitionalItem('twilightforest:knightmetal_ring').loops(256)

//狱咒典籍
event.recipes.createSequencedAssembly([ 
	'kubejs:hellspells_book',
	], 'minecraft:book', [
	event.recipes.createDeploying('minecraft:book', ['minecraft:book', Item.of('hexcasting:battery', '{"hexcasting:mana":6400000,"hexcasting:start_mana":6400000}')]),
	event.recipes.createDeploying('minecraft:book', ['minecraft:book', 'kubejs:hellspells_ring']),
	event.recipes.createDeploying('minecraft:book', ['minecraft:book', '#icarus:melts']),
	event.recipes.createPressing('minecraft:book', 'minecraft:book').processingTime(50)
	]).transitionalItem('minecraft:book').loops(1)



//安山构件

event.recipes.createSequencedAssembly([ 
	'kubejs:andesite_mechanism'
	], 'create:andesite_casing', [
	event.recipes.createDeploying('create:andesite_casing', ['create:andesite_casing','minecraft:dried_kelp']),
	event.recipes.createDeploying('create:andesite_casing', ['create:andesite_casing','create:cogwheel']),
	event.recipes.createDeploying('create:andesite_casing', ['create:andesite_casing','create:zinc_nugget']),
	]).transitionalItem('create:andesite_casing').loops(1)

//铜构件

event.recipes.createSequencedAssembly([ 
	'kubejs:copper_mechanism'
	], 'create:copper_casing', [
	event.recipes.createDeploying('create:copper_casing', ['create:copper_casing','minecraft:dried_kelp']),
	event.recipes.createDeploying('create:copper_casing', ['create:copper_casing','create:cogwheel']),
	event.recipes.createDeploying('create:copper_casing', ['create:copper_casing','minecraft:gold_nugget']),
	]).transitionalItem('create:copper_casing').loops(1)

//黄铜构件

event.recipes.createSequencedAssembly([ 
	'kubejs:brass_mechanism'
	], 'create:brass_casing', [
	event.recipes.createDeploying('create:brass_casing', ['create:brass_casing','minecraft:dried_kelp']),
	event.recipes.createDeploying('create:brass_casing', ['create:brass_casing','create:cogwheel']),
	event.recipes.createDeploying('create:brass_casing', ['create:brass_casing','create:electron_tube']),
	]).transitionalItem('create:brass_casing').loops(1)

//红石构件

event.recipes.createSequencedAssembly([ 
	'kubejs:redstone_mechanism'
	], 'minecraft:quartz_block', [
	event.recipes.createDeploying('minecraft:quartz_block', ['minecraft:quartz_block','minecraft:redstone_torch']),
	event.recipes.createDeploying('minecraft:quartz_block', ['minecraft:quartz_block','create:cogwheel']),
	event.recipes.createDeploying('minecraft:quartz_block', ['minecraft:quartz_block','minecraft:redstone']),
	]).transitionalItem('minecraft:quartz_block').loops(1)


//谜题构件

event.recipes.createSequencedAssembly([ 
	'kubejs:quest_mechanism'
	], 'twilightforest:quest_ram_trophy', [
	event.recipes.createDeploying('twilightforest:quest_ram_trophy', ['twilightforest:quest_ram_trophy','create:cogwheel']),
	event.recipes.createDeploying('twilightforest:quest_ram_trophy', ['twilightforest:quest_ram_trophy','create:large_cogwheel']),
	event.recipes.createDeploying('twilightforest:quest_ram_trophy', ['twilightforest:quest_ram_trophy','twilightforest:twisted_stone']),
	event.recipes.createDeploying('twilightforest:quest_ram_trophy', ['twilightforest:quest_ram_trophy','minecraft:white_dye']),
	]).transitionalItem('twilightforest:quest_ram_trophy').loops(8)

//虫洞构件

event.recipes.createSequencedAssembly([ 
	'kubejs:wormhole_mechanism'
	], 'twilightforest:naga_trophy', [
	event.recipes.createDeploying('twilightforest:naga_trophy', ['twilightforest:naga_trophy','create:cogwheel']),
	event.recipes.createDeploying('twilightforest:naga_trophy', ['twilightforest:naga_trophy','create:large_cogwheel']),
	event.recipes.createDeploying('twilightforest:naga_trophy', ['twilightforest:naga_trophy','twilightforest:root_strand']),
	event.recipes.createDeploying('twilightforest:naga_trophy', ['twilightforest:naga_trophy','minecraft:brown_dye']),
	]).transitionalItem('twilightforest:naga_trophy').loops(8)

//术法构件

event.recipes.createSequencedAssembly([ 
	'kubejs:hex_mechanism'
	], 'twilightforest:lich_trophy', [
	event.recipes.createDeploying('twilightforest:lich_trophy', ['twilightforest:lich_trophy','create:cogwheel']),
	event.recipes.createDeploying('twilightforest:lich_trophy', ['twilightforest:lich_trophy','create:large_cogwheel']),
	event.recipes.createDeploying('twilightforest:lich_trophy', ['twilightforest:lich_trophy','minecraft:gold_ingot']),
	event.recipes.createDeploying('twilightforest:lich_trophy', ['twilightforest:lich_trophy','minecraft:yellow_dye']),
	]).transitionalItem('twilightforest:lich_trophy').loops(64)

//农艺构件

event.recipes.createSequencedAssembly([ 
	'kubejs:agriculture_mechanism'
	], 'twilightforest:minoshroom_trophy', [
	event.recipes.createDeploying('twilightforest:minoshroom_trophy', ['twilightforest:minoshroom_trophy','create:cogwheel']),
	event.recipes.createDeploying('twilightforest:minoshroom_trophy', ['twilightforest:minoshroom_trophy','create:large_cogwheel']),
	event.recipes.createDeploying('twilightforest:minoshroom_trophy', ['twilightforest:minoshroom_trophy','minecraft:copper_ingot']),
	event.recipes.createDeploying('twilightforest:minoshroom_trophy', ['twilightforest:minoshroom_trophy','minecraft:orange_dye']),
	]).transitionalItem('twilightforest:minoshroom_trophy').loops(32)
	
//装甲构件

event.recipes.createSequencedAssembly([ 
	'kubejs:armor_mechanism'
	], 'twilightforest:knight_phantom_trophy', [
	event.recipes.createDeploying('twilightforest:knight_phantom_trophy', ['twilightforest:knight_phantom_trophy','create:cogwheel']),
	event.recipes.createDeploying('twilightforest:knight_phantom_trophy', ['twilightforest:knight_phantom_trophy','create:large_cogwheel']),
	event.recipes.createDeploying('twilightforest:knight_phantom_trophy', ['twilightforest:knight_phantom_trophy','minecraft:iron_ingot']),
	event.recipes.createDeploying('twilightforest:knight_phantom_trophy', ['twilightforest:knight_phantom_trophy','minecraft:green_dye']),
	]).transitionalItem('twilightforest:knight_phantom_trophy').loops(64)

//映射构件

event.recipes.createSequencedAssembly([ 
	'kubejs:casting_mechanism'
	], 'twilightforest:alpha_yeti_trophy', [
	event.recipes.createDeploying('twilightforest:alpha_yeti_trophy', ['twilightforest:alpha_yeti_trophy','create:cogwheel']),
	event.recipes.createDeploying('twilightforest:alpha_yeti_trophy', ['twilightforest:alpha_yeti_trophy','create:large_cogwheel']),
	event.recipes.createDeploying('twilightforest:alpha_yeti_trophy', ['twilightforest:alpha_yeti_trophy','create:zinc_ingot']),
	event.recipes.createDeploying('twilightforest:alpha_yeti_trophy', ['twilightforest:alpha_yeti_trophy','minecraft:blue_dye']),
	]).transitionalItem('twilightforest:alpha_yeti_trophy').loops(16)

//魔咒构件

event.recipes.createSequencedAssembly([ 
	'kubejs:spells_mechanism'
	], 'twilightforest:snow_queen_trophy', [
	event.recipes.createDeploying('twilightforest:snow_queen_trophy', ['twilightforest:snow_queen_trophy','create:cogwheel']),
	event.recipes.createDeploying('twilightforest:snow_queen_trophy', ['twilightforest:snow_queen_trophy','create:large_cogwheel']),
	event.recipes.createDeploying('twilightforest:snow_queen_trophy', ['twilightforest:snow_queen_trophy','hexcasting:amethyst_dust']),
	event.recipes.createDeploying('twilightforest:snow_queen_trophy', ['twilightforest:snow_queen_trophy','minecraft:light_gray_dye']),
	]).transitionalItem('twilightforest:snow_queen_trophy').loops(16)
	

//飞翼构件

event.recipes.createSequencedAssembly([ 
	'kubejs:wing_mechanism'
	], 'twilightforest:ur_ghast_trophy', [
	event.recipes.createDeploying('twilightforest:ur_ghast_trophy', ['twilightforest:ur_ghast_trophy','create:cogwheel']),
	event.recipes.createDeploying('twilightforest:ur_ghast_trophy', ['twilightforest:ur_ghast_trophy','create:large_cogwheel']),
	event.recipes.createDeploying('twilightforest:ur_ghast_trophy', ['twilightforest:ur_ghast_trophy','minecraft:phantom_membrane']),
	event.recipes.createDeploying('twilightforest:ur_ghast_trophy', ['twilightforest:ur_ghast_trophy','minecraft:red_dye']),
	]).transitionalItem('twilightforest:ur_ghast_trophy').loops(16)

//玄火构件

event.recipes.createSequencedAssembly([ 
	'kubejs:flame_mechanism'
	], 'twilightforest:hydra_trophy', [
	event.recipes.createDeploying('twilightforest:hydra_trophy', ['twilightforest:hydra_trophy','create:cogwheel']),
	event.recipes.createDeploying('twilightforest:hydra_trophy', ['twilightforest:hydra_trophy','create:large_cogwheel']),
	event.recipes.createDeploying('twilightforest:hydra_trophy', ['twilightforest:hydra_trophy','conjuring:lesser_conjuration_essence']),
	event.recipes.createDeploying('twilightforest:hydra_trophy', ['twilightforest:hydra_trophy','minecraft:purple_dye']),
	]).transitionalItem('twilightforest:hydra_trophy').loops(4)


//压缩储罐
event.recipes.createPressing([
	'kubejs:compression_tank'
], ['create:fluid_tank'])

//浓缩花露

event.recipes.createSequencedAssembly([ 
	'kubejs:toilet_water_concentrate'
	], 'kubejs:compression_tank', [
	event.recipes.createDeploying('kubejs:sf_toilet_water_concentrate', ['kubejs:sf_toilet_water_concentrate','#minecraft:flowers']),
	event.recipes.createFilling('kubejs:sf_toilet_water_concentrate', ['kubejs:sf_toilet_water_concentrate',{"fluid":"minecraft:water","amount":20250}])
	]).transitionalItem('kubejs:sf_toilet_water_concentrate').loops(1024)

//浓缩魔能

event.recipes.createSequencedAssembly([ 
	'kubejs:magicka_concentrate'
	], 'kubejs:compression_tank', [
	event.recipes.createDeploying('kubejs:sf_magicka_concentrate', ['kubejs:sf_magicka_concentrate','minecraft:lapis_lazuli']),
	event.recipes.createDeploying('kubejs:sf_magicka_concentrate', ['kubejs:sf_magicka_concentrate','betterend:crystalline_sulphur']),
	event.recipes.createFilling('kubejs:sf_magicka_concentrate', ['kubejs:sf_magicka_concentrate',{"fluid":"create:potion","nbt":{"Potion":"minecraft:awkward"},"amount":27000}])
	]).transitionalItem('kubejs:sf_magicka_concentrate').loops(1024)

//浓缩菌索

event.recipes.createSequencedAssembly([ 
	'kubejs:rhizomorph_concentrate'
	], 'kubejs:compression_tank', [
	event.recipes.createDeploying('kubejs:sf_rhizomorph_concentrate', ['kubejs:sf_rhizomorph_concentrate','minecraft:warped_roots']),
	event.recipes.createDeploying('kubejs:sf_rhizomorph_concentrate', ['kubejs:sf_rhizomorph_concentrate','minecraft:glow_berries']),
	event.recipes.createDeploying('kubejs:sf_rhizomorph_concentrate', ['kubejs:sf_rhizomorph_concentrate','minecraft:crimson_roots']),
	]).transitionalItem('kubejs:sf_rhizomorph_concentrate').loops(1024)

//浓缩茶饮

event.recipes.createSequencedAssembly([ 
	'kubejs:tea_concentrate'
	], 'kubejs:compression_tank', [
	event.recipes.createFilling('kubejs:sf_tea_concentrate', ['kubejs:sf_tea_concentrate',{"fluid":"create:tea","amount":27000}]),
	event.recipes.createDeploying('kubejs:sf_tea_concentrate', ['kubejs:sf_tea_concentrate','#kubejs:knights_drinks']),
	]).transitionalItem('kubejs:sf_tea_concentrate').loops(1024)

//浓缩岩浆

event.recipes.createSequencedAssembly([ 
	'kubejs:lava_concentrate'
	], 'kubejs:compression_tank', [
	event.recipes.createDeploying('kubejs:sf_lava_concentrate', ['kubejs:sf_lava_concentrate','minecraft:gunpowder']),
	event.recipes.createFilling('kubejs:sf_lava_concentrate', ['kubejs:sf_lava_concentrate',{"fluid":"minecraft:lava","amount":27000}]),
	]).transitionalItem('kubejs:sf_lava_concentrate').loops(1024)

//浓缩咒法
	event.recipes.createSequencedAssembly([ 
		'kubejs:hex_concentrate'
		], 	'kubejs:compression_tank', [
		event.recipes.createDeploying('kubejs:sf_hex_concentrate', ['kubejs:sf_hex_concentrate','#kubejs:hex_dyes']),
		event.recipes.createDeploying('kubejs:sf_hex_concentrate', ['kubejs:sf_hex_concentrate','hexcasting:akashic_leaves1']),
		event.recipes.createDeploying('kubejs:sf_hex_concentrate', ['kubejs:sf_hex_concentrate','hexcasting:akashic_leaves2']),
		event.recipes.createDeploying('kubejs:sf_hex_concentrate', ['kubejs:sf_hex_concentrate','hexcasting:akashic_leaves3']),
		]).transitionalItem('kubejs:sf_hex_concentrate').loops(64)

//浓缩星河
event.recipes.createSequencedAssembly([ 
	'kubejs:galaxy_concentrate'
	], 	'kubejs:compression_tank', [
	event.recipes.createDeploying('kubejs:sf_galaxy_concentrate', ['kubejs:sf_galaxy_concentrate','gofish:aquatic_astral_stew']),
	event.recipes.createDeploying('kubejs:sf_galaxy_concentrate', ['kubejs:sf_galaxy_concentrate','minecraft:diamond']),
	event.recipes.createDeploying('kubejs:sf_galaxy_concentrate', ['kubejs:sf_galaxy_concentrate','minecraft:diamond']),
	event.recipes.createDeploying('kubejs:sf_galaxy_concentrate', ['kubejs:sf_galaxy_concentrate','minecraft:diamond']),
	]).transitionalItem('kubejs:sf_galaxy_concentrate').loops(16)

//浓缩杂烩
event.recipes.createSequencedAssembly([ 
	'kubejs:hodgepodge_concentrate'
	], 	'kubejs:compression_tank', [
	event.recipes.createDeploying('kubejs:sf_hodgepodge_concentrate', ['kubejs:sf_hodgepodge_concentrate','#kubejs:desserts']),
	event.recipes.createDeploying('kubejs:sf_hodgepodge_concentrate', ['kubejs:sf_hodgepodge_concentrate','#kubejs:fastfoods']),
	event.recipes.createDeploying('kubejs:sf_hodgepodge_concentrate', ['kubejs:sf_hodgepodge_concentrate','#kubejs:stewed_foods']),
	event.recipes.createDeploying('kubejs:sf_hodgepodge_concentrate', ['kubejs:sf_hodgepodge_concentrate','#kubejs:feasts']),
	]).transitionalItem('kubejs:sf_hodgepodge_concentrate').loops(256)

//安山机壳切制
//传动杆
event.stonecutting('8x create:shaft', [
	'create:andesite_casing'
	])
	//齿轮
	event.stonecutting('4x create:cogwheel', [
		'create:andesite_casing'
		])
	//大齿轮
	event.stonecutting('2x create:large_cogwheel', [
		'create:andesite_casing'
		])
	//置物台
	event.stonecutting('create:depot', [
		'create:andesite_casing'
		])
	//曲柄
	event.stonecutting('create:hand_crank', [
		'create:andesite_casing'
		])
	//水车
	event.stonecutting('create:water_wheel', [
		'create:andesite_casing'
		])
	//旋转底盘
	event.stonecutting('create:radial_chassis', [
		'create:andesite_casing'
		])
	//机壳底盘
	event.stonecutting('2x create:linear_chassis', [
		'create:andesite_casing'])
	//活塞杆
	event.stonecutting('8x create:piston_extension_pole', [
		'create:andesite_casing'
		])
	//起重机杆
	event.stonecutting('8x create:gantry_shaft', [
		'create:andesite_casing'])

		
		
//安山构件切制

	//十字
	event.stonecutting('create:gearbox', [
	'kubejs:andesite_mechanism'
	])
	//竖直十字
	event.stonecutting('create:vertical_gearbox', [
		'kubejs:andesite_mechanism'
		])
	//链式
	event.stonecutting('create:encased_chain_drive', [
		'kubejs:andesite_mechanism'
		])
	//溜槽
	event.stonecutting('4x create:chute', [
		'kubejs:andesite_mechanism'
		])
	//漏斗
	event.stonecutting('2x create:andesite_funnel', [
		'kubejs:andesite_mechanism'
		])
	//隧道
	event.stonecutting('create:andesite_tunnel', [
		'kubejs:andesite_mechanism'
		])
	//动力轴承
	event.stonecutting('create:mechanical_bearing', [
		'kubejs:andesite_mechanism'
		])
	//风车轴承
	event.stonecutting('create:windmill_bearing', [
		'kubejs:andesite_mechanism'
		])
		
	//石磨
	event.stonecutting('create:millstone', [
	'kubejs:andesite_mechanism'
	])
	//辊压
	event.stonecutting('create:mechanical_press', [
		'kubejs:andesite_mechanism'
		])
	//搅拌
	event.stonecutting('create:mechanical_mixer', [
		'kubejs:andesite_mechanism'
		])
	//动力锯
	event.stonecutting('create:mechanical_saw', [
		'kubejs:andesite_mechanism'
		])
	//钻头
	event.stonecutting('create:mechanical_drill', [
		'kubejs:andesite_mechanism'
		])
	//犁
	event.stonecutting('create:mechanical_plough', [
		'kubejs:andesite_mechanism'
		])
	//收割机
	event.stonecutting('create:mechanical_harvester', [
		'kubejs:andesite_mechanism'
		])
	//鼓风机
	event.stonecutting('create:encased_fan', [
		'kubejs:andesite_mechanism'
		])
		
	//工作盆
	event.stonecutting('create:basin', [
		'kubejs:andesite_mechanism'
		])
	//弹射置物台
	event.stonecutting('create:weighted_ejector', [
		'kubejs:andesite_mechanism'
		])
	//移动接口
	event.stonecutting('create:portable_storage_interface', [
		'kubejs:andesite_mechanism'
		])
	//机械手
	event.stonecutting('create:deployer', [
		'kubejs:andesite_mechanism'
		])
		['create:rope_pulley', 'create:mechanical_piston', 'create:gantry_carriage']
	//绳索滑轮
	event.stonecutting('create:rope_pulley', [
		'kubejs:andesite_mechanism'
		])
	//动力活塞
	event.stonecutting('create:mechanical_piston', [
		'kubejs:andesite_mechanism'
		])
	//起重机取物器
	event.stonecutting('create:gantry_carriage', [
		'kubejs:andesite_mechanism'
		])

//铜构件
	//管道
	event.stonecutting('8x create:fluid_pipe', [
		'kubejs:copper_mechanism'
		])
	//动力泵
	event.stonecutting('create:mechanical_pump', [
		'kubejs:copper_mechanism'
		])
	//智能管道
	event.stonecutting('create:smart_fluid_pipe', [
		'kubejs:copper_mechanism'
		])
	//阀门
	event.stonecutting('create:fluid_valve', [
		'kubejs:copper_mechanism'
		])
	//手轮
	event.stonecutting('create:copper_valve_handle', [
		'kubejs:copper_mechanism'
		])
	//储罐
	event.stonecutting('create:fluid_tank', [
		'kubejs:copper_mechanism'
		])
	//软管滑轮
	event.stonecutting('create:hose_pulley', [
		'kubejs:copper_mechanism'
		])
	//分液池
	event.stonecutting('create:item_drain', [
		'kubejs:copper_mechanism'
		])
	//注液器
	event.stonecutting('create:spout', [
		'kubejs:copper_mechanism'
		])
	//流体接口
	event.stonecutting('create:portable_fluid_interface', [
		'kubejs:copper_mechanism'
		])
	//蒸汽引擎
	event.stonecutting('create:steam_engine', [
		'kubejs:copper_mechanism'
		])
	//蒸汽笛
	event.stonecutting('create:steam_whistle', [
		'kubejs:copper_mechanism'
		])

//黄铜构件

	//溜槽
	event.stonecutting('create:smart_chute', [
		'kubejs:brass_mechanism'
		])
	//漏斗
	event.stonecutting('2x create:brass_funnel', [
		'kubejs:brass_mechanism'
		])
	//隧道
	event.stonecutting('create:brass_tunnel', [
		'kubejs:brass_mechanism'
		])
	//动力合成器
	event.stonecutting('create:mechanical_crafter', [
		'kubejs:brass_mechanism'
		])
	//编程齿轮箱
	event.stonecutting('create:sequenced_gearshift', [
		'kubejs:brass_mechanism'
		])
	//侦测器
	event.stonecutting('create:content_observer', [
		'kubejs:brass_mechanism'
		])
	//存量转换器
	event.stonecutting('create:stockpile_switch', [
		'kubejs:brass_mechanism'
		])
	//转速控制器
	event.stonecutting('create:rotation_speed_controller', [
		'kubejs:brass_mechanism'
		])
	//动力臂
	event.stonecutting('create:mechanical_arm', [
		'kubejs:brass_mechanism'
		])
	//连接器
	event.stonecutting('create:display_link', [
		'kubejs:brass_mechanism'
		])
	//显示器
	event.stonecutting('4x create:display_board', [
		'kubejs:brass_mechanism'
		])
	//控制铁轨
	event.stonecutting('4x create:controller_rail', [
		'kubejs:brass_mechanism'
		])

//红石构件

	//离合器
	event.stonecutting('create:clutch', [
		'kubejs:redstone_mechanism'
		])
	//反转箱
	event.stonecutting('create:gearshift', [
		'kubejs:redstone_mechanism'
		])
	//可调节链式
	event.stonecutting('create:adjustable_chain_gearshift', [
		'kubejs:redstone_mechanism'
		])
	//接触红石发生器
	event.stonecutting('create:redstone_contact', [
		'kubejs:redstone_mechanism'
		])
	//脉冲中继器
	event.stonecutting('create:pulse_repeater', [
		'kubejs:redstone_mechanism'
		])
	//脉冲延长器
	event.stonecutting('create:pulse_extender', [
		'kubejs:redstone_mechanism'
		])
	//锁存器
	event.stonecutting('create:powered_latch', [
		'kubejs:redstone_mechanism'
		])
	//锁存转换器
	event.stonecutting('create:powered_toggle_latch', [
		'kubejs:redstone_mechanism'
		])
	//阳光探测器
	event.stonecutting('minecraft:daylight_detector', [
		'kubejs:redstone_mechanism'
		])
	//无线红石终端
	event.stonecutting('create:redstone_link', [
		'kubejs:redstone_mechanism'
		])
	//活塞
	event.stonecutting('minecraft:piston', [
		'kubejs:redstone_mechanism'
		])
	//侦测器
	event.stonecutting('minecraft:observer', [
		'kubejs:redstone_mechanism'
		])
	//发射器
	event.stonecutting('minecraft:dispenser', [
		'kubejs:redstone_mechanism'
		])
	//投掷器
	event.stonecutting('minecraft:dropper', [
		'kubejs:redstone_mechanism'
		])
	//中继器
	event.stonecutting('minecraft:repeater', [
		'kubejs:redstone_mechanism'
		])
	//比较器
	event.stonecutting('minecraft:comparator', [
		'kubejs:redstone_mechanism'
		])
	//无线红石终端
	event.stonecutting('create:linked_controller', [
		'kubejs:redstone_mechanism'
		])


//配方删除！！！！


	event.remove({output: [
		'hexcasting:abacus', 'hexcasting:focus', 'hexcasting:spellbook', 
		'hexcasting:cypher', 'hexcasting:trinket', 'hexcasting:artifact',
	//施法物品
		'gardenarsenal:ammo_crate',
		'gardenarsenal:seed_pistol', 'gardenarsenal:glimmering_revolver', 'gardenarsenal:cocoa_bean_shotgun','gardenarsenal:carrot_rifle',
'gardenarsenal:sugar_cane_sniper','gardenarsenal:potato_bazooka','create:potato_cannon',
	//枪械
		'hexcasting:wand_oak', 'hexcasting:wand_spruce', 'hexcasting:wand_birch', 'hexcasting:wand_jungle', 'hexcasting:wand_acacia', 
		'hexcasting:wand_dark_oak', 'hexcasting:wand_crimson', 'hexcasting:wand_warped', 'hexcasting:wand_akashic',
	//魔杖	
		'create:clutch', 'create:gearshift', 'create:adjustable_chain_gearshift', 'create:redstone_contact', 
	'create:pulse_repeater', 'create:pulse_extender', 'create:powered_latch', 'create:powered_toggle_latch',
	'create:linked_controller','minecraft:daylight_detector', 'create:redstone_link', 'minecraft:piston', 'minecraft:observer',
	'minecraft:dispenser', 'minecraft:dropper', 'minecraft:repeater', 'minecraft:comparator',
	//红石构件
	'create:stockpile_switch', 'create:rotation_speed_controller', 'create:mechanical_arm', 'create:display_link', 'create:display_board', 'create:controller_rail',
		'create:smart_chute', 'create:brass_funnel', 'create:brass_tunnel', 'create:mechanical_crafter', 'create:sequenced_gearshift', 'create:content_observer',
	//黄铜构件
	'create:fluid_pipe', 'create:mechanical_pump', 'create:smart_fluid_pipe', 'create:fluid_valve', 'create:copper_valve_handle', 'create:fluid_tank',
	'create:hose_pulley', 'create:item_drain', 'create:spout', 'create:portable_fluid_interface', 'create:steam_engine', 'create:steam_whistle',
	//铜构件	
		'create:gearbox', 'create:vertical_gearbox', 'create:encased_chain_drive', 'create:chute', 'create:andesite_funnel', 'create:andesite_tunnel', 
	'create:mechanical_bearing', 'create:windmill_bearing','create:basin', 'create:weighted_ejector',
	'create:portable_storage_interface', 'create:deployer', 'create:secondary_linear_chassis', 
	'create:millstone', 'create:mechanical_press', 'create:mechanical_mixer', 'create:mechanical_saw', 'create:mechanical_drill', 
	'create:mechanical_plough', 'create:mechanical_harvester', 'create:encased_fan',
	//安山构件
	'create:gantry_shaft','create:piston_extension_pole','create:shaft', 'create:cogwheel', 'create:large_cogwheel', 'create:depot', 'create:hand_crank', 'create:water_wheel', 'create:radial_chassis','create:linear_chassis',
	//安山机壳
		'minecraft:turtle_spawn_egg',
	'minecraft:tropical_fish_spawn_egg',
	'betterend:respawn_obelisk',
	'fwaystones:pocket_wormhole',
	'fwaystones:abyss_watcher',
	'minecraft:ender_eye',
	'conjuring:soulfire_forge',
	'mcda:upgrade_core',
	'create:steam_engine',
	'create:deployer',
	'naturescompass:naturescompass',
	'explorerscompass:explorerscompass',
		'minecraft:infested_deepslate',
	'minecraft:infested_chiseled_stone_bricks',
	'minecraft:infested_cracked_stone_bricks',
	 'minecraft:infested_mossy_stone_bricks',
		'minecraft:infested_stone',
	'minecraft:infested_stone_bricks',
	'minecraft:spawner',
		'cse:basespawnegg',
	'infusion_table:infusion_table',
	'mcdw:sword_broken_sawblade',
	Item.of('twilightforest:yeti_boots', '{Damage:0}').enchant('minecraft:protection', 2).enchant('minecraft:feather_falling', 4),
	Item.of('twilightforest:yeti_leggings', '{Damage:0}').enchant('minecraft:protection', 2),
	Item.of('twilightforest:yeti_chestplate', '{Damage:0}').enchant('minecraft:protection', 2),
	Item.of('twilightforest:yeti_helmet', '{Damage:0}').enchant('minecraft:protection', 2),
	Item.of('twilightforest:arctic_helmet', '{Damage:0}'),
	Item.of('twilightforest:arctic_leggings', '{Damage:0}'),
	Item.of('twilightforest:arctic_chestplate', '{Damage:0}'),
	Item.of('twilightforest:arctic_boots', '{Damage:0}'),
	Item.of('twilightforest:knightmetal_boots', '{Damage:0}'),
	Item.of('twilightforest:knightmetal_leggings', '{Damage:0}'),
	Item.of('twilightforest:knightmetal_chestplate', '{Damage:0}'),
	Item.of('twilightforest:knightmetal_helmet', '{Damage:0}'),
	Item.of('twilightforest:steeleaf_helmet', '{Damage:0}').enchant('minecraft:protection', 2),
	Item.of('twilightforest:steeleaf_boots', '{Damage:0}').enchant('minecraft:feather_falling', 2)
,	Item.of('twilightforest:steeleaf_leggings', '{Damage:0}').enchant('minecraft:fire_protection', 2)
,	Item.of('twilightforest:steeleaf_chestplate', '{Damage:0}').enchant('minecraft:blast_protection', 2)
,	Item.of('twilightforest:steeleaf_helmet', '{Damage:0}').enchant('minecraft:projectile_protection', 2),
	Item.of('twilightforest:fiery_boots', '{Damage:0}'),
	Item.of('twilightforest:fiery_leggings', '{Damage:0}'),
	Item.of('twilightforest:fiery_chestplate', '{Damage:0}'),
	Item.of('twilightforest:fiery_helmet', '{Damage:0}'),
	Item.of('twilightforest:naga_leggings', '{Damage:0}').enchant('minecraft:protection', 3),
	Item.of('twilightforest:naga_chestplate', '{Damage:0}').enchant('minecraft:fire_protection', 3),
	Item.of('twilightforest:ironwood_boots', '{Damage:0}').enchant('minecraft:feather_falling', 1)
,	Item.of('twilightforest:ironwood_leggings', '{Damage:0}').enchant('minecraft:protection', 1)
,	Item.of('twilightforest:ironwood_chestplate', '{Damage:0}').enchant('minecraft:protection', 1)
,	Item.of('twilightforest:ironwood_helmet', '{Damage:0}').enchant('minecraft:aqua_affinity', 1),'mcdw:axe_double','mcdw:axe_whirlwind','mcdw:axe_highland', 'mcdw:axe_highland', 	'mcdw:axe_firebrand', 	'mcdw:dagger_shear_dagger', 	'mcdw:dagger_soul_knife', 	'mcdw:spear_whispering_spear', 	'mcdw:spear_whispering_spear', 	'mcdw:spear_fortune', 	'mcdw:dagger_eternal_knife' ,	'mcdw:dagger_moon'	,'mcdw:dagger_chill_gale_knife'	,'mcdw:dagger_void_touched_blade'	,'mcdw:dagger_the_beginning',	'mcdw:dagger_the_end',	'mcdw:dagger_backstabber'	,'mcdw:dagger_swift_striker'	,'mcdw:gauntlet_soul_fists'	,'mcdw:gauntlet_maulers',	'mcdw:sword_dancers_sword',	'mcdw:sword_nameless_blade',	'mcdw:staff_battlestaff_of_terror'

	,'mcdw:staff_growing_staff',	'mcdw:sword_beestinger'	,'mcdw:sword_freezing_foil'	,'mcdw:spear_grave_bane'	,'mcdw:spear_venom_glaive'	,'mcdw:hammer_boneclub',	'mcdw:hammer_bone_cudgel',	'mcdw:hammer_suns_grace'	,'mcdw:hammer_flail'	,'mcdw:hammer_gravity'	,'mcdw:hammer_stormlander',	'mcdw:pick_howling_pick'	,'mcdw:pick_hailing_pinnacle',	'mcdw:sickle_nightmares_bite'	,'mcdw:sickle_frost_scythe',	'mcdw:sickle_jailors_scythe',	'mcdw:sickle_skull_scythe'	,'mcdw:sickle_skull_scythe','mcdw:sword_broken_sawblade',	'mcdw:sword_mechanized_sawblade',	'mcdw:sword_masters_katana',	'mcdw:sword_dark_katana',	'mcdw:whip_vine_whip',	'mcdw:sword_coral_blade'	,'mcdw:sword_sponge_striker'	,'mcdw:axe_encrusted_anchor'	,'mcdw:sword_hawkbrand'	,'mcdw:sword_sinister'	,'mcdw:sword_truthseeker'
	,'mcdw:sword_broadsword'	,'mcdw:sword_claymore',	'mcdw:sword_frost_slayer'	,'mcdw:sword_great_axeblade'	,'mcdw:sword_heartstealer',	'mcdw:sword_the_starless_night',	'mcdw:bow_ancient_bow'	,'mcdw:bow_ancient_bow'	,'mcdw:bow_bonebow',	'mcdw:bow_haunted_bow'
	,'mcdw:bow_phantom_bow'	,'mcdw:bow_twin_bow',	'mcdw:bow_web_bow',	'mcdw:crossbow_pride_of_the_piglins'	,'mcdw:crossbow_slayer_crossbow'	,'mcdw:crossbow_voidcaller_crossbow'	,'mcdw:crossbow_the_slicer','mcdw:bow_bubble_burster',	'mcdw:bow_burst_gale_bow'	,'mcdw:bow_echo_of_the_valley'	,'mcdw:bow_call_of_the_void'	,'mcdw:bow_elite_power_bow',	'mcdw:bow_sabrewing',	'mcdw:bow_pink_scoundrel',	'mcdw:bow_green_menace'	,'mcdw:bow_hunters_promise'	,'mcdw:bow_masters_bow',	'mcdw:bow_winters_touch'	,'mcdw:bow_love_spell_bow',	'mcdw:bow_purple_storm',	'mcdw:bow_mechanical_shortbow',	'mcdw:bow_red_snake'	,'mcdw:bow_red_snake',	'mcdw:crossbow_auto_crossbow'	,'mcdw:crossbow_auto_crossbow',	'mcdw:crossbow_baby_crossbow'
	,'mcdw:crossbow_baby_crossbow',	'mcdw:crossbow_corrupted_crossbow'	,'mcdw:crossbow_soul_hunter_crossbow'	,'mcdw:crossbow_doom_crossbow',	'mcdw:crossbow_feral_soul_crossbow',	'mcdw:crossbow_feral_soul_crossbow',	'mcdw:crossbow_nautical_crossbow',	'mcdw:crossbow_harp_crossbow',	'mcdw:crossbow_lightning_harp_crossbow'	,'mcdw:crossbow_veiled_crossbow','mcdw:bow_nocturnal_bow','mcdw:bow_lost_souls','mcdw:bow_shivering_bow','mcdw:sword_obsidian_claymore','mcdw:sickle_soul_scythe'
]})
})


onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

//刷怪笼禁用
onEvent('block.right_click', event => {
	if(event.block.id == "minecraft:spawner"  ){
		event.cancel();
}
})

//拆解台禁用
onEvent('block.right_click', event => {
    if(event.block.id == "twilightforest:uncrafting_table" ){
        event.cancel();
    }
})

//永恒符文苍黄石禁用
onEvent('block.right_click', event => {
    if(event.item.id == "betterend:flavolite_runed_eternal"){
        event.cancel();
    }
})

//永恒基座禁用
onEvent('block.right_click', event => {
    if(event.item.id == 'betterend:eternal_pedestal'){
        event.cancel();
    }
})

//书架
onEvent('item.tags', event => {	
	event.add('c:bookshelves','betterend:dragon_tree_bookshelf')
	})

//破防机制
//右键道具 给所有boss添加UnProtect标签

//娜迦
onEvent("item.right_click", event => {
	if(event.item.id == 'kubejs:toilet_water_concentrate'){
		event.server.runCommandSilent("/execute at " + event.player + " at @e[type=twilightforest:naga,tag=!UnProtected,distance=..16] run particle crit ~ ~ ~ 2 2 2 0.1 300");
		event.server.runCommandSilent("/execute at " + event.player + " at @e[type=twilightforest:naga,tag=!UnProtected,distance=..16] run particle dust_color_transition 0.19 0.53 0.12 10.0 1.0 1.0 1.0 ~ ~ ~ 2 2 2 0.01 50");
		event.server.runCommandSilent("/execute at " + event.player + " at @e[type=twilightforest:naga,tag=!UnProtected,distance=..16] run playsound minecraft:block.respawn_anchor.deplete player @a[distance=..32] ~ ~ ~ 0.4 1 1");
		event.server.runCommandSilent("/execute at " + event.player + " run tag @e[type=twilightforest:naga,tag=!UnProtected,distance=..18] add UnProtected");
		event.server.runCommandSilent("/execute at " + event.player + " run playsound minecraft:block.enchantment_table.use player @p ~ ~ ~");
		event.server.runCommandSilent("/execute at " + event.player + " run particle minecraft:enchant ~ ~2 ~ 5 1 5 0.01 5000");
		event.server.runCommandSilent("/execute at " + event.player + " run clear @p kubejs:toilet_water_concentrate 1");			
	}
})
//巫妖
onEvent("item.right_click", event => {
	if(event.item.id == 'kubejs:magicka_concentrate'){
		event.server.runCommandSilent("/execute at " + event.player + " at @e[type=twilightforest:lich,tag=!UnProtected,distance=..16] run particle crit ~ ~ ~ 2 2 2 0.1 300");
		event.server.runCommandSilent("/execute at " + event.player + " at @e[type=twilightforest:lich,tag=!UnProtected,distance=..16] run particle dust_color_transition 0.26 0.15 0.58 10.0 1.0 1.0 1.0 ~ ~ ~ 2 2 2 0.01 100");
		event.server.runCommandSilent("/execute at " + event.player + " at @e[type=twilightforest:lich,tag=!UnProtected,distance=..16] run playsound minecraft:block.respawn_anchor.deplete player @a[distance=..32] ~ ~ ~ 0.4 1 1");
		event.server.runCommandSilent("/execute at " + event.player + " run tag @e[type=twilightforest:lich,tag=!UnProtected,distance=..18] add UnProtected");
		event.server.runCommandSilent("/execute at " + event.player + " run playsound minecraft:block.enchantment_table.use player @p ~ ~ ~");
		event.server.runCommandSilent("/execute at " + event.player + " run particle minecraft:enchant ~ ~2 ~ 5 1 5 0.01 5000");
		event.server.runCommandSilent("/execute at " + event.player + " run clear @p kubejs:magicka_concentrate 1");			
	}
})

//米诺菇
onEvent("item.right_click", event => {
	if(event.item.id == 'kubejs:rhizomorph_concentrate'){
		event.server.runCommandSilent("/execute at " + event.player + " at @e[type=twilightforest:minoshroom,tag=!UnProtected,distance=..16] run particle crit ~ ~ ~ 2 2 2 0.1 300");
		event.server.runCommandSilent("/execute at " + event.player + " at @e[type=twilightforest:minoshroom,tag=!UnProtected,distance=..16] run particle dust_color_transition 0.75 0.07 0.07 10.0 1.0 1.0 1.0 ~ ~ ~ 2 2 2 0.01 100");
		event.server.runCommandSilent("/execute at " + event.player + " at @e[type=twilightforest:minoshroom,tag=!UnProtected,distance=..16] run playsound minecraft:block.respawn_anchor.deplete player @a[distance=..32] ~ ~ ~ 0.4 1 1");
		event.server.runCommandSilent("/execute at " + event.player + " run tag @e[type=twilightforest:minoshroom,tag=!UnProtected,distance=..18] add UnProtected");
		event.server.runCommandSilent("/execute at " + event.player + " run playsound minecraft:block.enchantment_table.use player @p ~ ~ ~");
		event.server.runCommandSilent("/execute at " + event.player + " run particle minecraft:enchant ~ ~2 ~ 5 1 5 0.01 5000");
		event.server.runCommandSilent("/execute at " + event.player + " run clear @p kubejs:rhizomorph_concentrate 1");			
	}
})

//幻影骑士
onEvent("item.right_click", event => {
	if(event.item.id == 'kubejs:tea_concentrate'){
		event.server.runCommandSilent("/execute at " + event.player + " at @e[type=twilightforest:knight_phantom,tag=!UnProtected,distance=..16] run particle crit ~ ~ ~ 2 2 2 0.1 300");
		event.server.runCommandSilent("/execute at " + event.player + " at @e[type=twilightforest:knight_phantom,tag=!UnProtected,distance=..16] run particle dust_color_transition 0.53 0.46 0.28 10.0 1.0 1.0 1.0 ~ ~ ~ 2 2 2 0.01 100");
		event.server.runCommandSilent("/execute at " + event.player + " at @e[type=twilightforest:knight_phantom,tag=!UnProtected,distance=..16] run playsound minecraft:block.respawn_anchor.deplete player @a[distance=..32] ~ ~ ~ 0.4 1 1");
		event.server.runCommandSilent("/execute at " + event.player + " run tag @e[type=twilightforest:knight_phantom,tag=!UnProtected,distance=..18] add UnProtected");
		event.server.runCommandSilent("/execute at " + event.player + " run playsound minecraft:block.enchantment_table.use player @p ~ ~ ~");
		event.server.runCommandSilent("/execute at " + event.player + " run particle minecraft:enchant ~ ~2 ~ 5 1 5 0.01 5000");
		event.server.runCommandSilent("/execute at " + event.player + " run clear @p kubejs:tea_concentrate 1");			
	}
})

//雪怪
onEvent("item.right_click", event => {
	if(event.item.id == 'kubejs:lava_concentrate'){
		event.server.runCommandSilent("/execute at " + event.player + " at @e[type=twilightforest:alpha_yeti,tag=!UnProtected,distance=..16] run particle crit ~ ~ ~ 2 2 2 0.1 300");
		event.server.runCommandSilent("/execute at " + event.player + " at @e[type=twilightforest:alpha_yeti,tag=!UnProtected,distance=..16] run particle dust_color_transition 0.16 0.35 0.66 10.0 1.0 1.0 1.0 ~ ~ ~ 2 2 2 0.01 100");
		event.server.runCommandSilent("/execute at " + event.player + " at @e[type=twilightforest:alpha_yeti,tag=!UnProtected,distance=..16] run playsound minecraft:block.respawn_anchor.deplete player @a[distance=..32] ~ ~ ~ 0.4 1 1");
		event.server.runCommandSilent("/execute at " + event.player + " run tag @e[type=twilightforest:alpha_yeti,tag=!UnProtected,distance=..18] add UnProtected");
		event.server.runCommandSilent("/execute at " + event.player + " run playsound minecraft:block.enchantment_table.use player @p ~ ~ ~");
		event.server.runCommandSilent("/execute at " + event.player + " run particle minecraft:enchant ~ ~2 ~ 5 1 5 0.01 5000");
		event.server.runCommandSilent("/execute at " + event.player + " run clear @p kubejs:lava_concentrate 1");			
	}
})

//九头蛇
onEvent("item.right_click", event => {
	if(event.item.id == 'kubejs:hodgepodge_concentrate'){
		event.server.runCommandSilent("/execute at " + event.player + " at @e[type=twilightforest:hydra,tag=!UnProtected,distance=..16] run particle crit ~ ~ ~ 2 2 2 0.1 300");
		event.server.runCommandSilent("/execute at " + event.player + " at @e[type=twilightforest:hydra,tag=!UnProtected,distance=..16] run particle dust_color_transition 0.12 0.22 0.25 10.0 1.0 1.0 1.0 ~ ~ ~ 2 2 2 0.01 50");
		event.server.runCommandSilent("/execute at " + event.player + " at @e[type=twilightforest:hydra,tag=!UnProtected,distance=..16] run playsound minecraft:block.respawn_anchor.deplete player @a[distance=..32] ~ ~ ~ 0.4 1 1");
		event.server.runCommandSilent("/execute at " + event.player + " run tag @e[type=twilightforest:hydra,tag=!UnProtected,distance=..18] add UnProtected");
		event.server.runCommandSilent("/execute at " + event.player + " run playsound minecraft:block.enchantment_table.use player @p ~ ~ ~");
		event.server.runCommandSilent("/execute at " + event.player + " run particle minecraft:enchant ~ ~2 ~ 5 1 5 0.01 5000");
		event.server.runCommandSilent("/execute at " + event.player + " run clear @p kubejs:hodgepodge_concentrate 1");			
	}
})

//暮初恶魂
onEvent("item.right_click", event => {
	if(event.item.id == 'kubejs:galaxy_concentrate'){
		event.server.runCommandSilent("/execute at " + event.player + " at @e[type=twilightforest:ur_ghast,tag=!UnProtected,distance=..16] run particle crit ~ ~ ~ 2 2 2 0.1 300");
		event.server.runCommandSilent("/execute at " + event.player + " at @e[type=twilightforest:ur_ghast,tag=!UnProtected,distance=..16] run particle dust_color_transition 0.60 0.21 0.90 10.0 1.0 1.0 1.0 ~ ~ ~ 4 4 4 0.01 400");
		event.server.runCommandSilent("/execute at " + event.player + " at @e[type=twilightforest:ur_ghast,tag=!UnProtected,distance=..16] run playsound minecraft:block.respawn_anchor.deplete player @a[distance=..32] ~ ~ ~ 0.4 1 1");
		event.server.runCommandSilent("/execute at " + event.player + " run tag @e[type=twilightforest:ur_ghast,tag=!UnProtected,distance=..18] add UnProtected");
		event.server.runCommandSilent("/execute at " + event.player + " run playsound minecraft:block.enchantment_table.use player @p ~ ~ ~");
		event.server.runCommandSilent("/execute at " + event.player + " run particle minecraft:enchant ~ ~2 ~ 5 1 5 0.01 5000");
		event.server.runCommandSilent("/execute at " + event.player + " run clear @p kubejs:galaxy_concentrate 1");			
	}
})
//冰雪女皇
onEvent("item.right_click", event => {
		if(event.item.id == 'kubejs:hex_concentrate'){
			event.server.runCommandSilent("/execute at " + event.player + " at @e[type=twilightforest:snow_queen,tag=!UnProtected,distance=..16] run particle crit ~ ~ ~ 2 2 2 0.1 300");
			event.server.runCommandSilent("/execute at " + event.player + " at @e[type=twilightforest:snow_queen,tag=!UnProtected,distance=..16] run particle dust_color_transition 0.0 0.77 0.96 10.0 1.0 1.0 1.0 ~ ~ ~ 2 2 2 0.01 50");
			event.server.runCommandSilent("/execute at " + event.player + " at @e[type=twilightforest:snow_queen,tag=!UnProtected,distance=..16] run playsound minecraft:block.respawn_anchor.deplete player @a[distance=..32] ~ ~ ~ 0.4 1 1");
			event.server.runCommandSilent("/execute at " + event.player + " run tag @e[type=twilightforest:snow_queen,tag=!UnProtected,distance=..18] add UnProtected");
			event.server.runCommandSilent("/execute at " + event.player + " run playsound minecraft:block.enchantment_table.use player @p ~ ~ ~");
			event.server.runCommandSilent("/execute at " + event.player + " run particle minecraft:enchant ~ ~2 ~ 5 1 5 0.01 5000");
			event.server.runCommandSilent("/execute at " + event.player + " run clear @p kubejs:hex_concentrate 1");			
		}
	})


//卷轴
onEvent("item.right_click", event => {
	if(event.item.id == 'kubejs:spells_mechanism'){
		event.server.runCommandSilent("/execute at " + event.player + " run loot give @p loot kubejs:scroll_loot");
		event.server.runCommandSilent("/execute at " + event.player + " run playsound minecraft:block.amethyst_block.hit player @p ~ ~ ~ 100");
		event.server.runCommandSilent("/execute at " + event.player + " run clear @p kubejs:spells_mechanism 1");	
		
	}
})

//进入地狱传送
onEvent("player.tick", event => {
    if(!(event.player.creativeMode || event.player.spectator)){
		var x = event.player.x * 8;
		var z = event.player.z * 8;
		event.server.runCommandSilent("/execute at @a[nbt={Dimension:\"minecraft:the_nether\"}] run say 我还没有踏入下界的能力");
        event.server.runCommandSilent("/execute in minecraft:overworld run tp @a[nbt={Dimension:\"minecraft:the_nether\"}] " + x + " -1 "  + z);

    }
})

//暮色森林解锁
//1
onEvent("item.right_click", event => {
	if(event.item.id == 'kubejs:andesite_mechanism'){
		event.server.runCommandSilent("/execute at " + event.player + " run clear @p[tag=!TF_1] kubejs:andesite_mechanism 1");	
		event.server.runCommandSilent("/execute at " + event.player + " as @p[tag=!TF_1] run playsound minecraft:entity.experience_orb.pickup player @p ~ ~ ~ 100");
		event.server.runCommandSilent("/execute at " + event.player + " as @p[tag=!TF_1] run say 解锁暮色森林1/4");	
		event.server.runCommandSilent("/execute at " + event.player + " run tag @p[tag=!TF_1] add TF_1");
	
	}
})
//2
onEvent("item.right_click", event => {
	if(event.item.id == 'kubejs:copper_mechanism'){
		event.server.runCommandSilent("/execute at " + event.player + " run clear @p[tag=TF_1,tag=!TF_2] kubejs:copper_mechanism 1");	
		event.server.runCommandSilent("/execute at " + event.player + " as @p[tag=TF_1,tag=!TF_2] run playsound minecraft:entity.experience_orb.pickup player @p ~ ~ ~ 100");
		event.server.runCommandSilent("/execute at " + event.player + " as @p[tag=TF_1,tag=!TF_2] run say 解锁暮色森林1/2");	
		event.server.runCommandSilent("/execute at " + event.player + " run tag @p[tag=TF_1,tag=!TF_2] add TF_2");
	
	}
})
//3
onEvent("item.right_click", event => {
	if(event.item.id == 'kubejs:redstone_mechanism'){
		event.server.runCommandSilent("/execute at " + event.player + " run clear @p[tag=TF_2,tag=!TF_3] kubejs:redstone_mechanism 1");		
		event.server.runCommandSilent("/execute at " + event.player + " as @p[tag=TF_2,tag=!TF_3] run playsound minecraft:entity.experience_orb.pickup player @p ~ ~ ~ 100");
		event.server.runCommandSilent("/execute at " + event.player + " as @p[tag=TF_2,tag=!TF_3] run say 解锁暮色森林3/4");	
		event.server.runCommandSilent("/execute at " + event.player + " run tag @p[tag=TF_2,tag=!TF_3] add TF_3");

	}
})
//4
onEvent("item.right_click", event => {
	if(event.item.id == 'kubejs:brass_mechanism'){
		event.server.runCommandSilent("/execute at " + event.player + " run clear @p[tag=TF_3,tag=!TF_4] kubejs:brass_mechanism 1");
		event.server.runCommandSilent("/execute at " + event.player + " as @p[tag=TF_3,tag=!TF_4] run playsound minecraft:entity.experience_orb.pickup player @p ~ ~ ~ 100");
		event.server.runCommandSilent("/execute at " + event.player + " as @p[tag=TF_3,tag=!TF_4] run say 已解锁暮色森林");	
		event.server.runCommandSilent("/execute at " + event.player + " run tag @p[tag=TF_3,tag=!TF_4] add TF_4");
		
	}
})
	
//进入暮色森林传送
onEvent("player.tick", event => {
    if(!(event.player.creativeMode || event.player.spectator)){
		var x = event.player.x;
		var z = event.player.z;
		event.server.runCommandSilent("/execute at @a[tag=!TF_4,nbt={Dimension:\"twilightforest:twilight_forest\"}] run say 我还没有进入暮色森林的能力");
        event.server.runCommandSilent("/execute in minecraft:overworld run tp @a[tag=!TF_4,nbt={Dimension:\"twilightforest:twilight_forest\"}] " + x + " -1 "  + z);

    }
})

//随机改变怪物体型
onEvent("player.tick", event => {
    if(event.level.time % 2400 == 0){
		var num = Math.floor(Math.random() * 101);
		var rad = 0;
		if (num < 1) {
			rad = (Math.floor(Math.random() * 101) + 200 )/100;
		 } else if (num < 10) {
			rad = (Math.floor(Math.random() * 26) + 25) / 100;
		 } else {
			rad = (Math.floor(Math.random() * 51) + 75) / 100;
		 } 
		 event.server.runCommandSilent("/execute at " + event.player + " run scale set pehkui:base " + rad + " @e[type=#kubejs:allowed,limit=1,distance=..30,sort=nearest]");
		 event.server.runCommandSilent("/execute at " + event.player + " run scale set pehkui:jump_height " + 1/rad + " @e[type=#kubejs:allowed,limit=1,distance=..30,sort=nearest]");

		 if (rad < 1) {
			rad -= 0.15;
		 } else {
			rad += (rad*rad/10);
		 } 
		 event.server.runCommandSilent("/execute at " + event.player + " run scale set pehkui:motion " + 1/rad + " @e[type=#kubejs:allowed,limit=1,distance=..30,sort=nearest]");

    }
})

