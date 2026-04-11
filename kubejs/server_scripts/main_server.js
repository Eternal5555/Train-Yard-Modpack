// Visit the wiki for more info - https://kubejs.com/
console.info('Seems to be working? (Loaded server example script)')

//There are currently [0] Errors that don't need to be fixed.

ServerEvents.tags('item', event => {
	
	//SophisticatedBackpacks
	
		event.remove('sophisticatedbackpacks:upgrade', [
			'sophisticatedbackpacks:stack_upgrade_omega_tier',
			'sophisticatedbackpacks:stack_upgrade_tier_4',
			'sophisticatedbackpacks:stack_upgrade_tier_3',
			'sophisticatedbackpacks:inception_upgrade',
			'sophisticatedbackpacks:alchemy_upgrade',
			'sophisticatedbackpacks:advanced_alchemy_upgrade',
			'sophisticatedbackpacks:infinity_upgrade',
			'sophisticatedbackpacks:survival_infinity_upgrade',
			'sophisticatedbackpacks:chipped/botanist_workbench_upgrade',
			'sophisticatedbackpacks:chipped/glassblower_upgrade',
			'sophisticatedbackpacks:chipped/carpenters_table_upgrade',
			'sophisticatedbackpacks:chipped/loom_table_upgrade',
			'sophisticatedbackpacks:chipped/mason_table_upgrade',
			'sophisticatedbackpacks:chipped/tinkering_table_upgrade',
			'sophisticatedbackpacks:chipped/alchemy_bench_upgrade',
			'sophisticatedbackpacks:stonecutter_upgrade',
			'sophisticatedbackpacks:anvil_upgrade',
			'sophisticatedbackpacks:smithing_upgrade',
			'sophisticatedbackpacks:smelting_upgrade',
			'sophisticatedbackpacks:smoking_upgrade',
			'sophisticatedbackpacks:blasting_upgrade',
			'sophisticatedbackpacks:auto_smelting_upgrade',
			'sophisticatedbackpacks:auto_smoking_upgrade',
			'sophisticatedbackpacks:auto_blasting_upgrade'
		])
		
		event.remove('armourers_workshop:skinnable/backpacks', [
			'sophisticatedbackpacks:diamond_backpack',
			'sophisticatedbackpacks:backpack'
		])
		
		event.remove('curios:back', [
			'sophisticatedbackpacks:diamond_backpack',
			'sophisticatedbackpacks:backpack'
		])
		
		event.remove('accessories:all_curios_items', [
			'sophisticatedbackpacks:diamond_backpack',
			'sophisticatedbackpacks:backpack',
			'ae2:portable_item_cell_1k',
			'ae2:portable_item_cell_4k',
			'ae2:portable_item_cell_16k',
			'ae2:portable_item_cell_64k',
			'ae2:portable_item_cell_256k',
			'ae2:portable_fluid_cell_1k',
			'ae2:portable_fluid_cell_4k',
			'ae2:portable_fluid_cell_16k',
			'ae2:portable_fluid_cell_64k',
			'ae2:portable_fluid_cell_256k'
		])

	//Other?
	
		event.add('c:backpack_material', [
			'minecraft:hay_block',
			'supplementaries:flax_block',
			'kubejs:stored_canvas'
		])
		
		event.remove('c:wires/copper', [
			'tfmg:copper_wire',
		])

		event.remove('c:wires', [
			'tfmg:copper_wire',
		])

		event.remove('c:plates/zinc', [
			'createaddition:zinc_sheet',
		])
		
		event.add('c:wooden_mechanism_casing_material', [
			'minecraft:bowl',
			'handcrafted:wood_bowl',
			'natures_spirit:coconut_shell'
		])
		
		event.add('c:saltstones', [
			'minecraft:basalt',
			'dndecor:gabbro'
		])

		event.add('c:ingots/silver', [
			'kubejs:silver_ingot'
		])

		event.add('minecraft:coals', [
			'kubejs:welsh_coal'
		])
		
		event.add('c:plates/certus_quartz', [
			'kubejs:certus_quartz_plate',
			'kubejs:charged_certus_quartz_plate'
		])

})

ServerEvents.tags('fluid', event => {
	
	//TFMG
	
		event.add('tfmg:gas', [
			'kubejs:oxygen',
			'kubejs:ethylene_oxide',
			'kubejs:chlorine',
			'kubejs:ethyl_chloride',
			'kubejs:hydrogen_chloride',
			'kubejs:uranium_hexafluoride',
			'kubejs:enriched_uranium_hexafluoride',
			'kubejs:fluorine',
			'kubejs:hydrogen_fluoride'
		])
		
		event.add('tfmg:flammable', [	//Flammable Gasses
			'kubejs:oxygen',
			'kubejs:ethylene_oxide',
			'kubejs:ethyl_chloride',
			'kubejs:tetraethyllead'
		])

		event.add('c:single_additive_fuel', [
			'kubejs:single_additive_fuel'
		])

		event.add('c:double_additive_fuel', [
			'kubejs:double_additive_fuel'
		])

		event.add('c:triple_additive_fuel', [
			'kubejs:triple_additive_fuel'
		])

		event.add('tfmg:flammable', [	//Flammable Liquids
			'kubejs:single_additive_fuel',
			'kubejs:double_additive_fuel',
			'kubejs:triple_additive_fuel',
			'kubejs:superheated_crude_oil',
			'kubejs:treated_crude_oil',
			'kubejs:residual_fuel_oil'
		])

		event.add('c:fuel', [
			'kubejs:single_additive_fuel',
			'kubejs:double_additive_fuel',
			'kubejs:triple_additive_fuel'
		])
		

	//Other

})

MoreJS.villagerTrades(event => {
	//event.removeTrades({
	//	first: 'minecraft:emerald',
	//	firstCount
	//	second: 'minecraft:book',
	//	professions: 'minecraft:librarian',
	//event.removeTrades({ output: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{lvl:1, id: "aue:unbreakable"}]}') })
	//event.removeTrades({ output: Item.of('minecraft:enchanted_book').enchant('aue:unbreakable')})
	/*event.removeTrades({ 
		outputItem: Item.of('minecraft:enchanted_book', {StoredEnchantments: [{id: 'aue:unbreakable', lvl: 1s }]}),
		})*/
	//event.removeTrades({ output: Item.of('minecraft:enchanted_book', [StoredEnchantments={levels:{'aue:unbreakable':1}}] ) })
	//event.removeTrades({ output: ('minecraft:enchanted_book', {StoredEnchantments:[{id:"aue:unbreakable",lvl:1s}]} ) })
	//event.removeTrades({ output: 'minecraft:enchanted_book[minecraft:stored_enchantments={aue:unbreakable:1}]' })
	/*event.removeTrades({
		profession: 'librarian',
		output: 'minecraft:enchanted_book{StoredEnchantments:[{id:"aue:unbreakable",lvl:1s}]}'
	})*/
	//event.removeTrades({
		//first: 'minecraft:emerald',
		//second: 'minecraft:book',
		//output: Item.of("enchanted_book").enchant("aue:unbreakable", 1)
		//output: 'minecraft:enchanted_book[minecraft:stored_enchantments={levels:{"aue:unbreakable":1}}]',
		//profession: 'minecraft:librarian'
		//outputItem: 'minecraft:enchanted_book[minecraft:stored_enchantments={levels:{unbreaking:1}}]'
		
	//})
	
	//event.modifyTrades('minecraft:librarian'
})

