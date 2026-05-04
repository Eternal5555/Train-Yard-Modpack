// priority: 1

//Removes item from JEI

RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
	//Sophisticated Backpacks

	event.remove([
		"sophisticatedbackpacks:diamond_backpack",
		"sophisticatedbackpacks:backpack",
		"sophisticatedbackpacks:stack_upgrade_omega_tier",
		"sophisticatedbackpacks:stack_upgrade_tier_4",
		"sophisticatedbackpacks:stack_upgrade_tier_3",
		"sophisticatedbackpacks:inception_upgrade",
		"sophisticatedbackpacks:alchemy_upgrade",
		"sophisticatedbackpacks:advanced_alchemy_upgrade",
		"sophisticatedbackpacks:infinity_upgrade",
		"sophisticatedbackpacks:survival_infinity_upgrade",
		"sophisticatedbackpacks:chipped/botanist_workbench_upgrade",
		"sophisticatedbackpacks:chipped/glassblower_upgrade",
		"sophisticatedbackpacks:chipped/carpenters_table_upgrade",
		"sophisticatedbackpacks:chipped/loom_table_upgrade",
		"sophisticatedbackpacks:chipped/mason_table_upgrade",
		"sophisticatedbackpacks:chipped/tinkering_table_upgrade",
		"sophisticatedbackpacks:chipped/alchemy_bench_upgrade",
		"sophisticatedbackpacks:stonecutter_upgrade",
		"sophisticatedbackpacks:anvil_upgrade",
		"sophisticatedbackpacks:smithing_upgrade",
		"sophisticatedbackpacks:smelting_upgrade",
		"sophisticatedbackpacks:smoking_upgrade",
		"sophisticatedbackpacks:blasting_upgrade",
		"sophisticatedbackpacks:auto_smelting_upgrade",
		"sophisticatedbackpacks:auto_smoking_upgrade",
		"sophisticatedbackpacks:auto_blasting_upgrade",
	]);

	//Steam and Rails

	event.remove("railways:track_switch_andesite");
	event.remove("railways:track_switch_brass");

	//KubeJS

	event.remove([
		"kubejs:incomplete_electron_circuit_board",
		"kubejs:incomplete_andesite_alloy_mechanism",
		"kubejs:incomplete_nickel_aluminide_mechanism",
		"kubejs:incomplete_half_complete_nickel_aluminide_mechanism",
		"kubejs:incomplete_advanced_circuit_board",
		"kubejs:unprocessed_nickel_aluminide_sheet",
		"kubejs:unfinished_basic_card",
		"kubejs:unfinished_advanced_card",
		"kubejs:unfinished_1k_storage_component",
		"kubejs:unfinished_4k_storage_component",
		"kubejs:unfinished_16k_storage_component",
		"kubejs:unfinished_wireless_booster",
		"kubejs:unfinished_annihilation_core",
		"kubejs:unfinished_formation_core",
		"kubejs:unfinished_motherboard",
	]);

	//Applied Energistics 2

	event.remove([
		"ae2:matter_cannon",
		"ae2:portable_item_cell_1k",
		"ae2:portable_item_cell_4k",
		"ae2:portable_item_cell_16k",
		"ae2:portable_item_cell_64k",
		"ae2:portable_item_cell_256k",
		"ae2:portable_fluid_cell_1k",
		"ae2:portable_fluid_cell_4k",
		"ae2:portable_fluid_cell_16k",
		"ae2:portable_fluid_cell_64k",
		"ae2:portable_fluid_cell_256k",
		"ae2:spatial_cell_component_2",
		"ae2:spatial_cell_component_16",
		"ae2:spatial_cell_component_128",
		"ae2:cell_component_64k",
		"ae2:cell_component_256k",
		"ae2:singularity",
		"ae2:quantum_entangled_singularity",
		"ae2:item_storage_cell_64k",
		"ae2:item_storage_cell_256k",
		"ae2:fluid_storage_cell_64k",
		"ae2:fluid_storage_cell_256k",
		"ae2:spatial_storage_cell_2",
		"ae2:spatial_storage_cell_16",
		"ae2:spatial_storage_cell_128",
		"ae2:annihilation_plane",
		"ae2:formation_plane",
		"ae2:tiny_tnt",
		"ae2:quantum_ring",
		"ae2:quantum_link",
		"ae2:spatial_pylon",
		"ae2:spatial_io_port",
		"ae2:chest",
		"ae2:io_port",
		"ae2:crystal_resonance_generator",
		"ae2:vibration_chamber",
		"ae2:growth_accelerator",
		"ae2:energy_cell",
		"ae2:dense_energy_cell",
		"ae2:64k_crafting_storage",
		"ae2:256k_crafting_storage",
		"ae2:spatial_anchor",
		"ae2:condenser",

		"ae2:certus_quartz_sword",
	]);

	//The Factory Must Grow

	event.remove([
		"tfmg:napalm_potato",
		"tfmg:flamethrower",
		"tfmg:zinc_grenade",
		"tfmg:thermite_grenade",
		"tfmg:advanced_potato_cannon",
		"tfmg:lithium_blade",
		"tfmg:lit_lithium_blade",
		"tfmg:heavy_casing_encased_shaft",
		"tfmg:steel_encased_shaft",
		"tfmg:copper_wire",
		"tfmg:unfinished_steel_mechanism",
	]);

	//Dreams and Desires

	event.remove(["dndesires:gatling_breaker"]);

	//ComputerCraft / ComputerCraftCreateBridge

	event.remove([
		"cccbridge:animatronic_block",
		"computercraft:turtle_normal",
		"computercraft:turtle_advanced",
	]);

	//CreateMechanicalExtruders

	event.remove(["create_mechanical_extruder:mechanical_extruder"]);

	//CreatingRotationOperatedWithNuclearScience (CROWNS)

	event.remove([
		"crowns:uranium_hexafluoride_bucket",
		"crowns:natural_uranium_nugget",
		"crowns:depleted_uranium_ingot",
		"crowns:depleted_uranium_nugget",
		"crowns:enriched_uranium_ingot",
		"crowns:enriched_uranium_nugget",
		"crowns:fuel_rod",
	]);

	//CreateCrafts&Additions

	/*event.remove([
			'createaddition:zinc_sheet'
		])*/

	//DesignAndDecor

	event.remove([
		"dndecor:lead_cross_bolt",
		"dndecor:lead_dash_bolt",
		"dndecor:lead_dot_bolt",
		"dndecor:lead_flat_bolt",
		"dndecor:aluminum_cross_bolt",
		"dndecor:aluminum_dash_bolt",
		"dndecor:aluminum_dot_bolt",
		"dndecor:aluminum_flat_bolt",
		"dndecor:nickel_cross_bolt",
		"dndecor:nickel_dash_bolt",
		"dndecor:nickel_dot_bolt",
		"dndecor:nickel_flat_bolt",
		"dndecor:steel_cross_bolt",
		"dndecor:steel_dash_bolt",
		"dndecor:steel_dot_bolt",
		"dndecor:steel_flat_bolt",
		"dndecor:cast_iron_cross_bolt",
		"dndecor:cast_iron_dash_bolt",
		"dndecor:cast_iron_dot_bolt",
		"dndecor:cast_iron_flat_bolt",
	]);

	//Other

	event.remove(["create_connected:item_silo"]);
});

console.info("Items removed from JEI.");
