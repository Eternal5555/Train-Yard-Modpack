BlockEvents.modification((event) => {
	event.modify("numismatics:creative_vendor", (block) => {
		block.destroySpeed = -1.0;
		block.explosionResistance = 3600000.0;
	});

	event.modify("create_connected:creative_fluid_vessel", (block) => {
		block.destroySpeed = -1.0;
		block.explosionResistance = 3600000.0;
	});

	event.modify("create:creative_motor", (block) => {
		block.destroySpeed = -1.0;
		block.explosionResistance = 3600000.0;
	});

	event.modify("create:creative_fluid_tank", (block) => {
		block.destroySpeed = -1.0;
		block.explosionResistance = 3600000.0;
	});

	event.modify("create:creative_crate", (block) => {
		block.destroySpeed = -1.0;
		block.explosionResistance = 3600000.0;
	});

	event.modify("dndesires:creative_gear_motor", (block) => {
		block.destroySpeed = -1.0;
		block.explosionResistance = 3600000.0;
	});

	event.modify("createaddition:creative_energy", (block) => {
		block.destroySpeed = -1.0;
		block.explosionResistance = 3600000.0;
	});

	event.modify("tfmg:creative_generator", (block) => {
		block.destroySpeed = -1.0;
		block.explosionResistance = 3600000.0;
	});
});

console.info("Blocks Modified")