ServerEvents.recipes(event => {

//Removes Recipes

//Needed Removal
	
	//Immersive Aircraft
	
		event.remove({ output: [
			'immersive_aircraft:hull',
			'immersive_aircraft:engine',
			'immersive_aircraft:sail',
			'immersive_aircraft:propeller',
			'immersive_aircraft:boiler',
			'immersive_aircraft:enhanced_propeller',
			'immersive_aircraft:eco_engine',
			'immersive_aircraft:nether_engine',
			'immersive_aircraft:steel_boiler',
			'immersive_aircraft:industrial_gears',
			'immersive_aircraft:sturdy_pipes',
			'immersive_aircraft:gyroscope',
			'immersive_aircraft:gyroscope_hud',
			'immersive_aircraft:gyroscope_dials',
			'immersive_aircraft:improved_landing_gear',
			'immersive_aircraft:heavy_crossbow',
			'immersive_aircraft:hull_reinforcement',
			'immersive_aircraft:rotary_cannon',
			'immersive_aircraft:bomb_bay'
			]
		})
		
		event.remove({ id: 'immersive_aircraft:airship' })
		event.remove({ id: 'immersive_aircraft:cargo_airship' })
		event.remove({ id: 'immersive_aircraft:warship' })
		event.remove({ id: 'immersive_aircraft:biplane' })
		event.remove({ id: 'immersive_aircraft:bamboo_hopper' })
		event.remove({ id: 'immersive_aircraft:gyrodyne' })
		event.remove({ id: 'immersive_aircraft:quadrocopter' })
				
	//SophisticatedBackpacks
	
		event.remove({ output: [
			'sophisticatedbackpacks:iron_backpack',
			'sophisticatedbackpacks:copper_backpack',
			'sophisticatedbackpacks:gold_backpack',
			'sophisticatedbackpacks:netherite_backpack',
			'sophisticatedbackpacks:diamond_backpack',
			'sophisticatedbackpacks:backpack',
			'sophisticatedbackpacks:stack_upgrade_omega_tier',
			'sophisticatedbackpacks:stack_upgrade_tier_4',
			'sophisticatedbackpacks:stack_upgrade_tier_3',
			'sophisticatedbackpacks:inception_upgrade',
			'sophisticatedbackpacks:alchemy_upgrade',
			'sophisticatedbackpacks:advanced_alchemy_upgrade',
			'sophisticatedbackpacks:infinity_upgrade',
			'sophisticatedbackpacks:survival_infinity_upgrade',
			'sophisticatedbackpacks:chipped/botanist_workbench_upgrade',
			'sophisticatedbackpacks:chipped/glassblower_upgrade',
			'sophisticatedbackpacks:chipped/carpenters_table_upgrade',
			'sophisticatedbackpacks:chipped/loom_table_upgrade',
			'sophisticatedbackpacks:chipped/mason_table_upgrade',
			'sophisticatedbackpacks:chipped/tinkering_table_upgrade',
			'sophisticatedbackpacks:chipped/alchemy_bench_upgrade',
			'sophisticatedbackpacks:stonecutter_upgrade',
			'sophisticatedbackpacks:anvil_upgrade',
			'sophisticatedbackpacks:smithing_upgrade',
			'sophisticatedbackpacks:smelting_upgrade',
			'sophisticatedbackpacks:smoking_upgrade',
			'sophisticatedbackpacks:blasting_upgrade',
			'sophisticatedbackpacks:auto_smelting_upgrade',
			'sophisticatedbackpacks:auto_smoking_upgrade',
			'sophisticatedbackpacks:auto_blasting_upgrade'
			]
		})

	//Create
	
		event.remove({ id: 'create:sequenced_assembly/track' })
		event.remove({ id: 'create:crushing/galena' })
		event.remove({ id: 'create:sequenced_assembly/precision_mechanism' })
		event.remove({ id: 'create:milling/gravel' })
		event.remove({ id: 'create:crushing/tuff' })
		event.remove({ id: 'create:crushing/tuff_recycling' })
		event.remove({ id: 'createaddition:crushing/tuff_recycling' })
		
		event.remove({ id: 'create:crushing/raw_iron' })
		event.remove({ id: 'create:crushing/raw_iron_block' })
		event.remove({ id: 'create:crushing/raw_gold' })
		event.remove({ id: 'create:crushing/raw_gold_block' })
		event.remove({ id: 'create:crushing/raw_copper' })
		event.remove({ id: 'create:crushing/raw_copper_block' })
		event.remove({ id: 'create:crushing/raw_zinc' })
		event.remove({ id: 'create:crushing/raw_zinc_block' })
		event.remove({ id: 'create:crushing/raw_lead' })
		event.remove({ id: 'create:crushing/raw_lead_block' })
		event.remove({ id: 'create:crushing/raw_nickel' })
		event.remove({ id: 'create:crushing/raw_nickel_block' })
		event.remove({ id: 'create:crushing/raw_lithium' })
		event.remove({ id: 'create:crushing/raw_lithium_block' })
		
		event.remove({ id: 'create:crushing/diorite_recycling' })
		event.remove({ id: 'create:crushing/diorite' })
		
		event.remove({ id: 'create:crushing/crimsite_recycling' })
		event.remove({ id: 'create:crushing/crimsite' })
		event.remove({ id: 'create:crushing/asurine_recycling' })
		event.remove({ id: 'create:crushing/asurine' })
		event.remove({ id: 'create:crushing/ochrum_recycling' })
		event.remove({ id: 'createaddition:crushing/ochrum_recycling' })
		event.remove({ id: 'create:crushing/ochrum' })
		event.remove({ id: 'create:crushing/veridium_recycling' })
		event.remove({ id: 'create:crushing/veridium' })
		
		event.remove({ output: [
			'create:belt_connector',
			'create:spout',
			'create:andesite_funnel',
			'create:brass_funnel',
			'create:andesite_tunnel',
			'create:brass_tunnel'
			]
		})
		
		event.remove({ id: 'createdeco:pressing/netherite_sheet' })

	//CreateMechanicalExtruders
	
		event.remove({ id: 'create_mechanical_extruder:extruding/asurine' })
		event.remove({ id: 'create_mechanical_extruder:extruding/crimsite' })
		event.remove({ id: 'create_mechanical_extruder:extruding/ochrum' })
		event.remove({ id: 'create_mechanical_extruder:extruding/veridium' })
		
		event.remove({ id: 'create_mechanical_extruder:extruding/basalt' })
		event.remove({ id: 'create_mechanical_extruder:extruding/netherack' })
		event.remove({ id: 'create_mechanical_extruder:extruding/end_stone' })
		event.remove({ id: 'create_mechanical_extruder:extruding/limestone' })
		event.remove({ id: 'create_mechanical_extruder:extruding/cobblestone' })
		event.remove({ id: 'create_mechanical_extruder:extruding/deepslate' })
		event.remove({ id: 'create_mechanical_extruder:extruding/diorite' })
		event.remove({ id: 'create_mechanical_extruder:extruding/andesite' })
		event.remove({ id: 'create_mechanical_extruder:extruding/granite' })
		event.remove({ id: 'create_mechanical_extruder:extruding/sandstone' })
		event.remove({ id: 'create_mechanical_extruder:extruding/obsidian' })
		event.remove({ id: 'create_mechanical_extruder:extruding/scoria' })
		event.remove({ id: 'create_mechanical_extruder:extruding/snow_block' })
		
		event.remove({ output: 'create_mechanical_extruder:mechanical_extruder' })
		event.remove({ output: 'create_mechanical_extruder:mechanical_brass_extruder' })
	
	//CreateCrafts&Additions
		
		event.remove({ id: 'createaddition:charging/electrify_gold_block' })
		event.remove({ id: 'createaddition:charging/electrify_gold_ingot' })
		event.remove({ id: 'createaddition:charging/electrify_gold_nugget' })
		event.remove({ id: 'createaddition:charging/electrify_gold_rod' })
		event.remove({ id: 'createaddition:charging/electrify_gold_sheet' })
		event.remove({ id: 'createaddition:charging/electrify_gold_wire' })
		
		event.remove({ output: 'createaddition:zinc_sheet' })
		event.remove({ output: 'createaddition:electric_motor' })
	
	//TheFactoryMustGrow (TFMG)

		event.remove({ output: [
			'tfmg:napalm_potato',
			'tfmg:flamethrower',
			'tfmg:zinc_grenade',
			'tfmg:thermite_grenade',
			'tfmg:copper_grenade',
			'tfmg:advanced_potato_cannon',
			'tfmg:lithium_blade',
			'tfmg:lit_lithium_blade',
			'tfmg:copper_wire',
			'tfmg:aluminum_wire',
			'tfmg:constantan_wire',
			'tfmg:steel_distillation_controller',
			'tfmg:surface_scanner'
			//'tfmg:engine_gearbox',
			//'tfmg:simple_large_engine',
			//'tfmg:large_engine',
			//'tfmg:machine_input',
			//'tfmg:pumpjack_crank',
			//'tfmg:pumpjack_base',
			//'tfmg:industrial_mixer',
			//'tfmg:winding_machine',
			//'tfmg:electric_motor',
			]
		})

		event.remove({ input: [
			'tfmg:copper_wire'
			]
		})

		event.remove({ id: 'tfmg:coking/coal' })
		event.remove({ id: 'tfmg:coking/charcoal' })
		event.remove({ id: 'tfmg:casting/cinderblock' })
		event.remove({ id: 'tfmg:vat_machine_recipe/naphtha' })
		event.remove({ id: 'tfmg:vat_machine_recipe/aluminum' })
		event.remove({ id: 'tfmg:vat_machine_recipe/arc_furnace_steel' })
		event.remove({ id: 'tfmg:industrial_blasting/steel' })
		event.remove({ id: 'tfmg:industrial_blasting/steel_from_dust' })
		event.remove({ id: 'tfmg:industrial_blasting/steel_from_raw_iron' })
		
		event.remove({ id: 'tfmg:sequenced_assembly/generator' })
		event.remove({ id: 'tfmg:sequenced_assembly/motor' })
		event.remove({ id: 'tfmg:sequenced_assembly/steel_mechanism' })
		event.remove({ id: 'tfmg:sequenced_assembly/potentiometer' })
		
		event.remove({ id: 'tfmg:mechanical_crafting/stator' })

	//ComputerCraft & CCCBridge
	
		event.remove({ input: [
			'cccbridge:animatronic_block',
			'computercraft:turtle_normal',
			'computercraft:turtle_advanced'
			]
		})
	
		event.remove({ output: [
			'cccbridge:animatronic_block',
			'computercraft:turtle_normal',
			'computercraft:turtle_advanced',
			'computercraft:disk',
			'computercraft:computer_normal',
			'computercraft:computer_advanced',
			'computercraft:pocket_computer_normal',
			'computercraft:pocket_computer_advanced',
			'computercraft:wireless_modem_normal',
			'computercraft:wireless_modem_advanced',
			'computercraft:cable',
			'computercraft:wired_modem',
			'computercraft:redstone_relay',
			'computercraft:monitor_normal',
			'computercraft:monitor_advanced',
			'computercraft:speaker',
			'computercraft:printer',
			'computercraft:disk_drive'
			]
		})
	
		//event.remove({ id: [
		//	'computercraft:recipe/computer_normal'
		//	]
		//})

	//AppliedEnergistics2 (AE2)
		
		//Deleted AE2 Items
		
		event.remove({ output: [
			'ae2:matter_cannon',
			'ae2:portable_item_cell_1k',
			'ae2:portable_item_cell_4k',
			'ae2:portable_item_cell_16k',
			'ae2:portable_item_cell_64k',
			'ae2:portable_item_cell_256k',
			'ae2:portable_fluid_cell_1k',
			'ae2:portable_fluid_cell_4k',
			'ae2:portable_fluid_cell_16k',
			'ae2:portable_fluid_cell_64k',
			'ae2:portable_fluid_cell_256k',
			'ae2:spatial_cell_component_2',
			'ae2:spatial_cell_component_16',
			'ae2:spatial_cell_component_128',
			'ae2:cell_component_64k',
			'ae2:cell_component_256k',
			'ae2:singularity',
			'ae2:quantum_entangled_singularity',
			'ae2:item_storage_cell_64k',
			'ae2:item_storage_cell_256k',
			'ae2:fluid_storage_cell_64k',
			'ae2:fluid_storage_cell_256k',
			'ae2:spatial_storage_cell_2',
			'ae2:spatial_storage_cell_16',
			'ae2:spatial_storage_cell_128',
			'ae2:annihilation_plane',
			'ae2:formation_plane',
			'ae2:tiny_tnt',
			'ae2:quantum_ring',
			'ae2:quantum_link',
			'ae2:spatial_pylon',
			'ae2:spatial_io_port',
			'ae2:chest',
			'ae2:io_port',
			'ae2:crystal_resonance_generator',
			'ae2:vibration_chamber',
			'ae2:growth_accelerator',
			'ae2:energy_cell',
			'ae2:dense_energy_cell',
			'ae2:64k_crafting_storage',
			'ae2:256k_crafting_storage',
			'ae2:spatial_anchor',
			]
		})
		
		event.remove({ output: '#ae2:certus_quartz_sword' })
		event.remove({ input: 'ae2:certus_quartz_sword', type: 'minecraft:anvil' })
		
		//Changed Recipe AE2 Items
		
			//Tools
		
		event.remove({ id: 'ae2:tools/nether_quartz_cutting_knife' })
		event.remove({ id: 'ae2:tools/certus_quartz_cutting_knife' })
		event.remove({ id: 'ae2:tools/nether_quartz_wrench' })
		event.remove({ id: 'ae2:tools/certus_quartz_wrench' })
		event.remove({ id: 'ae2:tools/misctools_entropy_manipulator' })
		event.remove({ id: 'ae2:network/wireless_terminal' })
		event.remove({ id: 'ae2:network/wireless_crafting_terminal' })
		event.remove({ id: 'ae2:network/upgrade_wireless_crafting_terminal' })
		event.remove({ id: 'ae2:tools/misctools_charged_staff' })
		event.remove({ id: 'ae2:tools/network_color_applicator' })
		event.remove({ id: 'ae2:tools/network_tool' })
		event.remove({ id: 'ae2:charger/meteorite_compass' })
		event.remove({ id: 'ae2:charger/guide' })
		event.remove({ id: 'ae2:tools/fluix_upgrade_smithing_template' })
		//event.remove({ id: 'ae2:tools/nether_quartz_sword' })
		//event.remove({ id: 'ae2:tools/certus_quartz_sword' })
		//event.remove({ id: 'ae2:tools/nether_quartz_pickaxe' })
		//event.remove({ id: 'ae2:tools/certus_quartz_pickaxe' })
		//event.remove({ id: 'ae2:tools/nether_quartz_axe' })
		//event.remove({ id: 'ae2:tools/certus_quartz_axe' })
		//event.remove({ id: 'ae2:tools/nether_quartz_shovel' })
		//event.remove({ id: 'ae2:tools/certus_quartz_shovel' })
		//event.remove({ id: 'ae2:tools/nether_quartz_hoe' })
		//event.remove({ id: 'ae2:tools/certus_quartz_hoe' })
		
			//Base Materials
			
		event.remove({ id: 'ae2:transform/certus_quartz_crystals' })
		event.remove({ output: 'ae2:silicon' })
		event.remove({ id: 'ae2:transform/fluix_crystal' })
		event.remove({ id: 'ae2:transform/fluix_crystals' })
		event.remove({ id: 'create:mixing/compat/ae2/fluix_crystal' })
		event.remove({ id: 'ae2:misc/fluixpearl' })
		
			//Tech components
			
		event.remove({ output: 'ae2:calculation_processor_press' })
		event.remove({ output: 'ae2:logic_processor_press' })
		event.remove({ output: 'ae2:engineering_processor_press' })
		event.remove({ output: 'ae2:silicon_press' })
		event.remove({ output: 'ae2:blank_pattern' })
		event.remove({ output: 'ae2:memory_card' })
		event.remove({ output: 'ae2:printed_calculation_processor' })
		event.remove({ output: 'ae2:printed_logic_processor' })
		event.remove({ output: 'ae2:printed_engineering_processor' })
		event.remove({ output: 'ae2:calculation_processor' })
		event.remove({ output: 'ae2:logic_processor' })
		event.remove({ output: 'ae2:engineering_processor' })
		event.remove({ output: 'ae2:basic_card' })
		event.remove({ output: 'ae2:advanced_card' })
		event.remove({ output: 'ae2:energy_card' })
		event.remove({ output: 'ae2:cell_component_1k' })
		event.remove({ output: 'ae2:cell_component_4k' })
		event.remove({ output: 'ae2:cell_component_16k' })
		event.remove({ output: 'ae2:item_cell_housing' })
		event.remove({ output: 'ae2:fluid_cell_housing' })
		event.remove({ output: 'ae2:wireless_receiver' })
		event.remove({ output: 'ae2:wireless_booster' })
		event.remove({ output: 'ae2:annihilation_core' })
		event.remove({ output: 'ae2:formation_core' })
		
			//Drives
			
		event.remove({ id: 'ae2:network/cells/view_cell' })
		event.remove({ id: 'ae2:network/cells/view_cell_storage' })
		event.remove({ id: 'ae2:network/cells/item_storage_cell_1k' })
		event.remove({ id: 'ae2:network/cells/item_storage_cell_4k' })
		event.remove({ id: 'ae2:network/cells/item_storage_cell_16k' })
		event.remove({ id: 'ae2:network/cells/fluid_storage_cell_1k' })
		event.remove({ id: 'ae2:network/cells/fluid_storage_cell_4k' })
		event.remove({ id: 'ae2:network/cells/fluid_storage_cell_16k' })
		
			//Cables
			
		event.remove({ id: 'ae2:network/parts/quartz_fiber_part' })
		event.remove({ id: 'ae2:network/cables/glass_fluix' })
		event.remove({ id: 'ae2:network/cables/smart_fluix' })
		event.remove({ id: 'ae2:network/cables/dense_smart_fluix' })
		
			//Machines
			
		event.remove({ id: 'ae2:network/blocks/inscribers' })
		event.remove({ id: 'ae2:network/wireless_access_point' })
		event.remove({ id: 'ae2:network/blocks/crystal_processing_charger' })
		event.remove({ id: 'ae2:network/blocks/controller' })
		event.remove({ id: 'ae2:network/blocks/storage_drive' })
		event.remove({ id: 'ae2:network/blocks/interfaces_interface' })
		event.remove({ id: 'ae2:network/blocks/cell_workbench' })
		event.remove({ id: 'ae2:network/blocks/energy_energy_acceptor' })
		event.remove({ id: 'ae2:network/crafting/cpu_crafting_unit' })
		event.remove({ id: 'ae2:network/blocks/pattern_providers_interface' })
		event.remove({ id: 'ae2:network/crafting/molecular_assembler' })
		
			//Blocks
			
		event.remove({ id: 'ae2:decorative/quartz_glass' })
		
			//Panels
			
		event.remove({ id: 'ae2:network/parts/panels_semi_dark_monitor' })
		event.remove({ id: 'ae2:network/parts/storage_bus' })
		event.remove({ id: 'ae2:network/parts/import_bus' })
		event.remove({ id: 'ae2:network/parts/export_bus' })
		event.remove({ id: 'ae2:network/parts/terminals_crafting' })
		event.remove({ id: 'ae2:network/parts/tunnels_me' })
		
	
	//CreatingRotationOperatedWithNuclearScience (CROWNS)
	
		event.remove({ output: [
			'crowns:fuel_assembly',
			'crowns:turbine_stage',
			'crowns:heat_exchanger',
			'crowns:steam_input',
			'crowns:steam_collector',
			'crowns:compressor',
			]
		})
		
		event.remove({ input: [
			'crowns:uranium_hexafluoride',
			'crowns:uranium_hexafluoride_bucket'
			]
		})
		
		event.remove({ id: 'crowns:crushed_uranium_to_uranium_ingot_smelting' })
		event.remove({ id: 'crowns:crushed_uranium_to_uranium_ingot_blasting' })
		
		event.remove({ id: 'crowns:natural_uranium/nugget_to_ingot' })
		event.remove({ id: 'crowns:natural_uranium/ingot_to_nugget' })
		event.remove({ id: 'crowns:natural_uranium/nuggets_from_quartz' })
		event.remove({ id: 'crowns:uranium_refinement/depleted_nugget_to_ingot' })
		event.remove({ id: 'crowns:uranium_refinement/depleted_ingot_to_nugget' })
		event.remove({ id: 'crowns:uranium_refinement/uranium_enrichement_1' })
		event.remove({ id: 'crowns:uranium_refinement/enriched_nugget_to_ingot' })
		event.remove({ id: 'crowns:uranium_refinement/enriched_ingot_to_nugget' })
		event.remove({ id: 'crowns:uranium_refinement/fuel_rod_natural' })
		event.remove({ id: 'crowns:uranium_refinement/fuel_rod_mid' })
		event.remove({ id: 'crowns:uranium_refinement/fuel_rod_military' })
		event.remove({ id: 'crowns:machines/fuel_assembly_natural' })
		event.remove({ id: 'crowns:machines/fuel_assembly_mid' })
		event.remove({ id: 'crowns:machines/fuel_assembly_military' })
		event.remove({ id: 'crowns:uranium_refinement/uranium_hexafluoride' })
		
		event.remove({ id: 'create:fill_minecraft_bucket_with_crowns_uranium_hexafluoride' })
		
		

	//DreamsAndDesires
	
		event.remove({ output: [
			'dndesires:gold_whisk'
			]
		})
		
		event.remove({ id: 'dndesires:hydraulic_compacting/tuff' })
		
		event.remove({ id: 'dndesires:hydraulic_compacting/veridium_gen' })
		event.remove({ id: 'dndesires:hydraulic_compacting/ochrum_gen' })
		event.remove({ id: 'dndesires:hydraulic_compacting/crimsite_gen' })
		event.remove({ id: 'dndesires:hydraulic_compacting/asurine_gen' })
		//event.remove({ id: 'dndesires:hydraulic_compacting/breccia_gen' })
	
	//DesignAndDecor
	
		//event.remove({ id: 'dndecor:grabbro_from_granite_smelting' })

	//Other
	
		event.remove({ output: 'create_connected:item_silo' })
		event.remove({ input: 'create_connected:item_silo' })
		
		event.remove({ output:'create_connected:control_chip' })
		event.remove({ input:'create_connected:control_chip' })
		
		event.remove({ output: 'railways:track_switch_andesite' })
		event.remove({ output: 'railways:track_switch_brass' })
		event.remove({ output: 'railways:track_create_andesite_narrow' })
		event.remove({ output: 'railways:track_create_andesite_wide' })
		event.remove({ output: 'railways:link_and_pin' })
		event.remove({ output: 'railways:small_buffer' })
		event.remove({ output: 'railways:big_buffer' })

//Replacing Recipes With Tiered Mechanism Variant

	//Removing Existing Recipes

			//Wooden Tier
			
		event.remove({ output: [
			'create:mechanical_press',
			'create:millstone',
			'create:water_wheel',
			'create:large_water_wheel',
			'create:windmill_bearing',
			'create:encased_chain_drive',
			'minecraft:chain',
			'create:transmitter',
			'createaddition:rolling_mill',
			'create:rope_pulley',
			'create:mechanical_pump',
			'tfmg:brass_mechanical_pump',
			'tfmg:steel_mechanical_pump',
			'tfmg:aluminum_mechanical_pump',
			'tfmg:cast_iron_mechanical_pump',
			'tfmg:plastic_mechanical_pump'
			]
		})

			//Andesite Tier

		event.remove({ output: [
			'create:mechanical_mixer',
			'create:mechanical_bearing',
			'create:mechanical_drill',
			'create:mechanical_harvester',
			'create:chain_conveyor',
			'create:hose_pulley',
			'create:elevator_pulley',
			]
		})
		
			//Brass Tier
			
		event.remove({ output: [
			'create:mechanical_crafter',
			'create:rotation_speed_controller',
			'create:sequenced_gearshift',
			'create:content_observer',
			'create:stockpile_switch',
			'createaddition:electric_motor',
			'createaddition:alternator',
			'create:factory_gauge',
			'numismatics:bank_terminal',
			'create:mechanical_arm',
			//'dndesires:gold_mixer'
			]
		})

			//Steel Tier
		
		event.remove({ output: [
			'tfmg:concrete_hose'
			]
		})

	//Adding New Recipes
	
				//Someone find a more compact way to do this -Walter
		
		//Wooden Tier
		
		event.shaped('create:mechanical_press', [
			'A',
			'B',
			'C'
		], {
			A: 'create:andesite_casing',
			B: 'kubejs:wooden_mechanism',
			C: 'minecraft:iron_block'
		})

		event.shaped('2x create:mechanical_press', [
			'A',
			'B',
			'C'
		], {
			A: 'create:andesite_casing',
			B: 'kubejs:andesite_alloy_mechanism',
			C: 'minecraft:iron_block'
		})

		event.shaped('4x create:mechanical_press', [
			'A',
			'B',
			'C'
		], {
			A: 'create:andesite_casing',
			B: 'create:precision_mechanism',
			C: 'minecraft:iron_block'
		})

		event.shaped('8x create:mechanical_press', [
			'A',
			'B',
			'C'
		], {
			A: 'create:andesite_casing',
			B: 'tfmg:steel_mechanism',
			C: 'minecraft:iron_block'
		})

		event.shaped('16x create:mechanical_press', [
			'A',
			'B',
			'C'
		], {
			A: 'create:andesite_casing',
			B: 'kubejs:nickel_aluminide_mechanism',
			C: 'minecraft:iron_block'
		})

		event.shaped('create:millstone', [
			'A',
			'B',
			'C'
		], {
			A: 'create:andesite_casing',
			B: 'kubejs:wooden_mechanism',
			C: '#c:stones'
		})

		event.shaped('2x create:millstone', [
			'A',
			'B',
			'C'
		], {
			A: 'create:andesite_casing',
			B: 'kubejs:andesite_alloy_mechanism',
			C: '#c:stones'
		})


		event.shaped('4x create:millstone', [
			'A',
			'B',
			'C'
		], {
			A: 'create:andesite_casing',
			B: 'create:precision_mechanism',
			C: '#c:stones'
		})

		event.shaped('8x create:millstone', [
			'A',
			'B',
			'C'
		], {
			A: 'create:andesite_casing',
			B: 'tfmg:steel_mechanism',
			C: '#c:stones'
		})

		event.shaped('16x create:millstone', [
			'A',
			'B',
			'C'
		], {
			A: 'create:andesite_casing',
			B: 'kubejs:nickel_aluminide_mechanism',
			C: '#c:stones'
		})

		event.shaped('create:water_wheel', [
			'AAA',
			'ABA',
			'AAA'
		], {
			A: '#minecraft:wooden_slabs',
			B: 'create:shaft'
		})

		event.shaped('create:large_water_wheel', [
			'ABA',
			'BCB',
			'ABA'
		], {
			A: 'minecraft:iron_nugget',
			B: 'create:water_wheel',
			C: '#minecraft:wooden_slabs'
		})

		event.shaped('create:windmill_bearing', [
			'A',
			'B',
			'C'
		], {
			A: '#minecraft:wooden_slabs',
			B: 'kubejs:wooden_mechanism',
			C: '#c:stones'
		})

		event.shaped('2x create:windmill_bearing', [
			'A',
			'B',
			'C'
		], {
			A: '#minecraft:wooden_slabs',
			B: 'kubejs:andesite_alloy_mechanism',
			C: '#c:stones'
		})

		event.shaped('4x create:windmill_bearing', [
			'A',
			'B',
			'C'
		], {
			A: '#minecraft:wooden_slabs',
			B: 'create:precision_mechanism',
			C: '#c:stones'
		})

		event.shaped('8x create:windmill_bearing', [
			'A',
			'B',
			'C'
		], {
			A: '#minecraft:wooden_slabs',
			B: 'tfmg:steel_mechanism',
			C: '#c:stones'
		})

		event.shaped('16x create:windmill_bearing', [
			'A',
			'B',
			'C'
		], {
			A: '#minecraft:wooden_slabs',
			B: 'kubejs:nickel_aluminide_mechanism',
			C: '#c:stones'
		})
		
		event.shaped('3x create:encased_chain_drive', [
			'A',
			'B',
			'C'
		], {
			A: 'create:shaft',
			B: 'create:andesite_casing',
			C: 'minecraft:chain'
		})		

		event.shaped('8x minecraft:chain', [
			'A',
			'B',
			'A'
		], {
			A: 'minecraft:iron_nugget',
			B: 'minecraft:iron_ingot'
		})	

		event.shaped('8x minecraft:chain', [
			'A',
			'B',
			'A'
		], {
			A: 'create:zinc_nugget',
			B: 'create:zinc_ingot'
		})	

		event.shaped('create:transmitter', [
			' A ',
			'BCB',
			'DDD'
		], {
			A: 'minecraft:redstone_torch',
			B: 'createaddition:copper_wire',
			C: 'minecraft:redstone',
			D: 'create:copper_sheet'
		})	

		event.shaped('createaddition:rolling_mill', [
			'ABA',
			'CDC',
			' E '
		], {
			A: 'create:iron_sheet',
			B: 'create:shaft',
			C: 'create:andesite_alloy',
			D: 'kubejs:wooden_mechanism',
			E: 'create:andesite_casing'
		})	

		event.shaped('2x createaddition:rolling_mill', [
			'ABA',
			'CDC',
			' E '
		], {
			A: 'create:iron_sheet',
			B: 'create:shaft',
			C: 'create:andesite_alloy',
			D: 'kubejs:andesite_alloy_mechanism',
			E: 'create:andesite_casing'
		})	

		event.shaped('4x createaddition:rolling_mill', [
			'ABA',
			'CDC',
			' E '
		], {
			A: 'create:iron_sheet',
			B: 'create:shaft',
			C: 'create:andesite_alloy',
			D: 'create:precision_mechanism',
			E: 'create:andesite_casing'
		})	

		event.shaped('8x createaddition:rolling_mill', [
			'ABA',
			'CDC',
			' E '
		], {
			A: 'create:iron_sheet',
			B: 'create:shaft',
			C: 'create:andesite_alloy',
			D: 'tfmg:steel_mechanism',
			E: 'create:andesite_casing'
		})	

		event.shaped('16x createaddition:rolling_mill', [
			'ABA',
			'CDC',
			' E '
		], {
			A: 'create:iron_sheet',
			B: 'create:shaft',
			C: 'create:andesite_alloy',
			D: 'kubejs:nickel_aluminide_mechanism',
			E: 'create:andesite_casing'
		})	

		event.shaped('create:rope_pulley', [
			'A',
			'B',
			'C'
		], {
			A: '#c:ropes',
			B: 'kubejs:wooden_mechanism',
			C: 'create:iron_sheet'
		})	

		event.shaped('2x create:rope_pulley', [
			'A',
			'B',
			'C'
		], {
			A: '#c:ropes',
			B: 'kubejs:andesite_alloy_mechanism',
			C: 'create:iron_sheet'
		})	

		event.shaped('4x create:rope_pulley', [
			'A',
			'B',
			'C'
		], {
			A: '#c:ropes',
			B: 'create:precision_mechanism',
			C: 'create:iron_sheet'
		})	

		event.shaped('8x create:rope_pulley', [
			'A',
			'B',
			'C'
		], {
			A: '#c:ropes',
			B: 'tfmg:steel_mechanism',
			C: 'create:iron_sheet'
		})	

		event.shaped('16x create:rope_pulley', [
			'A',
			'B',
			'C'
		], {
			A: '#c:ropes',
			B: 'kubejs:nickel_aluminide_mechanism',
			C: 'create:iron_sheet'
		})

	const pumpMaterial = [
	"brass",
	"steel",
	"aluminum",
	"cast_iron",
	"plastic"
	]
	for(const type of pumpMaterial) {
		event.shapeless(
			Item.of(`tfmg:${type}_mechanical_pump`, ),
			[
				'kubejs:wooden_mechanism',
				`tfmg:${type}_pipe`
			]
		)
	}

	for(const type of pumpMaterial) {
		event.shapeless(
			Item.of(`2x tfmg:${type}_mechanical_pump`, ),
			[
				'kubejs:andesite_alloy_mechanism',
				`tfmg:${type}_pipe`
			]
		)
	}

	for(const type of pumpMaterial) {
		event.shapeless(
			Item.of(`4x tfmg:${type}_mechanical_pump`, ),
			[
				'create:precision_mechanism',
				`tfmg:${type}_pipe`
			]
		)
	}

	for(const type of pumpMaterial) {
		event.shapeless(
			Item.of(`8x tfmg:${type}_mechanical_pump`, ),
			[
				'tfmg:steel_mechanism',
				`tfmg:${type}_pipe`
			]
		)
	}

	for(const type of pumpMaterial) {
		event.shapeless(
			Item.of(`16x tfmg:${type}_mechanical_pump`, ),
			[
				'kubejs:nickel_aluminide_mechanism',
				`tfmg:${type}_pipe`
			]
		)
	}

		event.shapeless(
			Item.of('create:mechanical_pump', ),
			[
				'kubejs:wooden_mechanism',
				'create:fluid_pipe'
			]
		)
		
		event.shapeless(
			Item.of('2x create:mechanical_pump', ),
			[
				'kubejs:andesite_alloy_mechanism',
				'create:fluid_pipe'
			]
		)
		
		event.shapeless(
			Item.of('4x create:mechanical_pump', ),
			[
				'create:precision_mechanism',
				'create:fluid_pipe'
			]
		)
		
		event.shapeless(
			Item.of('8x create:mechanical_pump', ),
			[
				'tfmg:steel_mechanism',
				'create:fluid_pipe'
			]
		)

		event.shapeless(
			Item.of('16x create:mechanical_pump', ),
			[
				'kubejs:nickel_aluminide_mechanism',
				'create:fluid_pipe'
			]
		)
		
		//Andesite Tier
		
		event.shaped('create:mechanical_mixer', [
			'A',
			'B',
			'C'
		], {
			A: 'create:andesite_casing',
			B: 'kubejs:andesite_alloy_mechanism',
			C: 'create:whisk'
		})

		event.shaped('2x create:mechanical_mixer', [
			'A',
			'B',
			'C'
		], {
			A: 'create:andesite_casing',
			B: 'create:precision_mechanism',
			C: 'create:whisk'
		})

		event.shaped('4x create:mechanical_mixer', [
			'A',
			'B',
			'C'
		], {
			A: 'create:andesite_casing',
			B: 'tfmg:steel_mechanism',
			C: 'create:whisk'
		})

		event.shaped('8x create:mechanical_mixer', [
			'A',
			'B',
			'C'
		], {
			A: 'create:andesite_casing',
			B: 'kubejs:nickel_aluminide_mechanism',
			C: 'create:whisk'
		})
		
		event.shaped('create:mechanical_bearing', [
			'A',
			'B',
			'C'
		], {
			A: '#minecraft:wooden_slabs',
			B: 'kubejs:andesite_alloy_mechanism',
			C: 'create:shaft'
		})

		event.shaped('2x create:mechanical_bearing', [
			'A',
			'B',
			'C'
		], {
			A: '#minecraft:wooden_slabs',
			B: 'create:precision_mechanism',
			C: 'create:shaft'
		})

		event.shaped('4x create:mechanical_bearing', [
			'A',
			'B',
			'C'
		], {
			A: '#minecraft:wooden_slabs',
			B: 'tfmg:steel_mechanism',
			C: 'create:shaft'
		})

		event.shaped('8x create:mechanical_bearing', [
			'A',
			'B',
			'C'
		], {
			A: '#minecraft:wooden_slabs',
			B: 'kubejs:nickel_aluminide_mechanism',
			C: 'create:shaft'
		})

		event.shaped('create:mechanical_drill', [
			' A ',
			'ABA',
			' C '
		], {
			A: 'create:andesite_alloy',
			B: 'kubejs:andesite_alloy_mechanism',
			C: 'create:andesite_casing'
		})

		event.shaped('2x create:mechanical_drill', [
			' A ',
			'ABA',
			' C '
		], {
			A: 'create:andesite_alloy',
			B: 'create:precision_mechanism',
			C: 'create:andesite_casing'
		})

		event.shaped('4x create:mechanical_drill', [
			' A ',
			'ABA',
			' C '
		], {
			A: 'create:andesite_alloy',
			B: 'tfmg:steel_mechanism',
			C: 'create:andesite_casing'
		})

		event.shaped('8x create:mechanical_drill', [
			' A ',
			'ABA',
			' C '
		], {
			A: 'create:andesite_alloy',
			B: 'kubejs:nickel_aluminide_mechanism',
			C: 'create:andesite_casing'
		})

		event.shaped('create:mechanical_harvester', [
			'ABA',
			' C ',
			' D '
		], {
			A: 'create:andesite_alloy',
			B: 'create:iron_sheet',
			C: 'kubejs:andesite_alloy_mechanism',
			D: 'create:andesite_casing'
		})

		event.shaped('2x create:mechanical_harvester', [
			'ABA',
			' C ',
			' D '
		], {
			A: 'create:andesite_alloy',
			B: 'create:iron_sheet',
			C: 'create:precision_mechanism',
			D: 'create:andesite_casing'
		})

		event.shaped('4x create:mechanical_harvester', [
			'ABA',
			' C ',
			' D '
		], {
			A: 'create:andesite_alloy',
			B: 'create:iron_sheet',
			C: 'tfmg:steel_mechanism',
			D: 'create:andesite_casing'
		})

		event.shaped('8x create:mechanical_harvester', [
			'ABA',
			' C ',
			' D '
		], {
			A: 'create:andesite_alloy',
			B: 'create:iron_sheet',
			C: 'kubejs:nickel_aluminide_mechanism',
			D: 'create:andesite_casing'
		})

		event.shaped('create:chain_conveyor', [
			' A ',
			'ABA',
			' C '
		], {
			A: 'create:andesite_casing',
			B: 'kubejs:andesite_alloy_mechanism',
			C: 'dndecor:large_industrial_cogwheel'
		})
		
		event.shaped('2x create:chain_conveyor', [
			' A ',
			'ABA',
			' C '
		], {
			A: 'create:andesite_casing',
			B: 'create:precision_mechanism',
			C: 'dndecor:large_industrial_cogwheel'
		})
		
		event.shaped('4x create:chain_conveyor', [
			' A ',
			'ABA',
			' C '
		], {
			A: 'create:andesite_casing',
			B: 'tfmg:steel_mechanism',
			C: 'dndecor:large_industrial_cogwheel'
		})
		
		event.shaped('8x create:chain_conveyor', [
			' A ',
			'ABA',
			' C '
		], {
			A: 'create:andesite_casing',
			B: 'kubejs:nickel_aluminide_mechanism',
			C: 'dndecor:large_industrial_cogwheel'
		})
		
		event.shaped('create:hose_pulley', [
			' D ',
			'ABA',
			' C '
		], {
			A: 'create:copper_sheet',
			B: 'kubejs:andesite_alloy_mechanism',
			C: 'create:fluid_pipe',
			D: 'create:belt_connector'
		})
		
		event.shaped('2x create:hose_pulley', [
			' D ',
			'ABA',
			' C '
		], {
			A: 'create:copper_sheet',
			B: 'create:precision_mechanism',
			C: 'create:fluid_pipe',
			D: 'create:belt_connector'
		})
		
		event.shaped('4x create:hose_pulley', [
			' D ',
			'ABA',
			' C '
		], {
			A: 'create:copper_sheet',
			B: 'tfmg:steel_mechanism',
			C: 'create:fluid_pipe',
			D: 'create:belt_connector'
		})
		
		event.shaped('8x create:hose_pulley', [
			' D ',
			'ABA',
			' C '
		], {
			A: 'create:copper_sheet',
			B: 'kubejs:nickel_aluminide_mechanism',
			C: 'create:fluid_pipe',
			D: 'create:belt_connector'
		})
		
		event.shaped('create:elevator_pulley', [
			' D ',
			'ABA',
			' C '
		], {
			A: 'create:brass_sheet',
			B: 'kubejs:andesite_alloy_mechanism',
			C: 'create:iron_sheet',
			D: 'create:belt_connector'
		})
		
		event.shaped('2x create:elevator_pulley', [
			' D ',
			'ABA',
			' C '
		], {
			A: 'create:brass_sheet',
			B: 'create:precision_mechanism',
			C: 'create:iron_sheet',
			D: 'create:belt_connector'
		})
		
		event.shaped('4x create:elevator_pulley', [
			' D ',
			'ABA',
			' C '
		], {
			A: 'create:brass_sheet',
			B: 'tfmg:steel_mechanism',
			C: 'create:iron_sheet',
			D: 'create:belt_connector'
		})
		
		event.shaped('8x create:elevator_pulley', [
			' D ',
			'ABA',
			' C '
		], {
			A: 'create:brass_sheet',
			B: 'kubejs:nickel_aluminide_mechanism',
			C: 'create:iron_sheet',
			D: 'create:belt_connector'
		})

		//Brass Tier
		
		event.shaped('3x create:mechanical_crafter', [
			'A',
			'B',
			'C'
		], {
			A: 'create:electron_tube',
			B: 'create:precision_mechanism',
			C: 'minecraft:crafting_table'
		})
		
		event.shaped('6x create:mechanical_crafter', [
			'A',
			'B',
			'C'
		], {
			A: 'create:electron_tube',
			B: 'tfmg:steel_mechanism',
			C: 'minecraft:crafting_table'
		})
		
		event.shaped('12x create:mechanical_crafter', [
			'A',
			'B',
			'C'
		], {
			A: 'create:electron_tube',
			B: 'kubejs:nickel_aluminide_mechanism',
			C: 'minecraft:crafting_table'
		})
		
		event.shaped('create:rotation_speed_controller', [
			'A',
			'B',
			'C'
		], {
			A: 'create:electron_tube',
			B: 'create:precision_mechanism',
			C: 'create:brass_casing'
		})
		
		event.shaped('2x create:rotation_speed_controller', [
			'A',
			'B',
			'C'
		], {
			A: 'create:electron_tube',
			B: 'tfmg:steel_mechanism',
			C: 'create:brass_casing'
		})
		
		event.shaped('4x create:rotation_speed_controller', [
			'A',
			'B',
			'C'
		], {
			A: 'create:electron_tube',
			B: 'kubejs:nickel_aluminide_mechanism',
			C: 'create:brass_casing'
		})
		
		event.shaped('create:sequenced_gearshift', [
			'A',
			'B',
			'C'
		], {
			A: 'kubejs:electron_circuit_board',
			B: 'create:precision_mechanism',
			C: 'create:brass_casing'
		})
		
		event.shaped('2x create:sequenced_gearshift', [
			'A',
			'B',
			'C'
		], {
			A: 'kubejs:electron_circuit_board',
			B: 'tfmg:steel_mechanism',
			C: 'create:brass_casing'
		})
		
		event.shaped('4x create:sequenced_gearshift', [
			'A',
			'B',
			'C'
		], {
			A: 'kubejs:electron_circuit_board',
			B: 'kubejs:nickel_aluminide_mechanism',
			C: 'create:brass_casing'
		})
		
		event.shaped('create:content_observer', [
			'A',
			'B',
			'C'
		], {
			A: 'create:electron_tube',
			B: 'create:brass_casing',
			C: 'minecraft:observer'
		})
		
		event.shaped('create:stockpile_switch', [
			'A',
			'B',
			'C'
		], {
			A: 'kubejs:electron_circuit_board',
			B: 'create:brass_casing',
			C: 'minecraft:comparator'
		})
		
		event.recipes.create.mechanical_crafting('createaddition:electric_motor', [
			'ABA',
			'BCB',
			'ADA'
		], {
			A: 'create:brass_sheet',
			B: 'createaddition:copper_spool',
			C: 'create:precision_mechanism',
			D: 'createaddition:capacitor'
		})
		
		event.recipes.create.mechanical_crafting('2x createaddition:electric_motor', [
			'ABA',
			'BCB',
			'ADA'
		], {
			A: 'create:brass_sheet',
			B: 'createaddition:copper_spool',
			C: 'tfmg:steel_mechanism',
			D: 'createaddition:capacitor'
		})
		
		event.recipes.create.mechanical_crafting('4x createaddition:electric_motor', [
			'ABA',
			'BCB',
			'ADA'
		], {
			A: 'create:brass_sheet',
			B: 'createaddition:copper_spool',
			C: 'kubejs:nickel_aluminide_mechanism',
			D: 'createaddition:capacitor'
		})
		
		event.recipes.create.mechanical_crafting('createaddition:alternator', [
			'ABA',
			'BCB',
			'ADA'
		], {
			A: 'tfmg:cast_iron_sheet',
			B: 'createaddition:copper_spool',
			C: 'create:precision_mechanism',
			D: 'createaddition:capacitor'
		})
		
		event.recipes.create.mechanical_crafting('2x createaddition:alternator', [
			'ABA',
			'BCB',
			'ADA'
		], {
			A: 'tfmg:cast_iron_sheet',
			B: 'createaddition:copper_spool',
			C: 'tfmg:steel_mechanism',
			D: 'createaddition:capacitor'
		})
		
		event.recipes.create.mechanical_crafting('4x createaddition:alternator', [
			'ABA',
			'BCB',
			'ADA'
		], {
			A: 'tfmg:cast_iron_sheet',
			B: 'createaddition:copper_spool',
			C: 'kubejs:nickel_aluminide_mechanism',
			D: 'createaddition:capacitor'
		})
		
		event.shaped('2x create:factory_gauge', [
			'A',
			'B'
		], {
			A: 'kubejs:electron_circuit_board',
			B: 'create:stock_link'
		})
		
		event.shaped('2x create:factory_gauge', [
			'A',
			'B'
		], {
			A: 'kubejs:electron_circuit_board',
			B: '#create_vibrant_vaults:vibrant_stock_links'
		})
		
		event.shaped('numismatics:bank_terminal', [
			'A',
			'B',
			'C'
		], {
			A: 'create:electron_tube',
			B: 'create:industrial_iron_block',
			C: 'kubejs:electron_circuit_board'
		})
		
		event.recipes.create.mechanical_crafting('create_mechanical_extruder:mechanical_brass_extruder', [
			' A ',
			'BAB',
			'CDC',
			'BEB'
		], {
			A: 'create:metal_girder',
			B: 'create:brass_sheet',
			C: 'create:framed_glass_trapdoor',
			D: 'create:precision_mechanism',
			E: 'create:brass_casing'
		})
		
		event.recipes.create.mechanical_crafting('2x create_mechanical_extruder:mechanical_brass_extruder', [
			' A ',
			'BAB',
			'CDC',
			'BEB'
		], {
			A: 'create:metal_girder',
			B: 'create:brass_sheet',
			C: 'create:framed_glass_trapdoor',
			D: 'tfmg:steel_mechanism',
			E: 'create:brass_casing'
		})
		
		event.recipes.create.mechanical_crafting('4x create_mechanical_extruder:mechanical_brass_extruder', [
			' A ',
			'BAB',
			'CDC',
			'BEB'
		], {
			A: 'create:metal_girder',
			B: 'create:brass_sheet',
			C: 'create:framed_glass_trapdoor',
			D: 'kubejs:nickel_aluminide_mechanism',
			E: 'create:brass_casing'
		})
		
		event.shaped('2x dndesires:gold_mixer', [
			'A',
			'B',
			'C'
		], {
			A: 'tfmg:steel_mechanism',
			B: 'create:brass_casing',
			C: 'dndesires:gold_whisk'
		})
		
		event.shaped('4x dndesires:gold_mixer', [
			'A',
			'B',
			'C'
		], {
			A: 'kubejs:nickel_aluminide_mechanism',
			B: 'create:brass_casing',
			C: 'dndesires:gold_whisk'
		})
		
		event.shaped('create_connected:sequenced_pulse_generator', [
			'AB ',
			'ACD',
			'EEE'
		], {
			A: 'create:electron_tube',
			B: 'create:brass_sheet',
			C: 'kubejs:electron_circuit_board',
			D: 'minecraft:redstone_torch',
			E: '#c:stones'
		})
		
		event.shaped('16x create_connected:kinetic_battery', [
			' A ',
			' B ',
			'CDC'
		], {
			A: 'tfmg:steel_mechanism',
			B: 'create:brass_casing',
			C: 'create:iron_sheet',
			D: 'minecraft:redstone'
		})
		
		event.shaped('32x create_connected:kinetic_battery', [
			' A ',
			' B ',
			'CDC'
		], {
			A: 'kubejs:nickel_aluminide_mechanism',
			B: 'create:brass_casing',
			C: 'create:iron_sheet',
			D: 'minecraft:redstone'
		})
		
		event.shaped('create:mechanical_arm', [
			'AAB',
			'A  ',
			'CD '
		], {
			A: 'create:brass_sheet',
			B: 'create:andesite_alloy',
			C: 'create:precision_mechanism',
			D: 'create:brass_casing'
		})
		
		event.shaped('2x create:mechanical_arm', [
			'AAB',
			'A  ',
			'CD '
		], {
			A: 'create:brass_sheet',
			B: 'create:andesite_alloy',
			C: 'tfmg:steel_mechanism',
			D: 'create:brass_casing'
		})
		
		event.shaped('4x create:mechanical_arm', [
			'AAB',
			'A  ',
			'CD '
		], {
			A: 'create:brass_sheet',
			B: 'create:andesite_alloy',
			C: 'kubejs:nickel_aluminide_mechanism',
			D: 'create:brass_casing'
		})
		
		//Steel Tier
		
		/*event.recipes.create.sequenced_assembly(
			[
				CreateItem.of('tfmg:generator', 0.96)
				CreateItem.of('tfmg:capacitor_item', 0.01),
				CreateItem.of('tfmg:heavy_plate', 0.01),
				CreateItem.of('tfmg:magnet', 0.01),
				CreateItem.of('tfmg:steel_mechanism', 0.01)
			],
			'create:shaft',
			[
				event.recipes.create.deploying('tfmg:unfinished_generator', ['tfmg:unfinished_generator', 'tfmg:capacitor_item']),
				event.recipes.create.deploying('tfmg:unfinished_generator', ['tfmg:unfinished_generator', 'c:plates/steel']),
				event.recipes.tfmg.winding('tfmg:unfinished_generator', ['tfmg:copper_spool', 'c:plates/steel']),*/
				
		event.custom({
			"type": "create:sequenced_assembly",
			"ingredient": {
				"item": "create:shaft"
			},
			"loops": 3,
			"results": [
				{
					"chance": 96.0,
					"id": "tfmg:generator"
				},
				{
					"chance": 1.0,
					"id": "tfmg:capacitor_item"
				},
				{
					"chance": 1.0,
					"id": "tfmg:heavy_plate"
				},
				{
					"chance": 1.0,
					"id": "tfmg:magnet"
				},
				{
					"chance": 1.0,
					"id": "tfmg:steel_mechanism"
				}
			],
			"sequence": [
				{
					"type": "create:deploying",
					"ingredients": [
						{
							"item": "tfmg:unfinished_generator"
						},
						{
							"item": "tfmg:capacitor_item"
						}
					],
					"results": [
						{
							"id": "tfmg:unfinished_generator"
						}
					]
				},
				{
					"type": "create:deploying",
					"ingredients": [
						{
							"item": "tfmg:unfinished_generator"
						},
						{
							"tag": "c:plates/steel"
						}
					],
					"results": [
						{
							"id": "tfmg:unfinished_generator"
						}
					]
				},
				{
					"type": "tfmg:winding",
					"ingredients": [
						{
							"item": "tfmg:unfinished_generator"
						},
						{
							"item": "tfmg:copper_spool"
						}
					],
					"processing_time": 75,
					"results": [
						{
							"id": "tfmg:unfinished_generator"
						}
					]
				},
				{
					"type": "create:deploying",
					"ingredients": [
						{
							"item": "tfmg:unfinished_generator"
						},
						{
							"item": "tfmg:magnet"
						}
					],
					"results": [
						{
							"id": "tfmg:unfinished_generator"
						}
					]
				},
				{
					"type": "create:deploying",
					"ingredients": [
						{
							"item": "tfmg:unfinished_generator"
						},
						{
							"item": "tfmg:steel_mechanism"
						}
					],
					"results": [
						{
							"id": "tfmg:unfinished_generator"
						}
					]
				},
				{
					"type": "create:deploying",
					"ingredients": [
						{
							"item": "tfmg:unfinished_generator"
						},
						{
							"item": "tfmg:screwdriver"
						}
					],
					"results": [
						{
							"id": "tfmg:unfinished_generator"
						}
					]
				}
			],
			"transitional_item": {
				"id": "tfmg:unfinished_generator"
			}
		})
		
		event.custom({
			"type": "create:sequenced_assembly",
			"ingredient": {
				"item": "create:shaft"
			},
			"loops": 3,
			"results": [
				{
					"count": 2,
					"chance": 96.0,
					"id": "tfmg:generator"
				},
				{
					"chance": 1.0,
					"id": "tfmg:capacitor_item"
				},
				{
					"chance": 1.0,
					"id": "tfmg:heavy_plate"
				},
				{
					"chance": 1.0,
					"id": "tfmg:magnet"
				},
				{
					"chance": 1.0,
					"id": "kubejs:nickel_aluminide_mechanism"
				}
			],
			"sequence": [
				{
					"type": "create:deploying",
					"ingredients": [
						{
							"item": "tfmg:unfinished_generator"
						},
						{
							"item": "tfmg:capacitor_item"
						}
					],
					"results": [
						{
							"id": "tfmg:unfinished_generator"
						}
					]
				},
				{
					"type": "create:deploying",
					"ingredients": [
						{
							"item": "tfmg:unfinished_generator"
						},
						{
							"tag": "c:plates/steel"
						}
					],
					"results": [
						{
							"id": "tfmg:unfinished_generator"
						}
					]
				},
				{
					"type": "tfmg:winding",
					"ingredients": [
						{
							"item": "tfmg:unfinished_generator"
						},
						{
							"item": "tfmg:copper_spool"
						}
					],
					"processing_time": 75,
					"results": [
						{
							"id": "tfmg:unfinished_generator"
						}
					]
				},
				{
					"type": "create:deploying",
					"ingredients": [
						{
							"item": "tfmg:unfinished_generator"
						},
						{
							"item": "tfmg:magnet"
						}
					],
					"results": [
						{
							"id": "tfmg:unfinished_generator"
						}
					]
				},
				{
					"type": "create:deploying",
					"ingredients": [
						{
							"item": "tfmg:unfinished_generator"
						},
						{
							"item": "kubejs:nickel_aluminide_mechanism"
						}
					],
					"results": [
						{
							"id": "tfmg:unfinished_generator"
						}
					]
				},
				{
					"type": "create:deploying",
					"ingredients": [
						{
							"item": "tfmg:unfinished_generator"
						},
						{
							"item": "tfmg:screwdriver"
						}
					],
					"results": [
						{
							"id": "tfmg:unfinished_generator"
						}
					]
				}
			],
			"transitional_item": {
				"id": "tfmg:unfinished_generator"
			}
		})
		
		event.shaped('tfmg:steel_distillation_controller', [
			'ABA',
			'CDC',
			'EFE'
		], {
			A: 'tfmg:lead_sheet',
			B: 'tfmg:industrial_pipe',
			C: 'kubejs:electron_circuit_board',
			D: 'dndesires:fluid_gauge',
			E: 'tfmg:steel_mechanism',
			F: 'tfmg:heavy_machinery_casing'
		})
		
		event.shaped('2x tfmg:steel_distillation_controller', [
			'ABA',
			'CDC',
			'EFE'
		], {
			A: 'tfmg:lead_sheet',
			B: 'tfmg:industrial_pipe',
			C: 'kubejs:electron_circuit_board',
			D: 'dndesires:fluid_gauge',
			E: 'kubejs:nickel_aluminide_mechanism',
			F: 'tfmg:heavy_machinery_casing'
		})
		
		event.shaped('tfmg:surface_scanner', [
			'ABA',
			'ABA',
			'CDC'
		], {
			A: 'create:electron_tube',
			B: 'kubejs:electron_circuit_board',
			C: 'tfmg:steel_mechanism',
			D: 'tfmg:heavy_machinery_casing'
		})
		
		event.shaped('2x tfmg:surface_scanner', [
			'ABA',
			'ABA',
			'CDC'
		], {
			A: 'create:electron_tube',
			B: 'kubejs:electron_circuit_board',
			C: 'kubejs:nickel_aluminide_mechanism',
			D: 'tfmg:heavy_machinery_casing'
		})
		
		/*event.shaped('tfmg:engine_gearbox', [
			'ABA',
			'CDC',
			'ACA'
		], {
			A: 'tfmg:screw',
			B: 'tfmg:steel_mechanism',
			C: 'create:shaft',
			D: 'tfmg:steel_casing'
		})*/
		
		event.shaped('2x tfmg:engine_gearbox', [
			'ABA',
			'CDC',
			'ACA'
		], {
			A: 'tfmg:screw',
			B: 'kubejs:nickel_aluminide_mechanism',
			C: 'create:shaft',
			D: 'tfmg:steel_casing'
		})
		
		event.recipes.create.mechanical_crafting('2x tfmg:simple_large_engine', [
			'AAA',
			'BAB',
			'BCB',
			'BAB'
		], {
			A: 'tfmg:cast_iron_ingot',
			B: 'tfmg:heavy_plate',
			C: 'tfmg:steel_mechanism'
		})
		
		event.recipes.create.mechanical_crafting('4x tfmg:simple_large_engine', [
			'AAA',
			'BAB',
			'BCB',
			'BAB'
		], {
			A: 'tfmg:cast_iron_ingot',
			B: 'tfmg:heavy_plate',
			C: 'kubejs:nickel_aluminide_mechanism'
		})
		
		event.recipes.create.mechanical_crafting('2x tfmg:large_engine', [
			' A ',
			' B ',
			'CAC',
			'DED',
			'DFD',
			'GGG'
		], {
			A: 'tfmg:steel_ingot',
			B: 'tfmg:aluminum_ingot',
			C: 'tfmg:aluminum_sheet',
			D: 'kubejs:nickel_aluminide_mechanism',
			E: 'tfmg:heavy_machinery_casing',
			F: 'tfmg:steel_fluid_tank',
			G: 'tfmg:heavy_plate'
		})
		
		event.shaped('2x tfmg:machine_input', [
			' A ',
			' B ',
			' C '
		], {
			A: 'create:shaft',
			B: 'tfmg:heavy_machinery_casing',
			C: 'kubejs:nickel_aluminide_mechanism'
		})
		
		event.shaped('2x tfmg:pumpjack_crank', [
			'A A',
			'BCB',
			'DED'
		], {
			A: '#c:strings',
			B: 'tfmg:heavy_plate',
			C: 'kubejs:nickel_aluminide_mechanism',
			D: 'tfmg:rebar',
			E: 'tfmg:heavy_machinery_casing'
			
		})
		
		event.shaped('2x tfmg:pumpjack_base', [
			'ABA',
			'CDC',
			'EFE'
		], {
			A: '#c:strings',
			B: 'tfmg:steel_fluid_tank',
			C: 'kubejs:nickel_aluminide_mechanism',
			D: 'tfmg:heavy_machinery_casing',
			E: 'tfmg:steel_pipe',
			F: 'tfmg:industrial_pipe'
			
		})
		
		event.shaped('2x tfmg:industrial_mixer', [
			'ABA',
			'CDC',
			'AEA'
		], {
			A: 'tfmg:screw',
			B: 'create:shaft',
			C: 'kubejs:nickel_aluminide_mechanism',
			D: 'tfmg:heavy_machinery_casing',
			E: 'tfmg:large_steel_cogwheel'
			
		})
		
		event.shaped('2x tfmg:winding_machine', [
			'ABC',
			'ADE'
		], {
			A: 'tfmg:steel_ingot',
			B: 'create:shaft',
			C: 'tfmg:heavy_plate',
			D: 'tfmg:heavy_machinery_casing',
			E: 'kubejs:nickel_aluminide_mechanism'
			
		})
		
		event.custom({
			"type": "create:sequenced_assembly",
			"ingredient": {
				"item": "create:shaft"
			},
			"loops": 3,
			"results": [
				{
					"chance": 96.0,
					"id": "tfmg:electric_motor"
				},
				{
					"chance": 2.0,
					"id": "tfmg:steel_mechanism"
				},
				{
					"chance": 2.0,
					"id": "tfmg:magnet"
				}
			],
			"sequence": [
				{
					"type": "tfmg:winding",
					"ingredients": [
						{
							"item": "tfmg:unfinished_electric_motor"
						},
						{
							"item": "tfmg:copper_spool"
						}
					],
					"processing_time": 75,
					"results": [
						{
							"id": "tfmg:unfinished_electric_motor"
						}
					]
				},
				{
					"type": "create:deploying",
					"ingredients": [
						{
							"item": "tfmg:unfinished_electric_motor"
						},
						{
							"item": "tfmg:magnet"
						}
					],
					"results": [
						{
							"id": "tfmg:unfinished_electric_motor"
						}
					]
				},
				{
					"type": "create:deploying",
					"ingredients": [
						{
							"item": "tfmg:unfinished_electric_motor"
						},
						{
							"item": "tfmg:steel_mechanism"
						}
					],
					"results": [
						{
							"id": "tfmg:unfinished_electric_motor"
						}
					]
				},
				{
					"type": "create:deploying",
					"ingredients": [
						{
						"item": "tfmg:unfinished_electric_motor"
						},
						{
						"item": "tfmg:screwdriver"
						}
					],
					"results": [
						{
						"id": "tfmg:unfinished_electric_motor"
						}
					]
				}
			],
			"transitional_item": {
				"id": "tfmg:unfinished_electric_motor"
			}
		})
		
		event.custom({
			"type": "create:sequenced_assembly",
			"ingredient": {
				"item": "create:shaft"
			},
			"loops": 3,
			"results": [
				{
					"count": 2,
					"chance": 96.0,
					"id": "tfmg:electric_motor"
				},
				{
					"chance": 2.0,
					"id": "tfmg:steel_mechanism"
				},
				{
					"chance": 2.0,
					"id": "tfmg:magnet"
				}
			],
			"sequence": [
				{
					"type": "tfmg:winding",
					"ingredients": [
						{
							"item": "tfmg:unfinished_electric_motor"
						},
						{
							"item": "tfmg:copper_spool"
						}
					],
					"processing_time": 75,
					"results": [
						{
							"id": "tfmg:unfinished_electric_motor"
						}
					]
				},
				{
					"type": "create:deploying",
					"ingredients": [
						{
							"item": "tfmg:unfinished_electric_motor"
						},
						{
							"item": "tfmg:magnet"
						}
					],
					"results": [
						{
							"id": "tfmg:unfinished_electric_motor"
						}
					]
				},
				{
					"type": "create:deploying",
					"ingredients": [
						{
							"item": "tfmg:unfinished_electric_motor"
						},
						{
							"item": "kubejs:nickel_aluminide_mechanism"
						}
					],
					"results": [
						{
							"id": "tfmg:unfinished_electric_motor"
						}
					]
				},
				{
					"type": "create:deploying",
					"ingredients": [
						{
						"item": "tfmg:unfinished_electric_motor"
						},
						{
						"item": "tfmg:screwdriver"
						}
					],
					"results": [
						{
						"id": "tfmg:unfinished_electric_motor"
						}
					]
				}
			],
			"transitional_item": {
				"id": "tfmg:unfinished_electric_motor"
			}
		})
		
		event.custom({
			"type": "create:sequenced_assembly",
			"ingredient": {
				"item": "tfmg:heavy_machinery_casing"
			},
			"loops": 3,
			"results": [
				{
					"chance": 96.0,
					"id": "tfmg:potentiometer"
				},
				{
					"chance": 2.0,
					"id": "tfmg:copper_wire"
				},
				{
					"chance": 2.0,
					"id": "tfmg:steel_cogwheel"
				}
			],
			"sequence": [
				{
					"type": "tfmg:winding",
					"ingredients": [
						{
							"item": "tfmg:unfinished_potentiometer"
						},
						{
							"item": "tfmg:constantan_spool"
						}
					],
					"processing_time": 100,
					"results": [
						{
							"id": "tfmg:unfinished_potentiometer"
						}
					]
				},
				{
					"type": "create:deploying",
					"ingredients": [
						{
							"item": "tfmg:unfinished_potentiometer"
						},
						{
							"item": "tfmg:steel_cogwheel"
						}
					],
					"results": [
						{
							"id": "tfmg:unfinished_potentiometer"
						}
					]
				},
				{
					"type": "create:deploying",
					"ingredients": [
						{
							"item": "tfmg:unfinished_potentiometer"
						},
						{
							"tag": "c:wires/copper"
						}
					],
					"results": [
						{
							"id": "tfmg:unfinished_potentiometer"
						}
					]
				},
				{
					"type": "create:filling",
					"ingredients": [
						{
							"item": "tfmg:unfinished_potentiometer"
						},
						{
							"type": "neoforge:single",
							"amount": 50,
							"fluid": "tfmg:lubrication_oil"
						}
					],
					"results": [
						{
							"id": "tfmg:unfinished_potentiometer"
						}
					]
				}
			],
			"transitional_item": {
				"id": "tfmg:unfinished_potentiometer"
			}
		})
		
		event.recipes.create.mechanical_crafting('4x tfmg:stator', [
			'AB  ',
			'CAB ',
			'CDAB',
			'ECCA'
		], {
			A: 'tfmg:electromagnetic_coil',
			B: 'tfmg:magnet',
			C: 'tfmg:aluminum_sheet',
			D: 'tfmg:steel_block',
			E: 'createaddition:copper_wire'
		})
		
		event.shaped('tfmg:concrete_hose', [
			' A ',
			'BCB',
			'DED'
		], {
			A: 'create:belt_connector',
			B: 'tfmg:steel_pipe',
			C: 'tfmg:steel_mechanism',
			D: 'tfmg:heavy_plate',
			E: 'tfmg:nickel_sheet'
		})
		
		event.shaped('2x tfmg:concrete_hose', [
			' A ',
			'BCB',
			'DED'
		], {
			A: 'create:belt_connector',
			B: 'tfmg:steel_pipe',
			C: 'kubejs:nickel_aluminide_mechanism',
			D: 'tfmg:heavy_plate',
			E: 'tfmg:nickel_sheet'
		})
		
		

//Replacements For Recipes		

//Replacing Items In Recipes

		/*event.replaceInput(
			{ input: 'ae2:matter_ball' },
			'ae2:matter_ball',
			'kubejs:paint_ball'
		)*/

//Added Recipes

	//Sequenced Recipes

		event.recipes.create.sequenced_assembly(
			[
				CreateItem.of('create:track', 1.00)
			],
			'minecraft:andesite_slab',
			[
				event.recipes.create.deploying('create:incomplete_track', ['create:incomplete_track', ['minecraft:iron_nugget', 'create:zinc_nugget']]),
				event.recipes.create.deploying('create:incomplete_track', ['create:incomplete_track', ['minecraft:iron_nugget', 'create:zinc_nugget']]),
				event.recipes.create.pressing('create:incomplete_track', 'create:incomplete_track',)
			]
		).transitionalItem('create:incomplete_track').loops(1)
		
		event.recipes.create.sequenced_assembly(
			[
				CreateItem.of('railways:track_create_andesite_narrow', 1.00)
			],
			'minecraft:andesite_slab',
			[
				event.recipes.create.cutting('railways:track_incomplete_create_andesite_narrow', 'railways:track_incomplete_create_andesite_narrow'),
				event.recipes.create.deploying('railways:track_incomplete_create_andesite_narrow', ['railways:track_incomplete_create_andesite_narrow', ['minecraft:iron_nugget', 'create:zinc_nugget']]),
				event.recipes.create.pressing('railways:track_incomplete_create_andesite_narrow', 'railways:track_incomplete_create_andesite_narrow',)
			]
		).transitionalItem('railways:track_incomplete_create_andesite_narrow').loops(1)
		
		event.recipes.create.sequenced_assembly(
			[
				CreateItem.of('railways:track_create_andesite_wide', 1.00)
			],
			'create:track',
			[
				event.recipes.create.cutting('railways:track_incomplete_create_andesite_wide', 'railways:track_incomplete_create_andesite_wide'),
				event.recipes.create.deploying('railways:track_incomplete_create_andesite_wide', ['railways:track_incomplete_create_andesite_wide', 'minecraft:andesite_slab']),
				event.recipes.create.pressing('railways:track_incomplete_create_andesite_wide', 'railways:track_incomplete_create_andesite_wide',)
			]
		).transitionalItem('railways:track_incomplete_create_andesite_wide').loops(1)

		event.recipes.create.sequenced_assembly(
			[
				CreateItem.of('kubejs:loose_brass_mechanism', 1.00)
			],
			'create:brass_sheet',
			[
				event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
				event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel']),
				event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'minecraft:iron_nugget'])
			]
		).transitionalItem('create:incomplete_precision_mechanism').loops(3)

		event.recipes.create.sequenced_assembly(
			[
				CreateItem.of('create:precision_mechanism', 0.92),
				CreateItem.of('create:cogwheel', 0.02),
				CreateItem.of('create:large_cogwheel', 0.02),
				CreateItem.of('minecraft:iron_nugget', 0.02),
				CreateItem.of('create:brass_sheet', 0.02)
			],
			'kubejs:loose_brass_mechanism',
			[
				event.recipes.create.pressing('kubejs:loose_brass_mechanism', 'kubejs:loose_brass_mechanism',)
			]
		).transitionalItem('kubejs:loose_brass_mechanism').loops(1)

		event.recipes.create.sequenced_assembly(
			[
				CreateItem.of('kubejs:electron_circuit_board', 1.00)
			],
			'create:brass_sheet',
			[
				event.recipes.create.deploying('kubejs:incomplete_electron_circuit_board', ['kubejs:incomplete_electron_circuit_board', 'create:electron_tube']),
				event.recipes.create.deploying('kubejs:incomplete_electron_circuit_board', ['kubejs:incomplete_electron_circuit_board', 'create:transmitter']),
				event.recipes.create.deploying('kubejs:incomplete_electron_circuit_board', ['kubejs:incomplete_electron_circuit_board', 'create:electron_tube'])
			]
		).transitionalItem('kubejs:incomplete_electron_circuit_board').loops(1)

		event.recipes.create.sequenced_assembly(
			[
				CreateItem.of('kubejs:andesite_alloy_mechanism_casing', 1.00)
			],
			'create:andesite_alloy',
			[
				event.recipes.create.deploying('kubejs:incomplete_andesite_alloy_mechanism', ['kubejs:incomplete_andesite_alloy_mechanism', 'create:iron_sheet']),
				event.recipes.create.pressing('kubejs:incomplete_andesite_alloy_mechanism', 'kubejs:incomplete_andesite_alloy_mechanism'),
				event.recipes.create.pressing('kubejs:incomplete_andesite_alloy_mechanism', 'kubejs:incomplete_andesite_alloy_mechanism')
			]
		).transitionalItem('kubejs:incomplete_andesite_alloy_mechanism').loops(1)

		event.recipes.create.sequenced_assembly(
			[
				CreateItem.of('kubejs:andesite_alloy_mechanism', 0.90),
				CreateItem.of('kubejs:andesite_alloy_mechanism_casing', 0.02),
				CreateItem.of('create:cogwheel', 0.02),
				CreateItem.of('create:shaft', 0.02),
				CreateItem.of('createaddition:copper_wire', 0.02),
				CreateItem.of('create:metal_bracket', 0.02)
			],
			'kubejs:andesite_alloy_mechanism_casing',
			[
				event.recipes.create.deploying('kubejs:incomplete_andesite_alloy_mechanism', ['kubejs:incomplete_andesite_alloy_mechanism', 'create:cogwheel']),
				event.recipes.create.deploying('kubejs:incomplete_andesite_alloy_mechanism', ['kubejs:incomplete_andesite_alloy_mechanism', 'create:shaft']),
				event.recipes.create.deploying('kubejs:incomplete_andesite_alloy_mechanism', ['kubejs:incomplete_andesite_alloy_mechanism', Ingredient.of('#c:wires/copper')]),
				event.recipes.create.deploying('kubejs:incomplete_andesite_alloy_mechanism', ['kubejs:incomplete_andesite_alloy_mechanism', 'create:metal_bracket'])
			]
		).transitionalItem('kubejs:incomplete_andesite_alloy_mechanism').loops(1)

		event.recipes.create.sequenced_assembly(
			[
				CreateItem.of('kubejs:half_complete_nickel_aluminide_mechanism', 0.996),
				CreateItem.of('kubejs:nickel_aluminide_sheet', 0.001),
				CreateItem.of('tfmg:steel_cogwheel', 0.001),
				CreateItem.of('tfmg:large_steel_cogwheel', 0.001),
				CreateItem.of('tfmg:lithium_charge', 0.001)
			],
			'kubejs:nickel_aluminide_sheet',
			[
				event.recipes.create.deploying('kubejs:incomplete_half_complete_nickel_aluminide_mechanism', ['kubejs:incomplete_half_complete_nickel_aluminide_mechanism', 'tfmg:steel_cogwheel']),
				event.recipes.create.deploying('kubejs:incomplete_half_complete_nickel_aluminide_mechanism', ['kubejs:incomplete_half_complete_nickel_aluminide_mechanism', 'tfmg:large_steel_cogwheel']),
				event.recipes.create.deploying('kubejs:incomplete_half_complete_nickel_aluminide_mechanism', ['kubejs:incomplete_half_complete_nickel_aluminide_mechanism', 'tfmg:screwdriver']),
				event.recipes.create.filling('kubejs:incomplete_half_complete_nickel_aluminide_mechanism', ['kubejs:incomplete_half_complete_nickel_aluminide_mechanism', Fluid.of('tfmg:lubrication_oil', 500)]),
				event.recipes.create.deploying('kubejs:incomplete_half_complete_nickel_aluminide_mechanism', ['kubejs:incomplete_half_complete_nickel_aluminide_mechanism', 'tfmg:lithium_charge'])
			]
		).transitionalItem('kubejs:incomplete_half_complete_nickel_aluminide_mechanism').loops(1)

		event.recipes.create.sequenced_assembly(
			[
				CreateItem.of('kubejs:nickel_aluminide_mechanism', 1),
			],
			'kubejs:half_complete_nickel_aluminide_mechanism',
			[
				event.recipes.create.deploying('kubejs:incomplete_nickel_aluminide_mechanism', ['kubejs:incomplete_nickel_aluminide_mechanism', 'tfmg:aluminum_sheet']),
				event.recipes.create.deploying('kubejs:incomplete_nickel_aluminide_mechanism', ['kubejs:incomplete_nickel_aluminide_mechanism', 'tfmg:screw']),
				event.recipes.create.pressing('kubejs:incomplete_nickel_aluminide_mechanism', 'kubejs:incomplete_nickel_aluminide_mechanism'),
				event.recipes.create.deploying('kubejs:incomplete_nickel_aluminide_mechanism', ['kubejs:incomplete_nickel_aluminide_mechanism', 'tfmg:screwdriver'])
			]
		).transitionalItem('kubejs:incomplete_nickel_aluminide_mechanism').loops(1)
		
		event.recipes.create.sequenced_assembly(
			[
				CreateItem.of('tfmg:steel_mechanism', 0.95),
				CreateItem.of('tfmg:steel_cogwheel', 0.01),
				CreateItem.of('tfmg:nickel_sheet', 0.01),
				CreateItem.of('tfmg:large_steel_cogwheel', 0.01),
				CreateItem.of('tfmg:lead_sheet', 0.01),
				CreateItem.of('tfmg:screw', 0.01)
			],
			'tfmg:heavy_plate',
			[
				event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:steel_cogwheel']),
				event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:nickel_sheet']),
				event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:large_steel_cogwheel']),
				event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:lead_sheet']),
				event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:screw']),
				event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:screwdriver']),
			]
		).transitionalItem('tfmg:unfinished_steel_mechanism').loops(2)
		
		event.recipes.create.sequenced_assembly(
			[
				CreateItem.of('kubejs:advanced_circuit_board', 1.00)
			],
			'kubejs:advanced_etched_circuit_board',
			[
				event.recipes.create.deploying('kubejs:incomplete_advanced_circuit_board', ['kubejs:incomplete_advanced_circuit_board', 'tfmg:capacitor_item']),
				event.recipes.create.deploying('kubejs:incomplete_advanced_circuit_board', ['kubejs:incomplete_advanced_circuit_board', 'tfmg:transistor_item']),
				event.recipes.create.deploying('kubejs:incomplete_advanced_circuit_board', ['kubejs:incomplete_advanced_circuit_board', 'tfmg:capacitor_item']),
				event.recipes.create.deploying('kubejs:incomplete_advanced_circuit_board', ['kubejs:incomplete_advanced_circuit_board', 'tfmg:resistor']),
				event.recipes.create.deploying('kubejs:incomplete_advanced_circuit_board', ['kubejs:incomplete_advanced_circuit_board', 'ae2:calculation_processor']),
				event.recipes.create.deploying('kubejs:incomplete_advanced_circuit_board', ['kubejs:incomplete_advanced_circuit_board', 'tfmg:resistor']),
			]
		).transitionalItem('kubejs:incomplete_advanced_circuit_board').loops(4)
		
		event.recipes.create.sequenced_assembly(
			[
				CreateItem.of('kubejs:nickel_aluminide_sheet', 1.00)
			],
			'kubejs:nickel_aluminide_ingot',
			[
				event.recipes.create.pressing('kubejs:unprocessed_nickel_aluminide_sheet', 'kubejs:unprocessed_nickel_aluminide_sheet'),
				event.recipes.create.pressing('kubejs:unprocessed_nickel_aluminide_sheet', 'kubejs:unprocessed_nickel_aluminide_sheet'),
				event.recipes.create.pressing('kubejs:unprocessed_nickel_aluminide_sheet', 'kubejs:unprocessed_nickel_aluminide_sheet')
			]
		).transitionalItem('kubejs:unprocessed_nickel_aluminide_sheet').loops(1)
		
		event.recipes.create.sequenced_assembly(
			[
				CreateItem.of('ae2:basic_card', 1.00)
			],
			'tfmg:aluminum_sheet',
			[
				event.recipes.create.deploying('kubejs:unfinished_basic_card', ['kubejs:unfinished_basic_card', 'tfmg:circuit_board']),
				event.recipes.create.deploying('kubejs:unfinished_basic_card', ['kubejs:unfinished_basic_card', 'ae2:calculation_processor']),
				event.recipes.create.deploying('kubejs:unfinished_basic_card', ['kubejs:unfinished_basic_card', 'kubejs:redstone_wiring']),
				event.recipes.create.deploying('kubejs:unfinished_basic_card', ['kubejs:unfinished_basic_card', 'create:golden_sheet']),
				event.recipes.create.deploying('kubejs:unfinished_basic_card', ['kubejs:unfinished_basic_card', 'tfmg:plastic_sheet']),
				event.recipes.create.pressing('kubejs:unfinished_basic_card', 'kubejs:unfinished_basic_card')
			]
		).transitionalItem('kubejs:unfinished_basic_card').loops(1)
		
		event.recipes.create.sequenced_assembly(
			[
				CreateItem.of('ae2:advanced_card', 1.00)
			],
			'tfmg:aluminum_sheet',
			[
				event.recipes.create.deploying('kubejs:unfinished_advanced_card', ['kubejs:unfinished_advanced_card', 'kubejs:advanced_circuit_board']),
				event.recipes.create.deploying('kubejs:unfinished_advanced_card', ['kubejs:unfinished_advanced_card', 'ae2:calculation_processor']),
				event.recipes.create.deploying('kubejs:unfinished_advanced_card', ['kubejs:unfinished_advanced_card', 'ae2:logic_processor']),
				event.recipes.create.deploying('kubejs:unfinished_advanced_card', ['kubejs:unfinished_advanced_card', 'kubejs:redstone_wiring']),
				event.recipes.create.deploying('kubejs:unfinished_advanced_card', ['kubejs:unfinished_advanced_card', 'kubejs:diamond_plate']),
				event.recipes.create.deploying('kubejs:unfinished_advanced_card', ['kubejs:unfinished_advanced_card', 'tfmg:plastic_sheet']),
				event.recipes.create.pressing('kubejs:unfinished_advanced_card', 'kubejs:unfinished_advanced_card')
			]
		).transitionalItem('kubejs:unfinished_advanced_card').loops(1)
		
		event.recipes.create.sequenced_assembly(
			[
				CreateItem.of('ae2:cell_component_1k', 1.00)
			],
			'tfmg:aluminum_sheet',
			[
				event.recipes.create.deploying('kubejs:unfinished_1k_storage_component', ['kubejs:unfinished_1k_storage_component', 'ae2:logic_processor']),
				event.recipes.create.deploying('kubejs:unfinished_1k_storage_component', ['kubejs:unfinished_1k_storage_component', 'kubejs:redstone_wiring']),
				event.recipes.create.deploying('kubejs:unfinished_1k_storage_component', ['kubejs:unfinished_1k_storage_component', 'kubejs:certus_quartz_plate']),
				event.recipes.create.pressing('kubejs:unfinished_1k_storage_component', 'kubejs:unfinished_1k_storage_component')
			]
		).transitionalItem('kubejs:unfinished_1k_storage_component').loops(1)
		
		event.recipes.create.sequenced_assembly(
			[
				CreateItem.of('ae2:cell_component_4k', 1.00)
			],
			'tfmg:aluminum_sheet',
			[
				event.recipes.create.deploying('kubejs:unfinished_4k_storage_component', ['kubejs:unfinished_4k_storage_component', 'ae2:cell_component_1k']),
				event.recipes.create.deploying('kubejs:unfinished_4k_storage_component', ['kubejs:unfinished_4k_storage_component', 'ae2:cell_component_1k']),
				event.recipes.create.deploying('kubejs:unfinished_4k_storage_component', ['kubejs:unfinished_4k_storage_component', 'ae2:cell_component_1k']),
				event.recipes.create.deploying('kubejs:unfinished_4k_storage_component', ['kubejs:unfinished_4k_storage_component', 'ae2:logic_processor']),
				event.recipes.create.deploying('kubejs:unfinished_4k_storage_component', ['kubejs:unfinished_4k_storage_component', 'kubejs:redstone_wiring']),
				event.recipes.create.deploying('kubejs:unfinished_4k_storage_component', ['kubejs:unfinished_4k_storage_component', 'kubejs:certus_quartz_plate']),
				event.recipes.create.pressing('kubejs:unfinished_4k_storage_component', 'kubejs:unfinished_4k_storage_component')
			]
		).transitionalItem('kubejs:unfinished_4k_storage_component').loops(1)
		
		event.recipes.create.sequenced_assembly(
			[
				CreateItem.of('ae2:cell_component_16k', 1.00)
			],
			'tfmg:aluminum_sheet',
			[
				event.recipes.create.deploying('kubejs:unfinished_16k_storage_component', ['kubejs:unfinished_16k_storage_component', 'ae2:cell_component_4k']),
				event.recipes.create.deploying('kubejs:unfinished_16k_storage_component', ['kubejs:unfinished_16k_storage_component', 'ae2:cell_component_4k']),
				event.recipes.create.deploying('kubejs:unfinished_16k_storage_component', ['kubejs:unfinished_16k_storage_component', 'ae2:cell_component_4k']),
				event.recipes.create.deploying('kubejs:unfinished_16k_storage_component', ['kubejs:unfinished_16k_storage_component', 'ae2:logic_processor']),
				event.recipes.create.deploying('kubejs:unfinished_16k_storage_component', ['kubejs:unfinished_16k_storage_component', 'kubejs:redstone_wiring']),
				event.recipes.create.deploying('kubejs:unfinished_16k_storage_component', ['kubejs:unfinished_16k_storage_component', 'kubejs:certus_quartz_plate']),
				event.recipes.create.pressing('kubejs:unfinished_16k_storage_component', 'kubejs:unfinished_16k_storage_component')
			]
		).transitionalItem('kubejs:unfinished_16k_storage_component').loops(1)
		
		event.recipes.create.sequenced_assembly(
			[
				CreateItem.of('ae2:wireless_booster', 1.00)
			],
			'tfmg:plastic_sheet',
			[
				event.recipes.create.deploying('kubejs:unfinished_wireless_booster', ['kubejs:unfinished_wireless_booster', 'tfmg:circuit_board']),
				event.recipes.create.deploying('kubejs:unfinished_wireless_booster', ['kubejs:unfinished_wireless_booster', 'kubejs:certus_quartz_plate']),
				event.recipes.create.deploying('kubejs:unfinished_wireless_booster', ['kubejs:unfinished_wireless_booster', 'kubejs:ender_coated_plate']),
				event.recipes.create.deploying('kubejs:unfinished_wireless_booster', ['kubejs:unfinished_wireless_booster', 'kubejs:fluix_crystal_plate']),
				event.recipes.create.deploying('kubejs:unfinished_wireless_booster', ['kubejs:unfinished_wireless_booster', 'tfmg:aluminum_sheet']),
				event.recipes.create.pressing('kubejs:unfinished_wireless_booster', 'kubejs:unfinished_wireless_booster')
			]
		).transitionalItem('kubejs:unfinished_wireless_booster').loops(1)
		
		event.recipes.create.sequenced_assembly(
			[
				CreateItem.of('ae2:annihilation_core', 1.00)
			],
			'tfmg:aluminum_sheet',
			[
				event.recipes.create.deploying('kubejs:unfinished_annihilation_core', ['kubejs:unfinished_annihilation_core', 'kubejs:quartz_plate']),
				event.recipes.create.deploying('kubejs:unfinished_annihilation_core', ['kubejs:unfinished_annihilation_core', 'kubejs:fluix_crystal_plate']),
				event.recipes.create.deploying('kubejs:unfinished_annihilation_core', ['kubejs:unfinished_annihilation_core', 'ae2:logic_processor']),
				event.recipes.create.deploying('kubejs:unfinished_annihilation_core', ['kubejs:unfinished_annihilation_core', 'kubejs:quartz_plate']),
				event.recipes.create.pressing('kubejs:unfinished_annihilation_core', 'kubejs:unfinished_annihilation_core')
			]
		).transitionalItem('kubejs:unfinished_annihilation_core').loops(1)
		
		event.recipes.create.sequenced_assembly(
			[
				CreateItem.of('ae2:formation_core', 1.00)
			],
			'tfmg:aluminum_sheet',
			[
				event.recipes.create.deploying('kubejs:unfinished_formation_core', ['kubejs:unfinished_formation_core', 'kubejs:certus_quartz_plate']),
				event.recipes.create.deploying('kubejs:unfinished_formation_core', ['kubejs:unfinished_formation_core', 'kubejs:fluix_crystal_plate']),
				event.recipes.create.deploying('kubejs:unfinished_formation_core', ['kubejs:unfinished_formation_core', 'ae2:logic_processor']),
				event.recipes.create.deploying('kubejs:unfinished_formation_core', ['kubejs:unfinished_formation_core', 'kubejs:certus_quartz_plate']),
				event.recipes.create.pressing('kubejs:unfinished_formation_core', 'kubejs:unfinished_formation_core')
			]
		).transitionalItem('kubejs:unfinished_formation_core').loops(1)
		
		event.recipes.create.sequenced_assembly(
			[
				CreateItem.of('kubejs:motherboard', 1.00)
			],
			'kubejs:etched_motherboard',
			[
				event.recipes.create.deploying('kubejs:unfinished_motherboard', ['kubejs:unfinished_motherboard', 'ae2:calculation_processor']),
				event.recipes.create.deploying('kubejs:unfinished_motherboard', ['kubejs:unfinished_motherboard', 'kubejs:redstone_wiring']),
				event.recipes.create.deploying('kubejs:unfinished_motherboard', ['kubejs:unfinished_motherboard', 'ae2:logic_processor']),
				event.recipes.create.deploying('kubejs:unfinished_motherboard', ['kubejs:unfinished_motherboard', 'kubejs:redstone_wiring']),
				event.recipes.create.deploying('kubejs:unfinished_motherboard', ['kubejs:unfinished_motherboard', 'ae2:engineering_processor']),
				event.recipes.create.deploying('kubejs:unfinished_motherboard', ['kubejs:unfinished_motherboard', 'kubejs:redstone_wiring']),
				event.recipes.create.deploying('kubejs:unfinished_motherboard', ['kubejs:unfinished_motherboard', 'ae2:memory_card']),
			]
		).transitionalItem('kubejs:unfinished_motherboard').loops(4)

		
	//Basic Create Recipes
	
		//Haunting
		
		event.recipes.create.haunting('vanillabackport:pale_oak_sapling', 'minecraft:dark_oak_sapling')
		event.recipes.create.haunting('vanillabackport:pale_moss_block', 'minecraft:moss_block')
		event.recipes.create.haunting('vanillabackport:pale_hanging_moss', 'minecraft:moss_block')
		event.recipes.create.haunting('vanillabackport:closed_eyeblossom', 'minecraft:dandelion')
		event.recipes.create.haunting('vanillabackport:open_eyeblossom', 'minecraft:oxeye_daisy')
		
		event.recipes.create.haunting('biomesoplenty:umbran_sapling', 'minecraft:spruce_sapling')
		event.recipes.create.haunting('biomesoplenty:origin_sapling', 'minecraft:oak_sapling')
		
		event.recipes.create.haunting('biomesoplenty:pink_daffodil', 'minecraft:pink_tulip')
		event.recipes.create.haunting('biomesoplenty:glowflower', 'minecraft:glow_berries')
		event.recipes.create.haunting('biomesoplenty:rose', 'minecraft:poppy')
		event.recipes.create.haunting('biomesoplenty:blue_hydrangea', 'minecraft:blue_orchid')
	
		//Deploying
		
		event.recipes.create.deploying('kubejs:advanced_coated_circuit_board', ['kubejs:advanced_empty_circuit_board', 'create:golden_sheet'])
		event.recipes.create.deploying('kubejs:coated_motherboard', ['kubejs:empty_motherboard', 'createaddition:electrum_sheet'])
		
		//Pressing
		
		//event.recipes.create.pressing(['2x minecraft:iron_nugget', 'minecraft:andesite_slab'], 'create:track')
		event.recipes.create.pressing('kubejs:organic_rubber', 'minecraft:dried_kelp')
		event.recipes.create.pressing('kubejs:silver_sheet', 'kubejs:silver_ingot')
		event.recipes.create.pressing('kubejs:uranium_pellets', 'crowns:uranium_ingot')
		
		event.recipes.create.pressing('minecraft:tube_coral_fan', 'minecraft:tube_coral')
		event.recipes.create.pressing('minecraft:brain_coral_fan', 'minecraft:brain_coral')
		event.recipes.create.pressing('minecraft:bubble_coral_fan', 'minecraft:bubble_coral')
		event.recipes.create.pressing('minecraft:fire_coral_fan', 'minecraft:fire_coral')
		event.recipes.create.pressing('minecraft:horn_coral_fan', 'minecraft:horn_coral')
		
		//Filling
		
		event.recipes.create.filling('biomesoplenty:flesh', [Fluid.of('biomesoplenty:blood', 200), 'biomesoplenty:porous_flesh'])
		

		//Splashing
		
		event.recipes.create.splashing('minecraft:exposed_copper', 'minecraft:copper_block')

		event.recipes.create.splashing('twigs:exposed_copper_pillar', 'twigs:copper_pillar')
		event.recipes.create.splashing('twigs:weathered_copper_pillar', 'twigs:exposed_copper_pillar')
		event.recipes.create.splashing('twigs:oxidized_copper_pillar', 'twigs:weathered_copper_pillar')
		
		const copperSplashing1 = [
		"chiseled_copper",
		"copper_grate",
		"cut_copper",
		"cut_copper_stairs",
		"cut_copper_slab",
		"copper_door",
		"copper_trapdoor",
		"copper_bulb",
		]
		for(const type of copperSplashing1) {
			
			event.recipes.create.splashing(`exposed_${type}`, `${type}`)
		}

		const copperSplashing2 = [
		"copper",
		"chiseled_copper",
		"copper_grate",
		"cut_copper",
		"cut_copper_stairs",
		"cut_copper_slab",
		"copper_door",
		"copper_trapdoor",
		"copper_bulb",
		]
		for(const type of copperSplashing2) {
			
			event.recipes.create.splashing(`weathered_${type}`, `exposed_${type}`)
		}

		const copperSplashing3 = [
		"copper",
		"chiseled_copper",
		"copper_grate",
		"cut_copper",
		"cut_copper_stairs",
		"cut_copper_slab",
		"copper_door",
		"copper_trapdoor",
		"copper_bulb",
		]
		for(const type of copperSplashing3) {
			
			event.recipes.create.splashing(`oxidized_${type}`, `weathered_${type}`)
		}

		//Mixing

		event.recipes.create.mixing(Fluid.of('kubejs:salt_water', 500), [Fluid.of('minecraft:water', 500), Ingredient.of('#c:saltstones', 4)]).heated()
		event.recipes.create.mixing(CreateItem.of('minecraft:dirt', 0.75), 'minecraft:coarse_dirt')
		event.recipes.create.mixing('3x kubejs:steel_blast_mixture', [Ingredient.of('create:crushed_raw_iron', 3), Ingredient.of('tfmg:limesand')]).heated()
		event.recipes.create.mixing(Fluid.of('kubejs:molten_electrum', 288), [Fluid.of('kubejs:molten_gold', 144), Fluid.of('kubejs:molten_silver', 144)]).heated()
		event.recipes.create.mixing(Fluid.of('kubejs:molten_constantan', 288), [Fluid.of('kubejs:molten_nickel', 144), Fluid.of('kubejs:molten_copper', 144)]).heated()
		event.recipes.create.mixing(Fluid.of('kubejs:molten_brass', 288), [Fluid.of('kubejs:molten_zinc', 144), Fluid.of('kubejs:molten_copper', 144)]).heated()
		event.recipes.create.mixing(['kubejs:welsh_coal', CreateItem.of('tfmg:sulfur_dust', 0.02)], [Fluid.of('minecraft:water', 100), Ingredient.of('minecraft:coal')])
		event.recipes.create.mixing('biomesoplenty:magic_sapling', ['create:experience_nugget', 'minecraft:birch_sapling'])
		
		event.recipes.create.mixing(['4x minecraft:seagrass', 'kubejs:seagrass_clump'], ['minecraft:bone_meal', 'kubejs:seagrass_clump', Fluid.of('minecraft:water', 1000)])
		event.recipes.create.mixing(Fluid.of('kubejs:algeanated_water', 250), [Fluid.of('minecraft:water', 250), 'minecraft:seagrass']).heated()
		event.recipes.create.mixing(['minecraft:tube_coral', 'minecraft:tube_coral_block', Fluid.of('minecraft:water', 1000)], ['minecraft:tube_coral_block', Fluid.of('kubejs:algeanated_water', 1000)]).heated()
		event.recipes.create.mixing(['minecraft:brain_coral', 'minecraft:brain_coral_block', Fluid.of('minecraft:water', 1000)], ['minecraft:brain_coral_block', Fluid.of('kubejs:algeanated_water', 1000)]).heated()
		event.recipes.create.mixing(['minecraft:bubble_coral', 'minecraft:bubble_coral_block', Fluid.of('minecraft:water', 1000)], ['minecraft:bubble_coral_block', Fluid.of('kubejs:algeanated_water', 1000)]).heated()
		event.recipes.create.mixing(['minecraft:fire_coral', 'minecraft:fire_coral_block', Fluid.of('minecraft:water', 1000)], ['minecraft:fire_coral_block', Fluid.of('kubejs:algeanated_water', 1000)]).heated()
		event.recipes.create.mixing(['minecraft:horn_coral', 'minecraft:horn_coral_block', Fluid.of('minecraft:water', 1000)], ['minecraft:horn_coral_block', Fluid.of('kubejs:algeanated_water', 1000)]).heated()
		
		event.recipes.create.mixing(Fluid.of('kubejs:molten_sodium_lead_alloy', 144), 'kubejs:sodium_lead_alloy')
		event.recipes.create.mixing(Fluid.of('kubejs:molten_sodium', 144), 'kubejs:sodium')
		event.recipes.create.mixing(Fluid.of('kubejs:molten_zinc', 144), 'create:zinc_ingot')
		event.recipes.create.mixing(Fluid.of('kubejs:molten_copper', 144), 'minecraft:copper_ingot')
		event.recipes.create.mixing(Fluid.of('kubejs:molten_iron', 144), 'minecraft:iron_ingot')
		event.recipes.create.mixing(Fluid.of('kubejs:molten_gold', 144), 'minecraft:gold_ingot')
		event.recipes.create.mixing(Fluid.of('kubejs:molten_silver', 144), 'kubejs:silver_ingot')
		event.recipes.create.mixing(Fluid.of('kubejs:molten_lead', 144), 'tfmg:lead_ingot')
		event.recipes.create.mixing(Fluid.of('kubejs:molten_nickel', 144), 'tfmg:nickel_ingot')
		event.recipes.create.mixing(Fluid.of('kubejs:molten_electrum', 144), 'createaddition:electrum_ingot')
		event.recipes.create.mixing(Fluid.of('kubejs:molten_lithium', 144), 'tfmg:lithium_ingot')
		event.recipes.create.mixing(Fluid.of('kubejs:molten_brass', 144), 'create:brass_ingot')
		event.recipes.create.mixing(Fluid.of('kubejs:molten_constantan', 144), 'tfmg:constantan_ingot')
		event.recipes.create.mixing(Fluid.of('kubejs:molten_netherite', 144), 'minecraft:netherite_ingot')
		event.recipes.create.mixing(Fluid.of('kubejs:molten_aluminum', 144), 'tfmg:aluminum_ingot')
		
		event.recipes.create.mixing(Fluid.of('kubejs:tuff_mineral_slurry', 250), [('4x minecraft:tuff'), Fluid.of('minecraft:water', 500)]).heated()
		
		//Compacting
		
		event.recipes.create.compacting('2x createaddition:electrum_sheet', ['kubejs:silver_sheet', 'create:golden_sheet']).heated()
		
		event.recipes.create.compacting([Fluid.of('biomesoplenty:blood', 50), CreateItem.of('minecraft:bone_meal', 0.5)], 'minecraft:rotten_flesh')
		event.recipes.create.compacting([Fluid.of('biomesoplenty:blood', 300), 'minecraft:rotten_flesh'], 'minecraft:beef')
		event.recipes.create.compacting([Fluid.of('biomesoplenty:blood', 300), 'minecraft:rotten_flesh'], 'minecraft:porkchop')
		event.recipes.create.compacting([Fluid.of('biomesoplenty:blood', 200), 'minecraft:rotten_flesh'], 'minecraft:mutton')
		event.recipes.create.compacting([Fluid.of('biomesoplenty:blood', 100), 'minecraft:rotten_flesh'], 'minecraft:cod')
		event.recipes.create.compacting([Fluid.of('biomesoplenty:blood', 100), 'minecraft:rotten_flesh'], 'minecraft:salmon')
		event.recipes.create.compacting([Fluid.of('biomesoplenty:blood', 300), 'minecraft:rotten_flesh'], 'minecraft:rabbit')
		event.recipes.create.compacting([Fluid.of('biomesoplenty:blood', 300), 'minecraft:rotten_flesh'], 'minecraft:chicken')
		
		event.recipes.create.compacting([Fluid.of('biomesoplenty:blood', 150), 'minecraft:rotten_flesh'], 'farmersdelight:minced_beef')
		event.recipes.create.compacting([Fluid.of('biomesoplenty:blood', 150), 'minecraft:rotten_flesh'], 'farmersdelight:bacon')
		event.recipes.create.compacting([Fluid.of('biomesoplenty:blood', 100), 'minecraft:rotten_flesh'], 'farmersdelight:mutton_chops')
		event.recipes.create.compacting([Fluid.of('biomesoplenty:blood', 50), 'minecraft:rotten_flesh'], 'farmersdelight:cod_slice')
		event.recipes.create.compacting([Fluid.of('biomesoplenty:blood', 50), 'minecraft:rotten_flesh'], 'farmersdelight:salmon_slice')
		event.recipes.create.compacting([Fluid.of('biomesoplenty:blood', 150), 'minecraft:rotten_flesh'], 'farmersdelight:chicken_cuts')
		
		event.recipes.create.compacting([Fluid.of('biomesoplenty:blood', 200), 'biomesoplenty:porous_flesh'], 'biomesoplenty:flesh')
		
		event.recipes.create.compacting(CreateItem.of('vanillabackport:resin_clump', 0.01), 'vanillabackport:pale_oak_log')
		
		event.recipes.create.compacting(CreateItem.of('tfmg:bitumen', 1), Fluid.of('kubejs:residual_fuel_oil', 100)).heated()
		
		//Milling
		
		event.recipes.create.milling(['3x twigs:silt_ball', CreateItem.of('twigs:silt_ball', 0.5)], 'twigs:silt')
		event.recipes.create.milling('kubejs:silver_dust', 'kubejs:crushed_raw_silver')
		event.recipes.create.milling('4x minecraft:flint', 'minecraft:gravel')
		event.recipes.create.milling(CreateItem.of('tfmg:sulfur_dust', 0.005), 'minecraft:egg')
		event.recipes.create.milling(['2x minecraft:black_dye', CreateItem.of('minecraft:gray_dye', 0.1)], 'kubejs:welsh_coal')
		event.recipes.create.milling(CreateItem.of('biomesoplenty:clover', 0.1), Ingredient.of('#minecraft:leaves'))
		
		//Hydraulic Compacting
		
		event.custom({
			"type": "dndesires:hydraulic_compacting",
			"heat_requirement": "heated",
			"ingredients": [
				{
					"item": "minecraft:gravel"
				},
				{
					"item": "minecraft:deepslate"
				},
				{
					"item": "minecraft:andesite"
				},
				{
					"type": "neoforge:single",
					"amount": 500,
					"fluid": "minecraft:lava"
				}
			],
			"results": [
				{
					"count": 4,
					"id": "minecraft:tuff"
				}
			]
		})
		
		event.custom({
			"type": "dndesires:hydraulic_compacting",
			"ingredients": [
				{
					"item": "biomesoplenty:flesh"
				},
				{
					"item": "biomesoplenty:flesh"
				},
				{
					"item": "biomesoplenty:flesh"
				},
				{
					"item": "biomesoplenty:flesh"
				},
				{
					"item": "biomesoplenty:flesh"
				}
			],
			"results": [
				{
					"count": 5,
					"id": "biomesoplenty:porous_flesh"
				},
				{
					"type": "neoforge:single",
					"amount": 1000,
					"id": "biomesoplenty:blood"
				}
			]
		})	
		
		event.custom({
			"type": "dndesires:hydraulic_compacting",
			"ingredients": [
				{
					"item": "create:crimsite"
				},
				{
					"type": "neoforge:single",
					"amount": 125,
					"fluid": "minecraft:lava"
				},
				{
					"type": "neoforge:single",
					"amount": 250,
					"fluid": "kubejs:tuff_mineral_slurry"
				}
			],
			"results": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"id": "tfmg:molten_slag"
				},
				{
					"type": "neoforge:single",
					"count": 2,
					"id": "kubejs:cobbled_crimsite"
				}
			]
		})
		
		event.custom({
			"type": "dndesires:hydraulic_compacting",
			"ingredients": [
				{
					"item": "dndecor:gabbro"
				},
				{
					"type": "neoforge:single",
					"amount": 125,
					"fluid": "minecraft:lava"
				},
				{
					"type": "neoforge:single",
					"amount": 250,
					"fluid": "kubejs:tuff_mineral_slurry"
				}
			],
			"results": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"id": "tfmg:molten_slag"
				},
				{
					"type": "neoforge:single",
					"count": 2,
					"id": "kubejs:cobbled_gabbro"
				}
			]
		})
		
		event.custom({
			"type": "dndesires:hydraulic_compacting",
			"ingredients": [
				{
					"item": "create:asurine"
				},
				{
					"type": "neoforge:single",
					"amount": 125,
					"fluid": "minecraft:lava"
				},
				{
					"type": "neoforge:single",
					"amount": 250,
					"fluid": "kubejs:tuff_mineral_slurry"
				}
			],
			"results": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"id": "tfmg:molten_slag"
				},
				{
					"type": "neoforge:single",
					"count": 2,
					"id": "kubejs:cobbled_asurine"
				}
			]
		})
		
		event.custom({
			"type": "dndesires:hydraulic_compacting",
			"ingredients": [
				{
					"item": "create:veridium"
				},
				{
					"type": "neoforge:single",
					"amount": 125,
					"fluid": "minecraft:lava"
				},
				{
					"type": "neoforge:single",
					"amount": 250,
					"fluid": "kubejs:tuff_mineral_slurry"
				}
			],
			"results": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"id": "tfmg:molten_slag"
				},
				{
					"type": "neoforge:single",
					"count": 2,
					"id": "kubejs:cobbled_veridium"
				}
			]
		})
		
		event.custom({
			"type": "dndesires:hydraulic_compacting",
			"ingredients": [
				{
					"item": "tfmg:galena"
				},
				{
					"type": "neoforge:single",
					"amount": 125,
					"fluid": "minecraft:lava"
				},
				{
					"type": "neoforge:single",
					"amount": 250,
					"fluid": "kubejs:tuff_mineral_slurry"
				}
			],
			"results": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"id": "tfmg:molten_slag"
				},
				{
					"type": "neoforge:single",
					"count": 2,
					"id": "kubejs:cobbled_galena"
				}
			]
		})
		
		event.custom({
			"type": "dndesires:hydraulic_compacting",
			"ingredients": [
				{
					"item": "dndesires:breccia"
				},
				{
					"type": "neoforge:single",
					"amount": 125,
					"fluid": "minecraft:lava"
				},
				{
					"type": "neoforge:single",
					"amount": 250,
					"fluid": "kubejs:tuff_mineral_slurry"
				}
			],
			"results": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"id": "tfmg:molten_slag"
				},
				{
					"type": "neoforge:single",
					"count": 2,
					"id": "kubejs:cobbled_breccia"
				}
			]
		})
		
		event.custom({
			"type": "dndesires:hydraulic_compacting",
			"ingredients": [
				{
					"item": "create:ochrum"
				},
				{
					"type": "neoforge:single",
					"amount": 125,
					"fluid": "minecraft:lava"
				},
				{
					"type": "neoforge:single",
					"amount": 250,
					"fluid": "kubejs:tuff_mineral_slurry"
				}
			],
			"results": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"id": "tfmg:molten_slag"
				},
				{
					"type": "neoforge:single",
					"count": 2,
					"id": "kubejs:cobbled_ochrum"
				}
			]
		})
		
		event.custom({
			"type": "dndesires:hydraulic_compacting",
			"ingredients": [
				{
					"item": "kubejs:uranium_dioxide"
				},
			],
			"results": [
				{
					"count": 1,
					"id": "kubejs:uranium_pellets"
				}
			]
		})
		
		event.custom({
			"type": "dndesires:hydraulic_compacting",
			"heat_requirement": "heated",
			"ingredients": [
				{
					"item": "kubejs:quartz_powder"
				}
			],
			"results": [
				{
					"count": 1,
					"id": "kubejs:quartz_plate"
				}
			]
		})
		
		event.custom({
			"type": "dndesires:hydraulic_compacting",
			"heat_requirement": "heated",
			"ingredients": [
				{
					"item": "createaddition:diamond_grit"
				}
			],
			"results": [
				{
					"count": 1,
					"id": "kubejs:diamond_plate"
				}
			]
		})
		
		event.custom({
			"type": "dndesires:hydraulic_compacting",
			"heat_requirement": "heated",
			"ingredients": [
				{
					"item": "minecraft:obsidian"
				},
				{
					"item": "minecraft:stone"
				}
			],
			"results": [
				{
					"count": 2,
					"id": "ae2:sky_stone_block"
				}
			]
		})
		
		event.custom({
			"type": "dndesires:hydraulic_compacting",
			"heat_requirement": "superheated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 500,
					"fluid": "kubejs:condensed_carbon_mixture"
				},
			],
			"results": [
				{
					"count": 1,
					"id": "minecraft:diamond"
				}
			]
		})
		
		//Crushing
		
		event.recipes.create.crushing([
			CreateItem.of('create:crushed_raw_lead', 0.4),
			CreateItem.of('2x tfmg:lead_nugget', 0.1),
			CreateItem.of('kubejs:crushed_raw_silver', 0.2),
			CreateItem.of('2x kubejs:silver_nugget', 0.05)
		], 'kubejs:cobbled_galena')
		
		event.recipes.create.crushing([
			CreateItem.of('create:crushed_raw_iron', 0.4),
			CreateItem.of('minecraft:iron_nugget', 0.4)
		], 'kubejs:cobbled_crimsite')
		
		event.recipes.create.crushing([
			CreateItem.of('create:crushed_raw_zinc', 0.3),
			CreateItem.of('create:zinc_nugget', 0.3)
		], 'kubejs:cobbled_asurine')
		
		event.recipes.create.crushing([
			CreateItem.of('create:crushed_raw_gold', 0.2),
			CreateItem.of('minecraft:gold_nugget', 0.2)
		], 'kubejs:cobbled_ochrum')
		
		event.recipes.create.crushing([
			CreateItem.of('create:crushed_raw_copper', 0.8),
			CreateItem.of('create:copper_nugget', 0.8)
		], 'kubejs:cobbled_veridium')
		
		event.recipes.create.crushing([
			CreateItem.of('create:crushed_raw_nickel', 0.36),
			CreateItem.of('create:crushed_raw_nickel', 0.04)
		], 'kubejs:cobbled_gabbro')
		
		event.recipes.create.crushing([
			CreateItem.of('create:crushed_raw_uranium', 0.05),
			CreateItem.of('create:crushed_raw_uranium', 0.00278)
		], 'kubejs:cobbled_breccia')
		
		event.recipes.create.crushing([
			CreateItem.of('kubejs:fine_nickel_powder', 1.0)
		], 'tfmg:nickel_ingot')		

		event.recipes.create.crushing([
			CreateItem.of('kubejs:fine_aluminum_powder', 1.0)
		], 'tfmg:aluminum_ingot')	

		event.recipes.create.crushing([
			CreateItem.of('create:crushed_raw_iron', 1.0),
			CreateItem.of('create:crushed_raw_iron', 0.1),
			CreateItem.of('create:experience_nugget', 0.75)
		], 'minecraft:raw_iron')

		event.recipes.create.crushing([
			CreateItem.of('9x create:crushed_raw_iron', 1.0),
			CreateItem.of('9x create:crushed_raw_iron', 0.1),
			CreateItem.of('9x create:experience_nugget', 0.75)
		], 'minecraft:raw_iron_block')
		
		event.recipes.create.crushing([
			CreateItem.of('create:crushed_raw_gold', 1.0),
			CreateItem.of('create:crushed_raw_gold', 0.1),
			CreateItem.of('2x create:experience_nugget', 0.75)
		], 'minecraft:raw_gold')

		event.recipes.create.crushing([
			CreateItem.of('9x create:crushed_raw_gold', 1.0),
			CreateItem.of('9x create:crushed_raw_gold', 0.1),
			CreateItem.of('18x create:experience_nugget', 0.75)
		], 'minecraft:raw_gold_block')
		
		event.recipes.create.crushing([
			CreateItem.of('create:crushed_raw_copper', 1.0),
			CreateItem.of('create:crushed_raw_copper', 0.1),
			CreateItem.of('create:experience_nugget', 0.75)
		], 'minecraft:raw_copper')

		event.recipes.create.crushing([
			CreateItem.of('9x create:crushed_raw_copper', 1.0),
			CreateItem.of('9x create:crushed_raw_copper', 0.1),
			CreateItem.of('9x create:experience_nugget', 0.75)
		], 'minecraft:raw_copper_block')
		
		event.recipes.create.crushing([
			CreateItem.of('create:crushed_raw_zinc', 1.0),
			CreateItem.of('create:crushed_raw_zinc', 0.1),
			CreateItem.of('create:experience_nugget', 0.75)
		], 'create:raw_zinc')

		event.recipes.create.crushing([
			CreateItem.of('9x create:crushed_raw_zinc', 1.0),
			CreateItem.of('9x create:crushed_raw_zinc', 0.1),
			CreateItem.of('9x create:experience_nugget', 0.75)
		], 'create:raw_zinc_block')
		
		event.recipes.create.crushing([
			CreateItem.of('create:crushed_raw_lead', 1.0),
			CreateItem.of('create:crushed_raw_lead', 0.1),
			CreateItem.of('create:experience_nugget', 0.75)
		], 'tfmg:raw_lead')

		event.recipes.create.crushing([
			CreateItem.of('9x create:crushed_raw_lead', 1.0),
			CreateItem.of('9x create:crushed_raw_lead', 0.1),
			CreateItem.of('9x create:experience_nugget', 0.75)
		], 'tfmg:raw_lead_block')
		
		event.recipes.create.crushing([
			CreateItem.of('create:crushed_raw_nickel', 1.0),
			CreateItem.of('create:crushed_raw_nickel', 0.1),
			CreateItem.of('create:experience_nugget', 0.75)
		], 'tfmg:raw_nickel')

		event.recipes.create.crushing([
			CreateItem.of('9x create:crushed_raw_nickel', 1.0),
			CreateItem.of('9x create:crushed_raw_nickel', 0.1),
			CreateItem.of('9x create:experience_nugget', 0.75)
		], 'tfmg:raw_nickel_block')
		
		event.recipes.create.crushing([
			CreateItem.of('tfmg:crushed_raw_lithium', 1.0),
			CreateItem.of('tfmg:crushed_raw_lithium', 0.1),
			CreateItem.of('create:experience_nugget', 0.75)
		], 'tfmg:raw_lithium')

		event.recipes.create.crushing([
			CreateItem.of('9x tfmg:crushed_raw_lithium', 1.0),
			CreateItem.of('9x tfmg:crushed_raw_lithium', 0.1),
			CreateItem.of('9x create:experience_nugget', 0.75)
		], 'tfmg:raw_lithium_block')
		
		event.recipes.create.crushing([
			//CreateItem.of('minecraft:flint', 0.250),     - Too many outputs, had to remove flint
			CreateItem.of('minecraft:iron_nugget', 0.100),
			CreateItem.of('tfmg:nickel_nugget', 0.090),
			CreateItem.of('create:copper_nugget', 0.070),
			CreateItem.of('create:zinc_nugget', 0.060),
			CreateItem.of('tfmg:lead_nugget', 0.030),
			CreateItem.of('kubejs:silver_nugget', 0.015),
			CreateItem.of('minecraft:gold_nugget', 0.010)
		], 'minecraft:tuff')
		
		//event.recipes.create.crushing([
		//	CreateItem.of('create:crushed_raw_uranium', 0.05),
		//	CreateItem.of('create:crushed_raw_uranium', 0.00278)
		//], 'dndesires:breccia')
		
		//event.recipes.create.crushing([
		//	CreateItem.of('create:crushed_raw_nickel', 0.025),
		//	CreateItem.of('create:crushed_raw_nickel', 0.001389)
		//], 'dndecor:gabbro')
		
		event.recipes.create.crushing([
			CreateItem.of('minecraft:bone_meal', 0.125),
			CreateItem.of('minecraft:quartz', 0.125)
		], 'dndecor:dolomite')
		
		event.recipes.create.crushing([
			CreateItem.of('minecraft:bone_meal', 0.05),
			CreateItem.of('minecraft:quartz', 0.20)
		], 'minecraft:diorite')
		
		event.recipes.create.crushing([
			CreateItem.of('minecraft:bone_meal', 0.05),
			CreateItem.of('minecraft:quartz', 0.20)
		], Ingredient.of('#create:stone_types/diorite', 1))
		
		event.recipes.create.crushing([
			CreateItem.of('kubejs:quartz_powder', 1),
			CreateItem.of('kubejs:quartz_powder', 0.25)
		], 'minecraft:quartz')

	//Create Mechanical Crafter Recipes
	
		event.recipes.create.mechanical_crafting('crowns:turbine_stage', [
			'N N N',
			' NSN ',
			'NSWSN',
			' NSN ',
			'N N N'
		], {
			N: 'kubejs:nickel_aluminide_sheet',
			S: 'tfmg:steel_ingot',
			W: 'create:windmill_bearing'
		})
		
		event.recipes.create.mechanical_crafting('crowns:heat_exchanger', [
			' N ',
			'NSN',
			' N '
		], {
			N: 'kubejs:nickel_aluminide_sheet',
			S: 'tfmg:steel_pipe'
		})
			
		event.recipes.create.mechanical_crafting('crowns:steam_input', [
			' S ',
			'HMH',
			' S '
		], {
			S: 'tfmg:steel_pipe',
			M: 'tfmg:heavy_machinery_casing',
			H: 'tfmg:heavy_plate'
		})

		event.recipes.create.mechanical_crafting('crowns:steam_collector', [
			' S ',
			'NMN',
			' S '
		], {
			S: 'tfmg:steel_pipe',
			M: 'tfmg:heavy_machinery_casing',
			N: 'kubejs:nickel_aluminide_sheet'
		})

		event.recipes.create.mechanical_crafting('crowns:compressor', [
			' N ',
			'SSS',
			' N '
		], {
			N: 'kubejs:nickel_aluminide_sheet',
			S: 'tfmg:steel_mechanical_pump'
		})

		event.recipes.create.mechanical_crafting('kubejs:potent_uranium_fuel_rod', [
			'HUH',
			'HUH',
			'HUH'
		], {
			H: 'tfmg:heavy_plate',
			U: 'kubejs:uranium_pellets'
		})
		
		event.recipes.create.mechanical_crafting('kubejs:weak_uranium_fuel_rod', [
			'H H',
			'HUH',
			'H H'
		], {
			H: 'tfmg:heavy_plate',
			U: 'kubejs:uranium_pellets'
		})

		/*event.recipes.create.mechanical_crafting('crowns:fuel_assembly', [
			'HHHHH',
			'HUCUH',
			'HUAUH',
			'HUCUH',
			'HHHHH'
		], {
			H: 'tfmg:heavy_plate',
			U: 'kubejs:uranium_fuel_rod',
			C: 'tfmg:circuit_board',
			A: 'kubejs:advanced_circuit_board'
		})*/
		
		event.custom({
			"type": "create:mechanical_crafting",
			"accept_mirrored": false,
			"category": "misc",
			"key": {
				"H": {
					"item": "tfmg:heavy_plate",
				},
				//"P": {
				//	"item": "kubejs:potent_uranium_fuel_rod",
				//},
				"W": {
					"item": "kubejs:weak_uranium_fuel_rod",
				},
				"C": {
					"item": "tfmg:circuit_board",
				},
				"A": {
					"item": "kubejs:advanced_circuit_board",
				}
			},
			"pattern": [
				"HHHHH",
				"HWCWH",
				"HWAWH",
				"HWCWH",
				"HHHHH"
			],
			"result": {
				"id": "crowns:fuel_assembly",
				"components": {
					"minecraft:custom_data": {
						"composition": {
							"crowns:u235": 0.001953125,
							"crowns:u238": 0.248046875
						}
					}
				},
				"count": 1
			}
		})
		
		event.custom({
			"type": "create:mechanical_crafting",
			"accept_mirrored": false,
			"category": "misc",
			"key": {
				"H": {
					"item": "tfmg:heavy_plate",
				},
				"P": {
					"item": "kubejs:potent_uranium_fuel_rod",
				},
				"W": {
					"item": "kubejs:weak_uranium_fuel_rod",
				},
				"C": {
					"item": "tfmg:circuit_board",
				},
				"A": {
					"item": "kubejs:advanced_circuit_board",
				}
			},
			"pattern": [
				"HHHHH",
				"HWCWH",
				"HPAPH",
				"HWCWH",
				"HHHHH"
			],
			"result": {
				"id": "crowns:fuel_assembly",
				"components": {
					"minecraft:custom_data": {
						"composition": {
							"crowns:u235": 0.046875,
							"crowns:u238": 0.203125
						}
					}
				},
				"count": 1
			}
		})
		
		event.custom({
			"type": "create:mechanical_crafting",
			"accept_mirrored": false,
			"category": "misc",
			"key": {
				"H": {
					"item": "tfmg:heavy_plate",
				},
				"P": {
					"item": "kubejs:potent_uranium_fuel_rod",
				},
				//"W": {
				//	"item": "kubejs:weak_uranium_fuel_rod",
				//},
				"C": {
					"item": "tfmg:circuit_board",
				},
				"A": {
					"item": "kubejs:advanced_circuit_board",
				}
			},
			"pattern": [
				"HHHHH",
				"HPCPH",
				"HPAPH",
				"HPCPH",
				"HHHHH"
			],
			"result": {
				"id": "crowns:fuel_assembly",
				"components": {
					"minecraft:custom_data": {
						"composition": {
							"crowns:u235": 0.21875,
							"crowns:u238": 0.03125
						}
					}
				},
				"count": 1
			}
		})
	
	//Stonecutting
	
		event.stonecutting('2x railways:link_and_pin', 'minecraft:iron_ingot')
		event.stonecutting('2x railways:small_buffer', 'minecraft:iron_ingot')
		event.stonecutting('railways:big_buffer', 'minecraft:iron_ingot')
		
	//Smoking
	
		event.smoking('biomesoplenty:dead_sapling', 'minecraft:oak_sapling')
		event.smoking('biomesoplenty:dead_branch', 'minecraft:stick')
		event.smoking('biomesoplenty:desert_grass', 'minecraft:short_grass')
		

	//Chemical Vat recipes
	
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"ingredients": [
				{
					"item": "create:crushed_raw_uranium"
				},
				{
					"item": "create:crushed_raw_uranium"
				},
				{
					"item": "create:crushed_raw_uranium"
				},
				{
					"type": "neoforge:single",
					"amount": 1000,
					"fluid": "kubejs:hydrochloric_acid"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 200,
			"results": [
				{
					"count": 2,
					"id": "kubejs:yellowcake_uranium_powder"
				}
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"ingredients": [
				{
					"item": "create:crushed_raw_uranium"
				},
				{
					"item": "create:crushed_raw_uranium"
				},
				{
					"item": "create:crushed_raw_uranium"
				},
				{
					"type": "neoforge:single",
					"amount": 1000,
					"fluid": "tfmg:sulfuric_acid"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 300,
			"results": [
				{
					"count": 2,
					"id": "kubejs:yellowcake_uranium_powder"
				}
			]
		})

		

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 1000,
					"fluid": "kubejs:treated_water"
				}
			],
			"machines": [
				"tfmg:electrode",
				"tfmg:electrode"
			],
			"min_size": 1,
			"processing_time": 100,
			"results": [
				{
					"amount": 300,
					"id": "kubejs:oxygen"
				},
				{
					"amount": 600,
					"id": "tfmg:hydrogen"
				}
			]
		})

		

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 200,
					"fluid": "tfmg:heavy_oil"
				},
				{
					"type": "neoforge:single",
					"amount": 120,
					"fluid": "tfmg:hydrogen"
				},
			],
			"min_size": 1,
			"processing_time": 100,
			"results": [
				{
					"amount": 40,
					"id": "tfmg:heavy_oil"
				},
				{
					"count": 1,
					"id": "tfmg:sulfur_dust"
				}
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"ingredients": [
				{
					"item": "kubejs:fine_aluminum_powder"
				},
				{
					"item": "kubejs:fine_nickel_powder"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 20,
			"results": [
				{
					"count": 2,
					"id": "kubejs:fine_nickel_aluminide_powder"
				}
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"item": "create:asurine"
				},
				{
					"item": "minecraft:quartz"
				},
				{
					"type": "neoforge:single",
					"amount": 1000,
					"fluid": "tfmg:sulfuric_acid"
				},
				{
					"item": "minecraft:amethyst_shard"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"count": 8,
					"id": "ae2:certus_quartz_crystal"
				}
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"item": "create:asurine"
				},
				{
					"item": "minecraft:quartz"
				},
				{
					"type": "neoforge:single",
					"amount": 1000,
					"fluid": "kubejs:hydrochloric_acid"
				},
				{
					"item": "minecraft:amethyst_shard"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"count": 8,
					"id": "ae2:certus_quartz_crystal"
				}
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 150,
					"fluid": "kubejs:polyethylene_glycol"
				}
			],
			"machines": [
				"tfmg:centrifuge"
			],
			"min_size": 1,
			"processing_time": 200,
			"results": [
				{
					"count": 50,
					"id": "ae2:matter_ball"
				}
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "minecraft:water"
				},
				{
					"type": "neoforge:single",
					"amount": 300,
					"fluid": "kubejs:ethylene_oxide"
				},
				{
					"item": "kubejs:sodium_hydroxide"
				},
				{
					"item": "kubejs:sodium_hydroxide"
				}
			],
			"min_size": 1,
			"processing_time": 120,
			"results": [
				{
					"amount": 450,
					"id": "kubejs:polyethylene_glycol"
				}
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "minecraft:water"
				},
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "kubejs:chlorine"
				},
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "tfmg:hydrogen"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 300,
					"id": "kubejs:hydrochloric_acid"
				}
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "minecraft:water"
				},
				{
					"type": "neoforge:single",
					"amount": 200,
					"fluid": "kubejs:hydrogen_chloride"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 300,
					"id": "kubejs:hydrochloric_acid"
				}
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 1000,
					"fluid": "kubejs:salt_water"
				}
			],
			"machines": [
				"tfmg:electrode",
				"tfmg:electrode"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 400,
					"id": "kubejs:chlorine"
				},
				{
					"amount": 200,
					"id": "tfmg:hydrogen"
				},
				{
					"count": 3,
					"id": "kubejs:sodium_hydroxide"
				}
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 300,
					"fluid": "tfmg:carbon_dioxide"
				},
				{
					"type": "neoforge:single",
					"amount": 200,
					"fluid": "tfmg:hydrogen"
				},
				{
					"item": "create:copper_sheet"
				}
			],
			"machines": [
				"tfmg:electrode",
				"tfmg:electrode"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 200,
					"id": "kubejs:oxygen"
				},
				{
					"amount": 300,
					"id": "tfmg:ethylene"
				},
				{
					"chance": 1,
					"count": 1,
					"id": "create:copper_sheet"
				}
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 200,
					"fluid": "kubejs:oxygen"
				},
				{
					"type": "neoforge:single",
					"amount": 300,
					"fluid": "tfmg:ethylene"
				},
				{
					"item": "kubejs:aluminum_silver_catalyst"
				}
			],
			"machines": [
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 500,
					"id": "kubejs:ethylene_oxide"
				},
				{
					"chance": 1,
					"count": 1,
					"id": "kubejs:aluminum_silver_catalyst"
				}
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"ingredients": [
				{
					"item": "kubejs:brine_salt"
				}
			],
			"machines": [
				"tfmg:centrifuge"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"count": 1,
					"id": "kubejs:synthetic_lithium_powder"
				}
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"item": "kubejs:synthetic_lithium_powder"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 7,
					"id": "kubejs:synthetic_lithium_solution"
				}
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"item": "kubejs:sodium_hydroxide"
				},
				{
					"item": "kubejs:sodium_hydroxide"
				},
				{
					"item": "kubejs:sodium_hydroxide"
				}
			],
			"machines": [
				"tfmg:electrode",
				"tfmg:electrode"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 144,
					"id": "kubejs:molten_sodium"
				},
				{
					"amount": 100,
					"id": "kubejs:oxygen"
				},
				{
					"amount": 100,
					"id": "tfmg:hydrogen"
				}
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"item": "kubejs:sodium"
				},
				{
					"item": "tfmg:lead_ingot"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 288,
					"id": "kubejs:molten_sodium_lead_alloy"
				}
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 144,
					"fluid": "kubejs:molten_sodium"
				},
				{
					"type": "neoforge:single",
					"amount": 144,
					"fluid": "kubejs:molten_lead"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 288,
					"id": "kubejs:molten_sodium_lead_alloy"
				}
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 100,					
					"fluid": "kubejs:chlorine"
				},
				{
					"type": "neoforge:single",
					"amount": 100,					
					"fluid": "tfmg:hydrogen"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 40,
			"results": [
				{
					"amount": 200,
					"id": "kubejs:hydrogen_chloride"
				}
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 100,					
					"fluid": "kubejs:hydrogen_chloride"
				},
				{
					"type": "neoforge:single",
					"amount": 100,					
					"fluid": "tfmg:ethylene"
				},
				{
					"type": "neoforge:single",
					"amount": 50,					
					"fluid": "kubejs:chlorine"
				},
				{
					"count": 1,
					"item": "tfmg:aluminum_sheet"
				}	
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 200,
					"id": "kubejs:ethyl_chloride"
				},
				{
					"count": 1,
					"id": "tfmg:aluminum_sheet"
				}				
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{				
					"item": "kubejs:sodium_lead_alloy"
				},
				{				
					"item": "kubejs:sodium_lead_alloy"
				},
				{				
					"item": "kubejs:sodium_lead_alloy"
				},
				{				
					"item": "kubejs:sodium_lead_alloy"
				},
				{
					"type": "neoforge:single",
					"amount": 400,
					"fluid": "kubejs:ethyl_chloride"
				}
			],
			"min_size": 1,
			"processing_time": 160,
			"results": [
				{
					"amount": 250,
					"id": "kubejs:tetraethyllead"
				},
				{
					"amount": 288,
					"id": "kubejs:molten_sodium"
				},
				{
					"amount": 200,
					"id": "kubejs:chlorine"
				},
				{
					"amount": 216,
					"id": "kubejs:molten_lead"
				}				
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 576,					
					"fluid": "kubejs:molten_sodium_lead_alloy"
				},
				{
					"type": "neoforge:single",
					"amount": 400,
					"fluid": "kubejs:ethyl_chloride"
				}
			],
			"min_size": 1,
			"processing_time": 160,
			"results": [
				{
					"amount": 250,
					"id": "kubejs:tetraethyllead"
				},
				{
					"amount": 288,
					"id": "kubejs:molten_sodium"
				},
				{
					"amount": 200,
					"id": "kubejs:chlorine"
				},
				{
					"amount": 216,
					"id": "kubejs:molten_lead"
				}				
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 100,					
					"fluid": "tfmg:gasoline"
				},
				{
					"type": "neoforge:single",
					"amount": 15,					
					"fluid": "kubejs:tetraethyllead"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 115,
					"id": "kubejs:single_additive_fuel"
				}
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 100,					
					"fluid": "tfmg:kerosene"
				},
				{
					"type": "neoforge:single",
					"amount": 30,					
					"fluid": "kubejs:tetraethyllead"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 130,
					"id": "kubejs:double_additive_stage_1"
				}
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 100,					
					"fluid": "tfmg:naphtha"
				},
				{
					"type": "neoforge:single",
					"amount": 45,					
					"fluid": "kubejs:tetraethyllead"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 145,
					"id": "kubejs:triple_additive_stage_1"
				}
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 100,					
					"fluid": "kubejs:double_additive_stage_1"
				},
				{
					"type": "neoforge:single",
					"amount": 15,					
					"fluid": "tfmg:cooling_fluid"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 115,
					"id": "kubejs:double_additive_fuel"
				}
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 100,					
					"fluid": "kubejs:triple_additive_stage_1"
				},
				{
					"type": "neoforge:single",
					"amount": 30,					
					"fluid": "tfmg:cooling_fluid"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 130,
					"id": "kubejs:triple_additive_stage_2"
				}
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 100,					
					"fluid": "kubejs:triple_additive_stage_2"
				},
				{
					"type": "neoforge:single",
					"amount": 15,					
					"fluid": "kubejs:oxygen"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 115,
					"id": "kubejs:triple_additive_fuel"
				}
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"ingredients": [
				{
					"item": "minecraft:coarse_dirt"
				}
			],
			"machines": [
				"tfmg:centrifuge"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"chance": 0.90,
					"count": 1,
					"id": "minecraft:dirt"
				},
				{
					"chance": 0.10,
					"count": 1,
					"id": "minecraft:gravel"
				},
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 500,					
					"fluid": "tfmg:naphtha"
				},
				{
					"type": "neoforge:single",
					"amount": 250,					
					"fluid": "minecraft:water"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 250,
					"id": "tfmg:propylene"
				},
				{
					"amount": 250,
					"id": "tfmg:ethylene"
				},
				{
					"amount": 125,
					"id": "minecraft:water"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"ingredients": [
				{
					"item": "minecraft:coal"
				},
				{
					"item": "minecraft:coal"
				},
				{
					"item": "minecraft:coal"
				},
				{
					"item": "kubejs:sodium_hydroxide"
				},
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "minecraft:water"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"count": 3,
					"id": "kubejs:welsh_coal"
				},
				{
					"chance": 0.20,
					"count": 1,
					"id": "tfmg:sulfur_dust"
				},
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"item": "minecraft:tuff"
				},
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "kubejs:hydrochloric_acid"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"type": "neoforge:single",
					"amount": 500,
					"id": "kubejs:tuff_mineral_slurry"
				}
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"item": "biomesoplenty:flesh"
				},
				{
					"type": "neoforge:single",
					"amount": 200,
					"fluid": "biomesoplenty:blood"
				},
				{
					"type": "neoforge:single",
					"amount": 50,
					"fluid": "minecraft:water"
				}
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"chance": 1,
					"count": 2,
					"id": "biomesoplenty:porous_flesh"
				},
				{
					"type": "neoforge:single",
					"amount": 200,
					"id": "biomesoplenty:blood"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"item": "biomesoplenty:porous_flesh"
				},
				{
					"item": "biomesoplenty:porous_flesh"
				},
				{
					"item": "createaddition:biomass"
				},
				{
					"item": "createaddition:biomass"
				}
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"id": "biomesoplenty:blood"
				},
				{
					"chance": 1,
					"count": 2,
					"id": "biomesoplenty:flesh"
				}
			]
		})
		
		
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:firebrick_lined_vat",
				"tfmg:steel_vat"
			],
			"ingredients": [
				{
					"item": "kubejs:advanced_coated_circuit_board"
				},
				{
					"type": "neoforge:single",
					"amount": 250,
					"fluid": "kubejs:hydrochloric_acid"
				}
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"id": "kubejs:advanced_etched_circuit_board"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:firebrick_lined_vat",
				"tfmg:steel_vat"
			],
			"ingredients": [
				{
					"item": "kubejs:coated_motherboard"
				},
				{
					"type": "neoforge:single",
					"amount": 250,
					"fluid": "kubejs:hydrochloric_acid"
				}
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"id": "kubejs:etched_motherboard"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:firebrick_lined_vat",
				"tfmg:steel_vat"
			],
			"heat_requirement": "superheated",
			"ingredients": [
				{
					"item": "tfmg:bauxite_powder"
				},
				{
					"item": "tfmg:bauxite_powder"
				},
				{
					"item": "kubejs:sodium_hydroxide"
				},
				{
					"type": "neoforge:single",
					"amount": 250,
					"fluid": "kubejs:hydrochloric_acid"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"type": "neoforge:single",
					"amount": 250,
					"id": "kubejs:alumina_solution"
				},
				{
					"type": "neoforge:single",
					"amount": 18,
					"id": "kubejs:molten_sodium"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:firebrick_lined_vat",
				"tfmg:steel_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 250,
					"fluid": "kubejs:alumina_solution"
				},
			],
			"machines": [
				"tfmg:electrode",
				"tfmg:electrode"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"type": "neoforge:single",
					"amount": 144,
					"id": "kubejs:molten_aluminum"
				},
				{
					"type": "neoforge:single",
					"amount": 72,
					"id": "tfmg:molten_slag"
				},
				{
					"type": "neoforge:single",
					"amount": 20,
					"id": "kubejs:oxygen"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "superheated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 1000,
					"fluid": "kubejs:salt_water"
				}
			],
			"machines": [
				"tfmg:centrifuge"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"count": 4,
					"id": "kubejs:brine_salt"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 175,
					"fluid": "tfmg:molten_plastic"
				},
				{
					"type": "neoforge:single",
					"amount": 25,
					"fluid": "kubejs:polyethylene_glycol"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 200,
					"id": "kubejs:improved_molten_plastic"
				}
			]
		})
		
	//Uranium Processing
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:firebrick_lined_vat",
				"tfmg:steel_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 1000,
					"fluid": "kubejs:salt_water"
				},
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"type": "neoforge:single",
					"amount": 400,
					"id": "kubejs:oxygen"
				},
				{
					"type": "neoforge:single",
					"amount": 200,
					"id": "tfmg:hydrogen"
				},
				{
					"count": 3,
					"id": "kubejs:potassium_chloride"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:firebrick_lined_vat",
				"tfmg:steel_vat"
			],
			"ingredients": [
				{
					"item": "kubejs:potassium_chloride"
				},
				{
					"item": "kubejs:potassium_chloride"
				},
				{
					"type": "neoforge:single",
					"amount": 150,
					"fluid": "minecraft:water"
				},
			],
			"machines": [
				"tfmg:electrode",
				"tfmg:electrode"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"type": "neoforge:single",
					"amount": 50,
					"id": "kubejs:chlorine"
				},
				{
					"type": "neoforge:single",
					"amount": 100,
					"id": "kubejs:hydrogen_chloride"
				},
				{
					"count": 2,
					"id": "kubejs:potassium_hydroxide"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:firebrick_lined_vat",
				"tfmg:steel_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 50,
					"fluid": "tfmg:carbon_dioxide"
				},
				{
					"item": "kubejs:potassium_hydroxide"
				},
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"type": "neoforge:single",
					"amount": 25,
					"id": "minecraft:water"
				},
				{
					"count": 2,
					"id": "kubejs:potassium_carbonate"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:firebrick_lined_vat",
				"tfmg:steel_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 500,
					"fluid": "kubejs:hydrofluoric_acid"
				},
				{
					"item": "kubejs:potassium_carbonate"
				},
				{
					"item": "kubejs:potassium_carbonate"
				},
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"type": "neoforge:single",
					"amount": 200,
					"id": "kubejs:hydrogen_fluoride"
				},
				{
					"type": "neoforge:single",
					"amount": 50,
					"id": "tfmg:carbon_dioxide"
				},
				{
					"count": 2,
					"id": "kubejs:potassium_fluoride"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:firebrick_lined_vat",
				"tfmg:steel_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 400,
					"fluid": "kubejs:hydrogen_fluoride"
				},
				{
					"item": "kubejs:potassium_fluoride"
				},
				{
					"item": "kubejs:potassium_fluoride"
				}
			],
			"machines": [
				"tfmg:electrode",
				"tfmg:electrode"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"type": "neoforge:single",
					"amount": 200,
					"id": "tfmg:hydrogen"
				},
				{
					"type": "neoforge:single",
					"amount": 400,
					"id": "kubejs:fluorine"
				},
				{
					"count": 1,
					"id": "kubejs:potassium_fluoride"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"ingredients": [
				{
					"item": "kubejs:yellowcake_uranium_powder"
				},
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "kubejs:fluorine"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"type": "neoforge:single",
					"amount": 490,
					"id": "kubejs:uranium_hexafluoride"
				},
				{
					"type": "neoforge:single",
					"amount": 10,
					"id": "kubejs:enriched_uranium_hexafluoride"
				},
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 2,
					"fluid": "kubejs:uranium_hexafluoride"
				},
				{
					"type": "neoforge:single",
					"amount": 38,
					"fluid": "kubejs:enriched_uranium_hexafluoride"
				},
			],
			"machines": [
				"tfmg:centrifuge"
			],
			"min_size": 1,
			"processing_time": 40,
			"results": [
				{
					"type": "neoforge:single",
					"amount": 40,
					"id": "kubejs:enriched_uranium_hexafluoride"
				},
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "superheated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 200,
					"fluid": "minecraft:water"
				},
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "kubejs:enriched_uranium_hexafluoride"
				},
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"id": "kubejs:hydrogen_fluoride"
				},
				{
					"count": 1,
					"id": "kubejs:uranium_dioxide"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 700,
					"fluid": "tfmg:sulfuric_acid"
				},
				{
					"item": "kubejs:calcium_fluoride"
				},
				{
					"item": "kubejs:calcium_fluoride"
				},
				{
					"item": "kubejs:calcium_fluoride"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"type": "neoforge:single",
					"amount": 400,
					"id": "kubejs:hydrogen_fluoride"
				},
				{
					"type": "neoforge:single",
					"amount": 400,
					"id": "kubejs:oxygen"
				},
				{
					"chance": 0.5,
					"count": 1,
					"id": "tfmg:sulfur_dust"
				},
				{
					"chance": 0.5,
					"count": 1,
					"id": "natures_spirit:calcite_shard"
				},
				{
					"chance": 0.25,
					"count": 1,
					"id": "natures_spirit:calcite_shard"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "minecraft:water"
				},
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "kubejs:fluorine"
				},
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "tfmg:hydrogen"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 300,
					"id": "kubejs:hydrofluoric_acid"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "minecraft:water"
				},
				{
					"type": "neoforge:single",
					"amount": 200,
					"fluid": "kubejs:hydrogen_fluoride"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 300,
					"id": "kubejs:hydrofluoric_acid"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"item": "minecraft:calcite"
				},
				{
					"item": "minecraft:calcite"
				},
				{
					"item": "minecraft:calcite"
				},
				{
					"item": "minecraft:calcite"
				},
				{
					"type": "neoforge:single",
					"amount": 1000,
					"fluid": "kubejs:hydrochloric_acid"
				}
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 200,
					"id": "tfmg:carbon_dioxide"
				},
				{
					"count": 3,
					"id": "kubejs:calcium_fluoride"
				},
				{
					"chance": 0.25,
					"count": 1,
					"id": "natures_spirit:calcite_shard"
				}
			]
		})
		
	//Advanced Crude Oil Processing
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "superheated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 250,
					"fluid": "tfmg:crude_oil"
				}
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 250,
					"id": "kubejs:superheated_crude_oil"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 150,
					"fluid": "kubejs:treated_water"
				},
				{
					"type": "neoforge:single",
					"amount": 200,
					"fluid": "kubejs:superheated_crude_oil"
				},
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 350,
					"id": "kubejs:crude_oil_emulsion"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 150,
					"fluid": "kubejs:crude_oil_emulsion"
				}
			],
			"machines": [
				"tfmg:electrode",
				"tfmg:electrode"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 140,
					"id": "kubejs:treated_crude_oil"
				},
				{
					"amount": 10,
					"id": "kubejs:waste_water"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "minecraft:water"
				}
			],
			"machines": [
				"tfmg:centrifuge"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 95,
					"id": "kubejs:treated_water"
				},
				{
					"amount": 5,
					"id": "kubejs:mineral_sludge"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "kubejs:waste_water"
				}
			],
			"machines": [
				"tfmg:centrifuge"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 95,
					"id": "kubejs:treated_water"
				},
				{
					"amount": 5,
					"id": "kubejs:residual_fuel_oil"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "kubejs:mineral_sludge"
				},
				{
					"item": "minecraft:tuff"
				},
			],
			"machines": [
				"tfmg:centrifuge"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 95,
					"id": "kubejs:treated_water"
				},
				{
					"amount": 5,
					"id": "kubejs:tuff_mineral_slurry"
				},
				{
					"id": "minecraft:tuff"
				},
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 115,
					"fluid": "kubejs:residual_fuel_oil"
				},
				{
					"type": "neoforge:single",
					"amount": 5,
					"fluid": "tfmg:naphtha"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 120,
					"id": "tfmg:heavy_oil"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 110,
					"fluid": "kubejs:residual_fuel_oil"
				},
				{
					"type": "neoforge:single",
					"amount": 10,
					"fluid": "tfmg:kerosene"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 120,
					"id": "tfmg:heavy_oil"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 200,
					"fluid": "tfmg:lpg"
				}
			],
			"machines": [
				"tfmg:centrifuge"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 100,
					"id": "tfmg:propane"
				},
				{
					"amount": 100,
					"id": "tfmg:butane"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "tfmg:propane"
				},
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "tfmg:butane"
				}
			],
			"machines": [
				"tfmg:mixing"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 200,
					"id": "tfmg:lpg"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 110,
					"fluid": "tfmg:propane"
				},
				{
					"item": "create:golden_sheet"
				},
			],
			"machines": [
				"tfmg:centrifuge"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 20,
					"id": "tfmg:hydrogen"
				},
				{
					"amount": 90,
					"id": "tfmg:propylene"
				},
				{
					"id": "create:golden_sheet"
				},
			]
		})
		
		//AE2
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "minecraft:water"
				},
				{
					"item": "ae2:certus_quartz_dust"
				},
				{
					"item": "kubejs:quartz_plate"
				}
			],
			"machines": [
				"tfmg:electrode",
				"tfmg:electrode"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"id": "kubejs:certus_quartz_plate"
				},
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "minecraft:water"
				},
				{
					"item": "ae2:fluix_dust"
				},
				{
					"item": "kubejs:charged_certus_quartz_plate"
				}
			],
			"machines": [
				"tfmg:electrode",
				"tfmg:electrode"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"id": "kubejs:fluix_crystal_plate"
				},
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "minecraft:water"
				},
				{
					"item": "ae2:fluix_dust"
				},
				{
					"item": "minecraft:ender_pearl"
				}
			],
			"machines": [
				"tfmg:electrode",
				"tfmg:electrode"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"id": "ae2:fluix_pearl"
				},
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"item": "minecraft:redstone"
				},
				{
					"item": "ae2:charged_certus_quartz_crystal"
				},
				{
					"item": "createaddition:electrum_ingot"
				}
			],
			"machines": [
				"tfmg:electrode",
				"tfmg:electrode"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"id": "ae2:fluix_crystal"
				},
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "minecraft:water"
				},
				{
					"item": "minecraft:redstone"
				},
				{
					"item": "createaddition:electrum_sheet"
				}
			],
			"machines": [
				"tfmg:electrode",
				"tfmg:electrode"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"id": "kubejs:redstone_coated_plate"
				},
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "minecraft:water"
				},
				{
					"item": "ae2:ender_dust"
				},
				{
					"item": "createaddition:electrum_sheet"
				}
			],
			"machines": [
				"tfmg:electrode",
				"tfmg:electrode"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"id": "kubejs:ender_coated_plate"
				},
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "minecraft:water"
				},
				{
					"item": "ae2:fluix_dust"
				},
				{
					"item": "ae2:quartz_fiber"
				},
				{
					"item": "ae2:quartz_fiber"
				}
			],
			"machines": [
				"tfmg:electrode",
				"tfmg:electrode"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"count": 2,
					"id": "ae2:fluix_glass_cable"
				},
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "minecraft:water"
				},
				{
					"item": "minecraft:redstone"
				},
				{
					"item": "minecraft:glowstone_dust"
				},
				{
					"item": "ae2:fluix_covered_cable"
				},
				{
					"item": "ae2:fluix_covered_cable"
				}
			],
			"machines": [
				"tfmg:electrode",
				"tfmg:electrode"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"count": 2,
					"id": "ae2:fluix_smart_cable"
				},
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "minecraft:water"
				},
				{
					"item": "minecraft:redstone"
				},
				{
					"item": "minecraft:glowstone_dust"
				},
				{
					"item": "ae2:fluix_covered_dense_cable"
				},
				{
					"item": "ae2:fluix_covered_dense_cable"
				}
			],
			"machines": [
				"tfmg:electrode",
				"tfmg:electrode"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"count": 2,
					"id": "ae2:fluix_smart_dense_cable"
				},
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "tfmg:sulfuric_acid"
				},
				{
					"item": "tfmg:coal_coke_block"
				}
			],
			"machines": [
				"tfmg:centrifuge"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 500,
					"id": "kubejs:condensed_carbon_mixture"
				},
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "kubejs:hydrochloric_acid"
				},
				{
					"item": "tfmg:coal_coke_block"
				}
			],
			"machines": [
				"tfmg:centrifuge"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 500,
					"id": "kubejs:condensed_carbon_mixture"
				},
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:steel_vat",
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "heated",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 100,
					"fluid": "minecraft:water"
				},
				{
					"item": "ae2:certus_quartz_dust"
				},
				{
					"item": "minecraft:glass"
				}
			],
			"machines": [
				"tfmg:electrode",
				"tfmg:electrode"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"count": 1,
					"id": "ae2:quartz_glass"
				},
			]
		})
	
	//AE2 Certus Quartz Plate Charging
	
		event.custom({
			"type": "ae2:charger",
			"ingredient": {
				"item": "kubejs:certus_quartz_plate"
			},
			"result": {
				"count": 1,
				"id": "kubejs:charged_certus_quartz_plate"
			}
		})
		
		event.custom({
			"type": "createaddition:charging",
			"ingredients": [
				{
					"item": "kubejs:certus_quartz_plate"
				}
			],
			"energy": 10000,
			"max_charge_rate": 200,
			"results": [
				{
					"id": "kubejs:charged_certus_quartz_plate"
				}
			]
		})
				
	
	//Mechanical Extruders
	
		event.recipes.create_mechanical_extruder.extruding(Item.of('create:asurine'), [BlockPredicate.of('minecraft:lava'), BlockPredicate.of('kubejs:tuff_mineral_slurry')])
			.catalyst(BlockPredicate.of('create:asurine'))
			.advanced(true)
			//.consumeBlocks(true)
				.requirements(
					[
						//RecipeRequirement.maxSpeed(32.0)
					]
		)
		
		event.recipes.create_mechanical_extruder.extruding(Item.of('create:crimsite'), [BlockPredicate.of('minecraft:lava'), BlockPredicate.of('kubejs:tuff_mineral_slurry')])
			.catalyst(BlockPredicate.of('create:crimsite'))
			.advanced(true)
			//.consumeBlocks(true)
				.requirements(
					[
						//RecipeRequirement.maxSpeed(32.0)
					]
		)
		
		event.recipes.create_mechanical_extruder.extruding(Item.of('create:veridium'), [BlockPredicate.of('minecraft:lava'), BlockPredicate.of('kubejs:tuff_mineral_slurry')])
			.catalyst(BlockPredicate.of('create:veridium'))
			.advanced(true)
			//.consumeBlocks(true)
				.requirements(
					[
						//RecipeRequirement.maxSpeed(32.0)
					]
		)
		
		event.recipes.create_mechanical_extruder.extruding(Item.of('create:ochrum'), [BlockPredicate.of('minecraft:lava'), BlockPredicate.of('kubejs:tuff_mineral_slurry')])
			.catalyst(BlockPredicate.of('create:ochrum'))
			.advanced(true)
			//.consumeBlocks(true)
				.requirements(
					[
						//RecipeRequirement.maxSpeed(32.0)
					]
		)
		
		event.recipes.create_mechanical_extruder.extruding(Item.of('dndesires:breccia'), [BlockPredicate.of('minecraft:lava'), BlockPredicate.of('kubejs:tuff_mineral_slurry')])
			.catalyst(BlockPredicate.of('dndesires:breccia'))
			.advanced(true)
			//.consumeBlocks(true)
				.requirements(
					[
						//RecipeRequirement.maxSpeed(32.0)
					]
		)
		
		event.recipes.create_mechanical_extruder.extruding(Item.of('tfmg:bauxite'), [BlockPredicate.of('minecraft:lava'), BlockPredicate.of('kubejs:tuff_mineral_slurry')])
			.catalyst(BlockPredicate.of('tfmg:bauxite'))
			.advanced(true)
			.consumeBlocks(true)
				.requirements(
					[
						RecipeRequirement.maxSpeed(32.0)
					]
		)
		
		event.recipes.create_mechanical_extruder.extruding(Item.of('tfmg:galena'), [BlockPredicate.of('minecraft:lava'), BlockPredicate.of('kubejs:tuff_mineral_slurry')])
			.catalyst(BlockPredicate.of('tfmg:galena'))
			.advanced(true)
			//.consumeBlocks(true)
				.requirements(
					[
						//RecipeRequirement.maxSpeed(32.0)
					]
		)
		
		event.recipes.create_mechanical_extruder.extruding(Item.of('minecraft:dripstone_block'), [BlockPredicate.of('minecraft:lava'), BlockPredicate.of('kubejs:tuff_mineral_slurry')])
			.catalyst(BlockPredicate.of('minecraft:dripstone_block'))
			.advanced(true)
			//.consumeBlocks(true)
				.requirements(
					[
						//RecipeRequirement.maxSpeed(32.0)
					]
		)
		
		event.recipes.create_mechanical_extruder.extruding(Item.of('minecraft:basalt'), [BlockPredicate.of('minecraft:lava'), BlockPredicate.of('minecraft:blue_ice')])
			.catalyst(BlockPredicate.of('minecraft:soul_soil'))
			.advanced(true)
				.requirements(
					[
						//RecipeRequirement.maxSpeed(32.0)
					]
		)
		
		event.recipes.create_mechanical_extruder.extruding(Item.of('minecraft:netherrack'), [BlockPredicate.of('minecraft:lava'), BlockPredicate.of('minecraft:blue_ice')])
			.advanced(true)
				.requirements(
					[
						RecipeRequirement.biomeTag('minecraft:is_nether')
						//RecipeRequirement.maxSpeed(32.0)
					]
		)
		
		event.recipes.create_mechanical_extruder.extruding(Item.of('minecraft:end_stone'), [BlockPredicate.of('minecraft:lava'), BlockPredicate.of('minecraft:blue_ice')])
			.advanced(true)
				.requirements(
					[
						RecipeRequirement.biomeTag('minecraft:is_end')
						//RecipeRequirement.maxSpeed(32.0)
					]
		)
		
		event.recipes.create_mechanical_extruder.extruding(Item.of('create:limestone'), [BlockPredicate.of('minecraft:lava'), BlockPredicate.of('create:honey')])
			.advanced(true)
				.requirements(
					[
						//RecipeRequirement.maxSpeed(32.0)
					]
		)
		
		event.recipes.create_mechanical_extruder.extruding(Item.of('minecraft:snow_block'), [BlockPredicate.of('minecraft:water'), BlockPredicate.of('minecraft:water')])
			.advanced(true)
				.requirements(
					[
						RecipeRequirement.minY(150),
						//RecipeRequirement.maxSpeed(32.0)
					]
		)
		
		event.recipes.create_mechanical_extruder.extruding(Item.of('minecraft:snow_block'), [BlockPredicate.of('minecraft:water'), BlockPredicate.of('minecraft:water')])
			.catalyst(BlockPredicate.of('minecraft:blue_ice'))
			.advanced(true)
				.requirements(
					[
						//RecipeRequirement.maxSpeed(32.0)
					]
		)
		
		event.recipes.create_mechanical_extruder.extruding(Item.of('minecraft:andesite'), [BlockPredicate.of('minecraft:water'), BlockPredicate.of('minecraft:lava')])
			.advanced(true)
				.requirements(
					[
						RecipeRequirement.minY(0),
						RecipeRequirement.maxY(60),
						//RecipeRequirement.maxSpeed(32.0)
					]
		)
		
		event.recipes.create_mechanical_extruder.extruding(Item.of('minecraft:granite'), [BlockPredicate.of('minecraft:water'), BlockPredicate.of('minecraft:lava')])
			.advanced(true)
				.requirements(
					[
						RecipeRequirement.minY(0),
						RecipeRequirement.maxY(60),
						//RecipeRequirement.maxSpeed(32.0)
					]
		)
		
		event.recipes.create_mechanical_extruder.extruding(Item.of('minecraft:diorite'), [BlockPredicate.of('minecraft:water'), BlockPredicate.of('minecraft:lava')])
			.advanced(true)
				.requirements(
					[
						RecipeRequirement.minY(0),
						RecipeRequirement.maxY(60),
						//RecipeRequirement.maxSpeed(32.0)
					]
		)
		
		event.recipes.create_mechanical_extruder.extruding(Item.of('minecraft:deepslate'), [BlockPredicate.of('minecraft:water'), BlockPredicate.of('minecraft:lava')])
			.advanced(true)
				.requirements(
					[
						RecipeRequirement.maxSpeed(16.0),
						RecipeRequirement.maxY(0),
						//RecipeRequirement.maxSpeed(32.0)
					]
		)
		
		event.recipes.create_mechanical_extruder.extruding(Item.of('minecraft:cobblestone'), [BlockPredicate.of('minecraft:water'), BlockPredicate.of('minecraft:lava')])
			.advanced(true)
				.requirements(
					[
						//RecipeRequirement.maxSpeed(32.0)
					]
		)
		
		event.recipes.create_mechanical_extruder.extruding(Item.of('minecraft:sandstone'), [BlockPredicate.of('minecraft:water'), BlockPredicate.of('minecraft:sand')])
			.advanced(true)
				.requirements(
					[
						//RecipeRequirement.maxSpeed(32.0)
					]
		)
		
		event.recipes.create_mechanical_extruder.extruding(Item.of('minecraft:obsidian'), [BlockPredicate.of('minecraft:water'), BlockPredicate.of('minecraft:lava')])
			.advanced(true)
				.requirements(
					[
						RecipeRequirement.maxSpeed(4.0),
						//RecipeRequirement.maxY(0),
						//RecipeRequirement.maxSpeed(32.0)
					]
		)
		
		event.recipes.create_mechanical_extruder.extruding(Item.of('create:scoria'), [BlockPredicate.of('minecraft:lava'), BlockPredicate.of('create:chocolate')])
			.advanced(true)
				.requirements(
					[
						//RecipeRequirement.maxSpeed(32.0)
					]
		)

	//Fireproof Chemical Vat (TFMG)
	
		const chemicalvatblastingoretypeCreate = [
		"iron",
		"gold",
		"copper",
		"zinc",
		"lead",
		"nickel"
		]
	
		for(const type of chemicalvatblastingoretypeCreate) {				
			event.custom({
				"type": "tfmg:vat_machine_recipe",
				"allowed_vat_types": [
					"tfmg:firebrick_lined_vat"
				],
				"ingredients": [
					{
						"item": `create:crushed_raw_${type}`
					}
				],
				"machines": [
					"tfmg:graphite_electrode",
					"tfmg:graphite_electrode",
					"tfmg:graphite_electrode"
				],
				"min_size": 1,
				"processing_time": 20,
				"results": [
					{
						"amount": 360,
						"id": `kubejs:molten_${type}`
					},
					{
						"amount": 288,
						"id": "tfmg:molten_slag"
					}
				]
			})
		}

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:firebrick_lined_vat"
			],
			"ingredients": [
				{
					"item": "kubejs:crushed_raw_silver"
				}
			],
			"machines": [
				"tfmg:graphite_electrode",
				"tfmg:graphite_electrode",
				"tfmg:graphite_electrode"
			],
			"min_size": 1,
			"processing_time": 20,
			"results": [
				{
					"amount": 360,
					"id": "kubejs:molten_silver"
				},
				{
					"amount": 288,
					"id": "tfmg:molten_slag"
				}
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:firebrick_lined_vat"
			],
			"ingredients": [
				{
					"item": "tfmg:crushed_raw_lithium"
				}
			],
			"machines": [
				"tfmg:graphite_electrode",
				"tfmg:graphite_electrode",
				"tfmg:graphite_electrode"
			],
			"min_size": 1,
			"processing_time": 20,
			"results": [
				{
					"amount": 360,
					"id": "kubejs:molten_lithium"
				},
				{
					"amount": 288,
					"id": "tfmg:molten_slag"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:firebrick_lined_vat"
			],
			"ingredients": [
				{
					"item": "kubejs:steel_blast_mixture"
				},
				{
					"item": "tfmg:coal_coke_dust"
				}
			],
			"machines": [
				"tfmg:graphite_electrode",
				"tfmg:graphite_electrode",
				"tfmg:graphite_electrode"
			],
			"min_size": 1,
			"processing_time": 20,
			"results": [
				{
					"amount": 216,
					"id": "tfmg:molten_steel"
				},
				{
					"amount": 144,
					"id": "tfmg:molten_slag"
				}
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:firebrick_lined_vat"
			],
			"ingredients": [
				{
					"item": "minecraft:netherite_scrap"
				},
				{
					"item": "minecraft:netherite_scrap"
				},
				{
					"item": "minecraft:gold_ingot"
				},
				{
					"item": "minecraft:gold_ingot"
				}
			],
			"machines": [
				"tfmg:graphite_electrode",
				"tfmg:graphite_electrode",
				"tfmg:graphite_electrode"
			],
			"min_size": 1,
			"processing_time": 20,
			"results": [
				{
					"amount": 144,
					"id": "kubejs:molten_netherite"
				},
				{
					"amount": 432,
					"id": "tfmg:molten_slag"
				}
			]
		})

		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:firebrick_lined_vat"
			],
			"ingredients": [
				{
					"item": "minecraft:netherite_scrap"
				},
				{
					"item": "minecraft:netherite_scrap"
				},
				{
					"type": "neoforge:single",
					"amount": 288,
					"fluid": "kubejs:molten_gold"
				}
			],
			"machines": [
				"tfmg:graphite_electrode",
				"tfmg:graphite_electrode",
				"tfmg:graphite_electrode"
			],
			"min_size": 1,
			"processing_time": 20,
			"results": [
				{
					"amount": 144,
					"id": "kubejs:molten_netherite"
				},
				{
					"amount": 432,
					"id": "tfmg:molten_slag"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:firebrick_lined_vat"
			],
			"ingredients": [
				{
					"item": "kubejs:fine_nickel_aluminide_powder"
				}
			],
			"machines": [
				"tfmg:graphite_electrode",
				"tfmg:graphite_electrode",
				"tfmg:graphite_electrode"
			],
			"min_size": 9,
			"processing_time": 40,
			"results": [
				{
					"id": "kubejs:nickel_aluminide_ingot"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:firebrick_lined_vat"
			],
			"ingredients": [
				{
					"count": 1,
					"item": "tfmg:silicon_ingot"
				},
				{
					"count": 1,
					"item": "ae2:certus_quartz_dust"
				}
			],
			"machines": [
				"tfmg:graphite_electrode",
				"tfmg:graphite_electrode",
				"tfmg:graphite_electrode"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 1,
					"id": "ae2:silicon"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:firebrick_lined_vat"
			],
			"ingredients": [
				{
					"count": 1,
					"item": "kubejs:quartz_powder"
				}
			],
			"machines": [
				"tfmg:graphite_electrode",
				"tfmg:graphite_electrode",
				"tfmg:graphite_electrode"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"amount": 60,
					"id": "tfmg:liquid_silicon"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "superheated",
			"ingredients": [
				{
					"item": "create:iron_sheet"
				},
				{
					"type": "neoforge:single",
					"amount": 1000,
					"fluid": "kubejs:tuff_mineral_slurry"
				}
			],
			"machines": [
				"tfmg:centrifuge"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"type": "neoforge:single",
					"amount": 424,
					"id": "tfmg:molten_slag"
				},
				{
					"type": "neoforge:single",
					"amount": 576,
					"id": "kubejs:molten_iron"
				},
				{
					"id": "create:iron_sheet"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "superheated",
			"ingredients": [
				{
					"item": "tfmg:nickel_sheet"
				},
				{
					"type": "neoforge:single",
					"amount": 1000,
					"fluid": "kubejs:tuff_mineral_slurry"
				}
			],
			"machines": [
				"tfmg:centrifuge"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"type": "neoforge:single",
					"amount": 481.6,
					"id": "tfmg:molten_slag"
				},
				{
					"type": "neoforge:single",
					"amount": 518.4,
					"id": "kubejs:molten_nickel"
				},
				{
					"id": "tfmg:nickel_sheet"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "superheated",
			"ingredients": [
				{
					"item": "createdeco:zinc_sheet"
				},
				{
					"type": "neoforge:single",
					"amount": 1000,
					"fluid": "kubejs:tuff_mineral_slurry"
				}
			],
			"machines": [
				"tfmg:centrifuge"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"type": "neoforge:single",
					"amount": 596.8,
					"id": "tfmg:molten_slag"
				},
				{
					"type": "neoforge:single",
					"amount": 403.2,
					"id": "kubejs:molten_zinc"
				},
				{
					"id": "createdeco:zinc_sheet"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "superheated",
			"ingredients": [
				{
					"item": "create:copper_sheet"
				},
				{
					"type": "neoforge:single",
					"amount": 1000,
					"fluid": "kubejs:tuff_mineral_slurry"
				}
			],
			"machines": [
				"tfmg:centrifuge"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"type": "neoforge:single",
					"amount": 654.4,
					"id": "tfmg:molten_slag"
				},
				{
					"type": "neoforge:single",
					"amount": 345.6,
					"id": "kubejs:molten_copper"
				},
				{
					"id": "create:copper_sheet"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "superheated",
			"ingredients": [
				{
					"item": "tfmg:lead_sheet"
				},
				{
					"type": "neoforge:single",
					"amount": 1000,
					"fluid": "kubejs:tuff_mineral_slurry"
				}
			],
			"machines": [
				"tfmg:centrifuge"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"type": "neoforge:single",
					"amount": 827.2,
					"id": "tfmg:molten_slag"
				},
				{
					"type": "neoforge:single",
					"amount": 172.8,
					"id": "kubejs:molten_lead"
				},
				{
					"id": "tfmg:lead_sheet"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "superheated",
			"ingredients": [
				{
					"item": "kubejs:silver_sheet"
				},
				{
					"type": "neoforge:single",
					"amount": 1000,
					"fluid": "kubejs:tuff_mineral_slurry"
				}
			],
			"machines": [
				"tfmg:centrifuge"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"type": "neoforge:single",
					"amount": 913.6,
					"id": "tfmg:molten_slag"
				},
				{
					"type": "neoforge:single",
					"amount": 86.4,
					"id": "kubejs:molten_silver"
				},
				{
					"id": "kubejs:silver_sheet"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:vat_machine_recipe",
			"allowed_vat_types": [
				"tfmg:firebrick_lined_vat"
			],
			"heat_requirement": "superheated",
			"ingredients": [
				{
					"item": "create:golden_sheet"
				},
				{
					"type": "neoforge:single",
					"amount": 1000,
					"fluid": "kubejs:tuff_mineral_slurry"
				}
			],
			"machines": [
				"tfmg:centrifuge"
			],
			"min_size": 1,
			"processing_time": 80,
			"results": [
				{
					"type": "neoforge:single",
					"amount": 942.4,
					"id": "tfmg:molten_slag"
				},
				{
					"type": "neoforge:single",
					"amount": 57.6,
					"id": "kubejs:molten_gold"
				},
				{
					"id": "create:golden_sheet"
				}
			]
		})
	
	//Distillation (TMFG)
	
		event.custom({
			"type": "tfmg:distillation",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 360,
					"fluid": "kubejs:treated_crude_oil"
				}
			],
			"results": [
				{
					"amount": 30,
					"id": "tfmg:heavy_oil"
				},
				{
					"amount": 90,
					"id": "tfmg:diesel"
				},
				{
					"amount": 45,
					"id": "tfmg:kerosene"
				},
				{
					"amount": 15,
					"id": "tfmg:naphtha"
				},
				{
					"amount": 90,
					"id": "tfmg:gasoline"
				},
				{
					"amount": 90,
					"id": "tfmg:lpg"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:distillation",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 345,
					"fluid": "kubejs:treated_crude_oil"
				}
			],
			"results": [
				{
					"amount": 30,
					"id": "tfmg:heavy_oil"
				},
				{
					"amount": 90,
					"id": "tfmg:diesel"
				},
				{
					"amount": 45,
					"id": "tfmg:kerosene"
				},
				{
					"amount": 90,
					"id": "tfmg:gasoline"
				},
				{
					"amount": 90,
					"id": "tfmg:lpg"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:distillation",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 125,
					"fluid": "kubejs:treated_crude_oil"
				}
			],
			"results": [
				{
					"amount": 25,
					"id": "tfmg:heavy_oil"
				},
				{
					"amount": 90,
					"id": "tfmg:diesel"
				},
				{
					"amount": 10,
					"id": "tfmg:gasoline"
				}
			]
		})
	
	//Casting (TMFG)

		//Molten Metal System Ingot Casting

			const castingottypeMinecraft = [
			"iron",
			"gold",
			"copper",
			"netherite"
			]

			for(const type of castingottypeMinecraft) {
				event.custom({
					"type": "tfmg:casting",
					"ingredients": [
						{
							"type": "neoforge:single",
							"amount": 144,
							"fluid": `kubejs:molten_${type}`
						}
					],
					"processing_time": 80,
					"results": [
						{
							"id": `minecraft:${type}_ingot`
						}
					]
				})
			}

			const castingottypeCreate = [
			"zinc",
			"brass"
			]

			for(const type of castingottypeCreate) {
				event.custom({
					"type": "tfmg:casting",
					"ingredients": [
						{
							"type": "neoforge:single",
							"amount": 144,
							"fluid": `kubejs:molten_${type}`
						}
					],
					"processing_time": 80,
					"results": [
						{
							"id": `create:${type}_ingot`
						}
					]
				})
			}

			const castingottypeCreateAddition = [
			"electrum"
			]

			for(const type of castingottypeCreateAddition) {
				event.custom({
					"type": "tfmg:casting",
					"ingredients": [
						{
							"type": "neoforge:single",
							"amount": 144,
							"fluid": `kubejs:molten_${type}`
						}
					],
					"processing_time": 80,
					"results": [
						{
							"id": `createaddition:${type}_ingot`
						}
					]
				})
			}

			const castingottypeTFMG = [
			"lead",
			"nickel",
			"constantan",
			"lithium",
			"aluminum"
			]

			for(const type of castingottypeTFMG) {
				event.custom({
					"type": "tfmg:casting",
					"ingredients": [
						{
							"type": "neoforge:single",
							"amount": 144,
							"fluid": `kubejs:molten_${type}`
						}
					],
					"processing_time": 80,
					"results": [
						{
							"id": `tfmg:${type}_ingot`
						}
					]
				})
			}

			const castingottypeKubeJS = [
			"silver"
			]

			for(const type of castingottypeKubeJS) {
				event.custom({
					"type": "tfmg:casting",
					"ingredients": [
						{
							"type": "neoforge:single",
							"amount": 144,
							"fluid": `kubejs:molten_${type}`
						}
					],
					"processing_time": 80,
					"results": [
						{
							"id": `kubejs:${type}_ingot`
						}
					]
				})
			}
	
		event.custom({
			"type": "tfmg:casting",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 144,
					"fluid": "kubejs:synthetic_lithium_solution"
				}
			],
			"processing_time": 80,
			"results": [
				{
					"id": "tfmg:lithium_ingot"
				}
			]
		})

		event.custom({
			"type": "tfmg:casting",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 144,
					"fluid": "kubejs:molten_sodium_lead_alloy"
				}
			],
			"processing_time": 80,
			"results": [
				{
					"id": "kubejs:sodium_lead_alloy"
				}
			]
		})

		event.custom({
			"type": "tfmg:casting",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 144,
					"fluid": "kubejs:molten_sodium"
				}
			],
			"processing_time": 80,
			"results": [
				{
					"id": "kubejs:sodium"
				}
			]
		})

		event.custom({
			"type": "tfmg:casting",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 1000,
					"fluid": "tfmg:liquid_asphalt"
				}
			],
			"processing_time": 200,
			"results": [
				{
					"id": "tfmg:asphalt"
				}
			]
		})

		event.custom({
			"type": "tfmg:casting",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 1000,
					"fluid": "tfmg:liquid_concrete"
				}
			],
			"processing_time": 200,
			"results": [
				{
					"id": "tfmg:concrete"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:casting",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 200,
					"fluid": "kubejs:improved_molten_plastic"
				}
			],
			"processing_time": 200,
			"results": [
				{
					"count": 2,
					"id": "tfmg:plastic_sheet"
				}
			]
		})
		
		event.custom({
			"type": "tfmg:casting",
			"ingredients": [
				{
					"type": "neoforge:single",
					"amount": 250,
					"fluid": "kubejs:condensed_carbon_mixture"
				}
			],
			"processing_time": 200,
			"results": [
				{
					"count": 1,
					"id": "tfmg:graphite_electrode"
				}
			]
		})
	
	//Liquid Burning (CreateAddition)
	
		event.custom({
			"type": "createaddition:liquid_burning",
			"burn_time": 36000,
			"ingredients": [
				{
					"type": "fluid_tag",
					"amount": 1000,
					"fluid_tag": "c:single_additive_fuel"
				}
			],
			"results": [],
			"superheated": true
		})

		event.custom({
			"type": "createaddition:liquid_burning",
			"burn_time": 54000,
			"ingredients": [
				{
					"type": "fluid_tag",
					"amount": 1000,
					"fluid_tag": "c:double_additive_fuel"
				}
			],
			"results": [],
			"superheated": true
		})

		event.custom({
			"type": "createaddition:liquid_burning",
			"burn_time": 72000,
			"ingredients": [
				{
					"type": "fluid_tag",
					"amount": 1000,
					"fluid_tag": "c:triple_additive_fuel"
				}
			],
			"results": [],
			"superheated": true
		})

	//Industrial Blasting (TFMG)

			event.custom({
				"type": "tfmg:industrial_blasting",
				"hot_air_usage": 20,
				"ingredients": [
					{
						"item": "kubejs:steel_blast_mixture"
					}
				],
				"processing_time": 20,
				"results": [
					{
						"amount": 144,
						"id": "tfmg:molten_steel"
					},
					{
						"amount": 144,
						"id": "tfmg:molten_slag"
					},
					{
						"amount": 200,
						"id": "tfmg:furnace_gas"
					}
				]
			})
	
		const blastingoretypeCreate = [
			"iron",
			"gold",
			"copper",
			"zinc",
			"lead",
			"nickel"
		]
		for(const type of blastingoretypeCreate) {
			event.custom({
				"type": "tfmg:industrial_blasting",
				"hot_air_usage": 20,
				"ingredients": [
					{
						"item": `create:crushed_raw_${type}`
					}
				],
				"processing_time": 20,
				"results": [
					{
						"amount": 288,
						"id": `kubejs:molten_${type}`
					},
					{
						"amount": 144,
						"id": "tfmg:molten_slag"
					},
					{
						"amount": 200,
						"id": "tfmg:furnace_gas"
					}
				]
			})
		}

		event.custom({
			"type": "tfmg:industrial_blasting",
			"hot_air_usage": 20,
			"ingredients": [
				{
					"item": "kubejs:crushed_raw_silver"
				}
			],
			"processing_time": 20,
			"results": [
				{
					"amount": 288,
					"id": "kubejs:molten_silver"
				},
				{
					"amount": 144,
					"id": "tfmg:molten_slag"
				},
				{
					"amount": 200,
					"id": "tfmg:furnace_gas"
				}
			]
		})

		event.custom({
			"type": "tfmg:industrial_blasting",
			"hot_air_usage": 20,
			"ingredients": [
				{
					"item": "tfmg:crushed_raw_lithium"
				}
			],
			"processing_time": 20,
			"results": [
				{
					"amount": 288,
					"id": "kubejs:molten_lithium"
				},
				{
					"amount": 144,
					"id": "tfmg:molten_slag"
				},
				{
					"amount": 200,
					"id": "tfmg:furnace_gas"
				}
			]
		})

		event.custom({
			"type": "tfmg:industrial_blasting",
			"hot_air_usage": 20,
			"ingredients": [
				{
					"item": "minecraft:netherite_scrap"
				},
				{
					"item": "minecraft:gold_ingot"
				}
			],
			"processing_time": 20,
			"results": [
				{
					"amount": 72,
					"id": "kubejs:molten_netherite"
				},
				{
					"amount": 216,
					"id": "tfmg:molten_slag"
				},
				{
					"amount": 100,
					"id": "tfmg:furnace_gas"
				}
			]
		})	
	
	//Coking (TFMG)
	
		event.custom({
			"type": "tfmg:coking",
			"ingredients": [
				{
					"item": "minecraft:charcoal"
				}
			],
			"processing_time": 1200,
			"results": [
				{
					"id": "tfmg:coal_coke"
				},
				{
					"amount": 10,
					"id": "tfmg:creosote"
				},
				{
					"amount": 30,
					"id": "tfmg:carbon_dioxide"
				}
			]	
		})

		event.custom({
			"type": "tfmg:coking",
			"ingredients": [
				{
					"item": "minecraft:coal"
				}
			],
			"processing_time": 1200,
			"results": [
				{
					"id": "tfmg:coal_coke"
				},
				{
					"amount": 10,
					"id": "tfmg:creosote"
				},
				{
					"amount": 30,
					"id": "tfmg:carbon_dioxide"
				}
			]	
		})

		event.custom({
			"type": "tfmg:coking",
			"ingredients": [
				{
					"tag": "minecraft:logs_that_burn"
				}
			],
			"processing_time": 600,
			"results": [
				{
					"id": "minecraft:charcoal"
				},
				{
					"amount": 20,
					"id": "tfmg:creosote"
				},
				{
					"amount": 20,
					"id": "tfmg:carbon_dioxide"
				}
			]	
		})
		
		event.custom({
			"type": "tfmg:coking",
			"ingredients": [
				{
					"item": "kubejs:welsh_coal"
				}
			],
			"processing_time": 1200,
			"results": [
				{
					"id": "tfmg:coal_coke"
				},
				{
					"amount": 10,
					"id": "tfmg:creosote"
				},
				{
					"amount": 30,
					"id": "tfmg:carbon_dioxide"
				}
			]	
		})
	
	//Blasting
		
		event.blasting('crowns:uranium_ingot', 'kubejs:uranium_pellets')
		event.blasting('kubejs:silver_ingot', 'kubejs:silver_dust')
		event.blasting('tfmg:nickel_ingot', 'kubejs:fine_nickel_powder')
		event.blasting('tfmg:aluminum_ingot', 'kubejs:fine_aluminum_powder')
		
	//Smelting
		
		event.smelting('crowns:uranium_ingot', 'kubejs:uranium_pellets')
		event.smelting('kubejs:silver_ingot', 'kubejs:silver_dust')
		event.smelting('tfmg:nickel_ingot', 'kubejs:fine_nickel_powder')
		event.smelting('tfmg:aluminum_ingot', 'kubejs:fine_aluminum_powder')
		
		event.smelting('create:crimsite', 'kubejs:cobbled_crimsite')
		event.smelting('create:asurine', 'kubejs:cobbled_asurine')
		event.smelting('create:ochrum', 'kubejs:cobbled_ochrum')
		event.smelting('create:veridium', 'kubejs:cobbled_veridium')
		event.smelting('dndesires:breccia', 'kubejs:cobbled_breccia')
		event.smelting('dndecor:gabbro', 'kubejs:cobbled_gabbro')
		event.smelting('tfmg:galena', 'kubejs:cobbled_galena')
		
	//Shaped
		
		event.shaped('kubejs:silver_ingot', [
			'AAA',
			'AAA',
			'AAA'
		], {
			A: 'kubejs:silver_nugget'
		})
		
		event.shaped('9x kubejs:silver_nugget', [
			'A'
		], {
			A: 'kubejs:silver_ingot'
		})
		
		event.shaped('kubejs:stored_uranium_ingots', [
			'AAA',
			'AAA',
			'AAA'
		], {
			A: 'crowns:uranium_ingot'
		})
		
		event.shaped('9x crowns:uranium_ingot', [
			'A'
		], {
			A: 'kubejs:stored_uranium_ingots'
		})
		
		event.shaped('kubejs:stored_nickel_aluminide_ingots', [
			'AAA',
			'AAA',
			'AAA'
		], {
			A: 'kubejs:nickel_aluminide_ingot'
		})
		
		event.shaped('9x kubejs:nickel_aluminide_ingot', [
			'A'
		], {
			A: 'kubejs:stored_nickel_aluminide_ingots'
		})
		
		event.shaped('kubejs:stored_silver_ingots', [
			'AAA',
			'AAA',
			'AAA'
		], {
			A: 'kubejs:silver_ingot'
		})
		
		event.shaped('9x kubejs:silver_ingot', [
			'A'
		], {
			A: 'kubejs:stored_silver_ingots'
		})

		event.shaped('supplementaries:sack', [
			'ABA',
			'A A',
			'AAA'
		], {
			A: 'minecraft:wheat',
			B: '#c:strings'
		})	

		event.shaped('sophisticatedbackpacks:iron_backpack', [
			'ABA',
			'BCB',
			'DDD'
		], {
			A: '#c:strings',
			B: 'create:andesite_alloy',
			C: '#c:backpack_material',
			D: '#c:leathers'
		})

		/*event.shaped('sophisticatedbackpacks:copper_backpack', [
			'ABA',
			'BCB',
			'ABA'
		], {
			A: 'minecraft:copper_ingot',
			B: 'create:copper_sheet',
			C: 'sophisticatedbackpacks:iron_backpack'
		})*/

		event.shaped('kubejs:wooden_mechanism', [
			'AB',
			'CD'
		], {
			A: 'create:cogwheel',
			B: 'minecraft:lever',
			C: 'kubejs:wooden_mechanism_casing',
			D: 'create:shaft'
		})

		event.shaped('kubejs:andesite_alloy_mechanism', [
			'ABC',
			'DEF',
			' G '
		], {
			A: 'create:cogwheel',
			B: 'create:metal_bracket',
			C: 'create:large_cogwheel',
			D: 'create:shaft',
			E: 'createaddition:copper_wire',
			F: 'createaddition:iron_rod',
			G: 'kubejs:andesite_alloy_mechanism_casing'
		})

		event.shaped('kubejs:andesite_alloy_mechanism_casing', [
			'A A',
			' B '
		], {
			A: 'create:andesite_alloy',
			B: 'create:iron_sheet'
		})

		event.shaped('dndesires:gold_whisk', [
			' A ',
			'BAB',
			'BBB'
		], {
			A: 'create:andesite_alloy',
			B: 'create:brass_sheet'
		})
		
		event.shaped('4x minecraft:arrow', [
			'A',
			'B',
			'C'
		], {
			A: 'minecraft:flint',
			B: 'minecraft:stick',
			C: 'farmersdelight:canvas'
		})
		
		event.shaped('minecraft:phantom_membrane', [
			'ABA',
			'BAB',
			'ABA'
		], {
			A: 'minecraft:string',
			B: 'minecraft:bone_meal'
		})
		
		event.shaped('comforts:sleeping_bag_white', [
			'AA',
			'AA',
			'AA'
		], {
			A: 'farmersdelight:canvas'
		})
		
		event.shaped('kubejs:stored_canvas', [
			'AAA',
			'AAA',
			'AAA'
		], {
			A: 'farmersdelight:canvas'
		})
		
		event.shaped('9x farmersdelight:canvas', [
			'A'
		], {
			A: 'kubejs:stored_canvas'
		})
		
		event.shaped('tfmg:copper_grenade', [
			' A ',
			'ABA',
			' A '
		], {
			A: 'tfmg:thermite_powder',
			B: 'tfmg:aluminum_ingot'
		})
		
		event.shaped('kubejs:advanced_empty_circuit_board', [
			' A ',
			'BBB',
			'CCC'
		], {
			A: 'minecraft:red_dye',
			B: 'ae2:silicon',
			C: 'tfmg:plastic_sheet'
		})
		
		event.shaped('kubejs:empty_motherboard', [
			' A ',
			'BBB',
			'CCC'
		], {
			A: 'minecraft:blue_dye',
			B: 'ae2:printed_silicon',
			C: 'tfmg:plastic_sheet'
		})
		
		event.shaped('kubejs:seagrass_clump', [
			'AAA',
			'AAA',
			'AAA'
		], {
			A: 'minecraft:seagrass'
		})
		
		event.shaped('minecraft:tube_coral_block', [
			'AA',
			'AA'
		], {
			A: 'minecraft:tube_coral'
		})
		
		event.shaped('4x minecraft:tube_coral', [
			'A'
		], {
			A: 'minecraft:tube_coral_block'
		})
		
		event.shaped('minecraft:brain_coral_block', [
			'AA',
			'AA'
		], {
			A: 'minecraft:brain_coral'
		})
		
		event.shaped('4x minecraft:brain_coral', [
			'A'
		], {
			A: 'minecraft:brain_coral_block'
		})
		
		event.shaped('minecraft:bubble_coral_block', [
			'AA',
			'AA'
		], {
			A: 'minecraft:bubble_coral'
		})
		
		event.shaped('4x minecraft:bubble_coral', [
			'A'
		], {
			A: 'minecraft:bubble_coral_block'
		})
		
		event.shaped('minecraft:fire_coral_block', [
			'AA',
			'AA'
		], {
			A: 'minecraft:fire_coral'
		})
		
		event.shaped('4x minecraft:fire_coral', [
			'A'
		], {
			A: 'minecraft:fire_coral_block'
		})
		
		event.shaped('minecraft:horn_coral_block', [
			'AA',
			'AA'
		], {
			A: 'minecraft:horn_coral'
		})
		
		event.shaped('4x minecraft:horn_coral', [
			'A'
		], {
			A: 'minecraft:horn_coral_block'
		})
		
		//Organic Rubber/Rubber Sheet Recipes
		
		event.shaped('create:belt_connector', [
			'AAA',
			'AAA'
		], {
			A: 'kubejs:organic_rubber'
		})
		
		event.shaped('4x create:belt_connector', [
			'AAA',
			'AAA'
		], {
			A: 'tfmg:rubber_sheet'
		})
		
		event.shaped('create:spout', [
			'A',
			'B'
		], {
			A: 'create:copper_casing',
			B: 'kubejs:organic_rubber'
		})
		
		event.shaped('4x create:spout', [
			'A',
			'B'
		], {
			A: 'create:copper_casing',
			B: 'tfmg:rubber_sheet'
		})
		
		event.shaped('2x create:andesite_funnel', [
			'A',
			'B'
		], {
			A: 'create:andesite_alloy',
			B: 'kubejs:organic_rubber'
		})
		
		event.shaped('8x create:andesite_funnel', [
			'A',
			'B'
		], {
			A: 'create:andesite_alloy',
			B: 'tfmg:rubber_sheet'
		})
		
		event.shaped('2x create:brass_funnel', [
			'A',
			'B',
			'C'
		], {
			A: 'create:electron_tube',
			B: 'create:brass_ingot',
			C: 'kubejs:organic_rubber'
		})
		
		event.shaped('8x create:brass_funnel', [
			'A',
			'B',
			'C'
		], {
			A: 'create:electron_tube',
			B: 'create:brass_ingot',
			C: 'tfmg:rubber_sheet'
		})
		
		event.shaped('2x create:andesite_tunnel', [
			'AA',
			'BB'
		], {
			A: 'create:andesite_alloy',
			B: 'kubejs:organic_rubber'
		})
		
		event.shaped('8x create:andesite_tunnel', [
			'AA',
			'BB'
		], {
			A: 'create:andesite_alloy',
			B: 'tfmg:rubber_sheet'
		})
		
		event.shaped('2x create:brass_tunnel', [
			'A ',
			'BB',
			'CC'
		], {
			A: 'create:electron_tube',
			B: 'create:brass_ingot',
			C: 'kubejs:organic_rubber'
		})
		
		event.shaped('8x create:brass_tunnel', [
			'A ',
			'BB',
			'CC'
		], {
			A: 'create:electron_tube',
			B: 'create:brass_ingot',
			C: 'tfmg:rubber_sheet'
		})
		
		event.custom({
			"neoforge:conditions": [
				{
					"type": "sophisticatedcore:item_enabled",
					"itemRegistryName": "sophisticatedbackpacks:copper_backpack"
				}
			],
			"type": "sophisticatedbackpacks:backpack_upgrade",
			"category": "misc",
			"key": {
				"A": {
					"item": "minecraft:copper_ingot"
				},
				"B": {
					"item": "create:copper_sheet"
				},
				"C": {
					"item": "sophisticatedbackpacks:iron_backpack"
				}
			},
			"pattern": [
				'ABA',
				'BCB',
				'ABA'
			],
			"result": {
				"count": 1,
				"id": "sophisticatedbackpacks:copper_backpack"
			}
		})
		
		event.custom({
			"neoforge:conditions": [
				{
					"type": "sophisticatedcore:item_enabled",
					"itemRegistryName": "sophisticatedbackpacks:gold_backpack"
				}
			],
			"type": "sophisticatedbackpacks:backpack_upgrade",
			"category": "misc",
			"key": {
				"A": {
					"item": "create:brass_ingot"
				},
				"B": {
					"item": "create:brass_sheet"
				},
				"C": {
					"item": "sophisticatedbackpacks:copper_backpack"
				}
			},
			"pattern": [
				'ABA',
				'BCB',
				'ABA'
			],
			"result": {
				"count": 1,
				"id": "sophisticatedbackpacks:gold_backpack"
			}
		})

		event.custom({
			"neoforge:conditions": [
				{
					"type": "sophisticatedcore:item_enabled",
					"itemRegistryName": "sophisticatedbackpacks:netherite_backpack"
				}
			],
			"type": "sophisticatedbackpacks:backpack_upgrade",
			"category": "misc",
			"key": {
				"A": {
					"item": "tfmg:steel_ingot"
				},
				"B": {
					"item": "create:sturdy_sheet"
				},
				"C": {
					"item": "sophisticatedbackpacks:gold_backpack"
				}
			},
			"pattern": [
				'ABA',
				'BCB',
				'ABA'
			],
			"result": {
				"count": 1,
				"id": "sophisticatedbackpacks:netherite_backpack"
			}
		})
		
	//Shaped AE2 Recipes
	
		event.shaped('ae2:nether_quartz_cutting_knife', [
			'  A',
			' B ',
			'C  '
		], {
			A: 'kubejs:quartz_plate',
			B: 'tfmg:steel_ingot',
			C: 'minecraft:stick'
		})
		
		event.shaped('ae2:certus_quartz_cutting_knife', [
			'  A',
			' B ',
			'C  '
		], {
			A: '#c:plates/certus_quartz',
			B: 'tfmg:steel_ingot',
			C: 'minecraft:stick'
		})
		
		event.shaped('ae2:nether_quartz_wrench', [
			'  A',
			' B ',
			'B  '
		], {
			A: 'kubejs:quartz_plate',
			B: 'tfmg:steel_ingot'
		})
		
		event.shaped('ae2:certus_quartz_wrench', [
			'  A',
			' B ',
			'B  '
		], {
			A: '#c:plates/certus_quartz',
			B: 'tfmg:steel_ingot'
		})
		
		event.shaped('ae2:entropy_manipulator', [
			' AB',
			' CD',
			'C  '
		], {
			A: 'ae2:engineering_processor',
			B: 'kubejs:fluix_crystal_plate',
			C: 'kubejs:steel_rod',
			D: 'kubejs:lithium_battery_module'
		})
		
		event.shaped('ae2:wireless_terminal', [
			'A  ',
			'BCB',
			'DED'
		], {
			A: 'ae2:wireless_receiver',
			B: 'kubejs:lithium_battery_module',
			C: 'ae2:terminal',
			D: 'tfmg:aluminum_sheet',
			E: 'kubejs:advanced_circuit_board'
		})
		
		event.shaped('ae2:wireless_crafting_terminal', [
			'A',
			'B',
			'C'
		], {
			A: 'ae2:wireless_terminal',
			B: 'ae2:calculation_processor',
			C: 'ae2:crafting_card'
		})
		
		event.shaped('ae2:charged_staff', [
			'  A',
			' B ',
			'B  '
		], {
			A: 'kubejs:charged_certus_quartz_plate',
			B: 'kubejs:aluminum_rod'
		})
		
		event.shaped('ae2:color_applicator', [
			' AB',
			'CDA',
			' E '
		], {
			A: 'tfmg:aluminum_sheet',
			B: 'ae2:formation_core',
			C: 'kubejs:lithium_battery_module',
			D: 'ae2:cell_component_4k',
			E: 'tfmg:aluminum_ingot'
		})
		
		event.shaped('ae2:network_tool', [
			'AB ',
			'CDE',
			' F '
		], {
			A: '#ae2:illuminated_panel',
			B: 'tfmg:aluminum_sheet',
			C: 'ae2:calculation_processor',
			D: '#create_vibrant_vaults:item_vaults',
			E: '#ae2:quartz_wrench',
			F: 'tfmg:aluminum_ingot'
		})
		
		event.shaped('ae2:meteorite_compass', [
			' A ',
			'ABA',
			' A '
		], {
			A: 'tfmg:aluminum_sheet',
			B: 'ae2:charged_certus_quartz_crystal'
		})
		
		event.shaped('ae2:guide', [
			'A',
			'B',
			'C'
		], {
			A: '#c:plates/certus_quartz',
			B: 'minecraft:book',
			C: 'tfmg:aluminum_sheet'
		})
		
		event.shaped('ae2:fluix_upgrade_smithing_template', [
			'A',
			'B',
			'A'
		], {
			A: 'tfmg:aluminum_sheet',
			B: 'kubejs:fluix_crystal_plate'
		})
		
		/*event.shaped('ae2:nether_quartz_sword', [
			'A',
			'A',
			'B'
		], {
			A: 'kubejs:quartz_plate',
			B: 'minecraft:stick'
		})
		
		event.shaped('ae2:certus_quartz_sword', [
			'A',
			'A',
			'B'
		], {
			A: '#c:plates/certus_quartz',
			B: 'minecraft:stick'
		})
		
		event.shaped('ae2:nether_quartz_pickaxe', [
			'AAA',
			' B ',
			' B '
		], {
			A: 'kubejs:quartz_plate',
			B: 'minecraft:stick'
		})
		
		event.shaped('ae2:certus_quartz_pickaxe', [
			'AAA',
			' B ',
			' B '
		], {
			A: '#c:plates/certus_quartz',
			B: 'minecraft:stick'
		})
		
		event.shaped('ae2:nether_quartz_axe', [
			'AA ',
			'AB ',
			' B '
		], {
			A: 'kubejs:quartz_plate',
			B: 'minecraft:stick'
		})
		
		event.shaped('ae2:certus_quartz_axe', [
			'AA ',
			'AB ',
			' B '
		], {
			A: '#c:plates/certus_quartz',
			B: 'minecraft:stick'
		})
		
		event.shaped('ae2:nether_quartz_shovel', [
			'A',
			'B',
			'B'
		], {
			A: 'kubejs:quartz_plate',
			B: 'minecraft:stick'
		})
		
		event.shaped('ae2:certus_quartz_shovel', [
			'A',
			'B',
			'B'
		], {
			A: '#c:plates/certus_quartz',
			B: 'minecraft:stick'
		})
		
		event.shaped('ae2:nether_quartz_hoe', [
			'AA ',
			' B ',
			' B '
		], {
			A: 'kubejs:quartz_plate',
			B: 'minecraft:stick'
		})
		
		event.shaped('ae2:certus_quartz_hoe', [
			'AA ',
			' B ',
			' B '
		], {
			A: '#c:plates/certus_quartz',
			B: 'minecraft:stick'
		})*/
		
		event.shaped('kubejs:lithium_battery_module', [
			'A',
			'B',
			'B'
		], {
			A: 'kubejs:charged_certus_quartz_plate',
			B: 'tfmg:lithium_charge'
		})
		
		event.shaped('kubejs:calculation_inscribing_template', [
			'A',
			'B'
		], {
			A: 'kubejs:steel_rod',
			B: 'tfmg:heavy_plate'
		})
		
		event.shaped('kubejs:logic_inscribing_template', [
			'A',
			'B'
		], {
			A: 'kubejs:steel_rod',
			B: 'tfmg:heavy_plate'
		})
		
		event.shaped('kubejs:engineering_inscribing_template', [
			'A',
			'B'
		], {
			A: 'kubejs:steel_rod',
			B: 'tfmg:heavy_plate'
		})
		
		event.shaped('kubejs:silicon_inscribing_template', [
			'A',
			'B'
		], {
			A: 'kubejs:steel_rod',
			B: 'tfmg:heavy_plate'
		})
		
		/*event.shaped('ae2:calculation_processor_press', [
			'A',
			'B'
		], {
			A: 'kubejs:nickel_aluminide_ingot',
			B: 'kubejs:inscribing_template'
		}).keepIngredient('kubejs:inscribing_template')
		
		event.shaped('ae2:logic_processor_press', [
			'A',
			'B'
		], {
			A: 'kubejs:nickel_aluminide_ingot',
			B: 'kubejs:inscribing_template'
		}).keepIngredient('kubejs:inscribing_template')
		
		event.shaped('ae2:engineering_processor_press', [
			'A',
			'B'
		], {
			A: 'kubejs:nickel_aluminide_ingot',
			B: 'kubejs:inscribing_template'
		}).keepIngredient('kubejs:inscribing_template')
		
		event.shaped('ae2:silicon_press', [
			'A',
			'B'
		], {
			A: 'kubejs:nickel_aluminide_ingot',
			B: 'kubejs:inscribing_template'
		}).keepIngredient('kubejs:inscribing_template')*/
		
		event.shaped('2x ae2:blank_pattern', [
			'ABA',
			'BCB',
			'DDD'
		], {
			A: 'ae2:quartz_glass',
			B: 'tfmg:plastic_sheet',
			C: '#c:plates/certus_quartz',
			D: 'tfmg:aluminum_sheet'
		})
		
		event.shaped('ae2:memory_card', [
			'ABB',
			'CDC'
		], {
			A: 'ae2:calculation_processor',
			B: 'tfmg:aluminum_sheet',
			C: 'create:golden_sheet',
			D: 'kubejs:redstone_wiring'
		})
		
		event.shaped('ae2:item_cell_housing', [
			'ABA',
			'CDC',
			'CEC'
		], {
			A: 'ae2:quartz_glass',
			B: 'create:iron_sheet',
			C: 'tfmg:plastic_sheet',
			D: 'kubejs:redstone_wiring',
			E: '#c:plates/certus_quartz'
		})
		
		event.shaped('ae2:fluid_cell_housing', [
			'ABA',
			'CDC',
			'CEC'
		], {
			A: 'ae2:quartz_glass',
			B: 'create:copper_sheet',
			C: 'tfmg:plastic_sheet',
			D: 'kubejs:redstone_wiring',
			E: '#c:plates/certus_quartz'
		})
		
		event.shaped('ae2:wireless_receiver', [
			' A ',
			'BCB',
			'BBB'
		], {
			A: 'ae2:fluix_pearl',
			B: 'tfmg:aluminum_sheet',
			C: 'ae2:quartz_fiber'
		})
		
		event.shaped('ae2:inscriber', [
			'ABA',
			'C C',
			'ADA'
		], {
			A: 'tfmg:aluminum_ingot',
			B: 'create:mechanical_press',
			C: 'kubejs:fluix_crystal_plate',
			D: 'tfmg:circuit_board'
		})
		
		event.shaped('ae2:wireless_access_point', [
			' A ',
			' B ',
			'CDC'
		], {
			A: 'ae2:wireless_receiver',
			B: 'ae2:calculation_processor',
			C: 'tfmg:aluminum_ingot',
			D: 'ae2:fluix_glass_cable'
		})
		
		event.shaped('ae2:charger', [
			'ABA',
			'C C',
			'ADA'
		], {
			A: 'tfmg:aluminum_ingot',
			B: 'createaddition:electrum_ingot',
			C: 'kubejs:fluix_crystal_plate',
			D: 'kubejs:lithium_battery_module'
		})
		
		event.shaped('ae2:controller', [
			'ABA',
			'BCB',
			'ADA'
		], {
			A: 'tfmg:aluminum_ingot',
			B: 'kubejs:fluix_crystal_plate',
			C: 'ae2:engineering_processor',
			D: 'kubejs:advanced_circuit_board'
		})
		
		event.shaped('ae2:drive', [
			'ABA',
			'C C',
			'ABA'
		], {
			A: 'tfmg:aluminum_ingot',
			B: 'ae2:engineering_processor',
			C: 'ae2:fluix_glass_cable'
		})
		
		event.shaped('ae2:interface', [
			'ABA',
			'CDE',
			'ABA'
		], {
			A: 'tfmg:aluminum_ingot',
			B: 'ae2:quartz_glass',
			C: 'ae2:annihilation_core',
			D: 'kubejs:advanced_circuit_board',
			E: 'ae2:formation_core'
		})
		
		event.shaped('ae2:cell_workbench', [
			'ABA',
			'CDC',
			'CEC'
		], {
			A: '#minecraft:wool',
			B: 'ae2:calculation_processor',
			C: 'tfmg:aluminum_ingot',
			D: '#create_vibrant_vaults:item_vaults',
			E: 'kubejs:advanced_circuit_board'
		})
		
		event.shaped('ae2:energy_acceptor', [
			'ABA',
			'BCB',
			'ABA'
		], {
			A: 'tfmg:aluminum_ingot',
			B: 'ae2:quartz_glass',
			C: 'createaddition:electrum_ingot'
		})
		
		event.shaped('ae2:crafting_unit', [
			'ABA',
			'CDC',
			'ABA'
		], {
			A: 'tfmg:aluminum_ingot',
			B: 'ae2:calculation_processor',
			C: 'ae2:fluix_glass_cable',
			D: 'ae2:logic_processor'
		})
		
		event.shaped('ae2:pattern_provider', [
			'ABA',
			'CDE',
			'AAA'
		], {
			A: 'tfmg:aluminum_ingot',
			B: 'ae2:crafting_card',
			C: 'ae2:annihilation_core',
			D: 'kubejs:advanced_circuit_board',
			E: 'ae2:formation_core'
		})
		
		event.shaped('ae2:molecular_assembler', [
			'ABA',
			'CDE',
			'AFA'
		], {
			A: 'tfmg:aluminum_ingot',
			B: 'ae2:quartz_glass',
			C: 'ae2:annihilation_core',
			D: 'ae2:crafting_card',
			E: 'ae2:formation_core',
			F: 'kubejs:advanced_circuit_board'
		})
		
		event.shaped('3x ae2:semi_dark_monitor', [
			' AB',
			'CDB',
			' AB'
		], {
			A: 'minecraft:glowstone_dust',
			B: 'ae2:quartz_glass',
			C: 'tfmg:aluminum_ingot',
			D: 'kubejs:redstone_coated_plate'
		})
		
		event.shaped('ae2:storage_bus', [
			'ABA'
		], {
			A: 'create:mechanical_press',
			B: '#ae2:interface'
		})
		
		event.shaped('ae2:import_bus', [
			' A ',
			'BCB'
		], {
			A: 'ae2:annihilation_core',
			B: 'tfmg:aluminum_ingot',
			C: 'create:mechanical_press'
		})
		
		event.shaped('ae2:export_bus', [
			'ABA',
			' C '
		], {
			A: 'tfmg:aluminum_ingot',
			B: 'ae2:formation_core',
			C: 'create:mechanical_press'
		})
		
		event.shaped('ae2:crafting_terminal', [
			'ABC'
		], {
			A: 'ae2:terminal',
			B: 'ae2:crafting_card',
			C: 'ae2:calculation_processor'
		})
		
		event.shaped('ae2:me_p2p_tunnel', [
			' A ',
			'ABA',
			'CCC'
		], {
			A: 'tfmg:aluminum_ingot',
			B: 'ae2:engineering_processor',
			C: 'kubejs:fluix_crystal_plate'
		})
		
		event.recipes.create.mechanical_crafting('computercraft:computer_normal', [
			'AAAAA',
			'ABBBA',
			'ACDEA',
			'AFGFA',
			'AAAAA'
		], {
			A: 'tfmg:aluminum_sheet',
			B: 'kubejs:redstone_wiring',
			C: 'ae2:terminal',
			D: 'ae2:interface',
			E: 'ae2:semi_dark_monitor',
			F: 'kubejs:lithium_battery_module',
			G: 'kubejs:motherboard'
		})
		
		event.recipes.create.mechanical_crafting('computercraft:computer_advanced', [
			'AAAAA',
			'ABBBA',
			'ACDEA',
			'AFGFA',
			'AAAAA'
		], {
			A: 'tfmg:plastic_sheet',
			B: 'kubejs:redstone_wiring',
			C: 'ae2:pattern_encoding_terminal',
			D: 'ae2:interface',
			E: 'ae2:semi_dark_monitor',
			F: 'kubejs:lithium_battery_module',
			G: 'kubejs:motherboard'
		})
		
		event.shaped('computercraft:monitor_normal', [
			'AAA',
			'ABA',
			'AAA'
		], {
			A: 'tfmg:aluminum_sheet',
			B: 'ae2:semi_dark_monitor'
		})
		
		event.shaped('computercraft:monitor_advanced', [
			'AAA',
			'ABA',
			'AAA'
		], {
			A: 'tfmg:plastic_sheet',
			B: 'ae2:semi_dark_monitor'
		})
		
		event.shaped('computercraft:speaker', [
			'AAA',
			'ABA',
			'ACA'
		], {
			A: 'tfmg:aluminum_sheet',
			B: 'minecraft:note_block',
			C: 'tfmg:circuit_board'
		})
		
		event.shaped('computercraft:printer', [
			'AAA',
			'ABA',
			'ACA'
		], {
			A: 'tfmg:aluminum_sheet',
			B: 'kubejs:redstone_wiring',
			C: '#c:dyes'
		})
		
		event.shaped('computercraft:disk_drive', [
			'AAA',
			'ABA',
			'ACA'
		], {
			A: 'tfmg:aluminum_sheet',
			B: 'ae2:drive',
			C: 'kubejs:redstone_wiring'
		})
		
		event.shaped('computercraft:redstone_relay', [
			'ABA',
			'BCB',
			'ABA'
		], {
			A: 'tfmg:aluminum_sheet',
			B: 'kubejs:redstone_wiring',
			C: 'computercraft:wired_modem'
		})
		
		event.shaped('computercraft:wired_modem', [
			'AAA',
			'ABA',
			'AAA'
		], {
			A: 'tfmg:aluminum_sheet',
			B: 'kubejs:redstone_wiring'
		})
		
		event.shaped('6x computercraft:cable', [
			' A ',
			'ABA',
			' A '
		], {
			A: 'tfmg:aluminum_sheet',
			B: 'kubejs:redstone_wiring'
		})
		
		event.shaped('computercraft:wireless_modem_normal', [
			'ABA',
			'ACA',
			'AAA'
		], {
			A: 'tfmg:aluminum_sheet',
			B: 'ae2:wireless_receiver',
			C: 'kubejs:redstone_wiring'
		})

	//Shapeless
	
		event.shapeless(
			Item.of('kubejs:aluminum_silver_catalyst', 1),
			[
				'tfmg:aluminum_sheet',
				'kubejs:silver_sheet'
			]
		)
		
		event.shapeless('8x biomesoplenty:white_sand', [
			'8x #minecraft:sand',
			'minecraft:white_dye'
		])
		event.shapeless('8x biomesoplenty:orange_sand', [
			'8x #minecraft:sand',
			'minecraft:orange_dye'
		])
		event.shapeless('8x biomesoplenty:black_sand', [
			'8x #minecraft:sand',
			'minecraft:black_dye'
		])
		event.shapeless('8x natures_spirit:pink_sand', [
			'8x #minecraft:sand',
			'minecraft:pink_dye'
		])
		
		event.shapeless('ae2:energy_card', [
			'ae2:advanced_card',
			'kubejs:lithium_battery_module'
		])
		
		event.shapeless('ae2:view_cell', [
			'ae2:item_cell_housing',
			'#c:plates/certus_quartz'
		])
		
		event.shapeless('computercraft:pocket_computer_normal', [
			'computercraft:computer_normal',
			'ae2:cable_interface'
		])
		
		event.shapeless('computercraft:pocket_computer_advanced', [
			'computercraft:computer_advanced',
			'ae2:cable_interface'
		])
		
		event.shapeless('computercraft:wireless_modem_advanced', [
			'computercraft:wireless_modem_normal',
			'ae2:fluix_pearl'
		])
		
		event.shapeless('computercraft:wired_modem', [
			'computercraft:wired_modem_full'
		])
	
	//Cutting
	
		event.custom({
			"type": "farmersdelight:cutting",
			"ingredients": [
				{
					"tag": "c:wooden_mechanism_casing_material"
				}
			],
			"result": [
				{
					"item": {
						"id": "kubejs:wooden_mechanism_casing"
					}
				}
			],
			"tool": {
				"tag": "c:tools/knife"
			}
		})
	
	//Rolling Mill
	
		event.custom({
			"type": "createaddition:rolling",
			"ingredients": [
				{
					"tag": "c:plates/aluminum"
				},
			],
			"results": [
				{
					"count": 2,
					"id": "tfmg:aluminum_wire"
				}
			]
		})

		event.custom({
			"type": "createaddition:rolling",
			"ingredients": [
				{
					"tag": "c:ingots/constantan"
				},
			],
			"results": [
				{
					"count": 2,
					"id": "tfmg:constantan_wire"
				}
			]
		})
		
		event.custom({
			"type": "createaddition:rolling",
			"ingredients": [
				{
					"tag": "c:ingots/steel"
				},
			],
			"results": [
				{
					"count": 2,
					"id": "kubejs:steel_rod"
				}
			]
		})
		
		event.custom({
			"type": "createaddition:rolling",
			"ingredients": [
				{
					"tag": "c:ingots/aluminum"
				},
			],
			"results": [
				{
					"count": 2,
					"id": "kubejs:aluminum_rod"
				}
			]
		})
		
		event.custom({
			"type": "createaddition:rolling",
			"ingredients": [
				{
					"item": "kubejs:redstone_coated_plate"
				},
			],
			"results": [
				{
					"count": 1,
					"id": "kubejs:redstone_wiring"
				}
			]
		})
		
		event.custom({
			"type": "createaddition:rolling",
			"ingredients": [
				{
					"item": "kubejs:quartz_plate"
				},
			],
			"results": [
				{
					"count": 4,
					"id": "kubejs:quartz_fiber"
				}
			]
		})
		
		event.custom({
			"type": "createaddition:rolling",
			"ingredients": [
				{
					"item": "kubejs:quartz_fiber"
				}
			],
			"results": [
				{
					"count": 1,
					"id": "ae2:quartz_fiber"
				}
			]
		})
		
