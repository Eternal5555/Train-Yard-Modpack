StartupEvents.registry("item", (event) => {
	//Creation Of Items

	event.create("organic_rubber").tooltip("Tastes Even Worse Now");
	event
		.create("advanced_circuit_board")
		.tooltip("Seems familiar for some reason...");
	event.create("wooden_mechanism").tooltip("Bowl of Gearios");
	event
		.create("andesite_alloy_mechanism")
		.tooltip("Oops, partially andesite?");
	event.create("wooden_mechanism_casing").tooltip("Bowl 2");
	event
		.create("andesite_alloy_mechanism_casing")
		.tooltip("Try saying that five times in a row!");
	event.create("loose_brass_mechanism");
	event.create("electron_circuit_board").tooltip("Now lights up!");
	event.create("yellowcake_uranium_powder").tooltip("Gamma flavoured");
	event.create("uranium_pellets").tooltip("The opposite of Iodine pills");
	event.create("potent_uranium_fuel_rod").tooltip("20 Trillion Calories");
	event.create("weak_uranium_fuel_rod");
	event.create("crushed_raw_silver");
	event.create("silver_dust");
	event.create("silver_ingot");
	event.create("silver_nugget").tooltip("Jack's grandpa was a silver smith");
	event.create("silver_sheet");
	event
		.create("nickel_aluminide_ingot")
		.tooltip("Lightweight & Heat Resistant!");
	event
		.create("nickel_aluminide_sheet")
		.tooltip("Same as the Ingot, just flatter");
	event.create(
		"unprocessed_nickel_aluminide_sheet",
		"create:sequenced_assembly",
	);
	event
		.create("brine_salt")
		.tooltip("This salt tastes like car batteries...");
	event
		.create("synthetic_lithium_powder")
		.tooltip("Almost makes you think it's natural");
	event.create("fine_nickel_powder");
	event.create("fine_aluminum_powder");
	event.create("fine_nickel_aluminide_powder");
	event.create(
		"incomplete_electron_circuit_board",
		"create:sequenced_assembly",
	);
	event.create(
		"incomplete_andesite_alloy_mechanism",
		"create:sequenced_assembly",
	);
	event
		.create("nickel_aluminide_mechanism")
		.tooltip("The Pinnacle of Automation");
	event.create(
		"incomplete_nickel_aluminide_mechanism",
		"create:sequenced_assembly",
	);
	event
		.create(
			"incomplete_half_complete_nickel_aluminide_mechanism",
			"create:sequenced_assembly",
		)
		.tooltip("Not done just yet!");
	event
		.create("half_complete_nickel_aluminide_mechanism")
		.tooltip("Not done just yet!");
	event.create("sodium_hydroxide").tooltip("NaHO");
	event.create("sodium_lead_alloy");
	event.create("sodium");
	event.create("steel_blast_mixture");
	event.create("welsh_coal").tooltip("Brought to You by the Number 3");
	event.create("aluminum_silver_catalyst").tooltip("...Why?");
	event
		.create(
			"incomplete_advanced_circuit_board",
			"create:sequenced_assembly",
		)
		.tooltip("Not done just yet!");
	event.create("advanced_empty_circuit_board");
	event.create("advanced_coated_circuit_board");
	event.create("advanced_etched_circuit_board");
	event.create("uranium_dioxide").tooltip("UO₂");
	event.create("potassium_fluoride").tooltip("KF");
	event.create("potassium_carbonate").tooltip("K₂CO₃");
	event.create("potassium_chloride").tooltip("KCl");
	event.create("calcium_fluoride").tooltip("CaF₂");
	event.create("potassium_hydroxide").tooltip("KOH");
	event.create("seagrass_clump");
	event.create("quartz_powder");
	event.create("quartz_plate");
	event.create("certus_quartz_plate");
	event.create("charged_certus_quartz_plate");
	event.create("fluix_crystal_plate");
	event.create("lithium_battery_module");
	event.create("steel_rod");
	event.create("aluminum_rod");
	event.create("calculation_inscribing_template");
	event.create("logic_inscribing_template");
	event.create("engineering_inscribing_template");
	event.create("silicon_inscribing_template");
	event.create("diamond_plate");
	event.create("unfinished_basic_card", "create:sequenced_assembly");
	event.create("unfinished_advanced_card", "create:sequenced_assembly");
	event.create("redstone_coated_plate");
	event.create("redstone_wiring");
	event.create(
		"unfinished_1k_storage_component",
		"create:sequenced_assembly",
	);
	event.create(
		"unfinished_4k_storage_component",
		"create:sequenced_assembly",
	);
	event.create(
		"unfinished_16k_storage_component",
		"create:sequenced_assembly",
	);
	event.create("ender_coated_plate");
	event.create("unfinished_wireless_booster", "create:sequenced_assembly");
	event.create("unfinished_annihilation_core", "create:sequenced_assembly");
	event.create("unfinished_formation_core", "create:sequenced_assembly");
	event.create("quartz_fiber");
	event.create("empty_motherboard");
	event.create("coated_motherboard");
	event.create("etched_motherboard");
	event.create("unfinished_motherboard", "create:sequenced_assembly");
	event.create("motherboard");
	event.create("sodium_sulfate");
	event.create("plant_fibre");
	event.create("ceramic_filter");
	
	event.create("marshmallow")
	event.create("marshmallow_on_a_stick")
	event.create("cooked_marshmallow")
	event.create("cooked_marshmallow_on_a_stick")
	event.create("graham_cracker")
	event.create("smore")
	event.create("unfinished_smore", "create:sequenced_assembly");
	
	event.create("meat_paste")
	event.create("raw_sausage")
	event.create("cooked_sausage")
	event.create("hot_dog_bun")
	event.create("hot_dog")
	event.create("hot_dog_with_ketchup")

});

console.info("Items Created")
