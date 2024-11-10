import { MeleeWeaponType } from "@rbxts/simpleweapon";

const FistWeapon: MeleeWeaponType = {
	Name: "Fist",
	Damage: 10,
	Range: 3,
	WeaponType: "Melee",
	Endlag: 0.5,
	ComboReset: 0.75,
	Cooldown: 0.2,
	ClientAttack: (model: Model) => {
		print(`Client: Displaying fist attack effects for ${model.Name}`);
	},
	ServerAttack: (model: Model) => {
		print(`Server: Fist attack by ${model.Name}`);
	},
	Animations: {
		Idle: "rbxassetid://18805809333",
		Walk: "rbxassetid://18726527022",
		Block: "rbxassetid://18744674229",
		M1: {
			[1]: "23",
		},
		HitReactions: {
			[1]: "rbxassetid://18735088954",
		},
	},
};

export = FistWeapon;
