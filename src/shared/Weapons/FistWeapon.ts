import { MeleeWeapon } from "@rbxts/simpleweapon";

const FistWeapon: MeleeWeapon = {
	Name: "Fist",
	M1Damage: 10,
	Range: 3,
	ComboReset: 0.75,
	Cooldown: 0.2,

	Animations: {
		Idle: "rbxassetid://18805809333",
		Walk: "rbxassetid://18726527022",
		Block: "rbxassetid://18744674229",
		M1: {
			[1]: "23",
		},
	},

	Attributes: ["attacking"],
	AttackRestrictions: ["attacking", "blocking"],

	clientAttack: (model: Model) => {
		print(`Client: Displaying fist attack effects for ${model.Name}`);
	},
	serverAttack: (model: Model) => {
		print(`Server: Fist attack by ${model.Name}`);
	},

	block: (model: Model) => {
		print(`${model.Name} is blocking`);
	},
};

export = FistWeapon;
