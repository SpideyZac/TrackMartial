export default function mixin() {
    window.polyModLoader.registerGlobalMixin(
        3,
        "}), wR(this, qI, 'f').addFinishCallback(e => {",
        "window.trackMartialOnRaceFinish(e.getTime().numberOfFrames.toString(), wR(this, gI, 'f').getID());"
    );
}