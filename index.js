'use strict';

{
    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case ' ':
                if (!document.fullscreenElement) {
                    document.body.requestFullscreen();
                } else {
                    document.exitFullscreen();
                }
                break;

            case 'ArrowDown':
            case 'ArrowRight':
                document.body.scrollBy(0, 100);
                break;

            case 'ArrowUp':
            case 'ArrowLeft':
                document.body.scrollBy(0, -100);
                break;
        }
    });
}
