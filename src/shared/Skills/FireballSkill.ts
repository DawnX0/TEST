import { SkillData } from "@rbxts/simpleskill";

// ReplicatedStorage/Skills/FireballSkill.module.ts
const FireballSkill: SkillData = {
	Name: "Fireball",
	Cooldown: 5,
	CastTime: 2,

	// Client-side function to display visual effects
	Client: (model: Model) => {
		print(`Client: Displaying fireball effects for ${model.Name}`);
		// Add particle effects, sounds, etc.
	},

	// Server-side function to handle server logic
	Server: (model: Model) => {
		print(`Server: Fireball cast by ${model.Name}`);
		// Apply damage, cooldowns, etc.
	},

	SkillAttributes: ["attacking"],
	SkillRestrictions: ["movement"],
};

export = FireballSkill;
