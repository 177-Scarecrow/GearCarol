// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
//物品添加

//构件

event.create('andesite_mechanism').displayName('安山构件')
event.create('copper_mechanism').displayName('铜构件')
event.create('brass_mechanism').displayName('黄铜构件')
event.create('redstone_mechanism').displayName('红石构件')

event.create('quest_mechanism').displayName('谜题构件')
event.create('wormhole_mechanism').displayName('虫洞构件')
event.create('hex_mechanism').displayName('术法构件')
event.create('agriculture_mechanism').displayName('农艺构件')
event.create('armor_mechanism').displayName('装甲构件')
event.create('casting_mechanism').displayName('映射构件')
event.create('flame_mechanism').displayName('玄火构件')
event.create('wing_mechanism').displayName('飞翼构件')
event.create('spells_mechanism').displayName('魔咒构件')

//储罐
event.create('compression_tank').displayName('压缩储罐')
event.create('toilet_water_concentrate').displayName('浓缩花露')
event.create('magicka_concentrate').displayName('浓缩魔能')
event.create('rhizomorph_concentrate').displayName('浓缩菌索')
event.create('tea_concentrate').displayName('浓缩茶饮')
event.create('lava_concentrate').displayName('浓缩岩浆')
event.create('hodgepodge_concentrate').displayName('浓缩杂烩')
event.create('galaxy_concentrate').displayName('浓缩星河')
event.create('hex_concentrate').displayName('浓缩术法')

event.create('sf_toilet_water_concentrate').displayName('浓缩花露(半成品)')
event.create('sf_magicka_concentrate').displayName('浓缩魔能(半成品)')
event.create('sf_rhizomorph_concentrate').displayName('浓缩菌索(半成品)')
event.create('sf_tea_concentrate').displayName('浓缩茶饮(半成品)')
event.create('sf_lava_concentrate').displayName('浓缩岩浆(半成品)')
event.create('sf_hodgepodge_concentrate').displayName('浓缩杂烩(半成品)')
event.create('sf_galaxy_concentrate').displayName('浓缩星河(半成品)')
event.create('sf_hex_concentrate').displayName('浓缩术法(半成品)')

//谜题粉末
event.create('quest_dust').displayName('谜题粉末')

//炼狱咒文
event.create('hellspells_blue').displayName('炼狱咒文-蓝')
event.create('hellspells_pink').displayName('炼狱咒文-粉')
event.create('hellspells_purple').displayName('炼狱咒文-紫')
event.create('hellspells_yellow').displayName('炼狱咒文-黄')
event.create('hellspells_book').displayName('狱咒典籍')
event.create('hellspells_ring').displayName('狱咒之环')

})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})