//Inscriber (AE2)
		
		event.custom({
			"type": "ae2:inscriber",
			"ingredients": {
				"middle": {
					"item": "kubejs:nickel_aluminide_sheet"
				},
				"top": {
					"item": "kubejs:calculation_inscribing_template"
				}
			},
			"mode": "press",
			"result": {
				"count": 1,
				"id": "ae2:calculation_processor_press"
			}
		})
		
		event.custom({
			"type": "ae2:inscriber",
			"ingredients": {
				"middle": {
					"item": "kubejs:nickel_aluminide_sheet"
				},
				"top": {
					"item": "kubejs:logic_inscribing_template"
				}
			},
			"mode": "press",
			"result": {
				"count": 1,
				"id": "ae2:logic_processor_press"
			}
		})
		
		event.custom({
			"type": "ae2:inscriber",
			"ingredients": {
				"middle": {
					"item": "kubejs:nickel_aluminide_sheet"
				},
				"top": {
					"item": "kubejs:engineering_inscribing_template"
				}
			},
			"mode": "press",
			"result": {
				"count": 1,
				"id": "ae2:engineering_processor_press"
			}
		})
		
		event.custom({
			"type": "ae2:inscriber",
			"ingredients": {
				"middle": {
					"item": "kubejs:nickel_aluminide_sheet"
				},
				"top": {
					"item": "kubejs:silicon_inscribing_template"
				}
			},
			"mode": "press",
			"result": {
				"count": 1,
				"id": "ae2:silicon_press"
			}
		})

		event.custom({
			"type": "ae2:inscriber",
			"ingredients": {
				"middle": {
					"item": "kubejs:nickel_aluminide_sheet"
				},
				"top": {
					"item": "ae2:calculation_processor_press"
				}
			},
			"mode": "inscribe",
			"result": {
				"count": 1,
				"id": "ae2:calculation_processor_press"
			}
		})
		
		event.custom({
			"type": "ae2:inscriber",
			"ingredients": {
				"middle": {
					"item": "kubejs:nickel_aluminide_sheet"
				},
				"top": {
					"item": "ae2:logic_processor_press"
				}
			},
			"mode": "inscribe",
			"result": {
				"count": 1,
				"id": "ae2:logic_processor_press"
			}
		})
		
		event.custom({
			"type": "ae2:inscriber",
			"ingredients": {
				"middle": {
					"item": "kubejs:nickel_aluminide_sheet"
				},
				"top": {
					"item": "ae2:engineering_processor_press"
				}
			},
			"mode": "inscribe",
			"result": {
				"count": 1,
				"id": "ae2:engineering_processor_press"
			}
		})
		
		event.custom({
			"type": "ae2:inscriber",
			"ingredients": {
				"middle": {
					"item": "kubejs:nickel_aluminide_sheet"
				},
				"top": {
					"item": "ae2:silicon_press"
				}
			},
			"mode": "inscribe",
			"result": {
				"count": 1,
				"id": "ae2:silicon_press"
			}
		})
		
		event.custom({
			"type": "ae2:inscriber",
			"ingredients": {
				"middle": {
					"item": "kubejs:certus_quartz_plate"
				},
				"top": {
					"item": "ae2:calculation_processor_press"
				}
			},
			"mode": "inscribe",
			"result": {
				"count": 1,
				"id": "ae2:printed_calculation_processor"
			}
		})
		
		event.custom({
			"type": "ae2:inscriber",
			"ingredients": {
				"middle": {
					"item": "create:golden_sheet"
				},
				"top": {
					"item": "ae2:logic_processor_press"
				}
			},
			"mode": "inscribe",
			"result": {
				"count": 1,
				"id": "ae2:printed_logic_processor"
			}
		})
		
		event.custom({
			"type": "ae2:inscriber",
			"ingredients": {
				"middle": {
					"item": "kubejs:diamond_plate"
				},
				"top": {
					"item": "ae2:engineering_processor_press"
				}
			},
			"mode": "inscribe",
			"result": {
				"count": 1,
				"id": "ae2:printed_engineering_processor"
			}
		})
		
		event.custom({
			"type": "ae2:inscriber",
			"ingredients": {
				"middle": {
					"item": "kubejs:redstone_wiring"
				},
				"top": {
					"item": "ae2:printed_calculation_processor"
				},
				"bottom": {
					"item": "ae2:printed_silicon"
				}
			},
			"mode": "press",
			"result": {
				"count": 1,
				"id": "ae2:calculation_processor"
			}
		})
		
		event.custom({
			"type": "ae2:inscriber",
			"ingredients": {
				"middle": {
					"item": "kubejs:redstone_wiring"
				},
				"top": {
					"item": "ae2:printed_logic_processor"
				},
				"bottom": {
					"item": "ae2:printed_silicon"
				}
			},
			"mode": "press",
			"result": {
				"count": 1,
				"id": "ae2:logic_processor"
			}
		})
		
		event.custom({
			"type": "ae2:inscriber",
			"ingredients": {
				"middle": {
					"item": "kubejs:redstone_wiring"
				},
				"top": {
					"item": "ae2:printed_engineering_processor"
				},
				"bottom": {
					"item": "ae2:printed_silicon"
				}
			},
			"mode": "press",
			"result": {
				"count": 1,
				"id": "ae2:engineering_processor"
			}
		})
		
