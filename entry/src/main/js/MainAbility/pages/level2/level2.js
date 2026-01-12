import app from '@system.app';
import router from '@ohos.router';

export default {
    data: {
        imageStates: [
            { animationName: 'rotate2', index: 2 },
            { animationName: 'rotate3', index: 3 },
            { animationName: 'rotate1', index: 1 }
        ],
        isWon: false
    },

    rotateImage(e, i) {
        const state = this.imageStates[i];
        const currentIndex = state.index;
        const nextIndex = (currentIndex + 1) % 4;
        state.animationName = `rotate` + currentIndex;;
        state.index = nextIndex;
        this.isWon = this.imageStates.every(img => img.index === 0);
    },

    goNextLevel() {
        setTimeout(() => {
            router.replace({
                uri: 'pages/level3/level3',
                params: {}
            });
        }, 300);
    },

    swipe(e) {
        if (e.direction === "right") {
            app.terminate();
        }
    }
}
