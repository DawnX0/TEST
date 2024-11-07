import { StatusType } from "@rbxts/simplestatuseffect";

const MeltEffect: StatusType = {
	Name: "Melt",
	Duration: 10,
	Tick: 1,
	Effect: (model: Model) => {
		const Humanoid = model.FindFirstChildWhichIsA("Humanoid");
		if (Humanoid) {
			Humanoid.WalkSpeed = 5;
			Humanoid.Health -= 0.5;
		}
	},
	Completion: (model: Model) => {
		const Humanoid = model.FindFirstChildWhichIsA("Humanoid");
		if (Humanoid) {
			Humanoid.WalkSpeed = 16;
		}
	},
	StatusAttributes: ["Melt"],
	Stacks: true,
	MaxStacks: 10,
};

export = MeltEffect;
