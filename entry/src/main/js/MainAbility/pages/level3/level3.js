import app from '@system.app';

export default {
    data: {
        imageStates: [
            { animationName: 'rotate0', index: 0 },
            { animationName: 'rotate1', index: 1 },
            { animationName: 'rotate2', index: 2 },
            { animationName: 'rotate3', index: 3 },
            { animationName: 'rotate0', index: 0 },
            { animationName: 'rotate1', index: 1 },
            { animationName: 'rotate2', index: 2 },
            { animationName: 'rotate3', index: 3 }
        ],
        isWon: false
    },

    rotateImage(e, i) {
        const state = this.imageStates[i];
        const currentIndex = state.index;
        const nextIndex = (currentIndex + 1) % 4;
        state.index = nextIndex;
        state.animationName = `rotate` + currentIndex;
        let allZeroNow = true;
        for (let j = 0; j < this.imageStates.length; j++) {
            if (this.imageStates[j].index !== 0) {
                allZeroNow = false;
                break;
            }
        }
        this.isWon = allZeroNow;
    },

    swipe(e) {
        if (e.direction === "right") {
            app.terminate();
        }
    }
}