//CC Disk Recipes

		event.custom({
			"type": "computercraft:impostor_shapeless",
			"category": "redstone",
			"group": "computercraft:disk",
			"ingredients": [{"item": "kubejs:redstone_wiring"}, {"item": "ae2:item_cell_housing"}, {"item": "tfmg:magnetic_alloy_sheet"}, {"item": "tfmg:plastic_sheet"}],
			"result": {
				"components": {"minecraft:dyed_color": {"rgb": 15790320, "show_in_tooltip": false}},
				"count": 1,
				"id": "computercraft:disk"
			}
		})
		
		
		
		
//Sandpaper Polishing Recipes

		//event.recipes.create.sandpaper_polishing('kubejs:')

//Immersive Aircraft Recipes

		event.shaped('immersive_aircraft:hull', [
			'ABA',
			'ABA'
		], {
			A: 'create:andesite_alloy',
			B: 'create:andesite_casing'
		})
		
		event.shaped('immersive_aircraft:engine', [
			' A ',
			'BCB',
			'DED'
		], {
			A: 'dndesires:fluid_gauge',
			B: 'create:brass_sheet',
			C: 'immersive_aircraft:boiler',
			D: 'create:copper_sheet',
			E: 'minecraft:blast_furnace'
		})
		
		event.shaped('immersive_aircraft:sail', [
			'AA',
			'AA'
		], {
			A: 'create:white_sail'
		})
		
		event.shaped('immersive_aircraft:propeller', [
			' A ',
			'ABA',
			' A '
		], {
			A: 'create:iron_sheet',
			B: 'create:propeller'
		})
		
		event.shaped('immersive_aircraft:boiler', [
			'AAA',
			'ABA',
			'CCC'
		], {
			A: 'create:copper_sheet',
			B: 'minecraft:furnace',
			C: 'minecraft:iron_ingot'
		})
		
		event.shaped('immersive_aircraft:enhanced_propeller', [
			' A ',
			'ABA',
			' A '
		], {
			A: 'create:brass_sheet',
			B: 'immersive_aircraft:propeller'
		})
		
		event.shaped('immersive_aircraft:eco_engine', [
			'AAA',
			'BCB',
			'DED'
		], {
			A: 'create:copper_sheet',
			B: 'create:sturdy_sheet',
			C: 'immersive_aircraft:engine',
			D: 'tfmg:steel_ingot',
			E: 'create_connected:fan_splashing_catalyst'
		})
		
		event.shaped('immersive_aircraft:nether_engine', [
			'AAA',
			'BCB',
			'DED'
		], {
			A: 'tfmg:heavy_plate',
			B: 'create:sturdy_sheet',
			C: 'immersive_aircraft:engine',
			D: 'tfmg:steel_ingot',
			E: 'create_connected:fan_blasting_catalyst'
		})
		
		event.shaped('immersive_aircraft:steel_boiler', [
			'AAA',
			'ABA',
			'CDC'
		], {
			A: 'create:iron_sheet',
			B: 'immersive_aircraft:boiler',
			C: 'minecraft:iron_ingot',
			D: 'minecraft:blast_furnace'
		})
		
		event.shaped('immersive_aircraft:industrial_gears', [
			'CB',
			'AD'
		], {
			A: 'dndecor:industrial_cogwheel',
			B: 'dndecor:large_industrial_cogwheel',
			C: 'create:iron_sheet',
			D: 'create:copper_sheet'
		})
	
		event.shaped('immersive_aircraft:sturdy_pipes', [
			'  A',
			'BCB',
			'A  '
		], {
			A: 'create:iron_sheet',
			B: 'create:fluid_pipe',
			C: 'minecraft:iron_ingot'
		})
	
		event.shaped('immersive_aircraft:gyroscope', [
			'ABA'
		], {
			A: 'create:electron_tube',
			B: 'minecraft:compass'
		})
	
		event.shaped('immersive_aircraft:gyroscope_hud', [
			'AAA',
			'BCB',
			'DEF'
		], {
			A: '#c:glass_panes',
			B: 'create:brass_sheet',
			C: 'immersive_aircraft:gyroscope',
			D: 'minecraft:note_block',
			E: 'kubejs:electron_circuit_board',
			F: 'minecraft:lever'
		})
		
		event.shaped('immersive_aircraft:gyroscope_dials', [
			'ABA',
			'CDC',
			'ECF'
		], {
			A: 'minecraft:compass',
			B: 'minecraft:clock',
			C: 'create:iron_sheet',
			D: 'immersive_aircraft:gyroscope',
			E: 'minecraft:note_block',
			F: 'minecraft:lever'
		})
		
		event.shaped('immersive_aircraft:improved_landing_gear', [
			' AA',
			'BBC',
			'BB '
		], {
			A: 'create:iron_sheet',
			B: 'kubejs:organic_rubber',
			C: 'create:andesite_alloy'
		})
		
		event.shaped('4x immersive_aircraft:improved_landing_gear', [
			' AA',
			'BBC',
			'BB '
		], {
			A: 'create:iron_sheet',
			B: 'tfmg:rubber_sheet',
			C: 'create:andesite_alloy'
		})
		
		event.shaped('immersive_aircraft:heavy_crossbow', [
			'A',
			'B',
			'C'
		], {
			A: 'create:iron_sheet',
			B: 'minecraft:crossbow',
			C: 'create:andesite_alloy'
		})
		
		event.shaped('immersive_aircraft:hull_reinforcement', [
			' A ',
			'BCB',
			' A '
		], {
			A: 'create:iron_sheet',
			B: 'minecraft:iron_ingot',
			C: 'immersive_aircraft:hull'
		})
		
		event.shaped('immersive_aircraft:rotary_cannon', [
			' A ',
			'BCB',
			' D '
		], {
			A: 'create:copper_sheet',
			B: 'minecraft:dispenser',
			C: 'immersive_aircraft:industrial_gears',
			D: 'tfmg:steel_ingot'
		})
		
		event.shaped('immersive_aircraft:bomb_bay', [
			'ABA',
			'A A'
		], {
			A: 'tfmg:heavy_plate',
			B: 'minecraft:tnt'
		})
		
		event.recipes.create.mechanical_crafting('immersive_aircraft:bamboo_hopper', [
			'   A ',
			'BCCDE',
			'  BF ',
			'BCCDE',
			'   A '
		], {
			A: 'create:copper_casing',
			B: 'immersive_aircraft:sail',
			C: 'immersive_aircraft:hull',
			D: 'immersive_aircraft:engine',
			E: 'immersive_aircraft:propeller',
			F: 'immersive_aircraft:biplane'
		})
		
		event.recipes.create.mechanical_crafting('immersive_aircraft:warship', [
			'AAAAA',
			'AAAAA',
			'BCDC ',
			'BEFGH',
			' HHH '
		], {
			A: 'immersive_aircraft:sail',
			B: 'immersive_aircraft:propeller',
			C: '#c:ropes',
			D: 'immersive_aircraft:cargo_airship',
			E: 'immersive_aircraft:engine',
			F: 'immersive_aircraft:industrial_gears',
			G: '#create:seats',
			H: 'immersive_aircraft:hull'
		})
		
		event.recipes.create.mechanical_crafting('immersive_aircraft:airship', [
			' AAA ',
			' AAA ',
			' B B ',
			'CDEF ',
			' FFF '
		], {
			A: 'immersive_aircraft:sail',
			B: '#c:ropes',
			C: 'create:propeller',
			D: 'immersive_aircraft:engine',
			E: '#create:seats',
			F: 'immersive_aircraft:hull'
		})
		
		event.recipes.create.mechanical_crafting('immersive_aircraft:biplane', [
			'   A ',
			'A  A ',
			'BBCDE',
			'A  A ',
			'   A '
		], {
			A: 'immersive_aircraft:sail',
			B: 'immersive_aircraft:hull',
			C: '#create:seats',
			D: 'immersive_aircraft:engine',
			E: 'immersive_aircraft:propeller'
		})
		
		event.recipes.create.mechanical_crafting('immersive_aircraft:cargo_airship', [
			'ABA',
			'CDC',
			'ABA'
		], {
			A: 'minecraft:chest',
			B: 'create:propeller',
			C: 'immersive_aircraft:boiler',
			D: 'immersive_aircraft:airship'
		})
		
		event.recipes.create.mechanical_crafting('immersive_aircraft:gyrodyne', [
			' A ',
			'BCB',
			'DED'
		], {
			A: 'immersive_aircraft:propeller',
			B: 'immersive_aircraft:sail',
			C: 'immersive_aircraft:boiler',
			D: 'immersive_aircraft:hull',
			E: '#create:seats'
		})
		
		event.recipes.create.mechanical_crafting('immersive_aircraft:quadrocopter', [
			'ABA',
			' C ',
			'ABA'
		], {
			A: 'create:propeller',
			B: 'immersive_aircraft:hull',
			C: 'immersive_aircraft:engine'
		})
		
