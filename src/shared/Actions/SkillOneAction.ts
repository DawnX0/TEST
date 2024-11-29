import { ActionType } from "@rbxts/simplelibrary/out/SimpleLibrary/Action";
import { SimpleCastSkill } from "@rbxts/simplelibrary/out/Utility/SimpleSkillFunctions";

const SkillOneAction: ActionType = {
	Name: "SkillOne",
	InputMethod: "ContextAction",
	Gesture: Enum.KeyCode.One,

	ClientOnStart: (player: Player) => {
		SimpleCastSkill(player.Character!, "Fireball");
	},

	ServerOnStart: (player) => {
		SimpleCastSkill(player.Character!, "Fireball");
	},
};

export = SkillOneAction;
