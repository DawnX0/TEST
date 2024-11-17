import { Workspace } from "@rbxts/services";
import { MeleeWeaponType } from "@rbxts/simplelibrary/out/SimpleLibrary/Weapon";
import { PlayAnimation } from "@rbxts/simplelibrary/out/Utility/Animation";
import { SimpleKnockback } from "@rbxts/simplelibrary/out/Utility/SimpleKnockback";

const FistWeapon: MeleeWeaponType = {
	Name: "Fist",
	WeaponType: "Melee",

	Markers: new Map([
		[
			"hit",
			(model: Model) => {
				print("M1");
				const rootpart = model.FindFirstChild("HumanoidRootPart") as BasePart | undefined;
				if (!rootpart) error("No root part found");

				const cframe = rootpart.CFrame;
				const size = FistWeapon.AttackSettings.HitSize;
				const direction = rootpart.CFrame.LookVector.mul(FistWeapon.AttackSettings.Range);
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

							if (FistWeapon.AttackSettings.HitReaction) {
								const currentCombo = model.GetAttribute("combo") as number;
								const hitReactionId = FistWeapon.AttackSettings.HitReaction[currentCombo];

								PlayAnimation(hitModel, hitReactionId, "reaction");
							}

							if (
								FistWeapon.AttackSettings.KnockbackForce &&
								FistWeapon.AttackSettings.KnockbackDuration
							) {
								SimpleKnockback(
									hitModel,
									rootpart.CFrame.LookVector,
									FistWeapon.AttackSettings.KnockbackForce,
									FistWeapon.AttackSettings.KnockbackDuration,
								);
							}

							hitRootPart.CFrame = CFrame.lookAt(hitRootPart.Position, rootpart.Position);
							hitHumanoid.TakeDamage(FistWeapon.AttackSettings.Damage);
						}
					}
				}
			},
		],
	]),

	Idle: "rbxassetid://18525598367",
	Walk: "rbxassetid://18526191583",
	Jump: "rbxassetid://18510255809",

	AttackSettings: {
		ComboAnimations: {
			[1]: "rbxassetid://18717279281",
			[2]: "rbxassetid://18717284826",
			[3]: "rbxassetid://18717286299",
			[4]: "rbxassetid://18717288660",
		},

		HitReaction: {
			[1]: "rbxassetid://16783469611",
			[2]: "rbxassetid://16783471760",
			[3]: "rbxassetid://16784588410",
			[4]: "rbxassetid://16784589998",
		},

		Restrictions: ["running"],

		AnimationPriority: Enum.AnimationPriority.Action3,
		AnimationSpeed: 3,

		HitSize: new Vector3(4, 4, 4),

		KnockbackForce: 5,
		KnockbackDuration: 0.25,
		Damage: 3,
		Range: 5,
		ComboReset: 0.75,
		Endlag: 0.4,
		Cooldown: 1,
		SlowSpeed: 1,
	},

	HeavyAttackSettings: {
		HitSize: new Vector3(4, 4, 4),

		Animation: "rbxassetid://18526214071",
		Range: 5,
		Damage: 10,
		Endlag: 1,
		Cooldown: 3,
	},
};

export = FistWeapon;
