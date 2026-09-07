StartupEvents.registry("fluid", (event) => {
	//Creation Of Fluids

	event
		.create("kubejs:synthetic_lithium_solution", "thick")
		.tint(0x998675)
		.displayName("Synthetic Lithium Solution");

	event
		.create("kubejs:salt_water", "thin")
		.tint(0x3fa9b8)
		.displayName("Salt Water");

	event
		.create("kubejs:tuff_mineral_slurry", "thick")
		.tint(0x7c7a73)
		.displayName("Tuff Mineral Slurry");

	event
		.create("kubejs:oxygen", "thin")
		.tint(0x88d0f7)
		.displayName("Oxygen")
		.noBlock()
		.bucketItem.texture("kubejs:item/oxygen_bucket");

	event
		.create("kubejs:chlorine", "thin")
		.tint(0xc9de6c)
		.displayName("Chlorine")
		.noBlock()
		.bucketItem.texture("kubejs:item/chlorine_bucket");

	event
		.create("kubejs:hydrochloric_acid", "thick")
		.tint(0xf5f5dc)
		.displayName("Hydrochloric Acid");

	event
		.create("kubejs:polyethylene_glycol", "thin")
		.tint(0xdbdbdb)
		.displayName("Polyethylene Glycol");

	event
		.create("kubejs:ethylene_oxide", "thin")
		.tint(0xbdbdbd)
		.displayName("Ethylene Oxide")
		.noBlock()
		.bucketItem.texture("kubejs:item/ethylene_oxide_bucket");

	//Race Fuels

	event
		.create("kubejs:single_additive_fuel", "thin")
		.tint(0xb58a1b)
		.displayName("Single Additive Fuel")
		.bucketItem.texture("kubejs:item/single_additive_fuel_bucket");

	event
		.create("kubejs:double_additive_fuel", "thin")
		.tint(0x79b7c0)
		.displayName("Double Additive Fuel")
		.bucketItem.texture("kubejs:item/double_additive_fuel_bucket");

	event
		.create("kubejs:triple_additive_fuel", "thin")
		.tint(0x4f7c40)
		.displayName("Triple Additive Fuel")
		.bucketItem.texture("kubejs:item/triple_additive_fuel_bucket");

	event
		.create("kubejs:double_additive_stage_1", "thin")
		.tint(0x7aaab1)
		.displayName("Double Additive Stage 1");

	event
		.create("kubejs:triple_additive_stage_1", "thin")
		.tint(0x445e3c)
		.displayName("Triple Additive Stage 1");

	event
		.create("kubejs:triple_additive_stage_2", "thin")
		.tint(0x4a6d3f)
		.displayName("Triple Additive Stage 2");

	//Tetraethyllead Crafting Tree Additions

	event
		.create("kubejs:tetraethyllead", "thin")
		.tint(0x80808c)
		.displayName("Tetraethyllead");

	event
		.create("kubejs:ethyl_chloride", "thin")
		.tint(0xc3ce9b)
		.displayName("Ethyl Chloride")
		.noBlock()
		.bucketItem.texture("kubejs:item/ethyl_chloride_bucket");

	event
		.create("kubejs:hydrogen_chloride", "thin")
		.tint(0xb0c2a7)
		.displayName("Hydrogen Chloride")
		.noBlock()
		.bucketItem.texture("kubejs:item/hydrogen_chloride_bucket");

	event
		.create("kubejs:molten_sodium_lead_alloy", "thick")
		.tint(0x9aa29e)
		.displayName("Molten Sodium Lead Alloy");

	event
		.create("kubejs:molten_sodium", "thick")
		.tint(0xc4c9c2)
		.displayName("Molten Sodium");

	//Molten Metals

	event
		.create("kubejs:molten_zinc", "thick")
		.tint(0xd3fcd9)
		.displayName("Molten Zinc");

	event
		.create("kubejs:molten_copper", "thick")
		.tint(0xe48955)
		.displayName("Molten Copper");

	event
		.create("kubejs:molten_iron", "thick")
		.tint(0xfcfcfc)
		.displayName("Molten Iron");

	event
		.create("kubejs:molten_gold", "thick")
		.tint(0xf7d349)
		.displayName("Molten Gold");

	event
		.create("kubejs:molten_silver", "thick")
		.tint(0xb3b6b5)
		.displayName("Molten Silver");

	event
		.create("kubejs:molten_lead", "thick")
		.tint(0x5b7275)
		.displayName("Molten Lead");

	event
		.create("kubejs:molten_nickel", "thick")
		.tint(0xcdcec5)
		.displayName("Molten Nickel");

	event
		.create("kubejs:molten_electrum", "thick")
		.tint(0xfaf374)
		.displayName("Molten Electrum");

	event
		.create("kubejs:molten_lithium", "thick")
		.tint(0xc9c4b7)
		.displayName("Molten Lithium");

	event
		.create("kubejs:molten_brass", "thick")
		.tint(0xf8ca67)
		.displayName("Molten Brass");

	event
		.create("kubejs:molten_constantan", "thick")
		.tint(0xe2dabd)
		.displayName("Molten Constantan");

	event
		.create("kubejs:molten_netherite", "thick")
		.tint(0x4b4042)
		.displayName("Molten Netherite");

	event
		.create("kubejs:alumina_solution", "thick")
		.tint(0x707286)
		.displayName("Alumina Solution");

	event
		.create("kubejs:molten_aluminum", "thick")
		.tint(0xeaecec)
		.displayName("Molten Aluminum");

	//Uranium Processing

	event
		.create("kubejs:uranium_hexafluoride", "thin")
		.tint(0xb3cc9c)
		.displayName("Uranium Hexafluoride")
		.noBlock()
		.bucketItem.texture("kubejs:item/uranium_hexafluoride_bucket");

	event
		.create("kubejs:enriched_uranium_hexafluoride", "thin")
		.tint(0xaccc8e)
		.displayName("Enriched Uranium Hexafluoride")
		.noBlock()
		.bucketItem.texture("kubejs:item/enriched_uranium_hexafluoride_bucket");

	event
		.create("kubejs:fluorine", "thin")
		.tint(0xb8c890)
		.displayName("Fluorine")
		.noBlock()
		.bucketItem.texture("kubejs:item/fluorine_bucket");

	event
		.create("kubejs:hydrogen_fluoride", "thin")
		.tint(0xbac2a7)
		.displayName("Hydrogen Fluoride")
		.noBlock()
		.bucketItem.texture("kubejs:item/hydrogen_fluoride_bucket");

	event
		.create("kubejs:hydrofluoric_acid", "thick")
		.tint(0xaeb2ac)
		.displayName("Hydrofluoric Acid");

	event
		.create("kubejs:improved_molten_plastic", "thin")
		.tint(0xd4d4fe)
		.displayName("Improved Molten Plastic");

	event
		.create("kubejs:algeanated_water", "thin")
		.tint(0x50ac8f)
		.displayName("Algeanated Water");

	//Advanced Crude Oil Processing

	event
		.create("kubejs:superheated_crude_oil", "thick")
		.tint(0x19171b)
		.displayName("Superheated Crude Oil");

	event
		.create("kubejs:crude_oil_emulsion", "thin")
		.tint(0x131226)
		.displayName("Crude Oil Emulsion");

	event
		.create("kubejs:treated_crude_oil", "thin")
		.tint(0x060606)
		.displayName("Treated Crude Oil");

	event
		.create("kubejs:residual_fuel_oil", "thin")
		.tint(0x190f0b)
		.displayName("Residual Fuel Oil");

	event
		.create("kubejs:treated_water", "thin")
		.tint(0x6c8ef0)
		.displayName("Treated Water");

	event
		.create("kubejs:waste_water", "thin")
		.tint(0x423b33)
		.displayName("Waste Water");

	event
		.create("kubejs:mineral_sludge", "thin")
		.tint(0x654b41)
		.displayName("Mineral Sludge");

	event
		.create("kubejs:condensed_carbon_mixture", "thin")
		.tint(0x3e3f3d)
		.displayName("Condensed Carbon Mixture");

	event
		.create("kubejs:synthetic_sponge_mixture", "thin")
		.tint(0xcbcc49)
		.displayName("Synthetic Sponge Mixture");

	event
		.create("kubejs:microplastics_solution", "thin")
		.tint(0xd5dade)
		.displayName("Microplastics Solution");

	event
		.create("kubejs:molten_membrane", "thin")
		.tint(0x7d617a)
		.displayName("Molten Membrane");

	event
		.create("kubejs:waste_steam", "thin")
		.tint(0xd6d6d6)
		.displayName("Waste Steam")
		.noBlock()
		.bucketItem.texture("kubejs:item/waste_steam_bucket");

	event
		.create("kubejs:treated_steam", "thin")
		.tint(0xe7e7e7)
		.displayName("Treated Steam")
		.noBlock()
		.bucketItem.texture("kubejs:item/treated_steam_bucket");

	event
		.create("kubejs:ethanol", "thin")
		.tint(0xe8e8e8)
		.displayName("Ethanol")

	console.info("Hello, World! (Loaded startup scripts)");
});

console.info("Fluids Created")