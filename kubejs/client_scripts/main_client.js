// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded client example script)')



ClientEvents.lang('en_us', event =>{
	
	//Renaming of Items
	
		event.renameItem('create:precision_mechanism', 'Brass Mechanism')
		event.renameItem('create:incomplete_precision_mechanism', 'Incomplete Brass Mechanism')
		event.renameItem('sophisticatedbackpacks:iron_backpack', 'Andesite Backpack')
		event.renameItem('sophisticatedbackpacks:gold_backpack', 'Brass Backpack')
		event.renameItem('sophisticatedbackpacks:netherite_backpack', 'Sturdy Steel Backpack')
		event.renameItem('createaddition:capacitor', 'Basic Capacitor')
		event.renameItem('tfmg:capacitor_item', 'Advanced Capacitor')
		event.renameItem('tfmg:copper_grenade', 'Thermite Grenade')
		event.renameItem('create:track', 'Andesite Train Track')
		event.renameItem('create_dragons_plus:fluid_hatch', 'Fluid Hatch Drain')
		event.renameItem('ae2:matter_ball', 'Paint Ball')
		event.renameItem('ae2:condenser', 'REMOVED BLOCK, NOT CRAFTABLE')
		event.renameItem('dndesires:gold_whisk', 'Brass Whisk')
		event.renameItem('dndesires:gold_mixer', 'Brass Mixer')
		event.renameItem('crowns:uranium_ingot', 'Uranium Ingot')
		event.renameItem('ae2:nether_quartz_cutting_knife', 'Quartz Cutting Knife')
		event.renameItem('ae2:nether_quartz_wrench', 'Quartz Wrench')
		event.renameItem('ae2:nether_quartz_sword', 'Quartz Sword')
		event.renameItem('ae2:nether_quartz_pickaxe', 'Quartz Pickaxe')
		event.renameItem('ae2:nether_quartz_axe', 'Quartz Axe')
		event.renameItem('ae2:nether_quartz_shovel', 'Quartz Shovel')
		event.renameItem('ae2:nether_quartz_hoe', 'Quartz Hoe')
		event.renameItem('kubejs:single_additive_fuel_bucket', 'Single Additive Fuel')
		event.renameItem('kubejs:double_additive_fuel_bucket', 'Double Additive Fuel')
		event.renameItem('kubejs:triple_additive_fuel_bucket', 'Triple Additive Fuel')
		event.renameItem('kubejs:ethyl_chloride_bucket', 'Ethyl Chloride Tank')
		event.renameItem('kubejs:hydrogen_chloride_bucket', 'Hydrogen Chloride Tank')
		event.renameItem('kubejs:aluminum_silver_catalyst', 'Aluminum-Silver Catalyst')
		event.renameItem('kubejs:hydrogen_fluoride_bucket', 'Hydrogen Fluoride Tank')
		event.renameItem('kubejs:fluorine_bucket', 'Fluorine Tank')
		event.renameItem('kubejs:uranium_hexafluoride_bucket', 'Uranium Hexafluoride Tank')
		event.renameItem('kubejs:enriched_uranium_hexafluoride_bucket', 'Enriched Uranium Hexafluoride Tank')
		event.renameItem('kubejs:ethylene_oxide_bucket', 'Ethylene Oxide Tank')
		event.renameItem("kubejs:chlorine_bucket", "Chlorine Tank")
		event.renameItem("kubejs:oxygen_bucket", "Oxygen Tank")
		event.renameItem("kubejs:waste_steam_bucket", "Waste Steam Tank")
		event.renameItem("kubejs:treated_steam_bucket", "Treated Steam Tank")
		event.renameItem("minecraft:quartz", "Quartz")
		event.renameItem("fluidic_tanks:fluidic_tank", "Andesite Alloy Tank")
		event.renameItem("fluidic_tanks:iron_fluidic_tank", "Brass Tank")
		event.renameItem("fluidic_tanks:gold_fluidic_tank", "Steel Tank")
		event.renameItem("fluidic_tanks:emerald_fluidic_tank", "Nickel Aluminide Tank")
		event.renameItem("dream_stone:dream_stone", "Stasis Stone")
});

ItemEvents.modifyTooltips((event) => {
	event.add(
		"natures_spirit:coconut_shell",
		"Can be used to make a wooden mechanism?",
	);
});

//JEIEvents.hideFluids(event => {
//	event.hide('crowns:uranium_hexafluoride')
//})