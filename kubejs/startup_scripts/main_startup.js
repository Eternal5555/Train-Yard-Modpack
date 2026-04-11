// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded startup example script)')

StartupEvents.registry('item', event => {
	
	//Creation Of Items
	
		event.create('organic_rubber').tooltip('Tastes Even Worse Now')
		event.create('advanced_circuit_board').tooltip('Seems familiar for some reason...')
		event.create('wooden_mechanism').tooltip('Bowl of Gearios')
		event.create('andesite_alloy_mechanism').tooltip('Oops, partially andesite?')
		event.create('wooden_mechanism_casing').tooltip('Bowl 2')
		event.create('andesite_alloy_mechanism_casing').tooltip('Try saying that five times in a row!')
		event.create('loose_brass_mechanism')
		event.create('electron_circuit_board').tooltip('Now lights up!')
		event.create('yellowcake_uranium_powder').tooltip('Gamma flavoured')
		event.create('uranium_pellets').tooltip('The opposite of Iodine pills')
		event.create('potent_uranium_fuel_rod').tooltip('20 Trillion Calories')
		event.create('weak_uranium_fuel_rod')
		event.create('crushed_raw_silver')
		event.create('silver_dust')
		event.create('silver_ingot')
		event.create('silver_nugget').tooltip('Jack\'s grandpa was a silver smith')
		event.create('silver_sheet')
		event.create('nickel_aluminide_ingot').tooltip('Lightweight & Heat Resistant!')
		event.create('nickel_aluminide_sheet').tooltip('Same as the Ingot, just flatter')
		event.create('unprocessed_nickel_aluminide_sheet', 'create:sequenced_assembly')
		event.create('brine_salt').tooltip('This salt tastes like car batteries...')
		event.create('synthetic_lithium_powder').tooltip('Almost makes you think it\'s natural')
		event.create('fine_nickel_powder')
		event.create('fine_aluminum_powder')
		event.create('fine_nickel_aluminide_powder')
		event.create('incomplete_electron_circuit_board', 'create:sequenced_assembly')
		event.create('incomplete_andesite_alloy_mechanism', 'create:sequenced_assembly')
		event.create('nickel_aluminide_mechanism').tooltip('The Pinnacle of Automation')
		event.create('incomplete_nickel_aluminide_mechanism', 'create:sequenced_assembly')
		event.create('incomplete_half_complete_nickel_aluminide_mechanism', 'create:sequenced_assembly').tooltip('Not done just yet!')
		event.create('half_complete_nickel_aluminide_mechanism').tooltip('Not done just yet!')
		event.create('sodium_hydroxide').tooltip('NaHO')
		event.create('sodium_lead_alloy')
		event.create('sodium')
		event.create('steel_blast_mixture')
		event.create('welsh_coal').tooltip('Brought to You by the Number 3')
		event.create('aluminum_silver_catalyst').tooltip('...Why?')
		event.create('incomplete_advanced_circuit_board', 'create:sequenced_assembly').tooltip('Not done just yet!')
		event.create('advanced_empty_circuit_board')
		event.create('advanced_coated_circuit_board')
		event.create('advanced_etched_circuit_board')
		event.create('uranium_dioxide').tooltip('UO₂')
		event.create('potassium_fluoride').tooltip('KF')
		event.create('potassium_carbonate').tooltip('K₂CO₃')
		event.create('potassium_chloride').tooltip('KCl')
		event.create('calcium_fluoride').tooltip('CaF₂')
		event.create('potassium_hydroxide').tooltip('KOH')
		event.create('seagrass_clump')
		event.create('quartz_powder')
		event.create('quartz_plate')
		event.create('certus_quartz_plate')
		event.create('charged_certus_quartz_plate')
		event.create('fluix_crystal_plate')
		event.create('lithium_battery_module')
		event.create('steel_rod')
		event.create('aluminum_rod')
		event.create('calculation_inscribing_template')
		event.create('logic_inscribing_template')
		event.create('engineering_inscribing_template')
		event.create('silicon_inscribing_template')
		event.create('diamond_plate')
		event.create('unfinished_basic_card', 'create:sequenced_assembly')
		event.create('unfinished_advanced_card', 'create:sequenced_assembly')
		event.create('redstone_coated_plate')
		event.create('redstone_wiring')
		event.create('unfinished_1k_storage_component', 'create:sequenced_assembly')
		event.create('unfinished_4k_storage_component', 'create:sequenced_assembly')
		event.create('unfinished_16k_storage_component', 'create:sequenced_assembly')
		event.create('ender_coated_plate')
		event.create('unfinished_wireless_booster', 'create:sequenced_assembly')
		event.create('unfinished_annihilation_core', 'create:sequenced_assembly')
		event.create('unfinished_formation_core', 'create:sequenced_assembly')
		event.create('quartz_fiber')
		event.create('empty_motherboard')
		event.create('coated_motherboard')
		event.create('etched_motherboard')
		event.create('unfinished_motherboard', 'create:sequenced_assembly')
		event.create('motherboard')
	
	//Editing Of Existing Items To Include Tooltips

		event.create('natures_spirit:coconut_shell').tooltip('Can be used to make a wooden mechanism?')
})

