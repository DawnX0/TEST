import { ReplicatedStorage, Workspace } from "@rbxts/services";
import { BaseWeapon } from "@rbxts/simplelibrary/out/SimpleLibrary/Weapon";
import { SimpleKnockback } from "@rbxts/simplelibrary/out/Utility/SimpleKnockback";
import { PlayAnimation, PlaySound } from "@rbxts/simplelibrary/out/Utility/SimpleMiscFunctions";

const ModelFolder = ReplicatedStorage.WaitForChild("Models") as Folder;

const SwordWeapon: BaseWeapon = {
	Name: "Sword",
	EquipCooldown: 0.5,

	Idle: "rbxassetid://18892849335",
	Walk: "rbxassetid://18892842387",
	Jump: "rbxassetid://18510255809",
	Holster: "rbxassetid://18897598745",
	Unholster: "rbxassetid://78052203557066",

	BasicATKConfig: {
		Animations: {
			[1]: "rbxassetid://18897005644",
			[2]: "rbxassetid://18897011415",
			[3]: "rbxassetid://18897014116",
			[4]: "rbxassetid://18897016695",
			[5]: "rbxassetid://18897018840",
		},

		HitReactions: {
			[1]: "rbxassetid://16783469611",
			[2]: "rbxassetid://16783471760",
			[3]: "rbxassetid://16784588410",
			[4]: "rbxassetid://16784589998",
			[5]: "rbxassetid://16784588410",
		},

		Restrictions: ["running", "blocking", "downed", "casting"],

		Priority: Enum.AnimationPriority.Action3,
		Speed: 3,
		Damage: 30,
		Cooldown: 1,
		Range: 7,
		ComboReset: 0.75,
		Endlag: 0.5,
		Slow: 3,
		HitSize: new Vector3(5, 5, 0.1),
		KnockbackDuration: 0.1,
		KnockbackForce: 20,

		SwingSFX: "rbxassetid://15777150292",
		SwingLoudness: 0.2,
		HitSFX: "rbxassetid://15777123632",
	},

	HeavyATKConfig: {
		Animation: "rbxassetid://133795471671205",
		HitReaction: "rbxassetid://16784588410",

		Restrictions: ["running", "blocking", "downed", "casting"],

		Priority: Enum.AnimationPriority.Action3,
		Speed: 3,
		Damage: 11,
		Cooldown: 4,
		Range: 10,
		Endlag: 0.75,
		Slow: 1,
		HitSize: new Vector3(5, 5, 0.1),
		KnockbackDuration: 0.1,
		KnockbackForce: 150,
	},

	BlockConfig: {
		Animation: "rbxassetid://18898318862",
		WalkSpeed: 3,
	},

	ModelConfig: {
		Models: new Map([
			[
				ModelFolder.FindFirstChild("Katana") as Model,
				{
					Holstered: new CFrame(-1, 1.1, -0.5).mul(CFrame.Angles(0, math.rad(180), 0)),
					HolsteredPart: "HumanoidRootPart",
					HolsterWaitTime: 0.4,

					Unholstered: new CFrame(0, 1, 0),
					UnholsteredPart: "Right Arm",
					UnholsterWaitTime: 0.2,
				},
			],
		]),
	},

	Markers: new Map([
		[
			"hit",
			(model) => {
				const rootpart = model.FindFirstChild("HumanoidRootPart") as BasePart | undefined;
				if (!rootpart) error("No root part found");

				const cframe = rootpart.CFrame;
				const size = SwordWeapon.BasicATKConfig.HitSize;
				const direction = rootpart.CFrame.LookVector.mul(SwordWeapon.BasicATKConfig.Range);
				const params = new RaycastParams();
				params.FilterDescendantsInstances = [model];
				params.FilterType = Enum.RaycastFilterType.Exclude;

				const blockCast = Workspace.Blockcast(cframe, size, direction, params);
				if (blockCast && blockCast.Instance) {
					const hitModel = blockCast.Instance.FindFirstAncestorWhichIsA("Model");
					const hitRootPart = hitModel?.FindFirstChild("HumanoidRootPart") as BasePart | undefined;
					if (hitModel && hitRootPart) {
						const hitHumanoid = hitModel.FindFirstChildWhichIsA("Humanoid");
						if (hitHumanoid) {
							const hitAnimator = hitHumanoid.FindFirstChildOfClass("Animator");
							if (!hitAnimator) new Instance("Animator", hitHumanoid);
							hitRootPart.CFrame = CFrame.lookAt(hitRootPart.Position, rootpart.Position);

							PlaySound(SwordWeapon.BasicATKConfig.HitSFX!, { parent: hitModel, name: "hitSFX" });

							SimpleKnockback(
								hitModel,
								rootpart.CFrame.LookVector,
								SwordWeapon.BasicATKConfig.KnockbackDuration,
								SwordWeapon.BasicATKConfig.KnockbackForce,
							);

							if (SwordWeapon.BasicATKConfig.HitReactions) {
								const currentCombo = (model.GetAttribute("Combo") as number) || 1;
								const hitReactionId = SwordWeapon.BasicATKConfig.HitReactions[currentCombo];

								PlayAnimation(hitModel, hitReactionId, "reaction");
							}

							hitHumanoid.TakeDamage(SwordWeapon.BasicATKConfig.Damage);
						}
					}
				}
			},
		],
		[
			"heavyhit",
			(model) => {
				const rootpart = model.FindFirstChild("HumanoidRootPart") as BasePart | undefined;
				if (!rootpart) error("No root part found");

				const cframe = rootpart.CFrame;
				const size = SwordWeapon.HeavyATKConfig.HitSize;
				const direction = rootpart.CFrame.LookVector.mul(SwordWeapon.HeavyATKConfig.Range);
				const params = new RaycastParams();
				params.FilterDescendantsInstances = [model];
				params.FilterType = Enum.RaycastFilterType.Exclude;

				const blockCast = Workspace.Blockcast(cframe, size, direction, params);
				if (blockCast && blockCast.Instance) {
					const hitModel = blockCast.Instance.FindFirstAncestorWhichIsA("Model");
					const hitRootPart = hitModel?.FindFirstChild("HumanoidRootPart") as BasePart | undefined;
					if (hitModel && hitRootPart) {
						const hitHumanoid = hitModel.FindFirstChildWhichIsA("Humanoid");
						if (hitHumanoid) {
							const hitAnimator = hitHumanoid.FindFirstChildOfClass("Animator");
							if (!hitAnimator) new Instance("Animator", hitHumanoid);
							hitRootPart.CFrame = CFrame.lookAt(hitRootPart.Position, rootpart.Position);

							SimpleKnockback(
								hitModel,
								rootpart.CFrame.LookVector,
								SwordWeapon.BasicATKConfig.KnockbackDuration,
								SwordWeapon.HeavyATKConfig.KnockbackForce,
							);
							if (SwordWeapon.HeavyATKConfig.HitReaction) {
								const hitReactionId = SwordWeapon.HeavyATKConfig.HitReaction;

								PlayAnimation(hitModel, hitReactionId, "reaction");
							}

							hitHumanoid.TakeDamage(SwordWeapon.HeavyATKConfig.Damage);
						}
					}
				}
			},
		],
	]),
};

export = SwordWeapon;