//Color Mixing Recipes (Shapeless Items And Liquid Dyes)
	
	//Dye Mixing (Items)
	
		event.shapeless(
			Item.of('minecraft:brown_dye', 2),
			[
				'minecraft:red_dye',
				'minecraft:green_dye'
			]
		)

		event.shapeless(
			Item.of('minecraft:brown_dye', 2),
			[
				'minecraft:orange_dye',
				'minecraft:black_dye'
			]
		)

		event.shapeless(
			Item.of('minecraft:brown_dye', 3),
			[
				'minecraft:red_dye',
				'minecraft:blue_dye',
				'minecraft:yellow_dye'
			]
		)

		event.shapeless(
			Item.of('minecraft:brown_dye', 3),
			[
				'minecraft:red_dye',
				'minecraft:black_dye',
				'minecraft:yellow_dye'
			]
		)


		event.shapeless(
			Item.of('minecraft:green_dye', 2),
			[
				'minecraft:yellow_dye',
				'minecraft:blue_dye'
			]
		)

		event.shapeless(
			Item.of('minecraft:cyan_dye', 3),
			[
				'minecraft:yellow_dye',
				'minecraft:blue_dye',
				'minecraft:blue_dye'
			]
		)
	
	//Dye Mixing (Fluids)
	
		event.recipes.create.mixing(Fluid.of('create_dragons_plus:orange_dye', 500), [Fluid.of('create_dragons_plus:red_dye', 250), Fluid.of('create_dragons_plus:yellow_dye', 250)])
		event.recipes.create.mixing(Fluid.of('create_dragons_plus:lime_dye', 500), [Fluid.of('create_dragons_plus:white_dye', 250), Fluid.of('create_dragons_plus:green_dye', 250)])
		event.recipes.create.mixing(Fluid.of('create_dragons_plus:green_dye', 500), [Fluid.of('create_dragons_plus:yellow_dye', 250), Fluid.of('create_dragons_plus:blue_dye', 250)])
		event.recipes.create.mixing(Fluid.of('create_dragons_plus:cyan_dye', 500), [Fluid.of('create_dragons_plus:green_dye', 250), Fluid.of('create_dragons_plus:blue_dye', 250)])
		event.recipes.create.mixing(Fluid.of('create_dragons_plus:cyan_dye', 750), [Fluid.of('create_dragons_plus:yellow_dye', 250), Fluid.of('create_dragons_plus:blue_dye', 500)])
		event.recipes.create.mixing(Fluid.of('create_dragons_plus:light_blue_dye', 500), [Fluid.of('create_dragons_plus:white_dye', 250), Fluid.of('create_dragons_plus:blue_dye', 250)])
		event.recipes.create.mixing(Fluid.of('create_dragons_plus:purple_dye', 500), [Fluid.of('create_dragons_plus:red_dye', 250), Fluid.of('create_dragons_plus:blue_dye', 250)])
		event.recipes.create.mixing(Fluid.of('create_dragons_plus:magenta_dye', 500), [Fluid.of('create_dragons_plus:purple_dye', 250), Fluid.of('create_dragons_plus:pink_dye', 250)])
		event.recipes.create.mixing(Fluid.of('create_dragons_plus:pink_dye', 500), [Fluid.of('create_dragons_plus:red_dye', 250), Fluid.of('create_dragons_plus:white_dye', 250)])
		event.recipes.create.mixing(Fluid.of('create_dragons_plus:light_gray_dye', 500), [Fluid.of('create_dragons_plus:gray_dye', 250), Fluid.of('create_dragons_plus:white_dye', 250)])
		event.recipes.create.mixing(Fluid.of('create_dragons_plus:light_gray_dye', 750), [Fluid.of('create_dragons_plus:black_dye', 250), Fluid.of('create_dragons_plus:white_dye', 500)])
		event.recipes.create.mixing(Fluid.of('create_dragons_plus:gray_dye', 500), [Fluid.of('create_dragons_plus:black_dye', 250), Fluid.of('create_dragons_plus:white_dye', 250)])
		event.recipes.create.mixing(Fluid.of('create_dragons_plus:brown_dye', 500), [Fluid.of('create_dragons_plus:red_dye', 250), Fluid.of('create_dragons_plus:green_dye', 250)])
		event.recipes.create.mixing(Fluid.of('create_dragons_plus:brown_dye', 500), [Fluid.of('create_dragons_plus:black_dye', 250), Fluid.of('create_dragons_plus:orange_dye', 250)])
})

