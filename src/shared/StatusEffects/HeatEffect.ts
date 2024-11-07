import { StatusType } from "@rbxts/simplestatuseffect";

const HeatEffect: StatusType = {
	Name: "Heat",
	Duration: 10,
	Tick: 1,
	Effect: (model: Model) => {
		const Humanoid = model.FindFirstChildWhichIsA("Humanoid");
		if (Humanoid) {
			Humanoid.Health -= 1;
		}
	},
	Completion: (model: Model) => {
		print(`${model.Name} has completed the Heat effect.`);
	},
	StatusAttributes: ["Heat"],
	Modifiers: new Map([["Cold", "Melt"]]),
};

export = HeatEffect;
