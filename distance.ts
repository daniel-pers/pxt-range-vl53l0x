//% color=65 weight=80
//% icon="\uf337"
namespace Rangefinder2 {

	/**
	* Initialises the rangefinder.
	**/
	//% block="initialise2"
	//% blockId=ranger_init shim=Rangefinder::init
	export function init(): void {
		//shim
	}

	/**
	* Returns the distance detected by the rangefinder (in mm).
	**/
	//% block="distance2 (in mm)"
	//% blockId=ranger_dist_mm shim=Rangefinder::distance
	export function distance() : number {
		//shim
		return 0;
	}
}
