// priority: 2

const custom_semaphore_pole = [
	"#decorative_blocks:palisades",
	"#minecraft:walls",
];

const unburnable_item = [
	"#chipped:netherite_block",
	"#rechiseled:netherite_block",
	"create:netherite_backtank",
	"create:netherite_diving_helmet",
	"create:netherite_diving_boots",
	"minecraft:netherite_shovel",
	"minecraft:netherite_pickaxe",
	"minecraft:netherite_axe",
	"minecraft:netherite_hoe",
	"minecraft:netherite_sword",
	"minecraft:netherite_helmet",
	"minecraft:netherite_chestplate",
	"minecraft:netherite_leggings",
	"minecraft:netherite_boots",
	"minecraft:netherite_scrap",
	"minecraft:ancient_debris",
	"createdeco:netherite_nugget",
	"createdeco:netherite_coin",
	"createdeco:netherite_coinstack",
	"sophisticatedbackpacks:netherite_backpack",
];

ServerEvents.tags("item", (event) => {
	//SophisticatedBackpacks

	event.remove("sophisticatedbackpacks:upgrade", [
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

	event.remove("armourers_workshop:skinnable/backpacks", [
		"sophisticatedbackpacks:diamond_backpack",
		"sophisticatedbackpacks:backpack",
	]);

	event.remove("curios:back", [
		"sophisticatedbackpacks:diamond_backpack",
		"sophisticatedbackpacks:backpack",
	]);

	event.remove("accessories:all_curios_items", [
		"sophisticatedbackpacks:diamond_backpack",
		"sophisticatedbackpacks:backpack",
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
	]);

	//Other?

	event.add("c:backpack_material", [
		"minecraft:hay_block",
		"supplementaries:flax_block",
		"kubejs:stored_canvas",
	]);

	event.remove("c:wires/copper", ["tfmg:copper_wire"]);

	event.remove("c:wires", ["tfmg:copper_wire"]);

	event.remove("c:plates/zinc", ["createaddition:zinc_sheet"]);

	event.add("c:wooden_mechanism_casing_material", [
		"minecraft:bowl",
		"handcrafted:wood_bowl",
		"natures_spirit:coconut_shell",
	]);

	event.add("c:saltstones", ["minecraft:basalt", "dndecor:gabbro"]);

	event.add("c:ingots/silver", ["kubejs:silver_ingot"]);

	event.add("minecraft:coals", ["kubejs:welsh_coal"]);

	event.add("c:plates/certus_quartz", [
		"kubejs:certus_quartz_plate",
		"kubejs:charged_certus_quartz_plate",
	]);

	unburnable_item.forEach((item) => {
		event.add("c:unburnable", item)
	})
});

ServerEvents.tags("fluid", (event) => {
	//TFMG

	event.add("tfmg:gas", [
		"kubejs:oxygen",
		"kubejs:ethylene_oxide",
		"kubejs:chlorine",
		"kubejs:ethyl_chloride",
		"kubejs:hydrogen_chloride",
		"kubejs:uranium_hexafluoride",
		"kubejs:enriched_uranium_hexafluoride",
		"kubejs:fluorine",
		"kubejs:hydrogen_fluoride",
	]);

	event.add("tfmg:flammable", [
		//Flammable Gasses
		"kubejs:oxygen",
		"kubejs:ethylene_oxide",
		"kubejs:ethyl_chloride",
		"kubejs:tetraethyllead",
	]);

	event.add("c:single_additive_fuel", ["kubejs:single_additive_fuel"]);

	event.add("c:double_additive_fuel", ["kubejs:double_additive_fuel"]);

	event.add("c:triple_additive_fuel", ["kubejs:triple_additive_fuel"]);

	event.add("tfmg:flammable", [
		//Flammable Liquids
		"kubejs:single_additive_fuel",
		"kubejs:double_additive_fuel",
		"kubejs:triple_additive_fuel",
		"kubejs:superheated_crude_oil",
		"kubejs:treated_crude_oil",
		"kubejs:residual_fuel_oil",
	]);

	event.add("c:fuel", [
		"kubejs:single_additive_fuel",
		"kubejs:double_additive_fuel",
		"kubejs:triple_additive_fuel",
	]);

	//Other
});

ServerEvents.tags("block", (event) => {
	//Custom semaphore pole blocks (defined in the array at top of script)
	custom_semaphore_pole.forEach((item) => {
		event.add("railways:semaphore_poles", item);
	});
});

console.info("Tags sucessfully loaded!");
