class MainView extends skins.MainViewPanel {
	private effect1Particle: custom.ParticleSystem;
	private effect2Particle: custom.ParticleSystem;

	public constructor() {
		super();

		this.addOnClick(this.onClick, this);
		this.initParticles();
	}

	private initParticles() {
		this.effect1Particle = new custom.ParticleSystem();
		let param1 = {
			"atlas_data": "startAni_mc",
			"atlas_texture": "startAni_tex",
			"max_count": 200,
			"emission_rate": 80,
			"emission_duration": 2000,
			"startoffset": {
				"offsetX": 0,
				"offsetY": 0
			},
			"lifetime": {
				"min": 1200,
				"max": 1500
			},
			"gravity": {
				"x": 0,
				"y": 0
			},
			"direction": {
				"min": 0,
				"max": 360
			},
			"rotation": {
				"min": 0,
				"max": 360,
				"speed": 0.12
			},
			"scale": {
				"min": 1.2,
				"max": 1.5,
				"adjust": 0.94
			},
			"speed": {
				"min": 0.02,
				"max": 0.04,
				"drag": 0
			},
			"path": {
				"speed": 0.05,
				"cycle": 0,//路径是否闭包
				"waypoints": [
					{
                        "x": 0,
                        "y": 0
                    },
                    {
                        "x": 680,
                        "y": 0
                    }
				]
			},
		}
		this.effect1Particle.init(param1);
		this.effect1Particle.x = 300;
		this.effect1Particle.y = 200;
		this.addChild(this.effect1Particle);

		this.effect2Particle = new custom.ParticleSystem();
		let param2 = {
			"atlas_data": "startAni_mc",
                "atlas_texture": "startAni_tex",
                "max_count": 200,
                "emission_rate": 60,
                "emission_duration": 2000000,
                "startoffset": {
                    "offsetX": 0,
                    "offsetY": 0
                },
                "lifetime": {
                    "min": 1200,
                    "max": 1500
                },
                "gravity": {
                    "x": 0,
                    "y": 0
                },
                "direction": {
                    "min": 0,
                    "max": 360
                },
                "rotation": {
                    "min": 0,
                    "max": 360,
                    "speed": 0.12
                },
                "scale": {
                    "min": 1.6,
                    "max": 2,
                    "adjust": 0.92
                },
                "speed": {
                    "min": 0.02,
                    "max": 0.04,
                    "drag": 0
                },
                "path": {
                    "speed": 0.05,
                    "cycle": 1,
                    "waypoints": [
                        {
                            "x": 0,
                            "y": 0
                        },
                        {
                            "x": 139,
                            "y": 0
                        },
                        {
                            "x": 139,
                            "y": 398
                        },
                        {
                            "x": 0,
                            "y": 398
                        }
                    ]
                },
		}
		this.effect2Particle.init(param2);
		this.effect2Particle.x = 600;
		this.effect2Particle.y = 200;
		this.addChild(this.effect2Particle);
	}

	private onClick(e: egret.Event): void {
		switch (e.currentTarget) {
			case this.btn_effect1:
				this.effect1Particle.start();
				break;
			case this.btn_effect2:
				this.effect2Particle.start();
				break;
		}
	}
}