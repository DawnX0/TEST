import { Players } from "@rbxts/services";
import { SimpleListen } from "@rbxts/simplelibrary/out/Utility/SimpleActionFunctions";
import { SimpleApplySE } from "@rbxts/simplelibrary/out/Utility/SimpleSEFunctions";
import { SimpleAssignWeapon } from "@rbxts/simplelibrary/out/Utility/SimpleWeaponFunctions";

SimpleListen(Players.LocalPlayer);

Players.PlayerAdded.Connect((player) => {
	player.CharacterAdded.Connect((character) => {
		SimpleAssignWeapon(character, "sword");
		SimpleApplySE(character, character.Name, "heat");
		task.wait(4);
		SimpleApplySE(character, character.Name, "cold");
	});
});
