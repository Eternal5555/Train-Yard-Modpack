ItemEvents.modification((event) => {
	//TheFactoryMustGrow (TFMG)

	event.modify("tfmg:advanced_potato_cannon", (item) => {
		item.maxDamage = 0;
	});

	event.modify("tfmg:lit_lithium_blade", (item) => {
		item.maxDamage = 0;
	});

	event.modify("tfmg:lithium_blade", (item) => {
		item.maxDamage = 0;
	});

	//AE2

	event.modify("ae2:certus_quartz_sword", (item) => {
		item.maxDamage = 0;
	});

	//DreamsAndDesires (DND)

	event.modify("dndesires:gatling_breaker", (item) => {
		item.maxDamage = 0;
	});

	//Making Tools Work With The Toolbelt

	event.modify("chipped:watering_can", (item) => {
		item.maxStackSize = 1;
	});
	event.modify("chipped:alchemy_book", (item) => {
		item.maxStackSize = 1;
	});
	event.modify("chipped:needles", (item) => {
		item.maxStackSize = 1;
	});
	event.modify("chipped:chisel", (item) => {
		item.maxStackSize = 1;
	});
	event.modify("chipped:multimeter", (item) => {
		item.maxStackSize = 1;
	});
	event.modify("chipped:saw", (item) => {
		item.maxStackSize = 1;
	});
	event.modify("supplementaries:altimeter", (item) => {
		item.maxStackSize = 1;
	});
	event.modify("kubejs:single_additive_fuel_bucket", (item) => {
		item.burnTime = 36000;
	});
	event.modify("kubejs:single_additive_fuel_bucket", (item) => {
		item.burnTime = 36000;
	});
	event.modify("kubejs:double_additive_fuel_bucket", (item) => {
		item.burnTime = 54000;
	});
	event.modify("kubejs:triple_additive_fuel_bucket", (item) => {
		item.burnTime = 72000;
	});
	event.modify("kubejs:welsh_coal", (item) => {
		item.burnTime = 3200;
	});

	event.modify("tfmg:diesel_bucket", (item) => {
		item.burnTime = 24000;
	});
	event.modify("tfmg:gasoline_bucket", (item) => {
		item.burnTime = 24000;
	});
	event.modify("tfmg:creosote_bucket", (item) => {
		item.burnTime = 4800;
	});
	event.modify("tfmg:crude_oil_bucket", (item) => {
		item.burnTime = 9600;
	});

	event.modify("kubejs:organic_rubber", (item) => {
		item.setFood({
			nutrition: 1,
			saturation: 0.2,
			eatSeconds: 10,
		});
	});

	event.modify("kubejs:wooden_mechanism", (item) => {
		item.setFood({
			nutrition: 2,
			saturation: 0.2,
			eatSeconds: 20,
		});
	});
});

console.info("Items Modified")