//Removes item from JEI

RecipeViewerEvents.removeEntriesCompletely('item', event => {
	
//Sophisticated Backpacks	
	
		event.remove([
			'sophisticatedbackpacks:diamond_backpack',
			'sophisticatedbackpacks:backpack',
			'sophisticatedbackpacks:stack_upgrade_omega_tier',
			'sophisticatedbackpacks:stack_upgrade_tier_4',
			'sophisticatedbackpacks:stack_upgrade_tier_3',
			'sophisticatedbackpacks:inception_upgrade',
			'sophisticatedbackpacks:alchemy_upgrade',
			'sophisticatedbackpacks:advanced_alchemy_upgrade',
			'sophisticatedbackpacks:infinity_upgrade',
			'sophisticatedbackpacks:survival_infinity_upgrade',
			'sophisticatedbackpacks:chipped/botanist_workbench_upgrade',
			'sophisticatedbackpacks:chipped/glassblower_upgrade',
			'sophisticatedbackpacks:chipped/carpenters_table_upgrade',
			'sophisticatedbackpacks:chipped/loom_table_upgrade',
			'sophisticatedbackpacks:chipped/mason_table_upgrade',
			'sophisticatedbackpacks:chipped/tinkering_table_upgrade',
			'sophisticatedbackpacks:chipped/alchemy_bench_upgrade',
			'sophisticatedbackpacks:stonecutter_upgrade',
			'sophisticatedbackpacks:anvil_upgrade',
			'sophisticatedbackpacks:smithing_upgrade',
			'sophisticatedbackpacks:smelting_upgrade',
			'sophisticatedbackpacks:smoking_upgrade',
			'sophisticatedbackpacks:blasting_upgrade',
			'sophisticatedbackpacks:auto_smelting_upgrade',
			'sophisticatedbackpacks:auto_smoking_upgrade',
			'sophisticatedbackpacks:auto_blasting_upgrade'
		])
	
//Steam and Rails	
	
		event.remove('railways:track_switch_andesite')
		event.remove('railways:track_switch_brass')

//KubeJS

		event.remove([
			'kubejs:incomplete_electron_circuit_board',
			'kubejs:incomplete_andesite_alloy_mechanism',
			'kubejs:incomplete_nickel_aluminide_mechanism',
			'kubejs:incomplete_half_complete_nickel_aluminide_mechanism',
			'kubejs:incomplete_advanced_circuit_board',
			'kubejs:unprocessed_nickel_aluminide_sheet',
			'kubejs:unfinished_basic_card',
			'kubejs:unfinished_advanced_card',
			'kubejs:unfinished_1k_storage_component',
			'kubejs:unfinished_4k_storage_component',
			'kubejs:unfinished_16k_storage_component',
			'kubejs:unfinished_wireless_booster',
			'kubejs:unfinished_annihilation_core',
			'kubejs:unfinished_formation_core',
			'kubejs:unfinished_motherboard'
		])
	
//Applied Energistics 2

		event.remove([
			'ae2:matter_cannon',
			'ae2:portable_item_cell_1k',
			'ae2:portable_item_cell_4k',
			'ae2:portable_item_cell_16k',
			'ae2:portable_item_cell_64k',
			'ae2:portable_item_cell_256k',
			'ae2:portable_fluid_cell_1k',
			'ae2:portable_fluid_cell_4k',
			'ae2:portable_fluid_cell_16k',
			'ae2:portable_fluid_cell_64k',
			'ae2:portable_fluid_cell_256k',
			'ae2:spatial_cell_component_2',
			'ae2:spatial_cell_component_16',
			'ae2:spatial_cell_component_128',
			'ae2:cell_component_64k',
			'ae2:cell_component_256k',
			'ae2:singularity',
			'ae2:quantum_entangled_singularity',
			'ae2:item_storage_cell_64k',
			'ae2:item_storage_cell_256k',
			'ae2:fluid_storage_cell_64k',
			'ae2:fluid_storage_cell_256k',
			'ae2:spatial_storage_cell_2',
			'ae2:spatial_storage_cell_16',
			'ae2:spatial_storage_cell_128',
			'ae2:annihilation_plane',
			'ae2:formation_plane',
			'ae2:tiny_tnt',
			'ae2:quantum_ring',
			'ae2:quantum_link',
			'ae2:spatial_pylon',
			'ae2:spatial_io_port',
			'ae2:chest',
			'ae2:io_port',
			'ae2:crystal_resonance_generator',
			'ae2:vibration_chamber',
			'ae2:growth_accelerator',
			'ae2:energy_cell',
			'ae2:dense_energy_cell',
			'ae2:64k_crafting_storage',
			'ae2:256k_crafting_storage',
			'ae2:spatial_anchor',
			'ae2:condenser',
			
			'ae2:certus_quartz_sword'
		])
	
//The Factory Must Grow

		event.remove([
			'tfmg:napalm_potato',
			'tfmg:flamethrower',
			'tfmg:zinc_grenade',
			'tfmg:thermite_grenade',
			'tfmg:advanced_potato_cannon',
			'tfmg:lithium_blade',
			'tfmg:lit_lithium_blade',
			'tfmg:heavy_casing_encased_shaft',
			'tfmg:steel_encased_shaft',
			'tfmg:copper_wire',
			'tfmg:unfinished_steel_mechanism'
		])
	
//Dreams and Desires
		
		event.remove([
			'dndesires:gatling_breaker'
		])
	
//ComputerCraft / ComputerCraftCreateBridge

		event.remove([
			'cccbridge:animatronic_block',
			'computercraft:turtle_normal',
			'computercraft:turtle_advanced'			
		])

//CreateMechanicalExtruders

		event.remove([
			'create_mechanical_extruder:mechanical_extruder'		
		])

//CreatingRotationOperatedWithNuclearScience (CROWNS)

		event.remove([
			'crowns:uranium_hexafluoride_bucket',
			'crowns:natural_uranium_nugget',
			'crowns:depleted_uranium_ingot',
			'crowns:depleted_uranium_nugget',
			'crowns:enriched_uranium_ingot',
			'crowns:enriched_uranium_nugget',
			'crowns:fuel_rod'
		])

//CreateCrafts&Additions

		/*event.remove([
			'createaddition:zinc_sheet'
		])*/

//DesignAndDecor

		event.remove([
			'dndecor:lead_cross_bolt',
			'dndecor:lead_dash_bolt',
			'dndecor:lead_dot_bolt',
			'dndecor:lead_flat_bolt',
			'dndecor:aluminum_cross_bolt',
			'dndecor:aluminum_dash_bolt',
			'dndecor:aluminum_dot_bolt',
			'dndecor:aluminum_flat_bolt',
			'dndecor:nickel_cross_bolt',
			'dndecor:nickel_dash_bolt',
			'dndecor:nickel_dot_bolt',
			'dndecor:nickel_flat_bolt',
			'dndecor:steel_cross_bolt',
			'dndecor:steel_dash_bolt',
			'dndecor:steel_dot_bolt',
			'dndecor:steel_flat_bolt',
			'dndecor:cast_iron_cross_bolt',
			'dndecor:cast_iron_dash_bolt',
			'dndecor:cast_iron_dot_bolt',
			'dndecor:cast_iron_flat_bolt'
		])

//Other

		event.remove([
			'create_connected:item_silo'
		])

})

