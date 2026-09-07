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
	event.modify("kubejs:charcoal_block", (item) => {
		item.burnTime = 16000;
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

	event.modify("createaddition:bioethanol_bucket", (item) => {
		item.burnTime = 24000;
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
			usingConvertsTo: "kubejs:wooden_mechanism_casing"
		});
	});

	//Marshmallow System

	event.modify("kubejs:marshmallow", (item) => {
		item.setFood({
			nutrition: 2,
			saturation: 1,
			eatSeconds: 1,
		});
	});

	event.modify("kubejs:marshmallow_on_a_stick", (item) => {
		item.setFood({
			nutrition: 2,
			saturation: 1,
			eatSeconds: 1.5,
			usingConvertsTo: "minecraft:stick"
		});
	});

	event.modify("kubejs:cooked_marshmallow", (item) => {
		item.setFood({
			nutrition: 3,
			saturation: 2,
			eatSeconds: 1,
		});
	});

	event.modify("kubejs:cooked_marshmallow_on_a_stick", (item) => {
		item.setFood({
			nutrition: 3,
			saturation: 2,
			eatSeconds: 1.5,
			usingConvertsTo: "minecraft:stick"
		});
	});

	event.modify("kubejs:graham_cracker", (item) => {
		item.setFood({
			nutrition: 2,
			saturation: 1,
			eatSeconds: 0.5,
		});
	});

	event.modify("kubejs:smore", (item) => {
		item.setFood({
			nutrition: 8,
			saturation: 7,
			eatSeconds: 1.5,
		});
	});

	//Hot Dog System

	const $MobEffectInstance = Java.loadClass('net.minecraft.world.effect.MobEffectInstance')

	event.modify("kubejs:meat_paste", (item) => {
		item.setFood({
			nutrition: 1,
			saturation: 0,
			eatSeconds: 2,
		});
	});

	event.modify("kubejs:raw_sausage", (item) => {
		item.setFood({
			nutrition: 2,
			saturation: 1,
			eatSeconds: 1,
		});
	});

	event.modify("kubejs:cooked_sausage", (item) => {
		item.setFood({
			nutrition: 5,
			saturation: 6,
			eatSeconds: 1,
		});
	});

	event.modify("kubejs:hot_dog_bun", (item) => {
		item.setFood({
			nutrition: 4,
			saturation: 5,
			eatSeconds: 1,
		});
	});

	event.modify("kubejs:hot_dog", (item) => {
		item.setFood({
			nutrition: 10,
			saturation: 12,
			eatSeconds: 1.2,
		});
	});

	event.modify("kubejs:hot_dog_with_ketchup", (item) => {
		item.setFood({
			nutrition: 13,
			saturation: 14,
			eatSeconds: 1.2,
		});
	});


});

console.info("Items Modified")