StartupEvents.registry('fluid', event => {

	//Creation Of Fluids

		event.create('kubejs:synthetic_lithium_solution', 'thick')
		.tint(0x998675)
		.displayName('Synthetic Lithium Solution')

		event.create('kubejs:salt_water', 'thin')
		.tint(0x3fa9b8)
		.displayName('Salt Water')

		event.create('kubejs:tuff_mineral_slurry', 'thick')
		.tint(0x7c7a73)
		.displayName('Tuff Mineral Slurry')

		event.create('kubejs:oxygen', 'thin')
		.tint(0x88d0f7)
		.displayName('Oxygen')
		.noBlock()
		.bucketItem.texture("kubejs:item/oxygen_bucket")
		 
		event.create('kubejs:chlorine', 'thin')
		.tint(0xc9de6c)
		.displayName('Chlorine')
		.noBlock()
		.bucketItem.texture("kubejs:item/chlorine_bucket")
		 
		event.create('kubejs:hydrochloric_acid', 'thin')
		.tint(0xf5f5dc)
		.displayName('Hydrochloric Acid')
		 
		event.create('kubejs:polyethylene_glycol', 'thin')
		.tint(0xdbdbdb)
		.displayName('Polyethylene Glycol')

		event.create('kubejs:ethylene_oxide', 'thin')
		.tint(0xbdbdbd)
		.displayName('Ethylene Oxide')
		.noBlock()
		.bucketItem.texture("kubejs:item/ethylene_oxide_bucket")

		//Race Fuels
		
		event.create('kubejs:single_additive_fuel', 'thin')
		.tint(0xb58a1b)
		.displayName('Single Additive Fuel')
		.bucketItem.texture("kubejs:item/single_additive_fuel_bucket")
		
		event.create('kubejs:double_additive_fuel', 'thin')
		.tint(0x79b7c0)
		.displayName('Double Additive Fuel')
		.bucketItem.texture("kubejs:item/double_additive_fuel_bucket")

		event.create('kubejs:triple_additive_fuel', 'thin')
		.tint(0x4f7c40)
		.displayName('Triple Additive Fuel')
		.bucketItem.texture("kubejs:item/triple_additive_fuel_bucket")

		event.create('kubejs:double_additive_stage_1', 'thin')
		.tint(0x7aaab1)
		.displayName('Double Additive Stage 1')
		
		event.create('kubejs:triple_additive_stage_1', 'thin')
		.tint(0x445e3c)
		.displayName('Triple Additive Stage 1')
		
		event.create('kubejs:triple_additive_stage_2', 'thin')
		.tint(0x4a6d3f)
		.displayName('Triple Additive Stage 2')

		//Tetraethyllead Crafting Tree Additions
		
		event.create('kubejs:tetraethyllead', 'thin')
		.tint(0x80808c)
		.displayName('Tetraethyllead')
		
		event.create('kubejs:ethyl_chloride', 'thin')
		.tint(0xc3ce9b)
		.displayName('Ethyl Chloride')
		.noBlock()
		.bucketItem.texture("kubejs:item/ethyl_chloride_bucket")
		
		event.create('kubejs:hydrogen_chloride', 'thin')
		.tint(0xb0c2a7)
		.displayName('Hydrogen Chloride')
		.noBlock()
		.bucketItem.texture("kubejs:item/hydrogen_chloride_bucket")
		
		event.create('kubejs:molten_sodium_lead_alloy', 'thick')
		.tint(0x9aa29e)
		.displayName('Molten Sodium Lead Alloy')

		event.create('kubejs:molten_sodium', 'thick')
		.tint(0xc4c9c2)
		.displayName('Molten Sodium')



	//Molten Metals
	
		event.create('kubejs:molten_zinc', 'thick')
	    .tint(0xd3fcd9)
		.displayName('Molten Zinc')

		event.create('kubejs:molten_copper', 'thick')
		.tint(0xe48955)
		.displayName('Molten Copper')

		event.create('kubejs:molten_iron', 'thick')
		.tint(0xfcfcfc)
		.displayName('Molten Iron')

		event.create('kubejs:molten_gold', 'thick')
		.tint(0xf7d349)
		.displayName('Molten Gold')

		event.create('kubejs:molten_silver', 'thick')
		.tint(0xb3b6b5)
		.displayName('Molten Silver')

		event.create('kubejs:molten_lead', 'thick')
		.tint(0x5b7275)
		.displayName('Molten Lead')	

		event.create('kubejs:molten_nickel', 'thick')
		.tint(0xcdcec5)
		.displayName('Molten Nickel')

		event.create('kubejs:molten_electrum', 'thick')
		.tint(0xfaf374)
		.displayName('Molten Electrum')
		
		event.create('kubejs:molten_lithium', 'thick')
		.tint(0xc9c4b7)
		.displayName('Molten Lithium')

		event.create('kubejs:molten_brass', 'thick')
		.tint(0xf8ca67)
		.displayName('Molten Brass')

		event.create('kubejs:molten_constantan', 'thick')
		.tint(0xe2dabd)
		.displayName('Molten Constantan')

		event.create('kubejs:molten_netherite', 'thick')
		.tint(0x4b4042)
		.displayName('Molten Netherite')
		
		event.create('kubejs:alumina_solution', 'thick')
		.tint(0x707286)
		.displayName('Alumina Solution')
		
		event.create('kubejs:molten_aluminum', 'thick')
		.tint(0xeaecec)
		.displayName('Molten Aluminum')
		
	//Uranium Processing
	
		event.create('kubejs:uranium_hexafluoride', 'thin')
		.tint(0xb3cc9c)
		.displayName('Uranium Hexafluoride')
		.noBlock()
		.bucketItem.texture("kubejs:item/uranium_hexafluoride_bucket")
		 
		event.create('kubejs:enriched_uranium_hexafluoride', 'thin')
		.tint(0xaccc8e)
		.displayName('Enriched Uranium Hexafluoride')
		.noBlock()
		.bucketItem.texture("kubejs:item/enriched_uranium_hexafluoride_bucket")
		
		event.create('kubejs:fluorine', 'thin')
		.tint(0xb8c890)
		.displayName('Fluorine')
		.noBlock()
		.bucketItem.texture("kubejs:item/fluorine_bucket")
		
		event.create('kubejs:hydrogen_fluoride', 'thin')
		.tint(0xbac2a7)
		.displayName('Hydrogen Fluoride')
		.noBlock()
		.bucketItem.texture("kubejs:item/hydrogen_fluoride_bucket")
		
		event.create('kubejs:hydrofluoric_acid', 'thin')
		.tint(0xaeb2ac)
		.displayName('Hydrofluoric Acid')
		
		
		
		
		event.create('kubejs:improved_molten_plastic', 'thin')
		.tint(0xd4d4fe)
		.displayName('Improved Molten Plastic')
		
		event.create('kubejs:algeanated_water', 'thin')
		.tint(0x50ac8f)
		.displayName('Algeanated Water')
		
	//Advanced Crude Oil Processing
		
		event.create('kubejs:superheated_crude_oil', 'thick')
		.tint(0x19171b)
		.displayName('Superheated Crude Oil')
		
		event.create('kubejs:crude_oil_emulsion', 'thin')
		.tint(0x131226)
		.displayName('Crude Oil Emulsion')
		
		event.create('kubejs:treated_crude_oil', 'thin')
		.tint(0x060606)
		.displayName('Treated Crude Oil')
		
		event.create('kubejs:residual_fuel_oil', 'thin')
		.tint(0x190f0b)
		.displayName('Residual Fuel Oil')
		
		event.create('kubejs:treated_water', 'thin')
		.tint(0x6c8ef0)
		.displayName('Treated Water')
		
		event.create('kubejs:waste_water', 'thin')
		.tint(0x423b33)
		.displayName('Waste Water')
		
		event.create('kubejs:mineral_sludge', 'thin')
		.tint(0x654b41)
		.displayName('Mineral Sludge')
		
		
		event.create('kubejs:condensed_carbon_mixture', 'thin')
		.tint(0x3e3f3d)
		.displayName('Condensed Carbon Mixture')
		
console.info('Hello, World! (Loaded startup scripts)')
})

