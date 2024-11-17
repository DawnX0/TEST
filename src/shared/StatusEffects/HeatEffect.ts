import { StatusEffectType } from "@rbxts/simplelibrary/out/SimpleLibrary/StatusEffect";

const HeatEffect: StatusEffectType = {
	Name: "Heat",
	Duration: 20,
	Tick: 0.2,
	Stackable: true,
	MaxStacks: 10,

	StatusAttributes: ["heat"],
	Modifiers: new Map([["cold", "melt"]]),

	OnExpired: (model) => {
		const char = model as Model;
		print(HeatEffect.Name, "has expired", char.Name);
	},

	OnTick: (model, remainingTime) => {
		const char = model as Model;
		const humanoid = char.FindFirstChildWhichIsA("Humanoid");
		if (humanoid) {
			humanoid.Health -= 1;
		}
	},
};

export = HeatEffect;
