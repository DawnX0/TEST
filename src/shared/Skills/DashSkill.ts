import { SkillData } from "@rbxts/simpleskill";

const DashSkill: SkillData = {
	Name: "Dash",
	Cooldown: 1.25,
	CastTime: 1,
	Server: (model: Model) => {
		print("ZOOOOOOOOOOOOOOOOOM");
	},

	Client: (model: Model) => {
		const rootpart = model.FindFirstChild("HumanoidRootPart") as BasePart;
		if (rootpart) {
			rootpart.AssemblyLinearVelocity = rootpart.CFrame.LookVector.mul(200);
		}
	},

	SkillAttributes: ["movement"],
	SkillRestrictions: ["attacking"],
};

export = DashSkill;
