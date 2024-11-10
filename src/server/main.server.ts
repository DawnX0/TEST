import { Players } from "@rbxts/services";
import simpleAction from "@rbxts/simpleaction";
import simpleWeapon from "@rbxts/simpleweapon";

simpleAction.StartServer();

Players.PlayerAdded.Connect((player: Player) => {
	player.CharacterAdded.Connect((character: Model) => {
		simpleWeapon.assignWeapon("Fist", character);
	});
});
