import { StatusEffectType } from "@rbxts/simplelibrary/out/SimpleLibrary/StatusEffect";

const ColdEffect: StatusEffectType = {
	Name: "Cold",
	Duration: 10,
	Tick: 0.5,
	Stackable: true,
	MaxStacks: 50,

	StatusAttributes: ["cold"],
	Modifiers: new Map([["heat", "melt"]]),

	OnExpired: (arg) => {
		print(ColdEffect.Name, "has expired");
	},

	OnTick: (arg) => {
		print(ColdEffect.Name, "has ticked");
	},
};

export = ColdEffect;
