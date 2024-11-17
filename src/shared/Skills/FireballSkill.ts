import { SkillType } from "@rbxts/simplelibrary/out/SimpleLibrary/Skill";

const Fireball: SkillType = {
	Name: "Fireball",
	Cooldown: 3,
	Interaction: "Tap",

	Client: (Model) => {
		print(`Client: ${Model.Name} has cast Fireball!`);
	},

	Server: (Model) => {
		print(`Server: ${Model.Name} has cast Fireball!`);
	},
};

export = Fireball;