StartupEvents.registry('block', event => {
	
	//Creation Of Blocks
	
		event.create('stored_uranium_ingots')
			.displayName('Stored Uranium Ingots')
			.mapColor('color_green')
			.stoneSoundType()
			.tagBlock('minecraft:mineable/pickaxe')
			.tagBlock('minecraft:needs_wooden_tool')
			.hardness(2)
			.resistance(4)
			.opaque(true)
			.fullBlock(true)
			.requiresTool(true)
			.renderType('solid')
			.texture(Direction.UP, 'kubejs:block/stored_uranium_ingots_top')
			.texture(Direction.DOWN, 'kubejs:block/stored_ingots_bottom')
			.texture(Direction.NORTH, 'kubejs:block/stored_uranium_ingots_side')
			.texture(Direction.SOUTH, 'kubejs:block/stored_uranium_ingots_side')
			.texture(Direction.EAST, 'kubejs:block/stored_uranium_ingots_front')
			.texture(Direction.WEST, 'kubejs:block/stored_uranium_ingots_front')
			.texture('particle', 'kubejs:block/stored_uranium_ingots_top')
			.suffocating(true)
			.viewBlocking(true)
			.redstoneConductor(true)
			.transparent(false)
			
		event.create('stored_silver_ingots')
			.displayName('Stored Silver Ingots')
			.mapColor('color_light_gray')
			.stoneSoundType()
			.tagBlock('minecraft:mineable/pickaxe')
			.tagBlock('minecraft:needs_wooden_tool')
			.hardness(2)
			.resistance(4)
			.opaque(true)
			.fullBlock(true)
			.requiresTool(true)
			.renderType('solid')
			.texture(Direction.UP, 'kubejs:block/stored_silver_ingots_top')
			.texture(Direction.DOWN, 'kubejs:block/stored_bottom')
			.texture(Direction.NORTH, 'kubejs:block/stored_silver_ingots_side')
			.texture(Direction.SOUTH, 'kubejs:block/stored_silver_ingots_side')
			.texture(Direction.EAST, 'kubejs:block/stored_silver_ingots_front')
			.texture(Direction.WEST, 'kubejs:block/stored_silver_ingots_front')
			.texture('particle', 'kubejs:block/stored_silver_ingots_top')
			.suffocating(true)
			.viewBlocking(true)
			.redstoneConductor(true)
			.transparent(false)
			
		event.create('stored_nickel_aluminide_ingots')
			.displayName('Stored Nickel Aluminide Ingots')
			.mapColor('color_light_gray')
			.stoneSoundType()
			.tagBlock('minecraft:mineable/pickaxe')
			.tagBlock('minecraft:needs_wooden_tool')
			.hardness(2)
			.resistance(4)
			.opaque(true)
			.fullBlock(true)
			.requiresTool(true)
			.renderType('solid')
			.texture(Direction.UP, 'kubejs:block/stored_nickel_aluminide_ingots_top')
			.texture(Direction.DOWN, 'kubejs:block/stored_ingots_bottom')
			.texture(Direction.NORTH, 'kubejs:block/stored_nickel_aluminide_ingots_side')
			.texture(Direction.SOUTH, 'kubejs:block/stored_nickel_aluminide_ingots_side')
			.texture(Direction.EAST, 'kubejs:block/stored_nickel_aluminide_ingots_front')
			.texture(Direction.WEST, 'kubejs:block/stored_nickel_aluminide_ingots_front')
			.texture('particle', 'kubejs:block/stored_nickel_aluminide_ingots_top')
			.suffocating(true)
			.viewBlocking(true)
			.redstoneConductor(true)
			.transparent(false)
		
		event.create('stored_canvas')
			.displayName('Stored Canvas')
			.mapColor('color_brown')
			.grassSoundType()
			.hardness(0.5)
			.resistance(1)
			.opaque(true)
			.fullBlock(true)
			.requiresTool(false)
			.renderType('solid')
			.texture(Direction.UP, 'farmersdelight:block/canvas_rug')
			.texture(Direction.DOWN, 'farmersdelight:block/canvas_rug')
			.texture(Direction.NORTH, 'farmersdelight:block/canvas_rug')
			.texture(Direction.SOUTH, 'farmersdelight:block/canvas_rug')
			.texture(Direction.EAST, 'farmersdelight:block/canvas_rug')
			.texture(Direction.WEST, 'farmersdelight:block/canvas_rug')
			.texture('particle', 'farmersdelight:block/canvas_rug')
			.suffocating(true)
			.viewBlocking(true)
			.redstoneConductor(true)
			.transparent(false)
		
		event.create('cobbled_crimsite')
			.displayName('Cobbled Crimsite')
			.mapColor('color_red')
			.stoneSoundType()
			.tagBlock('minecraft:mineable/pickaxe')
			.tagBlock('minecraft:needs_wooden_tool')
			.hardness(2)
			.resistance(4)
			.opaque(true)
			.fullBlock(true)
			.requiresTool(true)
			.renderType('solid')
			.texture(Direction.UP, 'kubejs:block/cobbled_crimsite')
			.texture(Direction.DOWN, 'kubejs:block/cobbled_crimsite')
			.texture(Direction.NORTH, 'kubejs:block/cobbled_crimsite')
			.texture(Direction.SOUTH, 'kubejs:block/cobbled_crimsite')
			.texture(Direction.EAST, 'kubejs:block/cobbled_crimsite')
			.texture(Direction.WEST, 'kubejs:block/cobbled_crimsite')
			.texture('particle', 'kubejs:block/cobbled_crimsite')
			.suffocating(true)
			.viewBlocking(true)
			.redstoneConductor(true)
			.transparent(false)
			
			event.create('cobbled_asurine')
			.displayName('Cobbled Asurine')
			.mapColor('color_blue')
			.stoneSoundType()
			.tagBlock('minecraft:mineable/pickaxe')
			.tagBlock('minecraft:needs_wooden_tool')
			.hardness(2)
			.resistance(4)
			.opaque(true)
			.fullBlock(true)
			.requiresTool(true)
			.renderType('solid')
			.texture(Direction.UP, 'kubejs:block/cobbled_asurine')
			.texture(Direction.DOWN, 'kubejs:block/cobbled_asurine')
			.texture(Direction.NORTH, 'kubejs:block/cobbled_asurine')
			.texture(Direction.SOUTH, 'kubejs:block/cobbled_asurine')
			.texture(Direction.EAST, 'kubejs:block/cobbled_asurine')
			.texture(Direction.WEST, 'kubejs:block/cobbled_asurine')
			.texture('particle', 'kubejs:block/cobbled_asurine')
			.suffocating(true)
			.viewBlocking(true)
			.redstoneConductor(true)
			.transparent(false)
			
			event.create('cobbled_ochrum')
			.displayName('Cobbled Ochrum')
			.mapColor('color_yellow')
			.stoneSoundType()
			.tagBlock('minecraft:mineable/pickaxe')
			.tagBlock('minecraft:needs_wooden_tool')
			.hardness(2)
			.resistance(4)
			.opaque(true)
			.fullBlock(true)
			.requiresTool(true)
			.renderType('solid')
			.texture(Direction.UP, 'kubejs:block/cobbled_ochrum')
			.texture(Direction.DOWN, 'kubejs:block/cobbled_ochrum')
			.texture(Direction.NORTH, 'kubejs:block/cobbled_ochrum')
			.texture(Direction.SOUTH, 'kubejs:block/cobbled_ochrum')
			.texture(Direction.EAST, 'kubejs:block/cobbled_ochrum')
			.texture(Direction.WEST, 'kubejs:block/cobbled_ochrum')
			.texture('particle', 'kubejs:block/cobbled_ochrum')
			.suffocating(true)
			.viewBlocking(true)
			.redstoneConductor(true)
			.transparent(false)
			
			event.create('cobbled_veridium')
			.displayName('Cobbled Veridium')
			.mapColor('color_green')
			.stoneSoundType()
			.tagBlock('minecraft:mineable/pickaxe')
			.tagBlock('minecraft:needs_wooden_tool')
			.hardness(2)
			.resistance(4)
			.opaque(true)
			.fullBlock(true)
			.requiresTool(true)
			.renderType('solid')
			.texture(Direction.UP, 'kubejs:block/cobbled_veridium')
			.texture(Direction.DOWN, 'kubejs:block/cobbled_veridium')
			.texture(Direction.NORTH, 'kubejs:block/cobbled_veridium')
			.texture(Direction.SOUTH, 'kubejs:block/cobbled_veridium')
			.texture(Direction.EAST, 'kubejs:block/cobbled_veridium')
			.texture(Direction.WEST, 'kubejs:block/cobbled_veridium')
			.texture('particle', 'kubejs:block/cobbled_veridium')
			.suffocating(true)
			.viewBlocking(true)
			.redstoneConductor(true)
			.transparent(false)
			
			event.create('cobbled_gabbro')
			.displayName('Cobbled Gabbro')
			.mapColor('terracotta_white')
			.stoneSoundType()
			.tagBlock('minecraft:mineable/pickaxe')
			.tagBlock('minecraft:needs_wooden_tool')
			.hardness(2)
			.resistance(4)
			.opaque(true)
			.fullBlock(true)
			.requiresTool(true)
			.renderType('solid')
			.texture(Direction.UP, 'kubejs:block/cobbled_gabbro')
			.texture(Direction.DOWN, 'kubejs:block/cobbled_gabbro')
			.texture(Direction.NORTH, 'kubejs:block/cobbled_gabbro')
			.texture(Direction.SOUTH, 'kubejs:block/cobbled_gabbro')
			.texture(Direction.EAST, 'kubejs:block/cobbled_gabbro')
			.texture(Direction.WEST, 'kubejs:block/cobbled_gabbro')
			.texture('particle', 'kubejs:block/cobbled_gabbro')
			.suffocating(true)
			.viewBlocking(true)
			.redstoneConductor(true)
			.transparent(false)
			
			event.create('cobbled_breccia')
			.displayName('Cobbled Breccia')
			.mapColor('color_orange')
			.stoneSoundType()
			.tagBlock('minecraft:mineable/pickaxe')
			.tagBlock('minecraft:needs_wooden_tool')
			.hardness(2)
			.resistance(4)
			.opaque(true)
			.fullBlock(true)
			.requiresTool(true)
			.renderType('solid')
			.texture(Direction.UP, 'kubejs:block/cobbled_breccia')
			.texture(Direction.DOWN, 'kubejs:block/cobbled_breccia')
			.texture(Direction.NORTH, 'kubejs:block/cobbled_breccia')
			.texture(Direction.SOUTH, 'kubejs:block/cobbled_breccia')
			.texture(Direction.EAST, 'kubejs:block/cobbled_breccia')
			.texture(Direction.WEST, 'kubejs:block/cobbled_breccia')
			.texture('particle', 'kubejs:block/cobbled_breccia')
			.suffocating(true)
			.viewBlocking(true)
			.redstoneConductor(true)
			.transparent(false)
			
			event.create('cobbled_galena')
			.displayName('Cobbled Galena')
			.mapColor('color_blue')
			.stoneSoundType()
			.tagBlock('minecraft:mineable/pickaxe')
			.tagBlock('minecraft:needs_wooden_tool')
			.hardness(2)
			.resistance(4)
			.opaque(true)
			.fullBlock(true)
			.requiresTool(true)
			.renderType('solid')
			.texture(Direction.UP, 'kubejs:block/cobbled_galena')
			.texture(Direction.DOWN, 'kubejs:block/cobbled_galena')
			.texture(Direction.NORTH, 'kubejs:block/cobbled_galena')
			.texture(Direction.SOUTH, 'kubejs:block/cobbled_galena')
			.texture(Direction.EAST, 'kubejs:block/cobbled_galena')
			.texture(Direction.WEST, 'kubejs:block/cobbled_galena')
			.texture('particle', 'kubejs:block/cobbled_galena')
			.suffocating(true)
			.viewBlocking(true)
			.redstoneConductor(true)
			.transparent(false)
})
ItemEvents.modification(event => {
	
	//TheFactoryMustGrow (TFMG)
	
		event.modify('tfmg:advanced_potato_cannon', item =>{
			item.maxDamage = 0
		})
		
		event.modify('tfmg:lit_lithium_blade', item =>{
			item.maxDamage = 0
		})
		
		event.modify('tfmg:lithium_blade', item =>{
			item.maxDamage = 0
		})
		
	//AE2
	
		event.modify('ae2:certus_quartz_sword', item =>{
			item.maxDamage = 0
		})
	
	//DreamsAndDesires (DND)
	
		event.modify('dndesires:gatling_breaker', item =>{
			item.maxDamage = 0
		})	
	
	//Making Tools Work With The Toolbelt
	
		event.modify('chipped:watering_can', item => {
			item.maxStackSize = 1
		})
		event.modify('chipped:alchemy_book', item => {
			item.maxStackSize = 1
		})
		event.modify('chipped:needles', item => {
			item.maxStackSize = 1
		})
		event.modify('chipped:chisel', item => {
			item.maxStackSize = 1
		})
		event.modify('chipped:multimeter', item => {
			item.maxStackSize = 1
		})
		event.modify('chipped:saw', item => {
			item.maxStackSize = 1
		})
		event.modify('supplementaries:altimeter', item => {
			item.maxStackSize = 1
		})
		event.modify('kubejs:single_additive_fuel_bucket', item => {
			item.burnTime = 36000
		})
		event.modify('kubejs:single_additive_fuel_bucket', item => {
			item.burnTime = 36000
		})
		event.modify('kubejs:double_additive_fuel_bucket', item => {
			item.burnTime = 54000
		})
		event.modify('kubejs:triple_additive_fuel_bucket', item => {
			item.burnTime = 72000
		})
		event.modify('kubejs:welsh_coal', item => {
			item.burnTime = 3200
		})
		
		event.modify('tfmg:diesel_bucket', item => {
			item.burnTime = 24000
		})
		event.modify('tfmg:gasoline_bucket', item => {
			item.burnTime = 24000
		})
		event.modify('tfmg:creosote_bucket', item => {
			item.burnTime = 4800
		})
		event.modify('tfmg:crude_oil_bucket', item => {
			item.burnTime = 9600
		})
		
		event.modify('kubejs:organic_rubber', item => {
			item.setFood({
				nutrition: 1,
				saturation: 0.2,
				eatSeconds: 10
			})
		})
		
		event.modify('kubejs:wooden_mechanism', item => {
			item.setFood({
				nutrition: 2,
				saturation: 0.2,
				eatSeconds: 20
			})
		})
})

BlockEvents.modification(event => {
		event.modify('numismatics:creative_vendor', block => {
			block.destroySpeed = -1.0
			block.explosionResistance = 3600000.0
		})
		
		event.modify('create_connected:creative_fluid_vessel', block => {
			block.destroySpeed = -1.0
			block.explosionResistance = 3600000.0
		})
		
		event.modify('create:creative_motor', block => {
			block.destroySpeed = -1.0
			block.explosionResistance = 3600000.0
		})
		
		event.modify('create:creative_fluid_tank', block => {
			block.destroySpeed = -1.0
			block.explosionResistance = 3600000.0
		})
		
		event.modify('create:creative_crate', block => {
			block.destroySpeed = -1.0
			block.explosionResistance = 3600000.0
		})
		
		event.modify('dndesires:creative_gear_motor', block => {
			block.destroySpeed = -1.0
			block.explosionResistance = 3600000.0
		})
		
		event.modify('createaddition:creative_energy', block => {
			block.destroySpeed = -1.0
			block.explosionResistance = 3600000.0
		})
		
		event.modify('tfmg:creative_generator', block => {
			block.destroySpeed = -1.0
			block.explosionResistance = 3600000.0
		})
})
