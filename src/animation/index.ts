import gsap from 'gsap';


type Element = string;
type Elements = Element[];
type OnComplete = () => void;

export const staggerText = (elements: Elements) => {
    gsap.set(elements, {
        opacity: 0,
        y: 0,
    });
    gsap.to(elements, {
        opacity: 1,
        stagger: 0.1,
    });
};

// 倾斜
export const staggerRotate = (elements: Elements) => {
    gsap.set(elements, {
        opacity: 1,
        rotateZ: '-3deg',
        transformOrigin: 'left',
    });
};

export const staggerEleVertical = (elements: Elements, delay = 0.2, onComplete: OnComplete) => {
    gsap.from(elements, {
        stagger: 0.1,
        autoAlpha: 0,
        y: -20,
        delay,
        onComplete,
    });
};

export const staggerEleHorizontal = (elements: Elements, delay = 0, onComplete: OnComplete) => {
    gsap.fromTo(
        elements,
        {
            x: -50,
            autoAlpha: 0,
        },
        {
            duration: 0.4,
            stagger: 0.2,
            x: 0,
            autoAlpha: 1,
            delay,
            onComplete,
        }
    );
};

// 从透明到显现
export const appear = (elements: Elements, delay = 0, onComplete: OnComplete) => {
    gsap.fromTo(
        elements,
        {
            autoAlpha: 0,
        },
        {
            duration: 0.2,
            autoAlpha: 1,
            delay,
            onComplete,
        }
    );
};

// 挽留弹窗
export const scaleShowElement = (element: Element, element2: Element) => {
    const tl = gsap.timeline();
    tl.fromTo(element, { scale: 0.2, opacity: 0 }, { scale: 1, opacity: 1 });
    element2 && tl.fromTo(element2, { scale: 0.2, opacity: 0 }, { scale: 1, opacity: 1 });
};

// 中奖弹窗
export const rotateShowElement = (element: Element, element2?: Element) => {
    const tl = gsap.timeline();
    tl.fromTo(element, { scale: 0.2, opacity: 0, rotationY: -360 }, { scale: 1, opacity: 1, rotationY: 0 });
    element2 && tl.fromTo(element2, { scale: 0.2, opacity: 0 }, { scale: 1, opacity: 1 });
};

export const rotate = (element: Element) =>
    gsap.to(element, { rotation: 360, repeat: -1, duration: 2, ease: 'linear' });
