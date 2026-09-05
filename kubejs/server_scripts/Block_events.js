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

BlockEvents.broken("barrier", (event) => {
	const { block, level, player } = event;

	const itemEntity = level.createEntity("minecraft:item");
	const pos = block.pos.center
	itemEntity.setPosition(pos.x(), pos.y(), pos.z());

	itemEntity.item = Item.of("barrier", 1)
	itemEntity.motionY = 0.2;

	itemEntity.spawn();
});

/*LootJS.modifiers(event => {
	event.addBlockModifier("minecraft:barrier")
		.addLoot(LootEntry.of("minecraft:barrier"));
})*/

console.log("Block Events loaded.");
