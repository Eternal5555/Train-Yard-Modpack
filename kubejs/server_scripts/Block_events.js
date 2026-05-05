// priority: 1

BlockEvents.rightClicked((event) => {
	const { block, item, player, hand, level } = event;

	if (player.isShiftKeyDown() && item.id === "create:wrench") {
		let blockedBlocks = [
			"numismatics:creative_vendor",
			"create_connected:creative_fluid_vessel",
			"create:creative_motor",
			"create:creative_fluid_tank",
			"create:creative_crate",
			"dndesires:creative_gear_motor",
			"createaddition:creative_energy",
			"tfmg:creative_generator",
		];

		if (blockedBlocks.includes(block.id)) {
			event.cancel();
		}
	}
});

console.log("Block Events loaded.");
