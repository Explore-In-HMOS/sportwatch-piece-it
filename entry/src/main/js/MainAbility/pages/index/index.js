import app from '@system.app';
import router from '@ohos.router';

export default {
    data: {
        imageStates: [
            { animationName: 'rotate2', index: 2 },
            { animationName: 'rotate3', index: 3 },
            { animationName: 'rotate1', index: 1 },
            { animationName: 'rotate0', index: 0 }
        ],
        isWon: false
    },

    onInit() {
        this.checkIfWon();
    },

    rotateImage(e, i) {
        const state = this.imageStates[i];
        const currentIndex = state.index;
        const nextIndex = (currentIndex + 1) % 4;
        state.index = nextIndex;
        state.animationName = "rotate" + currentIndex;

        this.checkIfWon();
    },

    checkIfWon() {
        this.isWon = this.imageStates.every(item => item.index === 0);
    },

    goNextLevel() {
        setTimeout(() => {
            router.replace({
                uri: 'pages/level2/level2',
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