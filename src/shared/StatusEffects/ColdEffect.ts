import { StatusType } from "@rbxts/simplestatuseffect";

const ColdEffect: StatusType = {
	Name: "Cold",
	Duration: 10,
	Tick: 0.1,
	Effect: (model: Model) => {
		const Humanoid = model.FindFirstChildWhichIsA("Humanoid");
		if (Humanoid) {
			Humanoid.WalkSpeed = 5;
		}
	},
	Completion: (model: Model) => {
		const Humanoid = model.FindFirstChildWhichIsA("Humanoid");
		print("222");
		if (Humanoid) {
			Humanoid.WalkSpeed = 16;
		}
	},
	StatusAttributes: ["Cold"],
	Modifiers: new Map([["Heat", "Melt"]]),
};

export = ColdEffect;
