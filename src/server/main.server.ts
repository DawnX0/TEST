import { Players } from "@rbxts/services";
import simpleAction from "@rbxts/simpleaction";

simpleAction.StartServer();

Players.PlayerAdded.Connect((player: Player) => {
	player.CharacterAdded.Connect((character: Model) => {});
});
