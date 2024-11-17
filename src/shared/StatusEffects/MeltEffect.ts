import { StatusEffectType } from "@rbxts/simplelibrary/out/SimpleLibrary/StatusEffect";

const MeltEffect: StatusEffectType = {
	Name: "Melt",
	Duration: 10,
	Tick: 0.2,
	Stackable: true,
	MaxStacks: 10,

	StatusAttributes: ["melt"],

	OnExpired: (arg) => {
		print(MeltEffect.Name, "has expired");
	},

	OnTick: (arg) => {
		print(MeltEffect.Name, "has ticked");
	},
};

export = MeltEffect;
