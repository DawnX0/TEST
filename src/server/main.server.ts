import { Players } from "@rbxts/services";
import { SimpleListen } from "@rbxts/simplelibrary/out/Utility/SimpleListen";
import { SimpleApplySE } from "@rbxts/simplelibrary/out/Utility/SimpleApplySE";
import { SimpleAssignWeapon } from "@rbxts/simplelibrary/out/Utility/SimpleAssignWeapon";
import { SimpleKnockback } from "@rbxts/simplelibrary/out/Utility/SimpleKnockback";

SimpleListen(Players.LocalPlayer);

Players.PlayerAdded.Connect((player) => {
	player.CharacterAdded.Connect((character) => {
		SimpleAssignWeapon(character, "fist", true);
		SimpleApplySE(character, character.Name, "heat");
		task.wait(4);
		SimpleApplySE(character, character.Name, "cold");
	});
});