/*RecipeViewerEvents.removeEntriesCompletely('fluid', event => {
	event.remove([
		//'crowns:uranium_hexafluoride'
	])
})*/

function bowl(food) {
ItemEvents
	.foodEaten(food, event => {
		event.player.giveInHand('kubejs:wooden_mechanism_casing')
	})
}
	bowl('kubejs:wooden_mechanism')

/*ItemEvents.tooltip(event => {
	
	event.add(['supplementaries:sack'], 'Make sure to remove your items from the sack before upgrading to a backpack!')
	event.add('kubejs:nickel_aluminide_ingot', 'Lightweight & Heat Resistant!')
	event.add('kubejs:nickel_aluminide_sheet', 'Same as the Ingot, just flatter')

})*/

/*ItemEvents.rightClicked('kubejs:single_additive_fuel_bucket', event => {

})*/

BlockEvents.rightClicked(event => {
    const { block, item, player, hand, level } = event;

    if (player.isShiftKeyDown() && item.id === 'create:wrench') {
        
        let blockedBlocks = [
            'numismatics:creative_vendor',
            'create_connected:creative_fluid_vessel',
            'create:creative_motor',
            'create:creative_fluid_tank',
			'create:creative_crate',
			'dndesires:creative_gear_motor',
			'createaddition:creative_energy',
			'tfmg:creative_generator'
        ];

        if (blockedBlocks.includes(block.id)) {
            event.cancel()
        }
    }
})
