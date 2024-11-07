import { MeleeWeaponType } from "@rbxts/simpleweapon";

const FistWeapon: MeleeWeaponType = {
	Name: "Fist",
	Damage: 10,
	Range: 3,
	WeaponType: "Melee",
	Endlag: 0.5,
	Cooldown: 0.2,
	ClientAttack: (model: Model) => {
		print(`Client: Displaying fist attack effects for ${model.Name}`);
	},
	ServerAttack: (model: Model) => {
		print(`Server: Fist attack by ${model.Name}`);
	},
	Animations: {
		Block: "222",
		M1: {
			[1]: "23",
		},
	},
};

export = FistWeapon;
