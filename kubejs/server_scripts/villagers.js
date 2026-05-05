// priority: 1

MoreJS.villagerTrades((event) => {
	//event.removeTrades({
	//	first: 'minecraft:emerald',
	//	firstCount
	//	second: 'minecraft:book',
	//	professions: 'minecraft:librarian',
	//event.removeTrades({ output: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{lvl:1, id: "aue:unbreakable"}]}') })
	//event.removeTrades({ output: Item.of('minecraft:enchanted_book').enchant('aue:unbreakable')})
	/*event.removeTrades({ 
		outputItem: Item.of('minecraft:enchanted_book', {StoredEnchantments: [{id: 'aue:unbreakable', lvl: 1s }]}),
		})*/
	//event.removeTrades({ output: Item.of('minecraft:enchanted_book', [StoredEnchantments={levels:{'aue:unbreakable':1}}] ) })
	//event.removeTrades({ output: ('minecraft:enchanted_book', {StoredEnchantments:[{id:"aue:unbreakable",lvl:1s}]} ) })
	//event.removeTrades({ output: 'minecraft:enchanted_book[minecraft:stored_enchantments={aue:unbreakable:1}]' })
	/*event.removeTrades({
		profession: 'librarian',
		output: 'minecraft:enchanted_book{StoredEnchantments:[{id:"aue:unbreakable",lvl:1s}]}'
	})*/
	//event.removeTrades({
	//first: 'minecraft:emerald',
	//second: 'minecraft:book',
	//output: Item.of("enchanted_book").enchant("aue:unbreakable", 1)
	//output: 'minecraft:enchanted_book[minecraft:stored_enchantments={levels:{"aue:unbreakable":1}}]',
	//profession: 'minecraft:librarian'
	//outputItem: 'minecraft:enchanted_book[minecraft:stored_enchantments={levels:{unbreaking:1}}]'
	//})
	//event.modifyTrades('minecraft:librarian'
});

console.log("Villager modifications loaded");
